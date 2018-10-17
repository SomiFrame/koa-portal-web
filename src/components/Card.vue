<template>
    <v-container grid-list-md>
        <v-layout row wrap>
            <v-flex v-for="(item,index) in list" :key="index" xs12 lg3 md6>
                <v-hover>
                    <v-card :class="`elevation-${hover ? 12 : 2}`" slot-scope="{hover}">
                        <v-img class="white--text"
                            height="200px"
                            :src="item.ref_img_path">
                        </v-img>
                        <v-card-title primary-title>
                            <div>
                                <div>{{item.title}}</div>
                                <span class="grey--text"></span><br>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn @click="play(item)" flat color="orange">Play</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-hover>
            </v-flex>
        </v-layout>
    </v-container>
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
.v-card__title{
    height: 64px;
    overflow: hidden;
    display: -webkit-box;
    white-space: normal;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-all;
}
</style>
