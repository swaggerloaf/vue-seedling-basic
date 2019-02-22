<template>
  <div>
    <div id="app">{{message}}</div>
    <span v-bind:title="message">
      Hover your mouse over me for a few seconds
      to see my dynamically bound title!
    </span>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {},
  data() {
    return {
      message: "Hello, World!"    };
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
