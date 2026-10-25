import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer, loadEnv } from 'vite'
import { contact } from '../src/contact.js'

const siteUrl = 'https://m-rosenbaum.de/'
const preview = ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT)
const env = { ...loadEnv('production', process.cwd(), ''), ...process.env }
const verification = env.GOOGLE_SITE_VERIFICATION?.trim()
if (verification && !/^[A-Za-z0-9_-]+$/.test(verification)) {
  throw new Error('GOOGLE_SITE_VERIFICATION must contain only the content value of the Google HTML tag.')
}

const businessId = `${siteUrl}#betrieb`
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}#website`,
      url: siteUrl,
      name: contact.name,
      alternateName: 'Rosenbaum Eberbach',
      inLanguage: 'de-DE',
      publisher: { '@id': businessId },
    },
    {
      '@type': 'HousePainter',
      '@id': businessId,
      name: contact.name,
      url: siteUrl,
      description: 'Familienbetrieb für Malerarbeiten in Eberbach: Wand und Decke, Farbe und Oberflächen, Fassade, Bodenbeläge und Tapeten.',
      telephone: contact.phoneHref.replace('tel:', ''),
      email: contact.email,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}rosenbaum-logo.png`,
        contentUrl: `${siteUrl}rosenbaum-logo.png`,
        width: 960,
        height: 640,
      },
      image: `${siteUrl}rosenbaum-logo.png`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: contact.street,
        postalCode: '69412',
        addressLocality: 'Eberbach',
        addressCountry: 'DE',
      },
      areaServed: { '@type': 'City', name: 'Eberbach' },
    },
  ],
}

// Render the existing React pages at build time, without adding a production server.
const vite = await createServer({
  mode: 'production',
  server: { middlewareMode: true, hmr: false, watch: null },
  appType: 'custom',
})
try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  for (const [file, page] of [['index.html', 'home'], ['impressum.html', 'impressum'], ['datenschutz.html', 'datenschutz']]) {
    const path = new URL(`../dist/${file}`, import.meta.url)
    let html = await readFile(path, 'utf8')
    if (!html.includes('<div id="root"></div>')) throw new Error(`Missing empty root in ${file}; run a fresh Vite build.`)
    html = html.replace('<div id="root"></div>', `<div id="root">${renderToString(createElement(App, { page }))}</div>`)
    if (page === 'home') {
      const json = JSON.stringify(structuredData).replace(/</g, '\\u003c')
      html = html.replace('</head>', `    <script type="application/ld+json">${json}</script>\n  </head>`)
      if (verification) html = html.replace('</head>', `    <meta name="google-site-verification" content="${verification}" />\n  </head>`)
      if (preview) html = html.replace('index, follow, max-image-preview:large', 'noindex, nofollow')
    }
    await writeFile(path, html)
  }
  if (preview) {
    await writeFile(new URL('../dist/robots.txt', import.meta.url), 'User-agent: *\nDisallow: /\n')
  }
} finally {
  await vite.close()
}
console.log(`Static HTML and structured data prepared (${preview ? 'preview: noindex' : 'production: indexable'}). Search Console tag: ${verification ? 'configured' : 'not supplied'}.`)
