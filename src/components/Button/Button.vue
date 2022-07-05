<template>   
    <div class='btn'>
        <button>{{ text }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            text: {
                type: String
            }
        }
}
</script>

<style lang='scss'>
    @import 'ButtonStyle.scss';
</style>