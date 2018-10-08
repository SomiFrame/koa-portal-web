<template>
<div class="search-wrapper">
    <form>
        <md-autocomplete v-model="content"
            :md-options="recommends"
            md-layout="box"
            md-dense>
            <label>Search</label>
        </md-autocomplete>
    </form>
</div>
</template>
<script>
export default {
  data() {
    return {
        content:'',
        recommends: []
    };
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