<template>
  <div class="container mx-auto p-12">
    <h1 class="text-en-h2 text-main-brown">FineDayClub UI Components</h1>
    <hr class="my-12">
    <div class="flex flex-col gap-y-8">
      <div class="card">
        <h3 class="card__title">
          商品內容
          <code>&lt;FdcProductContent&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductContent>
          <h3>奈良</h3>
          <h4>奈良長谷寺</h4>
          <p>日本最古老的佛教寺廟之一，建於公元7世紀初，位於<a href="https://zh.wikipedia.org/zh-tw/%E5%A5%88%E8%89%AF%E5%B8%82">奈良市</a>郊的一個山谷中。這座寺廟以其宏偉的建築和美麗的自然景觀而聞名，是日本歷史和宗教的重要遺產之一。寺廟內有許多精緻的建築物，包括五層的塔、主殿和禪堂，展示了古代佛教藝術和建築的精華。您可以在這裡欣賞到宏偉的寺廟建築、靜謐的佛教氛圍，以及四季變化的美麗景色，使其成為參觀和冥想的理想場所。</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p>我上面空很多行唷！</p>
          <FdcProductContentCarousel
            :images="productImages"
          />

          <FdcSectionTitle
            title="每日行程"
            subtitle="Tour description"
          />
          <FdcProductDailySchedule :schedule="dailySchedule" />
          <h3>行程項目</h3>

          <FdcProductDetailChecklist
            :checklist="detailChecklist"
          />
          <hr class="my-10">
          <FdcSectionTitle
            title="注意事項"
            subtitle="Important Notes"
          />
          <ol class="mb-8">
            <li>取消條款依客服回覆為主，如 No Show 或於免費取消日期後取消則全額收款。</li>
            <li>特殊需求非保證項目，最終是否提供相關服務仍需視景點、餐廳況而定。</li>
            <li>月桂冠大倉酒廠導覽限 8 人以內，並且需 7 天前確認。</li>
            <li>月桂冠大倉酒廠導覽週末及假日不開放。</li>
            <li>現場活動由活動主辦方自行提供及全權負責處理，與 FineDayClub 無涉，如有任何問題，請洽活動主辦方。</li>
            <li>以上為 4 人成行的每人建議售價；若低於 4 人報名則需另外報價。</li>
            <li>以上內容包含若預訂額滿或其他政策因素導致無法安排，將以同價位等級替代。</li>
            <li>接送地點若有額外需求可另外報價。</li>
            <li>小孩佔床或不佔床費用需另外報價。</li>
          </ol>
          <h3>取消條款</h3>
          <ul>
            <li>所選日期 30 天（含）之前取消，收取手續費 0%。</li>
            <li>所選日期 21 天（含）之前取消，收取手續費 10%。</li>
            <li>所選日期 14 天（含）之前取消，收取手續費 30%。</li>
            <li>所選日期 7 天（含）之前取消，收取手續費 50%。</li>
            <li>所選日期 1 天（含）之前取消，收取手續費 100%。</li>
            <li>出發當日取消，收取手續費 100%。</li>
          </ul>
          <ul><li><p>實際報價以需求之入住日及房型為主。 </p></li><li><p>溫馨提醒：如需尋找更多房型請洽詢客服。 </p></li><li><p>入住時間：15:00 後 ；退房時間：12:00 前。 </p></li><li><p>歡迎孩童入住，該酒店視6歲及以上為成人。 </p></li><li><p>特殊需求非保證項目，請於入住前7天提出，最終是否提供相關服務仍視酒店、房況而定。</p></li></ul>
          <FdcProductContentRoomCard
            :room="room"
          />
        </FDCProductContent>
      </div>
      <div class="card">
        <h3 class="card__title">
          商品內容圖片
          <code>&lt;FdcProductContentImage&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductContentImage
          src="https://img.kkday.com/v2/image/get/w_8257,h_5504,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20230908035000_C0Rl5/jpg"
          alt="奈良長谷寺"
          title="酒店內設施"
          caption="二世谷東山度假村麗思卡爾頓隱世精品度假酒店 Higashiyama Niseko Village, a Ritz-Carlton Reserve"
        />
      </div>
      <div class="card">
        <h3 class="card__title">
          商品圖片輪播
          <code>&lt;FdcProductContentCarousel&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductContentCarousel
          :images="productImages"
        />
      </div>
      <div class="card">
        <h3 class="card__title">
          房型介紹卡片
          <code>&lt;FdcProductContentRoomCard&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductContentRoomCard
          :room="room"
          class="mb-4"
        />
        <FdcProductContentRoomCard
          :room="roomWithOneImage"
          class="mb-4"
        />
        <FdcProductContentRoomCard
          :room="roomWithoutImage"
        />
      </div>
      <div class="card">
        <h3 class="card__title">
          商品行程包含與不包含項目
          <code>&lt;FdcProductDetailChecklist&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductDetailChecklist
          :checklist="detailChecklist"
        />
      </div>
      <div class="card">
        <h3 class="card__title">
          商品每日行程
          <code>&lt;FdcProductDailySchedule&gt;</code>
        </h3>
        <hr class="my-4">
        <FdcProductDailySchedule :schedule="dailySchedule" />
      </div>
      <div class="card">
        <h3 class="card__title">
          區塊標題
          <code>&lt;FdcSectionTitle&gt;</code>
        </h3>
        <hr class="my-4">
        <div class="flex gap-x-8 py-5">
          <FdcSectionTitle
            title="取消條款"
            subtitle="Cancellation Policy"
          />
          <FdcSectionTitle
            title="禮遇方案"
            subtitle="PRIVILEGE PROGRAM"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

const mockProduct = {
  id: 'prod_001',
  name: 'Vintage Leather Weekender',
  subtitle: 'Handcrafted Italian leather travel bag with brass hardware',
  thumbnail_url: 'https://picsum.photos/800/1200',
  description: 'Perfect for weekend getaways, this spacious leather bag features premium craftsmanship and timeless design.',
  price: 299.99,
  category: 'bags',
  in_stock: true,
  created_at: '2024-03-19T08:00:00Z'
}

const detailChecklist = {
  includes: ['1-4人成團。', '來回接送服務：關西國際機場或市區（大阪、京都）之車站至酒店。', '3日全天中文包車服務（含中文導覽、景點門票、纜車票、船票）：奈良長谷寺；奈良公園；奈良長谷寺；奈良公園；美山町自然文化村；天橋立搭乘纜車；伊根灣遊船；平等院；伏見散策（含月桂冠大倉酒廠體驗）；伏見稻荷大社', '參觀月桂冠大倉酒廠中文導覽。', '2 頓午餐～百年日式料理和日式創意料理。', '以上內容包含若預訂額滿或其他政策因素導致無法安排，將以同價位等級替代。'],
  excludes: ['不包含：個人花費。', '不包含：住宿，如需協助訂購將另行報價。', '不包含：機票，如需協助訂購將另行報價。', '不包含：行程內不包含部分餐食，如需安排全程將另行報價。'],
}

const dailySchedule = [
  {
    title: '抵達大阪～接機',
    tour: ['接機：關西國際機場或大阪市區之車站'],
    diet: { breakfast: '', lunch: '', dinner: '' },
    hotel: '-'
  },
  {
    title: '奈良',
    tour: ['奈良長谷寺', '奈良公園'],
    diet: { breakfast: '', lunch: 'UNA 菊', dinner: '' },
    hotel: '二世谷東山度假村麗思卡爾頓隱世精品度假酒店 Higashiyama Niseko Village, a Ritz-Carlton Reserve'
  },
  {
    title: '美山町；天橋立',
    tour: ['美山町自然文化村', '天橋立搭乘纜車', '伊根灣遊船'],
    diet: { breakfast: '', lunch: '', dinner: '' },
    hotel: '二世谷東山度假村麗思卡爾頓隱世精品度假酒店 Higashiyama Niseko Village, a Ritz-Carlton Reserve'
  },
  {
    title: '平等院；伏見散策',
    tour: ['平等院伏見散策～', '月桂冠大倉酒廠', '伏見稻荷大社'],
    diet: { breakfast: '', lunch: '日式創意料理', dinner: '懷石料理＋藝妓表演' },
    hotel: '-'
  },
  {
    title: '返回溫暖的家～送機',
    tour: ['送機：關西國際機場或京都市區之車站'],
    diet: { breakfast: '', lunch: '為方便盡情購物 - 敬請自理', dinner: '飛機上或溫暖的家' },
    hotel: '-'
  },
];

const productImages = [
  {
    "src": "https://img.kkday.com/v2/image/get/w_5686,h_3791,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085751_owdpe/jpg",
    "alt": "酒店前台",
    "title": "酒店前台",
    "caption": "酒店前台 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://api.finedayclub.com/storage/products/21/WuKutetQPmGHmVKD3egBTZG6d7ITBVhAtDe2gFPc.jpg?20250424164534",
    "alt": "酒店前台",
    "title": "酒店前台",
    "caption": "酒店前台 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_9500,h_6334,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085624_BjtCe/jpg",
    "alt": "菊 行政三人房",
    "title": "菊 行政三人房",
    "caption": "光線柔和寬敞舒適的特別客房 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_6760,h_4507,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085707_2Q0js/jpg",
    "alt": "百合 豪華雙人房",
    "title": "百合 豪華雙人房",
    "caption": "客房隱私靜謐的空間享受 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_6960,h_4640,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085636_DHzn0/jpg",
    "alt": "櫻 豪華雙床房",
    "title": "櫻 豪華雙床房",
    "caption": "傳統道地的日本旅館體驗 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_8963,h_5976,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085442_GbJux/jpg",
    "alt": "餐廳入口",
    "title": "餐廳入口",
    "caption": "餐廳入口（圖片版權 / © Hoshino Resorts）。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_3500,h_2333,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019091156_ZvpBY/jpg",
    "alt": "Nippon Cuisine 料理",
    "title": "Nippon Cuisine 料理",
    "caption": "以日本飲食文化中心的魚類料理為主 (圖片版權 / © Hoshino Resorts)。"
  },
  {
    "src": "https://img.kkday.com/v2/image/get/w_7760,h_5173,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085739_sUYLe/jpg",
    "alt": "溫泉浴場",
    "title": "溫泉浴場",
    "caption": "酒店的室內溫泉從東京地下1500公尺處引水，能夠舒緩身心、提高活力 (圖片版權 / © Hoshino Resorts)。"
  }
];

const room = {
  title: "百合 - 豪華大床房",
  description: "房型位於度假村靠山的一側，兩層樓安排，一樓露台和窗外是蓊鬱茂密的樹林，二樓則是客房露台不僅能將山谷村落盡收眼底，還能遠眺「野鳥之森」，欣賞四季更迭美景。",
  images: [
    {
      "src": "https://img.kkday.com/v2/image/get/w_9500,h_6334,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085624_BjtCe/jpg",
      "alt": "菊 行政三人房",
      "title": "菊 行政三人房",
      "caption": "光線柔和寬敞舒適的特別客房 (圖片版權 / © Hoshino Resorts)。"
    },
    {
      "src": "https://img.kkday.com/v2/image/get/w_6760,h_4507,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085707_2Q0js/jpg",
      "alt": "百合 豪華雙人房",
      "title": "百合 豪華雙人房",
      "caption": "客房隱私靜謐的空間享受 (圖片版權 / © Hoshino Resorts)。"
    },
    {
      "src": "https://img.kkday.com/v2/image/get/w_6960,h_4640,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085636_DHzn0/jpg",
      "alt": "櫻 豪華雙床房",
      "title": "櫻 豪華雙床房",
      "caption": "傳統道地的日本旅館體驗 (圖片版權 / © Hoshino Resorts)。"
    },
  ]
}

const roomWithOneImage = {
  "title": "豪華小木屋",
  "description": "四張單人加大床、兩張沙發床｜至少2位、至多6位<br>景觀：林景、山景",
  "images": [
    {
      "src": "https://img.kkday.com/v2/image/get/w_6960,h_4640,c_fit,q_auto/s1.kkday.com/FINEDAY_CDN/20221019085636_DHzn0/jpg",
      "alt": "",
      "title": "",
      "caption": ""
    }
  ]
};

const roomWithoutImage = {
  title: "百合 - 豪華大床房",
  description: "房型位於度假村靠山的一側，兩層樓安排，一樓露台和窗外是蓊鬱茂密的樹林，二樓則是客房露台不僅能將山谷村落盡收眼底，還能遠眺「野鳥之森」，欣賞四季更迭美景。",
  images: []
}
</script>

<style lang="scss">
body {
  @apply bg-blueDark-95;
  font-family: "Noto Serif TC", serif;
  -webkit-font-smoothing: antialiased;
}

.card {
  @apply p-8 bg-white rounded-lg shadow-md;

  &__title {
    @apply text-h5 flex justify-between;

    code {
      @apply text-main-blue;
    }
  }
}
</style>
