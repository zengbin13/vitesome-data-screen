<script setup lang="ts">
import backgroundImage from '~/assets/images/background_pic.png'

const backgroundPic = ref(backgroundImage)
</script>

<template>
  <div>
    <ScaleScreen :background-image="backgroundPic">
      <div class="contant">
        xxxx
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;

  }
</style>
