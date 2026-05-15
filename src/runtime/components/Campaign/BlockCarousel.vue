<template>
  <UCarousel
    class="fdc-campaign__block-carousel"
    ref="carouselRef"
    :items="content"
    :ui="uiConfig"
    indicators
  >
    <template #default="{ item }">
      <img
        :src="item.src"
        :alt="item.alt"
        :title="item.title"
        class="w-full h-[480px] tablet:h-[360px] object-cover"
        draggable="false"
      />
    </template>

    <template #indicator="{ onClick, page, active }">
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="cursor-pointer"
        :class="active ? 'text-main-blue-light': 'text-border-30' "
        @click="onClick(page)"
      >
        <path d="M1.82095 5.82095C1.95937 5.82095 2.09418 5.80551 2.22375 5.77625C2.19449 5.90582 2.17905 6.04063 2.17905 6.17905C2.17905 7.18473 2.99432 8 4 8C5.00568 8 5.82095 7.18473 5.82095 6.17905C5.82095 6.04063 5.80551 5.90582 5.77625 5.77625C5.90582 5.80551 6.04063 5.82095 6.17905 5.82095C7.18473 5.82095 8 5.00568 8 4C8 2.99432 7.18473 2.17905 6.17905 2.17905C6.04063 2.17905 5.90582 2.19449 5.77625 2.22375C5.80551 2.09418 5.82095 1.95937 5.82095 1.82095C5.82095 0.815268 5.00568 0 4 0C2.99432 0 2.17905 0.815268 2.17905 1.82095C2.17905 1.95937 2.19449 2.09418 2.22375 2.22375C2.09418 2.19449 1.95937 2.17905 1.82095 2.17905C0.815268 2.17905 0 2.99432 0 4C0 5.00568 0.815268 5.82095 1.82095 5.82095Z" fill="currentColor"/>
      </svg>
    </template>
  </UCarousel>
</template>

<script setup>
import { ref, onMounted } from '#imports';

const props = defineProps({
  content: {
    type: Array,
    required: true,
  },
  seconds: {
    type: Number,
    default: 3000,
  },
});

const uiConfig = {
  item: 'basis-1/3 tablet:basis-full',
  container: 'gap-x-8 table:gap-x-0',
  indicators: {
    wrapper: 'relative bottom-0 mt-6',
  },
};

const carouselRef = ref();
onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) {
      return;
    }

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, props.seconds);
})
</script>

<style lang="scss" scoped>
.fdc-fdc-campaign__block-carousel {
  @apply mx-3;

  &__image {
    :deep(img) {
      @apply aspect-[16/9] tablet:aspect-[4/3];
    }
  }

  &__thumbnail {
    @apply h-20 rounded-lg object-cover cursor-pointer opacity-60 aspect-[16/9] tablet:aspect-[4/3]
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
