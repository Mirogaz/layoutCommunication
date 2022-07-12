<template>   
    <div class='btn'>
        <button class='btn__item' :class='classBtn' :disabled='disabled'>{{ text }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            text: String,
            classBtn: String,
            disabled: Boolean
        }
}
</script>

<style lang='scss'>
    @import 'ButtonStyle.scss';
</style>