<script setup>
const props = defineProps({
  // 设计稿的宽度
  width: {
    type: Number,
    default: 1920,
  },
  // 设计稿的高度
  height: {
    type: Number,
    default: 1080,
  },
  autoScale: {
    type: Boolean,
    default: true,
  },
  containerStyle: {
    type: Object,
    default: () => {},
  },
  contentStyle: {
    type: Object,
    default: () => {},
  },
  backgroundImage: {
    type: String,
    default: '',
  },
})

const { width, height, containerStyle, backgroundImage, autoScale } = toRefs(props)

const dataScreenRef = ref(null)
const dataScreenContainerRef = ref(null)

function handleScreenAuto() {
  const designDraftWidth = width.value
  const designDraftHeight = height.value
  // 根据屏幕的变化适配的比例
  const scale = document.documentElement.clientWidth / document.documentElement.clientHeight < designDraftWidth / designDraftHeight
    ? (document.documentElement.clientWidth / designDraftWidth)
    : (document.documentElement.clientHeight / designDraftHeight)
  // 缩放比例
  const element = dataScreenRef.value
  element.style.width = `${width.value}px`
  element.style.height = `${height.value}px`
  element.style.transform = `scale(${autoScale.value ? scale : 1}) translate(-50%, -50%)`
}

onMounted(() => {
  handleScreenAuto()
  window.onresize = () => handleScreenAuto()
})

onBeforeUnmount(() => {
  window.onresize = null
})
</script>

<template>
  <div
    ref="dataScreenContainerRef" class="screen-container" :style="{
      ...containerStyle,
      backgroundImage: `url(${backgroundImage})`,
    }"
  >
    <div
      ref="dataScreenRef" class="screen" :style="{
        ...contentStyle,
      }"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.screen-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  // background: url("~/assets/images/background_pic.png") no-repeat;
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: 100% 100%;
  background-size: cover;

  .screen {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 999;
    overflow: hidden;
    // transition: all 0.3s;
    transform-origin: left top;
  }
}
</style>
