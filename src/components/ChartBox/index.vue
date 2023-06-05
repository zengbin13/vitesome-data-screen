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
    <slot>
      <div class="flex-1 border border-white">
        图表
      </div>
    </slot>
  </div>
</template>

<style lang="scss" scoped>
.box-wrap {
  padding: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;

  .title {
    background-color: #17324c;
    color: #e2f4fd;
  }
}
</style>
