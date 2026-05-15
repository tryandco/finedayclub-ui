<template>
  <div class="fdc-campaign__block__product-list">
    <div
      class="fdc-campaign__block__product-list__grid"
      :class="displayedProducts.length < 4 ? 'fdc-campaign__block__product-list__grid--flex' : 'fdc-campaign__block__product-list__grid--grid'"
    >
      <FdcProductThumbnail
        v-for="product in displayedProducts"
        :key="product.id"
        :product="product"
        class="basis-[280px]"
      />
    </div>

    <FdcCampaignBlockParagraph v-if="canLoadMore" class="mt-8">
      <a
        href="#"
        class="fdc-button"
        @click.prevent="loadMore"
      >
        載入更多
      </a>
    </FdcCampaignBlockParagraph>
  </div>
</template>

<script setup>
import { computed, inject, ref } from '#imports';

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const allProducts = inject('products', []);
const currentPage = ref(1);
const pageSize = 12;

const products = computed(() => {
  let ids = props.content.product_ids || [];
  return ids.map((id) => {
    return allProducts.find((product) => product.id === id);
  }).filter(product => product);
});

const displayedProducts = computed(() => {
  return products.value.slice(0, currentPage.value * pageSize);
});

const canLoadMore = computed(() => {
  return products.value.length > currentPage.value * pageSize;
});

const loadMore = () => {
  currentPage.value++;
};
</script>

<style lang="scss" scoped>
.fdc-campaign__block__product-list {
  &__grid {
    &--grid {
      @apply grid grid-cols-4 gap-8
             tablet:grid-cols-2 tablet:gap-6
             xs:grid-cols-1;
    }

    &--flex {
      @apply flex gap-8 justify-center
             tablet:grid tablet:grid-cols-2 tablet:gap-6
             xs:grid-cols-1;
    }
  }
}
</style>
