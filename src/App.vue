<template>
  <buttons />
</template>

<script>
import Buttons from "./components/buttons.vue";
export default {
  name: "App",
  components: {
    Buttons,
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
</style>
