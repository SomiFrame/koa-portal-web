<template>
    <div class="md-layout  md-gutter md-alignment-center">
        <div v-for="i in 10" :key="i" class="md-layout-item md-large-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100">
            <md-card md-with-hover>
                <md-ripple>
                    <md-card-media-cover md-text-scrim>
                        <md-card-media md-ratio="16:9">
                        <img src="../assets/examples/card-sky.jpg" alt="Skyscraper">
                        </md-card-media>

                        <md-card-area>
                        <md-card-header>
                            <span class="md-title">Gradient background</span>
                            <span class="md-subhead">16/9 image</span>
                        </md-card-header>

                        <md-card-actions>
                            <md-button>Action</md-button>
                            <md-button>Action</md-button>
                        </md-card-actions>
                        </md-card-area>
                    </md-card-media-cover>
                </md-ripple>
            </md-card>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.md-layout-item {
    margin: 10px 0;
}
</style>