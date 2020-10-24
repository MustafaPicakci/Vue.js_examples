<template>
    <div>
        <p> lamba durumu : {{status}}</p>
        <hr>
        <button @click="openLamp">lambayı aç</button>
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
        openLamp(){
            this.status="Açık"
        }
    }
}
</script>

<style>

</style>