<template>
    <v-dialog
      v-model="dialog"
      persistent
      width="500" >
      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title >
          Age statement
        </v-card-title>

        <v-card-text>
            Very Important. Please make sure you are over 18 years old!
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="dialog = false" >
            Yes
          </v-btn>
          <v-btn
            color="primary"
            flat
            @click="toGoogle" >
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>
<script>
    export default {
        data() {
            return {
                dialog: false
            }
        },
        mounted() {
            let _this = this
            setTimeout(function(){
                _this.dialog = true
            },1000)
        },
        methods:{
            toGoogle() {
                window.location.href = 'https://www.google.com'
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>