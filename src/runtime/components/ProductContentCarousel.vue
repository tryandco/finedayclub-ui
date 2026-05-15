<template>
  <UCarousel
    class="fdc-product-content__carousel"
    ref="carouselRef"
    :items="images"
    :ui="uiConfig"
    arrows
    indicators
  >
    <template #default="{ item }">
      <FdcProductContentImage
        :src="item.src"
        :alt="item.alt"
        :title="item.title"
        :caption="item.caption"
        class="fdc-product-content__carousel__image"
      />
    </template>

    <template #indicator="{ onClick, page, active }">
      <img
        :src="images[page - 1]?.src"
        :alt="images[page - 1]?.alt"
        class="fdc-product-content__carousel__thumbnail"
        :class="{ 'fdc-product-content__carousel__thumbnail--active': active }"
        @click="onClick(page)"
      />
    </template>

    <template #prev="{ onClick, disabled }">
      <button class="fdc-product-content__carousel__arrow" :disabled="disabled" @click="navigate(onClick)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5 12C21.5 12.0995 21.4605 12.1949 21.3902 12.2652C21.3198 12.3355 21.2245 12.375 21.125 12.375H3.78092L6.8901 15.5C6.96047 15.5704 7 15.6658 7 15.7653C7 15.8648 6.96047 15.9603 6.8901 16.0306C6.81974 16.101 6.7243 16.1405 6.62479 16.1405C6.52528 16.1405 6.42984 16.101 6.35948 16.0306L2.60998 12.2653C2.57512 12.2305 2.54746 12.1892 2.52859 12.1436C2.50971 12.0981 2.5 12.0493 2.5 12C2.5 11.9507 2.50971 11.9019 2.52859 11.8564C2.54746 11.8109 2.57512 11.7695 2.60998 11.7347L6.35948 7.96939C6.39432 7.93455 6.43568 7.90691 6.4812 7.88806C6.52673 7.8692 6.57552 7.8595 6.62479 7.8595C6.67406 7.8595 6.72286 7.8692 6.76838 7.88806C6.8139 7.90691 6.85526 7.93455 6.8901 7.96939C6.92495 8.00423 6.95258 8.0456 6.97144 8.09112C6.99029 8.13664 7 8.18543 7 8.23471C7 8.28398 6.99029 8.33277 6.97144 8.37829C6.95258 8.42381 6.92495 8.46518 6.8901 8.50002L3.78092 11.625H21.125C21.2245 11.625 21.3198 11.6645 21.3902 11.7349C21.4605 11.8052 21.5 11.9006 21.5 12Z" fill="currentColor"/>
        </svg>
      </button>
    </template>

    <template #next="{ onClick, disabled }">
      <button class="fdc-product-content__carousel__arrow" :disabled="disabled" @click="navigate(onClick)">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.5 12C2.5 12.0995 2.53951 12.1949 2.60983 12.2652C2.68016 12.3355 2.77554 12.375 2.875 12.375H20.2191L17.1099 15.5C17.0395 15.5704 17 15.6658 17 15.7653C17 15.8648 17.0395 15.9603 17.1099 16.0306C17.1803 16.101 17.2757 16.1405 17.3752 16.1405C17.4747 16.1405 17.5702 16.101 17.6405 16.0306L21.39 12.2653C21.4249 12.2305 21.4525 12.1892 21.4714 12.1436C21.4903 12.0981 21.5 12.0493 21.5 12C21.5 11.9507 21.4903 11.9019 21.4714 11.8564C21.4525 11.8109 21.4249 11.7695 21.39 11.7347L17.6405 7.96939C17.6057 7.93455 17.5643 7.90691 17.5188 7.88806C17.4733 7.8692 17.4245 7.8595 17.3752 7.8595C17.3259 7.8595 17.2771 7.8692 17.2316 7.88806C17.1861 7.90691 17.1447 7.93455 17.1099 7.96939C17.0751 8.00423 17.0474 8.0456 17.0286 8.09112C17.0097 8.13664 17 8.18543 17 8.23471C17 8.28398 17.0097 8.33277 17.0286 8.37829C17.0474 8.42381 17.0751 8.46518 17.1099 8.50002L20.2191 11.625H2.875C2.77554 11.625 2.68016 11.6645 2.60983 11.7349C2.53951 11.8052 2.5 11.9006 2.5 12Z" fill="currentColor"/>
        </svg>
      </button>
    </template>
  </UCarousel>
</template>

<script setup>
import { ref, nextTick } from '#imports';

defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const uiConfig = {
  item: 'basis-full',
  container: 'rounded-lg',
  indicators: {
    wrapper: 'flex items-center justify-start overflow-x-scroll mx-[72px] gap-3 relative bottom-0 mt-4',
  },
  arrows: {
    wrapper: 'absolute bottom-3 w-full px-3',
  },
};

const carouselRef = ref();

const navigate = (callback) => {
  callback();
  nextTick(() => {
    carouselRef.value?.$el.querySelector('.fdc-product-content__carousel__thumbnail--active')?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  });
};
</script>

<style lang="scss" scoped>
.fdc-product-content__carousel {
  @apply mx-3;

  &__image {
    :deep(img) {
      @apply aspect-[16/9] tablet:aspect-[4/3];
    }
  }

  &__thumbnail {
    @apply h-20 rounded-lg object-cover cursor-pointer opacity-60 aspect-[2/1] tablet:aspect-[4/3]
           transition-opacity duration-200 ease-in-out;

    &:hover, &--active {
      @apply opacity-100;
    }
  }

  &__arrow {
    @apply w-12 h-12 flex items-center justify-center border border-main-brown rounded-full cursor-pointer text-content-80;

    &:hover {
      @apply bg-main-brown text-white;
    }
  }
}
</style>
