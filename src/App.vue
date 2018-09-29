<template>
  <div id="app">
    <Header/>
    <div class="container">
        <router-view/>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/Header.vue"
    export default {
        data(){
            return{
            }
        },
        components:{
            Header
        }
    }
</script>

<style lang="scss">
@import '~normalize.css/normalize.css';
@import './assets/sass/main';
@import '~vue-material/dist/theme/engine';

@include md-register-theme("default", (
    primary: md-get-palette-color(green, A200), // The primary color of your application
    accent: md-get-palette-color(pink, 500) // The accent or secondary color
));

@import "~vue-material/dist/theme/all"; // Apply the theme

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
