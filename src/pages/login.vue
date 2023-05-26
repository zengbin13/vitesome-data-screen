<script setup>
import backgroundImage from '~/assets/images/background_pic.png'
import { loginApi } from '~/utils/apis'

const backgroundPic = ref(backgroundImage)

const formData = ref({
  farm: '19100000001',
  henhouse: '666888',
})

const router = useRouter()
async function onSubmit() {
  try {
    const data = await loginApi(formData.value)
    // 存储token
    useStorage('token', data.token)
    router.push('/')
  }
  catch (error) {

  }
}
</script>

<template>
  <div>
    <ScaleScreen :background-image="backgroundPic" :auto-scale="false">
      <div class="content">
        <div class="logo-wrap">
          <img src="../assets/images/logo.png" alt="" class="logo">
        </div>
        <div class="login-wrap">
          <div class="login-box">
            <h2> 智慧养殖大数据平台</h2>
            <h4> Smart Farm Monitoring Screen</h4>
            <div class="input-item">
              <label for="farm">
                农场编号:
              </label>
              <input id="farm" v-model="formData.farm" type="text">
            </div>
            <div class="input-item">
              <label for="henhouse">
                鸡舍编号:
              </label>
              <input id="henhouse" v-model="formData.henhouse" type="text">
            </div>
            <button class="login-button" @click="onSubmit">
              登录
            </button>
          </div>
        </div>
      </div>
    </ScaleScreen>
  </div>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  flex-direction: column;

  .logo-wrap {
    height: 100px;
    display: flex;
    justify-content: center;
    margin-top: 80px;

    .logo {
      object-fit: contain;
    }
  }

  .login-wrap {
    flex: 1;
    display: flex;
    justify-content: center;
    // align-items: center;

  }

}

.login-box {
  width: 540px;
  height: 500px;
  margin-top: 120px;
  border-radius: 20px;
  background-color: rgba(101, 182, 232, .1);
  backdrop-filter: blur(15px);
  box-shadow: 2px 1px 14px #204098;
  text-align: center;
  color: #fff;
  padding: 30px;

  .login-button {
    background-color: rgba(16, 17, 62, .3);
    backdrop-filter: blur(35px);
    border: 1px solid #305890;
    width: 100%;
    height: 50px;
    border-radius: 6px;
    margin-top: 50px;
    font-size: 20px;
    letter-spacing: 5px;
    transition: all .3s;

    &:hover {
      border: 1px solid #98c0f7;
      background-color: rgba(101, 182, 232, .1);
    }
  }

  h2 {
    color: #f0f8ff;
    font-size: 28px;
    text-shadow: 0 0 0 aqua;
    margin-top: 30px;
  }

  h4 {
    color: #89a6b0;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .input-item {
    text-shadow: 0 0 0 aqua;

    margin-bottom: 20px;
    display: flex;
    align-items: center;
    font-size: 20px;

    label {
      width: 100px;
      text-align: left;
    }

    input {
      height: 40px;
      border-radius: 6px;
      background-color: rgba(101, 182, 232, .1);
      backdrop-filter: blur(35px);
      border: 1px solid #98c0f7;
      flex: 1;
      outline-width: 0px;
      padding: 0 20px;
      letter-spacing: 2px;
    }
  }
}
</style>
