<template>
  <div class="fdc-product-content">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.fdc-product-content {
  font-family: "Noto Serif TC", serif;
  -webkit-font-smoothing: antialiased;
  container-type: inline-size;

  :deep(h3) {
    @apply text-label-l text-content-80 font-semibold underline mb-5;
    text-decoration-color: #AA8852;
    text-underline-offset: 6px;
  }

  :deep(h4) {
    @apply text-label-m text-content-80 font-semibold mb-2;
  }

  :deep(a) {
    @apply text-label-m text-main-brown font-semibold underline
           hover:no-underline;
  }

  :deep(p) {
    @apply text-p-m text-content-80 mb-5 min-h-8;
  }

  :deep(ol) {
    li {
      @apply list-decimal text-p-m text-content-80 ml-5;

      >p {
        @apply inline;
      }
    }
  }

  :deep(ul) {
    li {
      @apply text-p-m text-content-80 ml-3;
      list-style-type: "•  ";

      >p {
        @apply inline;
      }
    }
  }

  :deep(.fdc-section-title) {
    @apply mb-6;
  }
}
</style>
