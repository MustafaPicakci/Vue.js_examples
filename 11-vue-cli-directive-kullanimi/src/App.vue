<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay="'lightblue'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
        <p v-color.delay="'red'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          aspernatur beatae culpa doloribus, ex facilis fugiat, fugit magni
          molestiae mollitia, nesciunt nihil perspiciatis quaerat quam quas
          ratione sequi unde ut!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
