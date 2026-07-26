/* Site data — Andra Capital research notes (public sources; see sources page). */

window.SITE_META = {
  title: { en: "Andra Capital Notes", zh: "Andra Capital 安卓樂資本筆記" },
  subtitle: {
    en: "An independent research profile of Andra Capital, its key people and portfolio",
    zh: "Andra Capital 及其主要投資人、投資組合的獨立研究側寫"
  },
  repo: "tingwei161803/andra-capital"
};

window.SITE_PAGES = [

  /* ================= HOME (hub) ================= */
  {
    slug: "home",
    layout: "hub",
    icon: "home",
    title: { en: "Overview", zh: "總覽" },
    subtitle: {
      en: "Andra Capital is a San Francisco growth/late-stage tech fund best known in Taiwan through its chairman-slash-partner Jonathan Lin. These notes collect what public sources — the firm's site, SEC filings, and US/Taiwan media — actually support, checked claim by claim.",
      zh: "Andra Capital（安卓樂資本）是總部舊金山的成長期／晚期科技基金，在台灣主要透過「董事長／合夥人」林家振曝光。本站彙整官網、SEC 申報與台美媒體等公開來源可支持的內容，逐項查證。"
    },
    stats: [
      { value: 2016, label: { en: "Founded (San Francisco)", zh: "成立年（舊金山）" } },
      { value: 476.5, prefix: "$", suffix: "M", decimals: 1, label: { en: "Reported AUM (Form ADV, Feb 2026)", zh: "申報 AUM（Form ADV，2026 年 2 月）" } },
      { value: 260, label: { en: "Fund investors (SEC Form D)", zh: "基金投資人數（SEC Form D）" } },
      { value: 90, suffix: "%", label: { en: "AUM from non-US investors", zh: "來自非美國投資人的資產占比" } }
    ]
  },

  /* ================= COMPANY (facts) ================= */
  {
    slug: "company",
    layout: "facts",
    icon: "apartment",
    title: { en: "The Firm", zh: "公司概況" },
    subtitle: {
      en: "What Andra Capital is, how its funds are structured, and how the marketing numbers compare with its regulatory filings.",
      zh: "Andra Capital 是什麼、基金怎麼架構，以及行銷數字與監管申報數字的對照。"
    },
    intro: [
      {
        en: "Andra Capital is a growth- and late-stage technology fund founded in 2016 and headquartered at 750 Battery Street, San Francisco. It targets pre-IPO companies in AI, data, cloud, cybersecurity and fintech, and pitches a shorter exit horizon than traditional venture capital.",
        zh: "Andra Capital 成立於 2016 年，總部位於舊金山 750 Battery Street，鎖定 AI、資料、雲端、資安與金融科技的 pre-IPO 公司，主打比傳統創投更短的出場期程。"
      }
      /* （狀態徽章隱藏期間不顯示這段閱讀提示；資料保留）
      ,{
        en: "Reading tip: green rows are supported by primary or third-party records; amber rows are the firm's or its partners' own statements; red rows are marketing claims that public records do not (yet) support.",
        zh: "閱讀提示：綠色列有第一手或第三方紀錄支持；黃色列是公司或合夥人自述；紅色列是查無公開紀錄佐證的行銷說法。"
      } */
    ],
    sections: [
      {
        heading: { en: "Basics", zh: "基本盤" },
        rows: [
          { icon: "flag", label: { en: "Founded", zh: "成立" }, value: { en: "2016, San Francisco", zh: "2016 年，舊金山" }, status: "verified",
            note: { en: "Crunchbase / PitchBook; address confirmed by SEC Form ADV.", zh: "Crunchbase／PitchBook；地址經 SEC Form ADV 確認。" } },
          { icon: "account_balance", label: { en: "Regulatory status", zh: "監管身分" }, value: { en: "SEC-registered investment adviser (801-135574, CRD 314080), active", zh: "SEC 註冊投資顧問（801-135574，CRD 314080），狀態 ACTIVE" }, status: "verified",
            note: { en: "SEC IAPD record; one office, no disclosures on file.", zh: "SEC IAPD 紀錄；單一辦公室，無不良揭露。" } },
          { icon: "trending_up", label: { en: "Strategy", zh: "策略" }, value: { en: "Growth/late-stage pre-IPO tech; AI, data, cloud, cybersecurity, fintech, digital health", zh: "成長期／晚期 pre-IPO 科技；AI、資料、雲端、資安、金融科技、數位健康" }, status: "verified",
            note: { en: "Consistent across the firm's site and PitchBook.", zh: "官網與 PitchBook 描述一致。" } }
        ]
      },
      {
        heading: { en: "Fund structure & size", zh: "基金結構與規模" },
        rows: [
          { icon: "layers", label: { en: "Two funds", zh: "雙基金" }, value: { en: "Growth-Stage (closed-end, 5–8yr) + Late-Stage (open-end evergreen, 2–3yr); Reg D 506(c)", zh: "Growth-Stage（closed-end，5–8 年）＋Late-Stage（open-end evergreen，2–3 年）；Reg D 506(c)" }, status: "partial",
            note: { en: "The firm's current site copy; SEC filings show one Cayman LP (Andra Capital Fund LP).", zh: "官網現行說法；SEC 申報僅見一檔開曼 LP（Andra Capital Fund LP）。" } },
          { icon: "payments", label: { en: "Capital raised", zh: "實募資金" }, value: { en: "$350M sold to ~260 investors (Form D/A, May 2026); minimum $250K", zh: "$3.5 億、約 260 位投資人（Form D/A，2026-05）；最低投資額 $25 萬" }, status: "verified",
            note: { en: "Primary SEC filing; offering amount is 'Indefinite' — an evergreen trait.", zh: "SEC 第一手申報；募集上限為 Indefinite，是 evergreen 的特徵。" } },
          { icon: "monitoring", label: { en: "AUM", zh: "管理資產" }, value: { en: "$476.5M gross asset value; ~90% attributable to non-US persons", zh: "總資產 $4.765 億；約 90% 屬非美國人士" }, status: "verified",
            note: { en: "Form ADV filed 2026-02-13. AUM exceeds the amount raised because it includes unrealized gains.", zh: "Form ADV 2026-02-13 申報。AUM 高於實募金額，因含未實現增值。" } },
          { icon: "campaign", label: { en: "“Collected over $500M” (2018)", zh: "「募集逾 5 億美元」（2018）" }, value: { en: "Media headline at the SVC launch", zh: "SVC 上線時的媒體標題" }, status: "claimed",
            note: { en: "No filing supports it: the 2018 token entity reported $1.3M sold; the main LP reached $350M only by 2026.", zh: "查無申報佐證：2018 代幣主體僅申報售出 $130 萬；主基金至 2026 年才累計 $3.5 億。" } },
          { icon: "campaign", label: { en: "“100+ transactions, $100B+ value”", zh: "「100+ 筆交易、$1,000 億+ 價值」" }, value: { en: "Site marketing copy", zh: "官網行銷文案" }, status: "claimed",
            note: { en: "Refers to portfolio companies' aggregate valuations, not the fund's own size; no independent tally.", zh: "指被投公司合計估值、非基金規模；無獨立統計可對。" } }
        ]
      },
      {
        heading: { en: "Investment criteria (as stated by partners)", zh: "投資標準（合夥人自述）" },
        rows: [
          { icon: "target", label: { en: "Selection", zh: "選股" }, value: { en: "IRR-first; only top-2 companies per sector; Tier-1 VC backing since Series A", zh: "IRR 優先；只投產業前二名；A 輪起有一線創投背書" }, status: "partial",
            note: { en: "Consistent across Jonathan Lin's Taiwan interviews and Kathy Park's US interview ('Top 3, Tier 1 VCs').", zh: "林家振台灣訪談與 Kathy Park 美國訪談（「Top 3、Tier 1 VC」）說法一致。" } },
          { icon: "rule", label: { en: "Financial bar", zh: "財務門檻" }, value: { en: "50%+ growth, 70%+ gross margin, 85%+ retention, falling CAC, Fortune-500 customers", zh: "年成長 50%+、毛利率 70%+、留存 85%+、獲客成本下降、財星 500 客戶" }, status: "partial",
            note: { en: "Partner interview statements; not independently verifiable.", zh: "合夥人受訪自述，無法獨立驗證。" } },
          { icon: "public", label: { en: "Investor base", zh: "投資人輪廓" }, value: { en: "Asia, Middle East, US, Canada; individual LPs not disclosed", zh: "亞洲、中東、美國、加拿大；個別 LP 未公開" }, status: "partial",
            note: { en: "Partner interview; the ~90% non-US AUM in Form ADV is consistent with it.", zh: "合夥人受訪說法；Form ADV 約 90% 非美資產與此相符。" } }
        ]
      }
    ],
    refs: [
      { label: "andracapital.com", url: "https://www.andracapital.com/" },
      { label: "SEC Form D/A (2026-05-20)", url: "https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml" },
      { label: "SEC Form ADV (CRD 314080)", url: "https://reports.adviserinfo.sec.gov/reports/ADV/314080/PDF/314080.pdf" },
      { label: "PitchBook", url: "https://pitchbook.com/profiles/investor/224383-69" },
      { label: "Crunchbase", url: "https://www.crunchbase.com/organization/andra-capital" }
    ]
  },

  /* ================= PEOPLE ================= */
  {
    slug: "people",
    layout: "people",
    icon: "group",
    title: { en: "Key People", zh: "主要投資人" },
    subtitle: {
      en: "Who actually runs Andra Capital — the two managing partners on record, the partners around them, and the names that appear only in marketing copy. Click a person for the claim-by-claim check.",
      zh: "誰真正經營 Andra Capital——申報有據的兩位經營合夥人、周邊的合夥人們，以及只出現在文宣裡的名字。點擊人物看逐項查證。"
    },
    groups: [
      {
        heading: { en: "Current, on the record", zh: "現任（有據可查）" },
        members: [
          {
            slug: "haydar-haba",
            name: { en: "Haydar Haba", zh: "Haydar Haba" },
            role: { en: "Founder & Managing Partner", zh: "創辦人暨經營合夥人" },
            status: "verified",
            summary: {
              en: "Serial entrepreneur (20+ years in internet/telecom; IntelePeer, Telco 214). The constant across every era of the firm: listed on the site's team page, in the 2018 token entity, and in every Form D.",
              zh: "連續創業者（網路／電信 20+ 年；IntelePeer、Telco 214）。貫穿公司每個時期的核心人物：官網團隊頁、2018 代幣主體與歷次 Form D 都有他。"
            },
            facts: [
              { claim: { en: "Founder & Managing Partner", zh: "創辦人暨經營合夥人" }, status: "verified",
                note: { en: "Team page + SEC Form D related person (Executive Officer) + 2018 Tokens Inc. director.", zh: "官網團隊頁＋SEC Form D related person（Executive Officer）＋2018 Tokens Inc. 董事。" } }
            ],
            refs: [
              { label: "Team — andracapital.com", url: "https://www.andracapital.com/team/" },
              { label: "SEC Form D/A 2026", url: "https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml" }
            ]
          },
          {
            slug: "paul-tuan",
            name: { en: "Paul Tuan", zh: "Paul Tuan" },
            role: { en: "Managing Partner", zh: "經營合夥人" },
            status: "verified",
            summary: {
              en: "M&A background with $10B+ in transaction experience across BAML, Jefferies, US Bancorp, MVP Capital and White Oak (per his site bio). The other executive officer named in the fund's Form D.",
              zh: "M&A 背景，經手逾 $100 億交易，歷任 BAML、Jefferies、US Bancorp、MVP Capital、White Oak（官網 bio）。基金 Form D 列名的另一位高階主管。"
            },
            facts: [
              { claim: { en: "Managing Partner", zh: "經營合夥人" }, status: "verified",
                note: { en: "Team page + SEC Form D related person (Executive Officer).", zh: "官網團隊頁＋SEC Form D related person（Executive Officer）。" } }
            ],
            refs: [
              { label: "Team — andracapital.com", url: "https://www.andracapital.com/team/" }
            ]
          },
          {
            slug: "kathy-park",
            name: { en: "Kathy Park", zh: "Kathy Park" },
            role: { en: "Partner (joined Oct 2022)", zh: "合夥人（2022 年 10 月加入）" },
            status: "verified",
            summary: {
              en: "Ex-Goldman Sachs MD (15 years in capital raising), Harvard economics; earlier stints at Bain and L'Oréal. Leads business development and sits on the investment committee. Notably absent from the current team page.",
              zh: "前高盛 MD（資本募集業務 15 年），哈佛經濟系；曾任職 Bain 與 L'Oréal。負責 business development 並為投資委員會成員。值得注意：現行官網團隊頁未列名。"
            },
            facts: [
              { claim: { en: "Partner since 2022", zh: "2022 年起任合夥人" }, status: "verified",
                note: { en: "Official press release (Oct 2022) + named interview (Pulse2).", zh: "官方新聞稿（2022-10）＋具名專訪（Pulse2）。" } },
              { claim: { en: "Source of the firm's track-record claims: 12+ investments, $100M+ deployed, exits in Palantir & SoFi", zh: "公司實績說法的出處：投資 12+ 家、部署逾 $1 億、Palantir 與 SoFi 出場" }, status: "partial",
                note: { en: "Her own on-record statements; no third-party exit records.", zh: "本人具名受訪自述；查無第三方出場紀錄。" } }
            ],
            refs: [
              { label: "PRWeb press release", url: "https://www.prweb.com/releases/Andra_Capital_expands_Leadership_Team_with_Kathy_Park_joining_as_Partner/prweb19044855.htm" },
              { label: "Pulse2 interview", url: "https://pulse2.com/andra-capital-partner-kathy-park/" }
            ]
          },
          {
            slug: "jonathan-lin",
            name: { en: "Jonathan Lin", zh: "林家振 Jonathan Lin" },
            role: { en: "Chairman (Taiwan media) / Partner (EN sources)", zh: "董事長（台媒）／合夥人（英文來源）" },
            status: "partial",
            summary: {
              en: "Andra's public face in Taiwan — banker-turned-executive-turned-investor, NTU adjunct professor, and a fixture at Taiwan AI events. His association with Andra is real (andracapital.com email, media profiles), but he appears on neither the team page nor any SEC filing.",
              zh: "Andra 在台灣的公開面孔——投行出身、歷任企業高層、現為投資人，台大兼任教授，台灣 AI 活動常客。與 Andra 的關聯屬實（andracapital.com email、媒體側寫），但官網團隊頁與 SEC 申報均未列名。"
            },
            facts: [
              { claim: { en: "“Chairman of Andra Capital”", zh: "「安卓樂資本董事長」" }, status: "partial",
                note: { en: "His own CV and Taiwan media use Chairman; EN sources say Partner; absent from the team page and Form D related persons.", zh: "本人履歷與台媒稱董事長；英文來源稱合夥人；官網團隊頁與 Form D related persons 皆未列名。" } }
            ],
            refs: [
              { label: "Public CV (NTU, PDF)", url: "https://cge.ntu.edu.tw/001/Upload/1022/relfile/63286/261297/d2e4d2b1-6cf2-4f00-8004-5fa982605b5f.pdf" },
              { label: "Meet interview", url: "https://meet.bnext.com.tw/articles/view/52840" }
            ]
          }
        ]
      },
      {
        heading: { en: "Former & SVC-era team", zh: "曾任／SVC 時期團隊" },
        members: [
          {
            slug: "charles-carmel",
            name: { en: "Charles Carmel", zh: "Charles Carmel" },
            role: { en: "Former Vice Chairman / Managing Partner", zh: "前副董事長／經營合夥人" },
            status: "partial",
            summary: {
              en: "Ex-Cisco VP of Corporate Development. Third-party directories listed him as Vice Chairman; he has since left and the current team page no longer includes him. He is the kernel of truth behind the 'Cisco president' marketing line — with the title inflated one level.",
              zh: "前 Cisco 企業發展副總裁（VP of Corporate Development）。第三方名錄曾列為副董事長；現已離任，官網團隊頁亦無此人。他是文宣「Cisco 總裁」說法的事實核心——惟職銜被灌水一級。"
            },
            facts: [
              { claim: { en: "“President of global corporate development, Cisco” (event copy)", zh: "「Cisco 全球企業發展總裁」（活動文宣）" }, status: "partial",
                note: { en: "Real person, real Cisco corp-dev role — but at VP level, and no longer with Andra.", zh: "確有其人、確在 Cisco 企業發展任職——但職級為 VP，且已離開 Andra。" } }
            ],
            refs: [
              { label: "Startup Intros (leadership listing)", url: "https://startupintros.com/orgs/andra-capital" }
            ]
          },
          {
            slug: "ting-louie",
            name: { en: "Ting Louie", zh: "Ting Louie" },
            role: { en: "Managing Partner (SVC era, 2018)", zh: "經營合夥人（SVC 時期，2018）" },
            status: "verified",
            summary: {
              en: "Executive officer of Andra Capital Tokens Inc. in the 2018 Form D and listed as managing partner in STO-era materials. Not part of the current public team.",
              zh: "2018 Form D 中 Andra Capital Tokens Inc. 的高階主管，STO 時期資料列為經營合夥人。非現行公開團隊成員。"
            },
            facts: [],
            refs: [
              { label: "SEC Form D 2018 (Tokens Inc.)", url: "https://www.sec.gov/Archives/edgar/data/1746500/000174650018000001/primary_doc.xml" },
              { label: "STOwise", url: "https://stowise.com/sto/andra-capital/" }
            ]
          },
          {
            slug: "svc-partners",
            name: { en: "SVC-era partners", zh: "SVC 時期其他合夥人" },
            role: { en: "Hermann Liu · Bassim Alkhafaji · Jordan Wahbeh · Roman Glukhovsky · Sam Raman · Anthony Gillaizeau", zh: "Hermann Liu、Bassim Alkhafaji、Jordan Wahbeh、Roman Glukhovsky、Sam Raman、Anthony Gillaizeau" },
            status: "partial",
            summary: {
              en: "Hermann Liu was a director of the 2018 token entity (SEC filing); the others appear in 2018 STO listings or third-party directories. None are on the current team page.",
              zh: "Hermann Liu 是 2018 代幣主體的董事（SEC 申報）；其餘見於 2018 STO 名錄或第三方目錄。均不在現行官網團隊頁。"
            },
            facts: [],
            refs: [
              { label: "SEC Form D 2018 (Tokens Inc.)", url: "https://www.sec.gov/Archives/edgar/data/1746500/000174650018000001/primary_doc.xml" },
              { label: "STOwise", url: "https://stowise.com/sto/andra-capital/" }
            ]
          }
        ]
      },
      {
        heading: { en: "Marketing-only names", zh: "僅見於文宣的名字" },
        members: [
          {
            slug: "allstar-claims",
            name: { en: "“The all-star management team”", zh: "「豪華管理團隊」" },
            role: { en: "Broadcom SVP · IBM chief innovation officer · Siri inventor · Morgan Stanley executives", zh: "Broadcom 資深副總裁、IBM 創新長、Siri 發明人、摩根士丹利高層" },
            status: "claimed",
            summary: {
              en: "Taiwan event copy claims Andra's team includes these figures. Of six such claims, only two have a real-world kernel (Carmel, ex-Cisco VP; Park, ex-Goldman MD). The Broadcom, IBM, Siri and Morgan Stanley names match no one on the team page, in SEC filings, or in third-party directories.",
              zh: "台灣活動文宣稱 Andra 團隊包含這些人物。六項說法中僅兩項有事實核心（前 Cisco VP 的 Carmel、前高盛 MD 的 Park）；Broadcom、IBM、Siri 發明人、摩根士丹利等，在官網團隊頁、SEC 申報與第三方目錄均查無對應人物。"
            },
            facts: [
              { claim: { en: "Named-role sweep", zh: "逐一比對結果" }, status: "claimed",
                note: { en: "SEC Form D related persons list only Haba and Tuan as natural persons.", zh: "SEC Form D related persons 僅列 Haba 與 Tuan 兩位自然人。" } }
            ],
            refs: [
              { label: "SEC Form D/A 2026", url: "https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml" }
            ]
          }
        ]
      }
    ]
  },

  /* ================= PORTFOLIO ================= */
  {
    slug: "portfolio",
    layout: "portfolio",
    icon: "pie_chart",
    title: { en: "Portfolio", zh: "投資組合" },
    subtitle: {
      en: "Late-stage funds often buy via secondaries and SPVs, so they rarely show up in official round announcements — which makes third-party database records the gold standard. Companies are graded by how well the claim of Andra's investment is evidenced.",
      zh: "晚期基金常經次級市場或 SPV 進場，未必出現在官方融資輪名單——因此第三方資料庫紀錄格外重要。以下依「Andra 有投資」這件事的證據強度分級。"
    },
    tiers: [
      {
        key: "A",
        status: "verified",
        label: { en: "Tier A — third-party records", zh: "A 級 — 第三方紀錄可證" },
        desc: { en: "Investment recorded by an independent database (PitchBook, Crunchbase, CB Insights).", zh: "獨立資料庫（PitchBook、Crunchbase、CB Insights）有投資紀錄。" },
        companies: [
          { name: "SpaceX", sector: { en: "Space", zh: "太空" }, note: { en: "PitchBook & CB Insights list Andra as an investor.", zh: "PitchBook 與 CB Insights 均列 Andra 為投資人。" } },
          { name: "Lambda", sector: { en: "AI cloud", zh: "AI 雲端" }, note: { en: "Crunchbase records Andra in the Feb 2025 Series D.", zh: "Crunchbase 紀錄 Andra 參與 2025 年 2 月 Series D。" } },
          { name: "Skild AI", sector: { en: "Robotics foundation models", zh: "機器人基礎模型" }, note: { en: "CB Insights records a Jan 2026 investment.", zh: "CB Insights 紀錄 2026 年 1 月投資。" } },
          { name: "Automation Anywhere", sector: { en: "RPA", zh: "RPA" }, note: { en: "Multiple third-party sources list Andra among investors.", zh: "多個第三方來源列 Andra 為投資人。" } }
        ]
      },
      {
        key: "B",
        status: "partial",
        label: { en: "Tier B — firm's own showcase / named-partner statements", zh: "B 級 — 官網展示／合夥人具名自述" },
        desc: { en: "Shown on Andra's site or asserted on the record by its partners; no independent database entry found.", zh: "見於 Andra 官網或由合夥人具名受訪陳述；未見獨立資料庫紀錄。" },
        companies: [
          { name: "Stripe", sector: { en: "Payments", zh: "支付" }, note: { en: "Site showcase + repeated partner interviews.", zh: "官網展示＋多次合夥人訪談。" } },
          { name: "Anthropic", sector: { en: "AI", zh: "AI" }, note: { en: "Site showcase + partner interviews.", zh: "官網展示＋合夥人訪談。" } },
          { name: "xAI", sector: { en: "AI", zh: "AI" }, note: { en: "Site showcase + partner interviews.", zh: "官網展示＋合夥人訪談。" } },
          { name: "Palantir", sector: { en: "Defense / data", zh: "國防／資料" }, note: { en: "On the site's portfolio page; Kathy Park cites it as one of two exits.", zh: "官網 portfolio 頁展示；Kathy Park 稱為兩次出場之一。" } },
          { name: "SoFi", sector: { en: "Fintech", zh: "金融科技" }, note: { en: "Cited by Kathy Park as the other exit.", zh: "Kathy Park 稱為另一次出場。" } }
        ]
      },
      {
        key: "C",
        status: "claimed",
        label: { en: "Tier C — interview/marketing mentions only", zh: "C 級 — 僅見訪談／文宣" },
        desc: { en: "Appears only in Jonathan Lin's interviews or event copy; no database, site-history or filing trace.", zh: "僅出現在林家振訪談或活動文宣；資料庫、官網紀錄與申報文件皆查無。" },
        companies: [
          { name: "Databricks", sector: { en: "Data/AI", zh: "資料／AI" }, note: { en: "Interview mentions only.", zh: "僅訪談提及。" } },
          { name: "Scale AI", sector: { en: "AI data", zh: "AI 資料" }, note: { en: "Interview mentions only.", zh: "僅訪談提及。" } },
          { name: "Neuralink", sector: { en: "Neurotech", zh: "神經科技" }, note: { en: "Interview mentions only.", zh: "僅訪談提及。" } },
          { name: "Figure AI", sector: { en: "Humanoid robotics", zh: "人形機器人" }, note: { en: "Interview mentions only.", zh: "僅訪談提及。" } },
          { name: "“CVO” (failed freight-AI bet)", sector: { en: "Logistics AI", zh: "物流 AI" }, note: { en: "Lin's own account of a loss; company name as reported.", zh: "林自述的失敗案例；名稱依報導原文。" } }
        ]
      }
    ],
    outro: [
      {
        en: "Exits: partner statements name Palantir (2020 direct listing) and SoFi (2021 SPAC) as the fund's two exits. Database exit fields don't show them — consistent with positions held via secondaries.",
        zh: "出場：合夥人具名稱 Palantir（2020 直接上市）與 SoFi（2021 SPAC）為基金的兩次出場。資料庫的 exits 欄位未見——與次級市場持股的型態相符。"
      }
    ],
    refs: [
      { label: "PitchBook", url: "https://pitchbook.com/profiles/investor/224383-69" },
      { label: "CB Insights", url: "https://www.cbinsights.com/investor/andra-capital" },
      { label: "Crunchbase timeline", url: "https://www.crunchbase.com/organization/andra-capital/investor_summary/overview_timeline" },
      { label: "Pulse2 (exits)", url: "https://pulse2.com/andra-capital-partner-kathy-park/" },
      { label: "Meet interview", url: "https://meet.bnext.com.tw/articles/view/52840" }
    ]
  },

  /* ================= SEC (facts) ================= */
  {
    slug: "sec",
    layout: "facts",
    icon: "gavel",
    title: { en: "SEC Filings", zh: "SEC 申報" },
    subtitle: {
      en: "The primary-source numbers, pulled directly from EDGAR and the IAPD adviser database. Where marketing and filings disagree, the filings win.",
      zh: "直接取自 EDGAR 與 IAPD 投資顧問資料庫的第一手數字。行銷與申報打架時，以申報為準。"
    },
    intro: [
      {
        en: "Three legal entities tell the story: the 2018 token vehicle that fizzled, the Cayman master fund raised from 2022 on, and the SEC-registered adviser that runs it.",
        zh: "三個法律主體說完整個故事：2018 年雷聲大雨點小的代幣主體、2022 年起募集的開曼主基金，以及管理它的 SEC 註冊投資顧問。"
      }
    ],
    sections: [
      {
        heading: { en: "Andra Capital Fund LP — Form D/A, May 2026 (CIK 1884136)", zh: "Andra Capital Fund LP — Form D/A，2026-05（CIK 1884136）" },
        rows: [
          { icon: "payments", label: { en: "Amount sold", zh: "實募金額" }, value: { en: "$350,000,000 to ~260 investors", zh: "$350,000,000、約 260 位投資人" }, status: "verified",
            note: { en: "Offering amount 'Indefinite'; minimum accepted $250K; first Form D filed March 2022.", zh: "募集上限 Indefinite；最低接受 $25 萬；首次 Form D 於 2022 年 3 月。" } },
          { icon: "public", label: { en: "Domicile", zh: "註冊地" }, value: { en: "Cayman Islands LP, operated from San Francisco", zh: "開曼群島 LP，於舊金山營運" }, status: "verified",
            note: { en: "Classic offshore structure for a ~90% non-US investor base.", zh: "典型離岸架構，對應約 90% 的非美投資人。" } },
          { icon: "badge", label: { en: "Related persons", zh: "相關人員" }, value: { en: "Andra Managers LLC (GP), Andra Capital LLC (promoter), Haydar Haba, Paul Tuan", zh: "Andra Managers LLC（GP）、Andra Capital LLC（promoter）、Haydar Haba、Paul Tuan" }, status: "verified",
            note: { en: "The only natural persons named in any Andra fund filing.", zh: "Andra 基金申報中僅有的兩位自然人。" } }
        ]
      },
      {
        heading: { en: "Andra Capital LLC — Form ADV, Feb 2026 (CRD 314080)", zh: "Andra Capital LLC — Form ADV，2026-02（CRD 314080）" },
        rows: [
          { icon: "monitoring", label: { en: "Regulatory AUM", zh: "申報 AUM" }, value: { en: "$476,538,169 — all discretionary, one fund account", zh: "$476,538,169 — 全數 discretionary、單一基金帳戶" }, status: "verified",
            note: { en: "Filed 2026-02-13 as an SEC-registered adviser (801-135574).", zh: "2026-02-13 以 SEC 註冊投資顧問（801-135574）身分申報。" } },
          { icon: "flight_takeoff", label: { en: "Non-US share", zh: "非美占比" }, value: { en: "$428,623,496 (~90%) attributable to non-US persons", zh: "$428,623,496（約 90%）屬非美國人士" }, status: "verified",
            note: { en: "Matches the partners' 'Asia and Middle East' investor-base description.", zh: "與合夥人「亞洲、中東」的投資人描述相符。" } },
          { icon: "verified_user", label: { en: "Private fund detail", zh: "私募基金明細" }, value: { en: "3(c)(1) fund; ~260 beneficial owners; insiders hold ~1%; routine minimum $100K", zh: "3(c)(1) 基金；受益人約 260 位；內部人持有約 1%；慣行最低承諾 $10 萬" }, status: "verified",
            note: { en: "Section 7.B.1 of Schedule D.", zh: "Schedule D 第 7.B.1 節。" } }
        ]
      },
      {
        heading: { en: "Andra Capital Tokens Inc. — Form D, July 2018 (CIK 1746500)", zh: "Andra Capital Tokens Inc. — Form D，2018-07（CIK 1746500）" },
        rows: [
          { icon: "token", label: { en: "SVC raise, as filed", zh: "SVC 申報實績" }, value: { en: "$1,300,000 sold, 2 investors", zh: "售出 $1,300,000、投資人 2 位" }, status: "verified",
            note: { en: "BVI-registered entity; directors Haydar Haba & Hermann Liu, executive officer Ting Louie. No amendment ever filed.", zh: "BVI 登記主體；董事 Haydar Haba 與 Hermann Liu、高階主管 Ting Louie。此後未再申報修正。" } },
          { icon: "campaign", label: { en: "vs. the “$500M” headlines", zh: "對照「$5 億」新聞標題" }, value: { en: "Two orders of magnitude apart", zh: "相差兩個數量級" }, status: "claimed",
            note: { en: "The 2018 press cycle reported a $500M target; the filing shows what was actually sold at the time.", zh: "2018 年新聞週期報導的是 $5 億目標；申報呈現的是當時實際售出金額。" } }
        ]
      }
    ],
    refs: [
      { label: "Form D/A 2026-05-20", url: "https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml" },
      { label: "Form ADV PDF", url: "https://reports.adviserinfo.sec.gov/reports/ADV/314080/PDF/314080.pdf" },
      { label: "IAPD firm summary", url: "https://adviserinfo.sec.gov/firm/summary/314080" },
      { label: "Form D 2018 (Tokens Inc.)", url: "https://www.sec.gov/Archives/edgar/data/1746500/000174650018000001/primary_doc.xml" }
    ]
  },

  /* ================= SVC (timeline) ================= */
  {
    slug: "svc",
    layout: "timeline",
    icon: "toll",
    title: { en: "Silicon Valley Coin", zh: "Silicon Valley Coin" },
    subtitle: {
      en: "Andra's original claim to fame: tokenizing a venture fund. The pitch was 'democratizing venture capital'; the filings tell a quieter story.",
      zh: "Andra 最初的成名招牌：把創投基金代幣化。口號是「讓創投民主化」，申報數字則安靜得多。"
    },
    intro: [
      {
        en: "SVC was an asset-backed security token representing an interest in Andra's fund — smart contracts in place of paper, KYC required, Reg D compliant, open to qualified purchasers in 50 jurisdictions, with a stated 80/20 late-to-early-stage mix and a '30%+ IRR' target.",
        zh: "SVC 是代表 Andra 基金權益的資產擔保型證券代幣——以智能合約取代紙本、必須 KYC、符合 Reg D，開放 50 個司法管轄區的合格投資人，宣稱 80／20 的晚期／早期配置與「30%+ IRR」目標。"
      }
    ],
    events: [
      { date: { en: "Apr 2018", zh: "2018 年 4 月" }, title: { en: "Launch & the $500M headline", zh: "上線與「$5 億」標題" },
        body: { en: "SVC announced amid the STO boom; trade press reports a $500M+ raise target. Accepted currencies: USD, BTC, ETH, DAI.", zh: "SVC 在 STO 熱潮中宣布；產業媒體報導 $5 億以上的募集目標。接受 USD、BTC、ETH、DAI。" } },
      { date: { en: "Jun–Jul 2018", zh: "2018 年 6–7 月" }, title: { en: "Private sale opens; Form D filed", zh: "私募開跑；提交 Form D" },
        body: { en: "Andra Capital Tokens Inc. (BVI) files its Form D on July 13 reporting $1.3M sold to 2 investors — the only figure ever filed for the token.", zh: "Andra Capital Tokens Inc.（BVI）於 7 月 13 日提交 Form D，申報售出 $130 萬、2 位投資人——代幣唯一一次申報的數字。" } },
      { date: { en: "Jan 2020", zh: "2020 年 1 月" }, title: { en: "Pivot to Tezos + TokenSoft", zh: "轉向 Tezos＋TokenSoft" },
        body: { en: "Press release announces SVC will issue on Tezos via TokenSoft (originally ERC-20), in collaboration with the Tezos Foundation. Deloitte audit and DLA Piper counsel are cited in offering materials.", zh: "新聞稿宣布 SVC 改經 TokenSoft 於 Tezos 鏈發行（原為 ERC-20），與 Tezos 基金會合作。發行資料引述 Deloitte 審計與 DLA Piper 法律顧問。" } },
      { date: { en: "2022", zh: "2022 年" }, title: { en: "Back to a conventional fund", zh: "回歸傳統基金" },
        body: { en: "Andra Capital Fund LP (Cayman) files its first Form D; subsequent fundraising proceeds as a traditional offshore LP, reaching $350M by 2026.", zh: "Andra Capital Fund LP（開曼）提交首次 Form D；此後以傳統離岸 LP 型態募資，至 2026 年累計 $3.5 億。" } },
      { date: { en: "Today", zh: "現在" }, title: { en: "SVC quietly retired from the pitch", zh: "SVC 悄悄退場" },
        body: { en: "The current site no longer features the token; the narrative is a two-fund (growth + late-stage) structure. Lin still appears at Taiwan blockchain-and-AI summits.", zh: "現行官網已不再主打代幣，敘事改為雙基金（成長期＋晚期）結構。林家振仍常出席台灣的區塊鏈與 AI 高峰會。" } }
    ],
    outro: [
      {
        en: "Verdict: SVC is best read as a 2018-vintage distribution experiment. The token raised ~$1.3M on paper against $500M of headlines; the real money later arrived through the conventional Cayman LP.",
        zh: "小結：SVC 應視為 2018 年那一波的通路實驗。代幣帳面僅募得約 $130 萬，對照 $5 億的媒體聲量；真正的資金之後經傳統開曼 LP 進場。"
      }
    ],
    refs: [
      { label: "PR Newswire (Tezos/TokenSoft)", url: "https://www.prnewswire.com/news-releases/silicon-valley-coin-by-andra-capital-uses-tezos-blockchain-and-tokensoft-for-its-security-token-offering-300990931.html" },
      { label: "Decrypt", url: "https://decrypt.co/17312/vc-firm-andra-capital-is-selling-a-silicon-valley-cryptocurrency" },
      { label: "STOwise", url: "https://stowise.com/sto/andra-capital/" },
      { label: "SEC Form D 2018", url: "https://www.sec.gov/Archives/edgar/data/1746500/000174650018000001/primary_doc.xml" }
    ]
  },

  /* ================= SOURCES ================= */
  {
    slug: "sources",
    layout: "sources",
    icon: "fact_check",
    title: { en: "Sources & Method", zh: "來源與方法" },
    subtitle: {
      en: "Every number on this site traces to one of the links below. Primary filings outrank databases; databases outrank interviews; interviews outrank event copy.",
      zh: "本站每個數字都可追溯到下列連結。第一手申報 > 第三方資料庫 > 具名訪談 > 活動文宣。"
    },
    legend: [
      { status: "verified", label: { en: "Verified — primary filing or independent third-party record", zh: "已驗證 — 第一手申報或獨立第三方紀錄" } },
      { status: "partial", label: { en: "Partial — self-published or named-partner statement, no independent record", zh: "部分吻合 — 自述／官網展示，無獨立紀錄" } },
      { status: "claimed", label: { en: "Claimed only — marketing or event copy with no supporting record", zh: "僅口述 — 查無任何紀錄佐證的文宣說法" } }
    ],
    groups: [
      {
        heading: { en: "Primary (SEC)", zh: "第一手（SEC）" },
        links: [
          { label: "Form D/A — Andra Capital Fund LP, 2026-05-20", url: "https://www.sec.gov/Archives/edgar/data/1884136/000188413626000006/primary_doc.xml" },
          { label: "EDGAR filing index — CIK 1884136", url: "https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001884136" },
          { label: "Form ADV — Andra Capital LLC (CRD 314080)", url: "https://reports.adviserinfo.sec.gov/reports/ADV/314080/PDF/314080.pdf" },
          { label: "IAPD firm summary", url: "https://adviserinfo.sec.gov/firm/summary/314080" },
          { label: "Form D — Andra Capital Tokens Inc., 2018-07-13", url: "https://www.sec.gov/Archives/edgar/data/1746500/000174650018000001/primary_doc.xml" }
        ]
      },
      {
        heading: { en: "Company & databases", zh: "官網與資料庫" },
        links: [
          { label: "andracapital.com — home / team / portfolio", url: "https://www.andracapital.com/" },
          { label: "PitchBook investor profile", url: "https://pitchbook.com/profiles/investor/224383-69" },
          { label: "CB Insights investor page", url: "https://www.cbinsights.com/investor/andra-capital" },
          { label: "Crunchbase profile", url: "https://www.crunchbase.com/organization/andra-capital" },
          { label: "Startup Intros listing", url: "https://startupintros.com/orgs/andra-capital" }
        ]
      },
      {
        heading: { en: "Interviews & press (US)", zh: "訪談與報導（美國）" },
        links: [
          { label: "Pulse2 — Kathy Park interview", url: "https://pulse2.com/andra-capital-partner-kathy-park/" },
          { label: "PRWeb — Kathy Park joins as Partner (2022)", url: "https://www.prweb.com/releases/Andra_Capital_expands_Leadership_Team_with_Kathy_Park_joining_as_Partner/prweb19044855.htm" },
          { label: "Venture Capital Journal — 2018 headline", url: "https://www.venturecapitaljournal.com/andra-capital-collects-500-mln-fund/" },
          { label: "PR Newswire — SVC on Tezos (2020)", url: "https://www.prnewswire.com/news-releases/silicon-valley-coin-by-andra-capital-uses-tezos-blockchain-and-tokensoft-for-its-security-token-offering-300990931.html" },
          { label: "Decrypt — SVC coverage", url: "https://decrypt.co/17312/vc-firm-andra-capital-is-selling-a-silicon-valley-cryptocurrency" },
          { label: "STOwise — SVC offering record", url: "https://stowise.com/sto/andra-capital/" }
        ]
      },
      {
        heading: { en: "Interviews & press (Taiwan)", zh: "訪談與報導（台灣）" },
        links: [
          { label: "Meet 創業小聚 — 台灣AI突圍專訪", url: "https://meet.bnext.com.tw/articles/view/52840" },
          { label: "WHATs NEXT — 企業採用指標", url: "https://srtechmedia.com/news/c5af2af5-bb09-4ffd-8a8f-3a5679eac5d2" },
          { label: "Yahoo — 台灣軟體限制", url: "https://tw.news.yahoo.com/whats-next-%E7%BE%8E%E5%9C%8B%E5%AE%89%E5%8D%93%E6%A8%82%E8%B3%87%E6%9C%AC-andra-capital-060000269.html" },
          { label: "SIC — 新創投資視野與策略", url: "https://news.sicglobal.net/p/af8" },
          { label: "林家振公開履歷（台大，PDF）", url: "https://cge.ntu.edu.tw/001/Upload/1022/relfile/63286/261297/d2e4d2b1-6cf2-4f00-8004-5fa982605b5f.pdf" },
          { label: "中研院 BioTReC 個人頁", url: "https://biotrec.sinica.edu.tw/posts/187669" },
          { label: "今周刊專欄", url: "https://www.businesstoday.com.tw/author/release/7396" }
        ]
      }
    ]
  }
];
