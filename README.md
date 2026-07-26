# Andra Capital 安卓樂資本筆記

> 一個獨立的研究網站：把 Andra Capital（安卓樂資本）及其主要投資人、投資組合的公開資訊蒐集起來，逐項標註證據強度（已驗證／部分吻合／僅口述），每個數字都附來源。

**線上版：<https://andra-capital.peteraim.com/>**

## ✨ 功能特色

- **多頁面架構**：總覽、公司概況、主要投資人、林家振專頁、投資組合、SEC 申報、Silicon Valley Coin、來源與方法，共 8 頁，各有獨立 URL 與 SEO meta
- **逐項查證徽章**：每個關鍵說法標註 ✅ 已驗證（第一手申報／第三方紀錄）、⚠️ 部分吻合（自述／官網展示）、❓ 僅口述（查無紀錄的文宣說法）
- **第一手 SEC 數據**：Form D、Form D/A、Form ADV 直接取自 EDGAR 與 IAPD（AUM $476.5M、實募 $350M、260 位投資人、90% 非美資金等）
- **投資組合證據分級**：A 級（第三方資料庫）／B 級（官網展示與合夥人具名自述）／C 級（僅見訪談文宣）
- **人物對話框**：點擊人物開啟逐項查證視窗，支援 `#slug` deep link 直達
- **雙語切換**：EN／繁中全頁切換，選擇跨頁記憶；深淺色主題切換
- **零 build 純靜態**：HTML/CSS/vanilla JS，開檔即用，無任何建置工具

## 📂 內容結構與資料來源

```
├── index.html / company.html / people.html / jonathan-lin.html
│   portfolio.html / sec.html / svc.html / sources.html   # 8 頁（共用 shell）
├── assets/
│   ├── styles.css    # 編輯風設計 token（深藍墨＋金、serif 標題、深淺雙主題）
│   ├── shell.js      # 共用 chrome：appbar／跨頁導航／footer／dialog／語言主題狀態
│   └── app.js        # 版型引擎：facts／people／portfolio／timeline／article／sources
├── data/data.js      # 唯一資料層（雙語 en/zh）
└── research/         # 研究筆記（Markdown，附完整來源連結）
```

資料來源（依證據強度排序，完整清單見網站「來源與方法」頁）：

1. **SEC 第一手申報**：EDGAR Form D/D-A（CIK 1884136、1746500）、Form ADV（CRD 314080）
2. **第三方資料庫**：PitchBook、CB Insights、Crunchbase、Startup Intros
3. **具名訪談與新聞稿**：Pulse2、PRWeb、PR Newswire、Decrypt、Meet 創業小聚、WHATs NEXT、SIC
4. **公開履歷**：林家振公開履歷（台大網站）、中研院 BioTReC 個人頁

## 🛠 本機使用

純靜態網站，不需安裝任何依賴：

```bash
uv run python -m http.server 4173
# 開啟 http://localhost:4173/
```

## 📊 流量分析

本站使用 Google Analytics 4（property：`Andra Capital - GA4`）追蹤匿名流量。

## 📝 聲明

- 本站為**非官方**的個人研究筆記，與 Andra Capital 及文中提及的任何個人、機構均無關聯
- 所有內容來自公開來源，並於各頁附上出處連結；查證日期為 2026 年 7 月
- 「僅口述／查無紀錄」的標註代表「在公開紀錄中找不到佐證」，不等於斷言該說法為假；如有新的公開紀錄，歡迎開 issue 指正
