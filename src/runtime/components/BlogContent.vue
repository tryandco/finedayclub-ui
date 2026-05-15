<template>
  <div class="fdc-blog-content">
    <!-- Table of Contents -->
    <div v-if="props.toc && tocItems.length > 0" class="fdc-blog-content__toc">
      <ul>
        <li
          v-for="item in tocItems"
          :key="item.id"
          :class="[`toc-${item.level}`]"
        >
          <a :href="`#${item.id}`" @click="scrollToHeading($event, item.id)">
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>

    <!-- Content -->
    <div ref="contentRef">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from '#imports';

const props = defineProps({
  toc: {
    type: Boolean,
    default: false,
  }
});
const contentRef = ref();
const tocItems = ref([]);

const generateToc = () => {
  if (!props.toc || !contentRef.value) return

  const headings = contentRef.value.querySelectorAll('h2, h3')
  const items = []

  headings.forEach((heading, index) => {
    const text = heading.textContent?.trim() || ''
    const level = heading.tagName.toLowerCase()

    let id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim() || `heading-${index + 1}`

    // 确保 ID 唯一
    let uniqueId = id
    let counter = 1
    while (items.some(item => item.id === uniqueId)) {
      uniqueId = `${id}-${counter++}`
    }

    heading.id = uniqueId
    items.push({ id: uniqueId, text, level })
  })

  tocItems.value = items
}

const scrollToHeading = (event, id) => {
  event.preventDefault()
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

let observer

onMounted(() => {
  if (!props.toc) return

  nextTick(() => {
    generateToc()

    if (contentRef.value) {
      observer = new MutationObserver(() => nextTick(generateToc))
      observer.observe(contentRef.value, { childList: true, subtree: true, characterData: true })
    }
  })
})

onUnmounted(() => observer?.disconnect())
</script>

<style lang="scss" scoped>
.fdc-blog-content {
  font-family: "Noto Serif TC", serif;
  -webkit-font-smoothing: antialiased;
  container-type: inline-size;
  word-break: break-all;

  &__toc {
    @apply p-4 my-14 border-l-[3px] border-l-border-30
           tablet:my-12;

    ul {
      @apply m-0 p-0;

      li {
        a {
          @apply text-content-80 no-underline hover:underline;
        }

        &.toc-h2 {
          a {
            @apply text-p-m font-semibold;
          }
        }

        &.toc-h3 {
          @apply ml-10 tablet:ml-6;
          a {
            @apply text-p-s font-normal;
          }
        }
      }
    }
  }

  :deep(h2) {
    @apply text-h6 text-main-blue font-semibold mb-2;
  }

  :deep(h3) {
    @apply text-label-l text-content-80 font-semibold mb-2;
  }

  :deep(a) {
    @apply text-label-m text-main-blue font-semibold underline
           hover:no-underline hover:text-main-blue-light;
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
      list-style-type: "•";

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
