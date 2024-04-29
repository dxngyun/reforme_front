<template>
  <div class="box">
    <router-view />
    <h1>hello</h1>
    <router-link to="/signin">Go to signin</router-link>
    <br />
    <router-link to="/signup">Go to signup</router-link>
    <br />
    <router-link to="/buttons">Go to buttons</router-link>
    <br />
  </div>

  <!-- 라우터 뷰 추가 -->
</template>

<script>
// import Buttons from "./components/buttons.vue";
export default {
  name: "App",
  components: {
    // Buttons,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%; /* 화면 전체 높이를 채우도록 설정 */
}
</style>
