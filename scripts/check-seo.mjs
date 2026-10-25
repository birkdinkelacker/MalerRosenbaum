import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'

const output = new URL('../dist/', import.meta.url)
const read = path => readFile(new URL(path, output), 'utf8')
const home = await read('index.html')
const robots = await read('robots.txt')
const sitemap = await read('sitemap.xml')
const preview = ['deploy-preview', 'branch-deploy'].includes(process.env.CONTEXT)

assert.match(home, /<h1\b[^>]*>Malerarbeiten/)
assert.match(home, /mailto:Info@m-rosenbaum\.de/)
assert.match(home, /rel="canonical" href="https:\/\/m-rosenbaum\.de\/"/)
assert.match(home, /<title>Maler Rosenbaum in Eberbach \| Familienbetrieb<\/title>/)
assert.match(home, /rel="icon" type="image\/png" sizes="96x96" href="\/favicon.png"/)
if (preview) {
  assert.match(home, /name="robots" content="noindex, nofollow"/)
  assert.match(robots, /Disallow: \//)
} else {
  assert.doesNotMatch(home, /name="robots" content="[^"]*noindex/)
  assert.match(robots, /Allow: \//)
  assert.match(robots, /Sitemap: https:\/\/m-rosenbaum\.de\/sitemap.xml/)
}

const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1])
assert.deepEqual(locations, ['https://m-rosenbaum.de/'])
const jsonMatch = home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)
assert.ok(jsonMatch, 'Structured data must be in the delivered HTML.')
const graph = JSON.parse(jsonMatch[1])['@graph']
const business = graph.find(item => item['@type'] === 'HousePainter')
assert.equal(business.name, 'Maler Rosenbaum')
assert.equal(business.address.addressLocality, 'Eberbach')
assert.equal(business.logo.url, 'https://m-rosenbaum.de/rosenbaum-logo.png')
assert.equal(graph.find(item => item['@type'] === 'WebSite').url, 'https://m-rosenbaum.de/')
assert.ok(!business.aggregateRating && !business.openingHours, 'Do not invent missing ratings or opening hours.')

for (const file of ['impressum.html', 'datenschutz.html']) {
  const html = await read(file)
  assert.match(html, /name="robots" content="noindex, follow"/)
  assert.match(html, /<h1>/)
  assert.match(html, /Platzhalter/)
  assert.match(home, new RegExp(`href="/${file.replace('.', '\\.')}"`))
}

const favicon = await readFile(new URL('favicon.png', output))
assert.equal(favicon.subarray(1, 4).toString(), 'PNG')
assert.equal(favicon.readUInt32BE(16), 96)
assert.equal(favicon.readUInt32BE(20), 96)
for (const file of ['rosenbaum-logo.png', 'favicon.ico', 'apple-touch-icon.png']) await access(new URL(file, output))
console.log('SEO checks passed: static content, robots, sitemap, canonical, structured data, legal links and favicon.')
