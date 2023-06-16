<script lang="ts" setup>
import gsap from 'gsap'

const props = withDefaults(defineProps<Props>(), {
  data: () => [],
  rowHeight: 0,
  rowNum: 5,
  gap: 5,
})

interface Props {
  data: Array<Record<string, any>>
  rowHeight?: number
  rowNum?: number
  gap?: number
}
const { data, rowHeight, rowNum, gap } = toRefs(props)

// 获取行高度
const scrollRef = ref<HTMLElement>()
const topRef = ref<HTMLElement>()
const bottomRef = ref<HTMLElement>()
const lineHeight = ref(0)
function getLineHeight() {
  if (rowHeight.value) {
    lineHeight.value = rowHeight.value
  }
  else {
    nextTick(() => {
      lineHeight.value = scrollRef.value!.offsetHeight / rowNum.value
    })
  }
}
// 创建动画函数
const timeLine = gsap.timeline()
const scrollIndex = ref(0)
function animateUp() {
  if (!scrollRef.value) {
    timeLine.to(scrollRef.value!, {
      scrollTop: `+=${lineHeight.value}`,
      duration: 0.8,
      onComplete() {
        scrollIndex.value = (scrollIndex.value + 1) % data.value.length
        if (scrollIndex.value === 0) {
          gsap.to(scrollRef.value!, {
            scrollTop: 0,
            duration: 0,
          })
        }
      },
    })
  }
}
function startAnimate() {
  setInterval(() => {
    animateUp()
  }, 1200)
  // timeLine.eventCallback('onComplete', () => {

  // })
}

onMounted(() => {
  getLineHeight()
  startAnimate()
})
</script>

<template>
  <div class="scroll-wrap">
    <div class="header" @click="animateUp">
      <slot name="header">
        行高 :{{ lineHeight }}
        滚动索引 :{{ scrollIndex }}
      </slot>
    </div>
    <div ref="scrollRef" class="content">
      <ul ref="topRef" class="scroll">
        <li
          v-for="(row, index) in data" :id="`row${index + 1}`" :key="index" name="row" class="row"
          :style="{ height: `${lineHeight - gap}px`, marginBottom: `${gap}px` }"
        >
          <slot name="row" :row="row" :index="index" />
        </li>
      </ul>
      <ul ref="bottomRef" class="scroll">
        <li
          v-for="(row, index) in data" :id="`row${index + 1}`" :key="index" name="row" class="row"
          :style="{ height: `${lineHeight - gap}px`, marginBottom: `${gap}px` }"
        >
          <slot name="row" :row="row" :index="index" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrap {
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  flex-direction: column;
  overflow: auto;
  scrollbar-width: none;
}

.scroll {
  overflow: auto;
  flex: 1;
}

/* 隐藏元素的滚动条 */
.content::-webkit-scrollbar {
  display: none;
}
</style>
