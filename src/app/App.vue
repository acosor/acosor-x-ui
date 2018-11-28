<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import './app.css';

export default Vue.extend({
  name: 'app',
});
</script>

<style lang="stylus">
#app {
  height: 100%;
  width: 100%;
}
</style>
