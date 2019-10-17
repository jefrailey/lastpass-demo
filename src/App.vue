<template>
  <div id="app">
    <h1>Exploading formMap Demo</h1>
    <router-view></router-view>
    <router-link to="/form" v-if="$route.path == '/'">Go To Form</router-link>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
