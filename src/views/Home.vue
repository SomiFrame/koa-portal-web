<template>
  <div class="page-container">
    <md-app md-mode="reveal">
      <md-app-toolbar v-if="!searchVisible" class="md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
            <span class="md-display-1">Title</span>
          </div>
          <div class="md-toolbar-section-end">
            <md-button v-if="!searchVisible" @click="searchVisible=!searchVisible" class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>
          </div>
        </div>
      </md-app-toolbar>
      <md-app-toolbar v-if="searchVisible" class="">
        <div class="md-toolbar-row">
            <form class="search-form">
              <md-field>
                <label>search something</label>
                <md-input v-model="search_content"></md-input>
              </md-field>
            </form>
            <md-button @click="searchVisible=!searchVisible" class="md-icon-button">
              <md-icon>clear</md-icon>
            </md-button>
        </div> 
      </md-app-toolbar>
      <md-drawer md-right :md-active.sync="searchVisible">
        <md-toolbar class="md-transparent" md-elevation="0"></md-toolbar>
      </md-drawer>
      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>
        <!-- <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list> -->
      </md-app-drawer>

      <md-app-content>
        <Card :list="list"/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card"
export default {
  name: "home",
  data: () => {
    return {
      menuVisible: false,
      searchVisible: false,
      search_content: "",
      page: 1,
      limit: 20,
      list:[]
    };
  },
  components: {
    Card
  },
  created(){
    const {page,limit} = this
      this.axios.get('/videos',{params:{page,limit}}).then(res=>{
        console.log(res)
        const {data} = res.data
        this.list = data.data
      })
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
