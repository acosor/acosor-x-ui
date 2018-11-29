<template>
  <div class="wrapper">
    <div class="form-container">
      <p class="title">Sign In</p>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group>
          <b-form-input required type="text" v-model="data.username" placeholder="Username"/>
        </b-form-group>
        <b-form-group>
          <b-form-input required type="password" v-model="data.password" placeholder="Password"/>
        </b-form-group>
        <div class="actions">
          <b-button type="submit" class="submit-btn" variant="primary">Sign In</b-button>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    data: {
      username: "",
      password: ""
    }
  }),
  methods: {
    onSubmit(e: any) {
      e.preventDefault();
    },
    onReset() {}
  }
});
</script>

<style lang="stylus" scoped>
.wrapper {
  align-items: center;
  background-color: #284761;
  display: flex;
  height: 100vh;
  justify-content: center;
}

.form-container {
  background-color: #fff;
  width: 400px;
  padding: 30px;
}

.title {
  color: #284761;
  font-size: 36px;
  margin-bottom: 1rem;
}

.actions {
  margin: 2rem 0 1rem;
}

.submit-btn {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
