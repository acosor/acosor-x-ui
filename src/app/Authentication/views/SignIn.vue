<template>
  <div class="wrapper">
    <b-form class="signInForm" @submit="onSubmit" @reset="onReset">
      <b-form-group>
        <b-form-input required type="text" v-model="data.username" :placeholder="username"/>
      </b-form-group>
      <b-form-group>
        <b-form-input required type="password" v-model="data.password" placeholder="Password"/>
      </b-form-group>
    </b-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      username: "User",
      data: {
        username: ""
      }
    };
  },
  methods: {
    onSubmit() {},
    onReset() {}
  }
});
</script>

<style lang="stylus" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #243e56;
}

.signInForm {
  width: 500px;
}
</style>

