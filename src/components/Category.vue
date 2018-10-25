<template>
    <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        scrollable >
            <v-btn slot="activator" icon flat>
              <v-icon>book</v-icon>
            </v-btn>
        <v-card title>
            <v-toolbar card light>
            <v-btn icon dark @click.native="dialog = false">
                <v-icon color="primary">close</v-icon>
            </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-container grid-list-md text-xs-center>
                    <h3 class="headline mb-4">Category</h3>
                    <v-layout row wrap>
                     <v-flex v-for="(item,i) in list" :key="`1${i}`"  lg2 md4 sm6 xs12>
                        <v-card>
                           <v-card-text @click="category(item)" class="px-0">
                                {{item.name}}
                           </v-card-text>
                        </v-card>
                    </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    data(){
        return {
            dialog: false,
            list: []
        }
    },
    created(){
        this.axios.get('/tags').then(res=>{
            console.log(res.data)
            const {data} = res.data
            this.list = data.data
        })
    },
    methods:{
        category(item) {
            this.dialog = false
            this.$router.push(`/category/${item.name}`)

        }
    }
}
</script>
