# Vote Microservices

這是一個前後端分離的微服務專案。本專案使用了GitHub Actions作為CI/CD的工具，並且將前端和後端的部分分開進行開發和部署。

## 目錄結構

- `.github/workflows` - 包含 GitHub Actions 工作流程定義，如 `dev-backend-ci.yaml`, `dev-frontend-ci.yaml`, `test-backend-ci.yaml`, `test-frontend-ci.yaml`, `uat-backend-ci.yaml`, `uat-frontend-ci.yaml` 等
- `backend` - 後端服務的代碼目錄。
- `frontend` - 前端服務的代碼目錄，包含了與React App相關的設定文件與代碼
- `deploy` - 包含 'dev', 'test' 和 'uat' 三個子目錄，用於不同環境的部署設定

## 開發

詳細的開發指南和設定請參考 `backend` 和 `frontend` 目錄下的README。

## 部署

本專案包含了對應不同環境（開發、測試和 UAT）的 Kubernetes 配置文件，請參考 `deploy` 目錄下的對應子目錄。

## CI/CD

本專案使用 GitHub Actions 進行持續集成和部署，相關的工作流程定義文件位於 `.github/workflows` 目錄下。