<template>
    <div class='input'>
        <label class='input__label'> <p>{{ text }}</p>
            <input class='input__item'/>
        </label>
    </div> 
</template>

<script>
export default {
    props: {
        text:{
            type: String
        } 
    }
}
</script>

<style>
    @import 'InputStyle.scss';
</style>