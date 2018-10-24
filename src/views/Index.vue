<template>
    <v-container>
        <Card :list="list"/>
        <v-progress-linear v-if="loading"
            indeterminate
            color="primary"
        ></v-progress-linear>
        <v-pagination v-else
            @input="pageChange"
            v-model="page"
            :length="+(total/limit).toFixed(0)"
            :total-visible="7"
        >
        </v-pagination>
    </v-container>
</template>
<script>
import Card from "@/components/Card"
import {mapGetters} from "vuex"
export default {
    data(){
        return {
          page: 1,
          limit: 20,
          total: 1,
          list:[]
        }
    },
    computed:{
        ...mapGetters(["loading"])
    },
    components: {
        Card
    },
    created() {
        console.log(this.loading)
        this.getData()
    },
    methods:{
        pageChange(val){
            this.getData()
        },
        getData(){
            const {page,limit} = this
              this.axios.get('/videos',{params:{page,limit}}).then(res=>{
                console.log(res)
                const {data} = res.data
                this.list = data.data
                this.total= data.total
              })
        }
    }

}
</script>
<style lang="scss" scoped>
</style>
