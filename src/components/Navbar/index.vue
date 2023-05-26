<script setup>
const navbarList = ref([
  {
    title: '首页',
    path: '/',
  },
  {
    title: '云仓管理',
    path: '/warehouse',
  },
  {
    title: '溯源管理',
    path: '/trace',
  },
  {
    title: '认养管理',
    path: '/adopt',
  },
  {
    title: '载禾平台管理',
    path: '/platform',
  },
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
        智慧大屏
      </div>
    </div>
    <ul class="left">
      <li v-for="(item, index) in navbarList" :key="index" class="nav" :class="{ 'nav-active': activeIndex === index }" @click="go(item.path)">
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
  border: 1px solid #f05252;
  color: #fff;
  display: flex;
  justify-content: center;
  position: relative;

  .title-wrap {
    // width: 80%;
    // border: 1px solid #7cf052;

    .title {
      text-align: center;
      font-size: 30px;
      line-height: 74px;
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
