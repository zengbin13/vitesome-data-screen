<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
})
</script>

<template>
  <div class="box-wrap">
    <div class="title">
      {{ props.title }}
    </div>
    <slot>图表</slot>
  </div>
</template>

<style lang="scss" scoped>
.box-wrap {
  padding: 10px;
  flex: 1
}
.title {
  background-color: #17324c;
  color: #e2f4fd;
}
</style>
