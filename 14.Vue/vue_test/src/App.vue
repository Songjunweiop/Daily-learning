<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import './assets/scss/public.scss';
@import './assets/scss/rst_element.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
  overflow: hidden;
}
* {
  margin: 0;
  padding: 0;
}
</style>
