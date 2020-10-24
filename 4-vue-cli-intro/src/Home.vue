<template>
    <div>
        <p> lamba durumu : {{status}}</p>
        <hr>
        <button @click="openLamb">lambayı aç</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            status:"kapalı"
        }
    },
    methods:{
        openLamb(){
            this.status="Açık"
        }
    }
}
</script>

<style>

</style>