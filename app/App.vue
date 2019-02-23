<template>
  <div v-on:click="doSomething" class="container-fluid">
    Hello,
    <span class>{{ name }}</span>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";

export default {
  methods: {
    doSomething: e => console.log()
  },
  name: "app",
  components: {},
  created: function() {
    console.warn("you created an App named:" + this.name);
  },
  data() {
    return {
      name: "Freddy",
      todos: [
        { id: 1, text: "Call Fred", copleted: false },
        { id: 2, text: "Call Brian", copleted: false },
        { id: 3, text: "Call Tom", copleted: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
}
</style>
