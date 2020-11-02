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
          <li class="list-group-item" v-for="user in userList" :key="user.key">
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
      resource: {},
    };
  },
  methods: {
    saveUser() {
      /* this.$http
        .post("users.json", {
          userName: this.userName,
        })
        .then((response) => {
          console.log(response);
        });
        */
      //   this.$resource("users.json").save({}, { userName: this.userName });

      this.resource.kaydet({}, { userName: this.userName });
    },
    getUsers() {
      this.$resource("users.json")
        .get()
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
  created() {
    const customActions = {
      kaydet: { method: "POST", url: "users.json" },
    };
    this.resource = this.$resource("users.json ", {}, customActions);
  },
};
</script>

<style></style>
