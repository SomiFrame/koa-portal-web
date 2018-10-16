<template>
    <div class="md-layout md-gutter md-alignment-center">
        <div v-for="(item,index) in list" :key="index" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card md-with-hover>
                <md-ripple>
                        <md-card md-ratio="16:9">
                            <img :src="item.ref_img_path" :alt="item.title">
                        </md-card>

                        <md-card-area>
                        <md-card-header>
                            <span class="md-title">{{item.title}}</span>
                            <span class="md-subhead">16/9 image</span>
                        </md-card-header>

                        <md-card-actions>
                            <md-button @click="play(item)">view</md-button>
                        </md-card-actions>
                        </md-card-area>
                </md-ripple>
            </md-card>
        </div>
    </div>
</template>
<script>
export default {
    props:['list'],
    data:()=>{
         return {

         }
     },
    created(){
        console.log(this.list)
    },
    methods:{
        play(val) {
            this.$router.push({path:'/play',query:{id:val._id}})
        }
    }
};
</script>
<style lang="scss" scoped>
.md-layout-item {
    margin: 10px 0;
}

.md-card {
    margin: 0!important;
    img {
        width: 100%;
    }
}

.md-card-header {
    .md-title{
        height: 64px;
        overflow: hidden;
        display: -webkit-box;
        white-space: normal;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
        word-break: break-all;
    }
}

</style>
