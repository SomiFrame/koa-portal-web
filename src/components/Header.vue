<template>
    <div class="header">
        <div class="md-layout md-gutter md-alignment-center-right">
            <div class="md-layout-item md-size-30 text-left">logo is here</div>
            <div class="md-layout-item md-layout md-alignment-center-right">
                <div class="md-layout-itme">
                    <md-button @click="showSearch" class="md-icon-button md-raised md-accent button-search">
                        <md-icon>search</md-icon>
                    </md-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return{
        }
    },
    methods:{
        showSearch() {
            console.log('')
        }
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
        padding: 1em;
        .button-search {
           i {
            color: #fff;
            text-shadow: 1px 1px 5px #999;
           }
        }
    }
}

</style>
