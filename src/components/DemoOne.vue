<template>
  <div class='demo-container'>
    <button @click="showWhich = 'DynamicOne'">Show Component One</button>
    <button @click="showWhich = 'DynamicTwo'">Show Component Two</button>
    <component :is="showWhich"></component>
  </div>
</template>

<script>
import DynamicOne from "../components/v1/DynamicOne.vue";
import DynamicTwo from "../components/v1/DynamicTwo.vue";

export default {
  name: "DemoOne",
  components: {
    DynamicOne,
    DynamicTwo
  },
  data() {
    return {
      showWhich: "DynamicOne"
    };
  }
};
</script>

<style lang="scss" scoped>
    .demo-container {
        margin-top: 150px;
    }
</style>
