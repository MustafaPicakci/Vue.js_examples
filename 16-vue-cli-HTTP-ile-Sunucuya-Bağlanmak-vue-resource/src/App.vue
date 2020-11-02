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
            <span> {{ user.data.userName }}</span>
            <button class="btn btn-danger" @click="deleteUser(user.key)">
              sil
            </button>
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
        .post("users.json", {
          userName: this.userName,
        })
        .then((response) => {
          console.log(response);
        });
    },
    getUsers() {
      this.$http
        .get("users.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          for (let key in data.userList) {
            this.userList.push({
              key: key,
              data: data.userList[key],
            });
          }
        });
    },
    deleteUser(userKey) {
      this.$http.delete("users/" + userKey + ".json").then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<style></style>
