<template>
    <div class="header">
        <div class="md-layout md-gutter md-alignment-center-right">
            <div class="md-layout-item md-size-30 text-left">logo is here</div>
            <div class="md-layout-item md-layout md-alignment-center-right">
                <div class="md-layout-itme">
                    <Search />
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
    .md-content.md-icon-button {
        transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
        transition-delay: .7s;
        i {
        }
        &.active {
            transition-delay: 0s;
            transform: scale(70);
            &+ .md-button.clear {
               color: #fff;
                  transform: scale(2) rotate(0);
            }
            i {
                transition-delay: .7s;
               transform: scale(0);
            }
        }
        &+ .md-button.clear {
            transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
            color: #fff;
            transform: scale(0) rotate(180deg);
        }
    }
}

</style>
