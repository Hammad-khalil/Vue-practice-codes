<template>
  <router-view></router-view>
  <router-link class="links" to="/">Home</router-link>
  <router-link class="links" to="/about">About</router-link>
</template>

<script>
export default {};
</script>

<style>
.links {
  margin: 20px;
  position: relative;
  bottom: 232px;
}
</style>