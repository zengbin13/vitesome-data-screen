<script setup lang="ts">
import backgroundImage from '~/assets/images/background_pic.png'

const backgroundPic = ref(backgroundImage)
</script>

<template>
  <div>
    <ScaleScreen :background-image="backgroundPic" :width="1920" :height="1080" :auto-scale="true">
      <div class="content">
        <Navbar />
        <RouterView />
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  color: #fff;
  border: 1px solid #26d21d;
  display: flex;
  flex-direction: column;
}
</style>
