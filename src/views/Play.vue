<template>
    <v-container class="pa-0" >
        <v-subheader
            >
              {{ data.title }}
            </v-subheader>
        <v-responsive :aspect-ratio="16/9">
            <v-card-text class="pa-0">
                <iframe
                frameborder="0"
                border="0"
                scrolling=no
                allowfullscreen=allowfullscreen
                :src="data.ref_video_path"></iframe>
            </v-card-text>
        </v-responsive>
    </v-container>
</template>
<script>
export default {
    data:()=> {
         return {
            data: {}
         }
    },
    created(){
        const {id}= this.$route.query
            this.axios.get(`/videos/${id}`).then(res=>{
                const {data} = res.data
                this.data = data
            })
        console.log(this.$route.query)
    },
    methods:{

    }
}
</script>
<style lang="scss">
.v-card__text {
    height: 100%;
}
iframe {
    width: 100%;
    height: 100%!important;
}
</style>
