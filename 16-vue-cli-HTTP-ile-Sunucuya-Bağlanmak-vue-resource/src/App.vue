<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Vue-Resource</h3>
        <div class="form-froup">
          <input type="text" class="form-control" v-model="userName" />
        </div>
        <button class="btn btn-primary" @click="saveUser()">kaydet</button>
        <button class="btn btn-success" @click="getUsers()">
          verileri getir
        </button>
        <hr />
        <ul class="list-group">
          <li class="list-group-item" v-for="user in userList" :key="user">
            {{ user.userName }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "null",
      userList: [],
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
    getUsers() {
      this.$http
        .get("https://vuejs-vue-resource-a01ae.firebaseio.com/users.json")
        .then((response) => {
          let data = response.data;

          for (let key in data) {
            this.userList.push(data[key]);
          }
        });
    },
  },
};
</script>

<style></style>
