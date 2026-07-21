$target = "d:\ASHISH\aashish-portfolio\public\assets\images"
New-Item -ItemType Directory -Force -Path $target

# Map of old names to new clean names
$map = @{
    "zbwkRV3qlrpQJ53ApUhLzXtBLIc.avif" = "hero-banner.avif"
    "LxQ2U0fKF2a9n5RLJmRrNZJuig.avif" = "portrait.avif"
    "XL7Sp8gvBAhRfr3Aejc7u1QwvEE.avif" = "vision-1.avif"
    "QAdjiBqHZ1dYZjNfTvQbKsWkFU.avif" = "vision-2.avif"
    "HxeBYMcMAQeConhKiC4nyXzrhw.avif" = "vision-3.avif"
    "1z3ICtALqRNwTyIYPWNzSypLpQ.avif" = "project-freelance.avif"
    "EY0ndEIM2iIR8rcYK7uttpbsKA.avif" = "project-industrial.avif"
    "D43gbjgshmscbVTpXLbXBoiARSQ.avif" = "project-teenage.avif"
    "VqQi24FLK0ATWNGL9lfb60rGXLg.avif" = "project-foammate.avif"
    "mBBVLmvFEkWwu0N6F22UNMMDrw.avif" = "project-materials.avif"
    "DAIBxwOqfJl6LSfcXpp7Cwhifuw.avif" = "ticker-1.avif"
    "BXVj8UjNUbyHViFtR3q8lRY85A.avif" = "ticker-2.avif"
    "IzXAPkzKnCdfNgYTZKMm5nnVB8.avif" = "ticker-3.avif"
    "Jq327WzsnhtNekNUJ6bPyFlJn0.avif" = "ticker-4.avif"
    "xqYXFYciWEsxbK8fhG0SRDnMk.avif" = "ticker-5.avif"
    "xsTxEGtys9PO3CAvmV8fXUo5Csg.avif" = "ticker-6.avif"
    "gZSkPcpjGks4l0Z0A6eE1XYxvU.avif" = "ticker-7.avif"
}

foreach ($key in $map.Keys) {
    $src = Join-Path "d:\ASHISH" $key
    $dst = Join-Path $target $map[$key]
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
    }
}
