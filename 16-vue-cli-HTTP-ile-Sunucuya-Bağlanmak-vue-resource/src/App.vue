<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-froup">
          <input type="text" class="form-control" v-model="userName" />
        </div>
        <button class="btn btn-primary" @click="saveUser()">kaydet</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "null",
    };
  },
  methods: {
    saveUser() {
      this.$http
        .post("https://vuejs-vue-resource-a01ae.firebaseio.com/users.json", {
          userName: this.userName,
        })
        .then((response) => {
          console.log(response);
        });
    },
  },
};
</script>

<style></style>
