<template>
  <div>
    <h1>Dynamic Component Example</h1>
    <button @click="switchComponent">Toggle Component</button>
    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from "./components/Home-comp.vue";
import About from "./components/About-comp.vue";

export default {
  data() {
    return {
      currentComponent: "Home",
    };
  },
  methods: {
    switchComponent() {
      this.currentComponent =
        this.currentComponent === "Home" ? "About" : "Home";
    },
  },
  components: {
    Home,
    About,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

button {
  margin-top: 20px;
  padding: 10px;
  cursor: pointer;
}
</style>
