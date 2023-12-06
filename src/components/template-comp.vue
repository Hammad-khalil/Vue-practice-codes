<template>
  <h1>Template Comp {{ msg }}</h1>
  <br />
  <h2>{{ foodName }}</h2>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Just Trying to Make a component",
    };
  },
  props: ["foodName"],
};
</script>
<style lang="scss" scoped>
</style>