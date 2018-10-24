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
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-dialog v-model="dialog_search" max-width="500px">
            <v-btn slot="activator" icon flat>
              <v-icon>search</v-icon>
            </v-btn>
            <v-card>
              <v-card-text>
                <v-form @submit.prevent="search">
                  <v-text-field
                    v-model="search_content"
                    label="search"
                    required
                    clearable
                  ></v-text-field>
                </v-form>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-toolbar-items>
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
    <v-dialog
      v-model="loading"
      hide-overlay
      persistent
      width="300">
      <v-card color="primary" dark>
        <v-card-text>
          Loading ...
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0">
          </v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapGetters} from "vuex"
export default {
  name: "home",
  data: () => {
    return {
      drawer: false,
      searchVisible: false,
      search_content: "",
      dialog_search: false
    };
  },
  computed:{
    ...mapGetters(["loading"])
  },
  created() {},
  methods: {
    home() {
      this.$router.push("/");
    },
    contact() {
      this.$router.push("/contact");
    },
    search() {
      console.log(this.search_content);
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
.v-toolbar__items {
  align-items: center;
}
</style>