<template>
  <div id="app">
    <div class="container">
        <AlertDialog/>
        <router-view/>
    </div>
  </div>
</template>

<script>
    import AlertDialog from "@/components/Alert.vue"
    export default {
        data(){
            return{
            }
        },
        components:{
            AlertDialog
        }
    }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import './assets/sass/main';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
