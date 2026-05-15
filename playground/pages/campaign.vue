<template>
  <div class="container mx-auto p-12">
    <div class="flex items-center justify-between">
      <h1 class="text-en-h2 text-main-brown">FineDayClub Campaign Page</h1>
      <div>
        <UButton
          :label="campaign.theme === 'light' ? '切換深色' : '切換淺色'"
          color="gray"
          @click="toggleTheme"
        >
          <template #trailing>
            <UIcon :name="campaign.theme === 'light' ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" class="w-5 h-5" />
          </template>
        </UButton>
        <UButton
          :label="showCode ? '隱藏 Code' : '顯示 Code'"
          color="gray"
          @click="showCode = !showCode"
          class="ml-2"
        >
          <template #trailing>
            <UIcon :name="showCode ? 'i-heroicons-eye-slash-20-solid' : 'i-heroicons-eye-20-solid'" class="w-5 h-5" />
          </template>
        </UButton>
      </div>
    </div>
    <hr class="my-12">
    <div class="grid-cols-2 gap-4" :class="{ grid: showCode }">
      <div>
        <FdcCampaignContainer
          :campaign="campaign"
        />
      </div>
      <div v-if="showCode">
        <UCard>
          <pre class="whitespace-pre-wrap break-all font-mono">{{ JSON.stringify(campaign, null, 2) }}</pre>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '#imports';

const showCode = ref(false);

const campaign = ref({
    "id": 4,
    "title": "國泰集團小樹點專區",
    "subtitle": "小樹點1點=1元，折抵無上限",
    "banner_url": "https://api.finedayclub.com/storage/campaigns/4/eMxzIrktjD8KUYw6K2RyuzZv8G9Yq1R4k9oGPaND.jpg?20260401180431",
    "thumbnail_url": "https://api.finedayclub.com/storage/campaigns/4/Bp4Ezk0cgUncwc8PhGPAZBp82Sy3pEQqu0FiPp9z.jpg?20260401180430",
    "theme": "light",
    "sort": 4,
    "seo": {
        "title": "小樹點怎麼換最划算？FineDayClub 國泰集團小樹點兌換專區，尊榮體驗首選",
        "keywords": null,
        "description": "想知道國泰集團小樹點除了折抵帳單還有什麼選擇？FineDayClub 提供全台最精緻的點數兌換服務。從頂級 SPA、五星級飯店到私人訂製體驗，打造專屬的小樹點生活圈，立即查看最新兌換項目。"
    },
    "blocks": [
        {
            "type": "text",
            "content": {
                "text": "<h3 style=\"text-align: left\"><strong>「讓您的小樹點，成為啟動非凡旅程的入口」</strong></h3><p style=\"text-align: left\"></p><p style=\"text-align: left\">FineDayClub 攜手國泰集團小樹點，重新定義點數的價值：<strong>不再只是兌換商品，而是解鎖真人顧問的深度專業</strong>。您的下一場極致體驗，從按下「啟動鍵」開始。您是不是常常遇到以下情境呢？</p><p style=\"text-align: left\"></p><h4 style=\"text-align: left\"><strong>點數太多，卻找不到相稱的品味？</strong></h4><p style=\"text-align: left\"></p><h4 style=\"text-align: left\"><strong>想規劃旅程，卻沒時間研究細節？</strong></h4><p style=\"text-align: left\"></p><h4 style=\"text-align: left\"><strong>高端權益，如何發揮 120% 的價值？</strong></h4><p style=\"text-align: left\"></p><p style=\"text-align: left\">單純折抵消費缺乏服務帶來的增值，無法體現身為頂級卡友的權益高度。透過小樹點支付規劃金，即解鎖真人顧問優先處理您的所有願望。<strong>最終成行時將全額折抵團費</strong>，讓點數價值在每一次出發時都顯得卓爾不群。</p><p style=\"text-align: left\"></p><h4 style=\"text-align: left\"><strong>FineDayClub 的專業承諾：</strong>「您支付的不是行政規費，而是對高品質服務的投資。」</h4><p style=\"text-align: left\"></p>"
            }
        },
        {
            "type": "text",
            "content": {
                "text": "<a class=\"fdc-button\" href=\"https://s.no8.io/link/channels/se7pC0yhLU\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">立即預約一對一專屬顧問服務</a>"
            }
        },
        {
            "type": "divider",
            "content": null
        },
        {
            "type": "image-text",
            "content": {
                "text": "<h3 style=\"text-align: left\">用小樹點兌換極致度假體驗</h3><p style=\"text-align: left\"></p><p style=\"text-align: left\"><strong>凡持「國泰集團小樹點」預訂 FineDayClub 訂製行程服務，即享有『小樹點1點＝新台幣1元，折抵無上限』的禮遇。</strong></p><p style=\"text-align: left\"></p><ul><li style=\"text-align: left\"><p style=\"text-align: left\"><strong>1 點現折 NT$1：</strong>無需繁瑣換算，點數價值一目了然。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\"><strong>折抵無上限：</strong>您可自由選擇「全額點數支付」或「點數+現金」彈性組合，完整涵蓋您的行程費用。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\"><strong>全商品適用：</strong>不論是獨特旅程、精選飯店或在地體驗，皆可使用小樹點進行折抵。</p></li></ul><p style=\"text-align: left\"></p><p style=\"text-align: left\">※ 如何查詢您的小樹點點數？您可至 <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-primary underline\" href=\"https://www.treepoints.com/\">小樹生活官網</a> 或 <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-primary underline\" href=\"https://myrewards-app.com.tw/\">國泰優惠App</a>，輕鬆查詢您的小樹點點數，開始享受專屬優惠！</p><p style=\"text-align: left\"></p>",
                "align": "right",
                "image": {
                    "id": 7617,
                    "src": "https://api.finedayclub.com/storage/campaigns/4/X7oklQ80exYeJOOlNGpFgfHWTq5l78rcXZHCDEZA.jpg?20260511163553"
                }
            }
        },
        {
            "type": "text",
            "content": {
                "text": "<a class=\"fdc-button\" href=\"https://www.finedayclub.com/campaigns/8\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">什麼是訂製行程？</a>"
            }
        },
        {
            "type": "divider",
            "content": null
        },
        {
            "type": "text",
            "content": {
                "text": "<h3 style=\"text-align: left\">精選行程</h3>"
            }
        },
        {
            "type": "products",
            "content": {
                "product_ids": [
                    394,
                    393,
                    392,
                    391,
                    390,
                    389,
                    387,
                    373
                ]
            }
        },
        {
            "type": "text",
            "content": {
                "text": "<a class=\"fdc-button\" href=\"https://s.no8.io/link/channels/se7pC0yhLU\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">立即預約專屬顧問行程諮詢</a>"
            }
        },
        {
            "type": "divider",
            "content": null
        },
        {
            "type": "text",
            "content": {
                "text": "<h3 style=\"text-align: left\">精選奢酒</h3>"
            }
        },
        {
            "type": "products",
            "content": {
                "product_ids": [
                    33,
                    32,
                    27,
                    42,
                    38,
                    36,
                    54,
                    47
                ]
            }
        },
        {
            "type": "text",
            "content": {
                "text": "<a class=\"fdc-button\" href=\"https://s.no8.io/link/channels/se7pC0yhLU\" target=\"_blank\" rel=\"noopener noreferrer nofollow\">立即聯繫FineDayClub專屬顧問</a>"
            }
        },
        {
            "type": "divider",
            "content": null
        },
        {
            "type": "image-text",
            "content": {
                "text": "<p style=\"text-align: left\"><strong>注意事項：</strong></p><ul><li style=\"text-align: left\"><p style=\"text-align: left\">訂購方式：小樹點1點=新台幣1元，折抵無上限，最低需折抵1點。關於小樹點，請至「<a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-primary underline\" href=\"https://www.treepoints.com/\">小樹生活官網</a>」看更多。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\">行程預訂步驟：<br>① 點擊「產品圖」導連至產品頁面<br>② 登入/註冊 FineDayClub 會員<br>③ 選擇「品項」、「方案」與「日期」<br>④ 點擊「預約專人聯繫」<br>⑤ FineDayClub 客服顧問將聯繫您，並確認行程、費用及小樹點點數折抵<br>⑥ 確認後即完成訂購</p></li><li style=\"text-align: left\"><p style=\"text-align: left\"><a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-primary underline\" href=\"https://www.treepoints.com/\">小樹生活官網</a> 或 <a target=\"_blank\" rel=\"noopener noreferrer nofollow\" class=\"text-primary underline\" href=\"https://myrewards-app.com.tw/\">國泰優惠App</a> 可查詢個人小樹點點數，或註冊 FineDayClub 會員並至產品頁點選「預約專人聯繫」後，由客服顧問協助查詢及回覆。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\">小樹點兌點後若因變更／取消行程而有退點需求，請聯繫 FineDayClub，由客服顧問協助您。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\">取消退費規範請參照各行程說明，手續費等無法退款部份，不足金額將由信用卡支付。</p></li><li style=\"text-align: left\"><p style=\"text-align: left\">以上售價皆為各方案最低價，實際售價以提出需求並確認日期後為準。</p></li></ul>",
                "align": "left",
                "image": {
                    "id": 7618,
                    "src": "https://api.finedayclub.com/storage/campaigns/4/7InbIu16HLKe2DR1TZqtS4pGmpDLkMRM1tTDpnOi.jpg?20260511163651"
                }
            }
        }
    ],
    "products": [
        {
            "id": 27,
            "name": "台北・嘉佩樂酒店",
            "country": {
                "id": 1,
                "name": "臺灣",
                "code": "TW"
            },
            "region": {
                "id": 17,
                "name": "台北"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Capella Taipei",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/27/pt9Jxqp0y2nGDY0kvD5MerykWQf35fHc47JKydZX.jpg?20250510233740",
            "price": 19500,
            "tags": []
        },
        {
            "id": 32,
            "name": "清萊・金三角四季帳篷酒店",
            "country": {
                "id": 14,
                "name": "泰國",
                "code": "TH"
            },
            "region": {
                "id": 107,
                "name": "清萊"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Four Seasons Golden Triangle",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/32/MBwH43T0SNP8Cwb9m7pDj2znJxV1JWHmgfd8xRAK.jpg?20250715170943",
            "price": 97700,
            "tags": []
        },
        {
            "id": 33,
            "name": "清邁・四季渡假酒店",
            "country": {
                "id": 14,
                "name": "泰國",
                "code": "TH"
            },
            "region": {
                "id": 106,
                "name": "清邁"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Four Seasons Chiang Mai",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/33/meIk70VOgQUvziFG6XWEoKyIKPaThLORNBy2JNbM.jpg?20250716101806",
            "price": 31600,
            "tags": []
        },
        {
            "id": 36,
            "name": "寧順・安縵諾怡",
            "country": {
                "id": 13,
                "name": "越南",
                "code": "VN"
            },
            "region": {
                "id": 104,
                "name": "寧順"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Amanoi",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/36/y8cw2PJRbbMVjsjO0ghYGP9Nh1qIssNwv8n4Mb4H.jpg?20250704233948",
            "price": 33500,
            "tags": []
        },
        {
            "id": 38,
            "name": "峇里島・金巴蘭灣四季度假酒店",
            "country": {
                "id": 12,
                "name": "印尼",
                "code": "ID"
            },
            "region": {
                "id": 103,
                "name": "峇里島"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Four Seasons Bali at Jimbaran Bay",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/38/HoM6HRS43TGQBVxcxbKrnzGZUZMSKG9x013fgQDX.jpg?20250515173239",
            "price": 37900,
            "tags": []
        },
        {
            "id": 42,
            "name": "大阪・VOCO大阪Central",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 61,
                "name": "大阪"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "VOCO Osaka Central",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/42/1QksTA1sk9jyvWujlgCmpzhqK2thYu2IA8e9VpdT.jpg?20250516121631",
            "price": 8100,
            "tags": []
        },
        {
            "id": 47,
            "name": "大阪・華爾道夫酒店",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 61,
                "name": "大阪"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Waldorf Astoria Osaka",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/47/jS2mc8eRcNtMDSjgVmWIKyzIKQboIPQLYNjv02aH.webp?20250716115136",
            "price": 24500,
            "tags": []
        },
        {
            "id": 54,
            "name": "新加坡・美年麗思卡爾頓酒店",
            "country": {
                "id": 11,
                "name": "新加坡",
                "code": "SG"
            },
            "region": {
                "id": 102,
                "name": "中區"
            },
            "category": {
                "id": 4,
                "name": "酒店旅宿"
            },
            "package": {
                "id": 1,
                "name": "奢華酒店"
            },
            "subtitle": "Ritz-Carlton Millenia Singapore",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/54/EIkL2ZljaKqgipDqKPHLzGsCmyAz75oAyvcAgaRd.jpg?20250518162342",
            "price": 19000,
            "tags": []
        },
        {
            "id": 373,
            "name": "福岡．八女的玉露時光與白牆商人町 2 日",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 74,
                "name": "福岡"
            },
            "category": {
                "id": 2,
                "name": "獨特旅程"
            },
            "package": {
                "id": 12,
                "name": "慢活散策"
            },
            "subtitle": "茶園．茶染．白牆老街",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/373/pxUuJ2AI1LmnnDHPc07COWwAhKcrYB2zF0o3UAtC.jpg?20260114174614",
            "price": 18000,
            "tags": [
                {
                    "id": 20,
                    "name": "NIPPONIA"
                },
                {
                    "id": 29,
                    "name": "日本"
                }
            ]
        },
        {
            "id": 387,
            "name": "三重．伊勢神宮時光神隱 3 日",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 58,
                "name": "三重"
            },
            "category": {
                "id": 2,
                "name": "獨特旅程"
            },
            "package": {
                "id": 12,
                "name": "慢活散策"
            },
            "subtitle": "清晨神域．商人町生活風景．老屋美學",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/387/zFuqzJaYZJ6yWL8DwQrYi5TmB80OwdC0vSEFZpXg.jpg?20260120140256",
            "price": 24600,
            "tags": [
                {
                    "id": 20,
                    "name": "NIPPONIA"
                },
                {
                    "id": 29,
                    "name": "日本"
                },
                {
                    "id": 30,
                    "name": "文化體驗"
                }
            ]
        },
        {
            "id": 389,
            "name": "京都・匠心與文化財深度之旅 2 日",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 60,
                "name": "京都"
            },
            "category": {
                "id": 3,
                "name": "在地體驗"
            },
            "package": {
                "id": 16,
                "name": "職人工藝"
            },
            "subtitle": "百年旅館．文化體驗．日本刀鍛造",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/389/XTK7MDMUaMM9HPkNxoBiS5dCpQfUbGcThyHcNefq.jpg?20260126112351",
            "price": 16800,
            "tags": [
                {
                    "id": 28,
                    "name": "京都"
                },
                {
                    "id": 29,
                    "name": "日本"
                },
                {
                    "id": 30,
                    "name": "文化體驗"
                },
                {
                    "id": 31,
                    "name": "特殊體驗"
                }
            ]
        },
        {
            "id": 390,
            "name": "長崎．松浦夕陽巡航與漁村文化深度之旅 2 日",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 76,
                "name": "長崎"
            },
            "category": {
                "id": 3,
                "name": "在地體驗"
            },
            "package": {
                "id": 4,
                "name": "文化探訪"
            },
            "subtitle": "海上浮生．日落餘暉．古民家款待",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/390/FN3henatXKsVlJpjxHcsXXbE8txneHBLRzuenkRm.png?20260129150241",
            "price": 19200,
            "tags": [
                {
                    "id": 29,
                    "name": "日本"
                }
            ]
        },
        {
            "id": 391,
            "name": "京都．百年料亭高湯講堂探尋京料理職人靈魂",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 60,
                "name": "京都"
            },
            "category": {
                "id": 3,
                "name": "在地體驗"
            },
            "package": {
                "id": 16,
                "name": "職人工藝"
            },
            "subtitle": "老舖味．三代傳承．職人手藝",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/391/AOozowJsxYF67xBiRkI8XqGXwhlq1MsZ9OkJpa7n.jpg?20260130103407",
            "price": 6800,
            "tags": [
                {
                    "id": 28,
                    "name": "京都"
                },
                {
                    "id": 29,
                    "name": "日本"
                },
                {
                    "id": 30,
                    "name": "文化體驗"
                },
                {
                    "id": 31,
                    "name": "特殊體驗"
                }
            ]
        },
        {
            "id": 392,
            "name": "奈良・「非被召喚，不可抵達」聖域參拜",
            "country": {
                "id": 2,
                "name": "日本",
                "code": "JP"
            },
            "region": {
                "id": 63,
                "name": "奈良"
            },
            "category": {
                "id": 2,
                "name": "獨特旅程"
            },
            "package": {
                "id": 5,
                "name": "歷史風華"
            },
            "subtitle": "聖地巡禮．神之召喚．千年巨杉",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/392/3LpSHMieYhmHnUzd9oKrfZu0DJtJUrGFMNtaV9nA.jpg?20260202161850",
            "price": 12800,
            "tags": [
                {
                    "id": 29,
                    "name": "日本"
                },
                {
                    "id": 30,
                    "name": "文化體驗"
                },
                {
                    "id": 31,
                    "name": "特殊體驗"
                }
            ]
        },
        {
            "id": 393,
            "name": "義大利．佛羅倫斯藝術與芬芳慢旅 3 日",
            "country": {
                "id": 7,
                "name": "義大利",
                "code": "IT"
            },
            "region": {
                "id": 90,
                "name": "佛羅倫斯"
            },
            "category": {
                "id": 2,
                "name": "獨特旅程"
            },
            "package": {
                "id": 19,
                "name": "藝境漫遊"
            },
            "subtitle": "專屬調香．名畫深覽．莊園療癒",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/393/AP5nU8hIWatPSZBHw4hG63qR0awNXvxDNTyBmlPX.jpg?20260225154555",
            "price": 103800,
            "tags": []
        },
        {
            "id": 394,
            "name": "法國・巴黎鏡頭流光與私藏謐境 3 日",
            "country": {
                "id": 5,
                "name": "法國",
                "code": "FR"
            },
            "region": {
                "id": 84,
                "name": "巴黎"
            },
            "category": {
                "id": 2,
                "name": "獨特旅程"
            },
            "package": {
                "id": 19,
                "name": "藝境漫遊"
            },
            "subtitle": "影像紀實．法式優雅．感官日常",
            "thumbnail_url": "https://api.finedayclub.com/storage/products/394/KNDtj2tueKpkdpXYFitDOc7IzSy2qMa1uqRCMETA.jpg?20260304113637",
            "price": 188000,
            "tags": []
        }
    ]
});

const toggleTheme = () => {
  campaign.value.theme = campaign.value.theme === 'light' ? 'dark' : 'light';
};
</script>
