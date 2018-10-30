<template>
  <v-dialog v-model="dialog" max-width="500px">
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
</template>
<script>
export default {
  data() {
    return {
        dialog: false,
        search_content: ''
    };
  },
  methods: {
    search() {
      console.log(this.search_content);
      this.$router.push(`/search/${this.search_content}`)
      this.dialog = false
    }
  }
};
</script>
<style lang="scss" scoped>
.search-wrapper {
    width: 100%;
    height: 100%;
  form {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
