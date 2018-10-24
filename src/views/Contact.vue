<template>
        <v-card>
            <v-responsive :aspect-ratio="16/9">
                <v-card-text class="display-1">
                    <p class="text-xs-center">
                        To contact us, you can send email to 
                       <span class="text-xs--primary red--text">Kitponytai.23254@gmail.com</span>
                    </p>
                </v-card-text>
            </v-responsive>
    </v-card>
</template>

<style lang="scss" scoped>
.v-card__text {
    display: flex;
    align-items: center;
    padding: 0 5%;
    height: 100%;
}
.text-xs-center {
    word-break: break-word;
}
</style>
