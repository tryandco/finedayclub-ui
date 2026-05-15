<template>
  <div class="fdc-campaign__block-text-image">
    <FdcCampaignBlockParagraph
      class="!text-left px-6 tablet:px-0"
      :content="{ text }"
    >
    </FdcCampaignBlockParagraph>

    <img
      class="w-full h-auto object-cover"
      :class="{ '-order-1' : align === 'right' }"
      :src="imageUrl"
    />
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

const imageUrl = computed(() => {
  return props.content.image?.src || null;
});
const align = computed(() => {
  return props.content.align || 'left';
});
const text = computed(() => {
  return props.content.text || '';
});
</script>

<style lang="scss" scoped>
.fdc-campaign__block-text-image {
  @apply grid grid-cols-2 tablet:grid-cols-1 gap-x-8 gap-y-6 items-center;
}
</style>
