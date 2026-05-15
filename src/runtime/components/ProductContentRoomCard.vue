<template>
  <div class="fdc-product-room-card">
    <div v-if="room.images?.length > 0" class="fdc-product-room-card__images">
      <UCarousel
        class="fdc-product-content__carousel"
        ref="carouselRef"
        :items="room.images"
        :ui="uiConfig"
        indicators
      >
        <template #default="{ item }">
          <img
            :src="item.src"
            :alt="item.alt"
            :title="item.title"
            @click="isOpen = true"
          />
        </template>
        <template #indicator="{ onClick, page, active }">
          <svg :class="active ? 'text-main-blue-light' : 'text-border-30'" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.36571 4.36571C1.46953 4.36571 1.57063 4.35413 1.66781 4.33219C1.64587 4.42937 1.63429 4.53047 1.63429 4.63429C1.63429 5.38855 2.24574 6 3 6C3.75426 6 4.36571 5.38855 4.36571 4.63429C4.36571 4.53047 4.35413 4.42937 4.33219 4.33219C4.42937 4.35413 4.53047 4.36571 4.63429 4.36571C5.38855 4.36571 6 3.75426 6 3C6 2.24574 5.38855 1.63429 4.63429 1.63429C4.53047 1.63429 4.42937 1.64587 4.33219 1.66781C4.35413 1.57063 4.36571 1.46953 4.36571 1.36571C4.36571 0.611451 3.75426 0 3 0C2.24574 0 1.63429 0.611451 1.63429 1.36571C1.63429 1.46953 1.64587 1.57063 1.66781 1.66781C1.57063 1.64587 1.46953 1.63429 1.36571 1.63429C0.611451 1.63429 0 2.24574 0 3C0 3.75426 0.611451 4.36571 1.36571 4.36571Z" fill="currentColor"/>
          </svg>
        </template>
      </UCarousel>
    </div>
    <div class="fdc-product-room-card__content">
      <h6>{{ room.title }}</h6>
      <div class="fdc-product-room-card__content__description">
        {{ room.description }}
      </div>
      <div class="fdc-product-room-card__content__caption">
        {{ caption }}
      </div>
    </div>
    <UModal
      v-model="isOpen"
      :ui="modalUiConfig"
    >
      <div class="p-4">
        <UCarousel
          class="fdc-product-room__carousel"
          ref="modalCarouselRef"
          :items="room.images"
          :ui="uiConfig"
          :prev-button="{ icon: 'i-heroicons-chevron-left-20-solid', class: '-start-12' }"
          :next-button="{ icon: 'i-heroicons-chevron-right-20-solid', class: '-end-12' }"
          indicators
          arrows
        >
          <template #default="{ item }">
            <img
              :src="item.src"
              :alt="item.alt"
              :title="item.title"
            />
          </template>

          <template #indicator="{ onClick, page, active }">
            <svg :class="active ? 'text-main-blue-light' : 'text-border-30'" width="8" height="8" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.36571 4.36571C1.46953 4.36571 1.57063 4.35413 1.66781 4.33219C1.64587 4.42937 1.63429 4.53047 1.63429 4.63429C1.63429 5.38855 2.24574 6 3 6C3.75426 6 4.36571 5.38855 4.36571 4.63429C4.36571 4.53047 4.35413 4.42937 4.33219 4.33219C4.42937 4.35413 4.53047 4.36571 4.63429 4.36571C5.38855 4.36571 6 3.75426 6 3C6 2.24574 5.38855 1.63429 4.63429 1.63429C4.53047 1.63429 4.42937 1.64587 4.33219 1.66781C4.35413 1.57063 4.36571 1.46953 4.36571 1.36571C4.36571 0.611451 3.75426 0 3 0C2.24574 0 1.63429 0.611451 1.63429 1.36571C1.63429 1.46953 1.64587 1.57063 1.66781 1.66781C1.57063 1.64587 1.46953 1.63429 1.36571 1.63429C0.611451 1.63429 0 2.24574 0 3C0 3.75426 0.611451 4.36571 1.36571 4.36571Z" fill="currentColor"/>
            </svg>
          </template>
        </UCarousel>
      </div>
    </UModal>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from '#imports';

const props = defineProps({
  room: {
    type: Object,
    required: true,
  },
  seconds: {
    type: Number,
    default: 3000,
  },
});

const uiConfig = {
  item: 'basis-full',
  indicators: {
    wrapper: 'gap-1.5',
  },
};

const modalUiConfig = {
  width: 'w-full sm:max-w-3xl',
  background: 'bg-transparent dark:bg-transparent',
  shadow: 'shadow-none',
  padding: 'p-0',
};

const isOpen = ref(false);
const carouselRef = ref(null);
const caption = computed(() => {
  if (!carouselRef.value) {
    return null;
  }

  const image = props.room.images[carouselRef.value?.page - 1];
  if (!image) {
    return null;
  }

  return image.caption || image.title;
});

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
@mixin text-truncate-multiline($lines: 2) {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: $lines;
}

.fdc-product-room-card {
  @apply flex border border-border-30 rounded-lg overflow-hidden
         tablet:flex-col;

  @container (max-width: 600px) {
    @apply flex-col;
  }

  &__images {
    @apply basis-1/3 min-w-[280px];

    img {
      @apply object-cover block max-w-full h-auto aspect-[4/3] cursor-zoom-in;
    }
  }

  &__content {
    @apply basis-2/3 flex flex-col p-4 bg-white;

    h6 {
      @apply text-label-m font-semibold text-content-80;
    }

    &__description {
      @apply text-p-m text-content-80 mt-2 whitespace-pre-line;
      @container (max-width: 840px) {
        @include text-truncate-multiline(3);
      }
    }

    &__caption {
      @apply text-label-xs text-content-50 mt-auto text-left
             tablet:order-[-1] tablet:mb-2;
    }
  }
}
</style>
