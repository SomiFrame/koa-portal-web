<template>
    <div class="header">
        <div class="md-layout md-gutter md-alignment-center-right">
            <div class="md-layout-item md-size-30 text-left">Sili Video</div>
            <div class="md-layout-item md-layout md-alignment-center-right">
                <div class="md-layout-item">
                    <Search class="search-container"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Search from './Search.vue'
export default {
    name: "Header",
    data() {
        return{
            searchActive: false
        }
    },
    methods:{
        showSearch() {
            this.searchActive = true
        },
        hideSearch() {
            this.searchActive = false
        }
    },
    components:{
        Search
   }
}
</script>

<style lang="scss" scoped>
.header {
    width: 100vw;
    height: 10vh;
    color: #fff;
    text-shadow: 1px 1px 5px #999;
    font-size: 2em;
    .md-layout {
        padding: .5em 2em;
        .button-search {
           i {
            color: #fff;
            text-shadow: 1px 1px 5px #999;
           }
        }
    }
}
</style>