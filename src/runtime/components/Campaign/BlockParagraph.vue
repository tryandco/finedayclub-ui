<template>
  <div class="fdc-campaign__block-paragraph" v-if="text" v-html="text" />
  <div class="fdc-campaign__block-paragraph" v-else>
    <slot />
  </div>
</template>

<script setup>
import { computed } from '#imports';

const props = defineProps({
  content: {
    type: Object,
    required: true,
  },
});

const text = computed(() => props.content?.text);
</script>

<style lang="scss" scoped>
.fdc-campaign__block-paragraph {
  color: var(--fdc-campaign-font-color);

  &:has(> a.fdc-button:last-child:nth-child(1)) {
    text-align: center;
  }

  :deep(h3) {
    @apply text-h5 text-main-brown font-semibold mb-4 text-center
           xs:text-label-xl;
  }

  :deep(h4) {
    @apply text-label-l font-semibold mb-2 text-center;
  }

  :deep(a) {
    @apply text-label-m text-main-brown font-semibold underline
           hover:no-underline;
  }

  :deep(a.fdc-button) {
    @apply text-button-m no-underline bg-main-blue text-white w-fit rounded-[48px] duration-300 inline-block py-3 px-8;

    &:hover {
      @apply bg-main-blue-light;
    }
  }

  :deep(p) {
    @apply text-p-m mb-5;
    word-break: break-word;
  }

  :deep(ol) {
    @apply mb-6;

    li {
      @apply list-decimal text-p-m ml-5;

      >p {
        @apply inline;
      }
    }
  }

  :deep(ul) {
    @apply mb-6;

    li {
      @apply text-p-m ml-3;
      list-style-type: "•  ";

      >p {
        @apply inline;
      }
    }
  }
}
</style>
