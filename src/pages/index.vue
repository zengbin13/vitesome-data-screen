<script setup lang="ts">
import backgroundImage from '~/assets/images/background_pic.png'

const backgroundPic = ref(backgroundImage)
</script>

<template>
  <div>
    <ScaleScreen :background-image="backgroundPic" :width="1920" :height="1080" :auto-scale="true">
      <div class="content">
        <Navbar />
        <RouterView v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </RouterView>
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
}
</style>
