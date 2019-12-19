<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
import index from './view/index'
export default {
  name: 'App',
  components: {
    index
  }
}
</script>

<style>
html {
  height: 100%;
}
body {
  margin: 0 auto;
  padding: 0;
  height: 100%;
}
#app {
  font-family: 'Hiragino Sans GB';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  font-size: 14px;
}
</style>
