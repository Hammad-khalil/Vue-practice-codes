<template>
  <h1>{{ msg }}</h1>
  <button @click="changemsg">Change text</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "Basic Vue Template",
    };
  },
  methods: {
    changemsg() {
      this.msg = "Msg Changed !!!";
    },
  },
};
</script>

<style>
h1 {
  font-family: cursive;
  color: teal;
}
</style>