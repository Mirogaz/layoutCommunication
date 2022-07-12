<template>   
    <div class='btn'>
        <button class='btn__item' :class='classBtn'>{{ text }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            classBtn: String
        }
}
</script>

<style lang='scss'>
    @import 'ButtonStyle.scss';
</style>