<template>
  <div class="fdc-section-title">
    <span class="fdc-section-title__title">{{ title }}</span>
    <span v-if="subtitle" class="fdc-section-title__subtitle">
      {{ subtitle }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.fdc-section-title {
  @apply flex items-baseline space-x-2;

  &__title {
    @apply text-label-xl text-main-blue font-semibold leading-none;
  }

  &__subtitle {
    @apply text-en-s font-corm text-content-50 uppercase;
  }
}
</style>
