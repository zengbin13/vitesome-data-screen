<script setup>
const title = ref('互联网设备可视化平台')
const navbarList = ref([
  {
    title: '首页',
    path: '/',
  },
  {
    title: '云仓管理',
    path: '/warehouse',
  },
  // {
  //   title: '溯源管理',
  //   path: '/trace',
  // },
  // {
  //   title: '认养管理',
  //   path: '/adopt',
  // },
  // {
  //   title: '载禾平台管理',
  //   path: '/platform',
  // },
])

const route = useRoute()
const router = useRouter()
const go = path => router.push(path)
const activeIndex = computed(() => {
  return navbarList.value.findIndex(item => item.path === route.fullPath)
})
</script>

<template>
  <div class="navbar">
    <div class="title-wrap">
      <div class="title">
        {{ title }}
      </div>
    </div>
    <ul class="left">
      <li
        v-for="(item, index) in navbarList" :key="index" class="nav" :class="{ 'nav-active': activeIndex === index }"
        @click="go(item.path)"
      >
        {{ item.title }}
      </li>
    </ul>
    <div class="right">
      个人信息
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 74px;
  // border: 1px solid #f05252;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;

  .title-wrap {
    width: 80%;
    // border: 1px solid #7cf052;

    .title {
      text-align: center;
      font-size: 38px;
      font-weight: 900;
      letter-spacing: 6px;
      line-height: 74px;
      background: linear-gradient(92deg,
          #0072ff 0%,
          #00eaff 48.8525390625%,
          #01aaff 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .left {
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;

    .nav {
      cursor: pointer;
      margin-right: 20px;
    }

    .nav-active {
      color: #f05252;
    }
  }

  .right {
    position: absolute;
    right: 0;
    bottom: 0;
  }
}
</style>
