<script setup>
const props = defineProps({
  title: {
    type: String,
    default: '标题',
  },
  subTitle: {
    type: String,
    default: 'Real-time monitoring',
  },
  showTitle: {
    type: Boolean,
    default: true,
  },
})
</script>

<template>
  <div class="box-wrap">
    <div v-if="props.showTitle" class="title-wrap">
      <div class="light" />
      <span class="iconfont icon-video-camera-full" />
      <div class="title gradient-title">
        {{ props.title }}
      </div>
      <div v-if="props.subTitle" class="sub-title">
        <span>/</span>
        {{ props.subTitle }}
      </div>
    </div>
    <div class="box-content">
      <slot class="flex-1">
        图表
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$primary-color : #4c82fe;

.box-wrap {
  padding: 10px;
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  .title-wrap {
    display: flex;
    align-items: baseline;
    border-radius: 8px;
    padding: 0px 14px;
    font-size: 24px;
    background-image: linear-gradient(100deg, #13324f 0%, #17324c36 70%, transparent 100%);
    vertical-align: baseline;
    color: #819bba;
    position: relative;
    overflow: hidden;

    .light {
      position: absolute;
      width: 680px;
      height: 137px;
      background-image: url('../../assets/images/light/light_1.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      transform: scale(0.4);
      bottom: -72px;
      left: -250px
    }

    .iconfont {
      margin-right: 10px;
      font-size: 24px;
      background: linear-gradient(180deg,
          #f3f3f3 40%,
          $primary-color 90%,
          $primary-color 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .sub-title {
      font-size: 15px;
      font-style: italic;

      &>span {
        display: inline-block;
        margin: 0 2px 0 10px;

      }
    }
  }

  .box-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    padding: 10px;

    &::before {
      position: absolute;
      width: 8px;
      height: 8px;
      content: "";
      border-bottom: 2px solid $primary-color;
      bottom: 0;
    }

    &::before {
      border-left: 2px solid $primary-color;
      left: 0;
    }

    &::after {
      position: absolute;
      width: 8px;
      height: 8px;
      content: "";
      border-bottom: 2px solid $primary-color;
      bottom: 0;
    }

    &::after {
      border-right: 2px solid $primary-color;
      right: 0;
    }
  }
}
</style>
