<template>
  <h1 @click="changename">Hello {{ name }}</h1>
  <Template food-name="This is Sended From App.vue">
    <div>
      <p>This Data is sended with Slot</p>
    </div>
  </Template>
</template>


<script>
import Template from "./components/template-comp";
export default {
  data() {
    return {
      name: "Basic Vue Template",
    };
  },
  methods: {
    changename() {
      this.name = "Will Be Changed !!!";
    },
  },
  components: {
    Template,
  },
};
</script>