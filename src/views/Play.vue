<template>
    <div>
        <iframe
        frameborder="0"
        border="0"
        scrolling=no
        allowfullscreen=allowfullscreen
        :src="data.ref_video_path"></iframe>
    </div>
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
iframe {
    width: 100%;
    height: 600px!important;
}
</style>
