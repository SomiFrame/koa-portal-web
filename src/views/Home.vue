<template>
  <div class="page-container">
    <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app>
      <v-list dense>
        <v-list-tile @click="home">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
                Home
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="contact">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Contact</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar light fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">
          HuangSe-Video
        </router-link>
        </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-start
          align-center
        >
        <router-view />
        </v-layout>
      </v-container>
    </v-content>
    <v-footer light app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  data: () => {
    return {
      drawer: false,
      searchVisible: false,
      search_content: "",
    }
  },
  created(){
  },
  methods:{
    home(){
      this.$router.push('/')
    },
    contact() {
      this.$router.push('/contact')
    }
  }

};
</script>

<style lang="scss" scoped>
.md-app {
  height: 100vh;
  border: 1px solid rgba(#000, 0.12);
}
.search-form {
  width: 100%;
  height: 100%;
}
</style>
