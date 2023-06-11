# 讀取 dockerAccount.txt 的內容
$DockerAcc = Get-Content .\dockerAccount.txt
# 讀取 cluster1-IP.txt 和 cluster2-IP.txt 的內容
$newCluster1IP = Get-Content .\cluster1-IP.txt
$newCluster2IP = Get-Content .\cluster2-IP.txt

# 設定要被替換的原始字串
$OrigStr = "yjring"
$OrigCluster1IP = "20.204.78.115"
$OrigCluster2IP = "20.198.108.29"

# 進入到 ./github/workflows/ 
Set-Location .\.github\workflows\

# 列出要處理的檔案
$files = "1_dev_backend_ci.yaml", "2_dev_frontend_ci.yaml", "4_uat_backend_ci.yaml", "5_uat_frontend_ci.yaml"

# 更換Github Action中的 image檔案名稱
foreach ($file in $files) {
    # 使用 PowerShell 來替換 IMAGE_NAME: $OrigStr 為 IMAGE_NAME: $DockerAcc
    (Get-Content $file) -replace "IMAGE_NAME: $OrigStr", "IMAGE_NAME: $DockerAcc" | Set-Content $file
    # 印出已修改完成的檔案名
    Write-Output "Modified: $file"
}

Set-Location ..\..

# yaml檔案的列表
$dev_files = "deploy\dev\api-ingress.yaml", "deploy\dev\ui-ingress.yaml"
$uat_files = "deploy\uat\api-ingress.yaml", "deploy\uat\ui-ingress.yaml"

# 在 dev 目錄的檔案中替換內容
foreach ($file in $dev_files) {
    # 使用 PowerShell 來替換 host: $OrigCluster1IP 為 host: $newCluster1IP
    (Get-Content $file) -replace "host: $OrigCluster1IP", "host: $newCluster1IP" | Set-Content $file
    Write-Output "Modified: $file"
}

# 在 uat 目錄的檔案中替換內容
foreach ($file in $uat_files) {
    # 使用 PowerShell 來替換 host: $OrigCluster2IP 為 host: $newCluster2IP
    (Get-Content $file) -replace "host: $OrigCluster2IP", "host: $newCluster2IP" | Set-Content $file
    Write-Output "Modified: $file"
}
