
$Version = npm version patch
Write-Host ""
Write-Host "Bump version ${Version}..." -ForegroundColor DarkGreen
Write-Host ""

Write-Host ""
Write-Host "Build image..." -ForegroundColor DarkGreen
Write-Host ""
docker build -t "cr.yandex/crpeugjfqfe9uvge0bip/driver-next:${Version}" .


Write-Host ""
Write-Host "Push image..." -ForegroundColor DarkGreen
Write-Host ""
docker push "cr.yandex/crpeugjfqfe9uvge0bip/driver-next:${Version}" .
