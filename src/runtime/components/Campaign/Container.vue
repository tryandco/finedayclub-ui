<template>
  <main
    class="fdc-campaign"
    :class="{ 'fdc-campaign-dark': campaign.theme == 'dark' }"
    :style="{ '--fdc-campaign-font-color': campaign.theme == 'light' ? '#44403C' : '#F5F5F4' }"
  >
    <section class="fdc-campaign__hero" :style="{ backgroundImage: `url(${campaign.banner_url})` }">
      <div class="fdc-campaign__hero__content">
        <h1 class="text-h3 text-white selection:bg-blueDark-70 xs:text-h5">{{ campaign.title }}</h1>
        <h2 class="text-h6 text-white selection:bg-blueDark-70 mt-4 xs:text-label-l xs:mt-2">{{ campaign.subtitle }}</h2>
      </div>
    </section>
    <component
      v-for="(block, index) in blocks"
      :key="`block-${index}`"
      :is="block.component"
      :content="block.content"
      :class="block.class"
    />
  </main>
</template>

<script setup>
import { computed, provide } from '#imports';

const props = defineProps({
  campaign: {
    type: Object,
    required: true
  }
});

provide('products', props.campaign.products);

const componentMappings = {
  text: 'FdcCampaignBlockParagraph',
  carousel: 'FdcCampaignBlockCarousel',
  products: 'FdcCampaignBlockProductList',
  'image-text': 'FdcCampaignBlockImageText',
  divider: 'FdcCampaignBlockDivider'
};

const blocks = computed(() => {
  return props.campaign.blocks.map(block => {
    const component = componentMappings[block.type];
    if (!component) {
      console.warn(`Component for block type "${block.type}" not found.`, block);
      return null;
    }

    return {
      ...block,
      component,
      class: block.type == 'carousel' ? '' : 'fdc-campaign__block-max-width',
    };
  }).filter(block => block);
});
</script>

<style scoped lang="scss">
.fdc-campaign {
  @apply flex flex-col items-center justify-center gap-20 pb-30 bg-bg-5 transition-colors duration-150 lining-nums
         xs:gap-10;
  font-family: "Noto Serif TC", serif;
  -webkit-font-smoothing: antialiased;

  &-dark {
    @apply bg-blueDark-95;
  }

  &__hero {
    @apply w-full aspect-[1440/600] bg-cover bg-center flex items-center justify-center text-center px-6
           xs:aspect-[1/1] xs:pt-20 xs:pb-6;
  }

  h1, h2 {
    font-family: inherit;
  }

  :deep(.fdc-campaign__block-max-width) {
    @apply mx-auto px-28 w-full max-w-[1600px] tablet:px-10 xs:px-4;
  }
}
</style>
