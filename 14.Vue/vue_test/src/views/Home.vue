<template>
  <div id="nav">
    <router-link to="/test">Test</router-link> |
    <router-link to="/test">Test</router-link> |
    <router-link to="/test">Test</router-link>

    <router-view style="margin-top: 20px"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style lang="scss">
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
