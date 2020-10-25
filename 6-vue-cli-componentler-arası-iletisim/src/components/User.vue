<template>
  <div class="container">
    <h1>Parent Component (User)</h1>
    <p>Burası parent component yani herşeyin import edildiği component :)</p>
    <button @click="changeName">Adımı değiştir</button>
    <hr>
    <div class="row">
      <app-user-detail :name="title"></app-user-detail>
      <app-user-edit></app-user-edit>
    </div>
  </div>
</template>
<script>
  import UserDetail from "./UserDetail";
  import UserEdit from "./UserEdit";
  export default {
    data(){
      return{
        title:"mustafa"
      }
    },
    methods:{
      changeName(){
        this.title="Gökçe"
      }
    },
    components : {
      appUserDetail : UserDetail,
      appUserEdit : UserEdit,
    }
  }
</script>

<style>
  div.container{
    margin-top: 30px;
    padding: 20px 40px;
    background-color: #6a8d99;
    border: 1px solid #666;
  }
  div.row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
