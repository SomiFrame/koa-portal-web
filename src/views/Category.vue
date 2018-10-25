<template>
    <v-container>
        <h3>Category:  <span class="red--text">{{category}}</span></h3>
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
          list:[],
          category: this.$route.params.category
        }
    },
    computed:{
        ...mapGetters(["loading"])
    },
    components: {
        Card
    },
    created() {
        console.log(this.$route.params)
        this.getData()
    },
    methods:{
        pageChange(){
            this.getData()
        },
        getData(){
            const {page,limit} = this
            const {category} = this.$route.params
              this.axios.get('/videos',{params:{page,limit,tag_name:category}}).then(res=>{
                const {data} = res.data
                this.list = data.data
                this.total= data.total
              })
        }
    }
}

</script>
