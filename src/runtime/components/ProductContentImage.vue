<template>
  <figure class="fdc-product-content__image">
    <img
      :src="src"
      :alt="alt"
      :title="title"
      draggable="false"
    >
      <figcaption v-if="caption">{{ caption }}</figcaption>
    </figure>
</template>
<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
  },
  title: {
    type: String,
    required: false,
  },
  caption: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.fdc-product-content__image {
  @apply mx-3;

  img {
    @apply object-cover rounded-lg block max-w-full h-auto;
  }

  figcaption {
    @apply text-p-s text-content-50 mt-2;

    &:before {
      @apply content-["▲"] mr-1 inline;
    }
  }
}
</style>
