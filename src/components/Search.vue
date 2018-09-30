<template>
<div class="search-wrapper">
    <form>
        <input placeholder="search" />
        <span class="search-icon"></span>
    </form>
</div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>
<style lang="scss" scoped>
.search-wrapper {
    form {
        position: relative;
        width: 50px;
        height: 50px;
        input {
            width: 100%;
            height: 100%;
            border-radius: 100%;
        }
    }
}
</style>
