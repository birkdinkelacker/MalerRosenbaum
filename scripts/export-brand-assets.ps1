# Export the generated image assets at web and icon sizes without altering their artwork.
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$projectRoot = Split-Path -Parent $PSScriptRoot

function Export-BrandPng {
    param([string]$Source, [string]$Destination, [int]$Width, [int]$Height)
    $sourceImage = [System.Drawing.Image]::FromFile((Join-Path $projectRoot $Source))
    $outputImage = [System.Drawing.Bitmap]::new($Width, $Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($outputImage)
    try {
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $graphics.DrawImage($sourceImage, 0, 0, $Width, $Height)
        $outputImage.Save((Join-Path $projectRoot $Destination), [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
        $graphics.Dispose()
        $outputImage.Dispose()
        $sourceImage.Dispose()
    }
}

Export-BrandPng 'assets/brand-source/rosenbaum-logo.png' 'public/rosenbaum-logo.png' 960 640
Export-BrandPng 'assets/brand-source/rosenbaum-symbol.png' 'public/rosenbaum-symbol.png' 128 128
Export-BrandPng 'assets/brand-source/rosenbaum-symbol.png' 'public/favicon.png' 96 96
Export-BrandPng 'assets/brand-source/rosenbaum-symbol.png' 'public/favicon-32.png' 32 32
Export-BrandPng 'assets/brand-source/rosenbaum-symbol.png' 'public/apple-touch-icon.png' 180 180

# ICO with the same 32px PNG image for clients requesting /favicon.ico.
$iconBytes = [System.IO.File]::ReadAllBytes((Join-Path $projectRoot 'public/favicon-32.png'))
$iconStream = [System.IO.File]::Create((Join-Path $projectRoot 'public/favicon.ico'))
$iconWriter = [System.IO.BinaryWriter]::new($iconStream)
try {
    $iconWriter.Write([uint16]0)
    $iconWriter.Write([uint16]1)
    $iconWriter.Write([uint16]1)
    $iconWriter.Write([byte]32)
    $iconWriter.Write([byte]32)
    $iconWriter.Write([byte]0)
    $iconWriter.Write([byte]0)
    $iconWriter.Write([uint16]1)
    $iconWriter.Write([uint16]32)
    $iconWriter.Write([uint32]$iconBytes.Length)
    $iconWriter.Write([uint32]22)
    $iconWriter.Write($iconBytes)
} finally {
    $iconWriter.Dispose()
    $iconStream.Dispose()
}
