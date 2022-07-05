<template>   
    <div class='group'>
        <div 
            class= 'group__item'
            @click='[activeClass(index)]' 
            :class='{active: isActive === index}'
            v-for='(item,index) in data || text' 
            :key='item'
        >
            <p class='group__item-text'>{{ item }}</p>    
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentItem: 0,
                isActive: false
            }
        },
        props: {
            data: [],
            text: {
                type: String
            }
        },
        methods: {
            activeClass: function(index) {
                this.currentItem = this.data[index];
                this.isActive = this.isActive == index ? true : index;
                this.$emit('dataIndex', this.currentItem);
            },
        }
        
    }
</script>

<style lang='scss'>
    @import 'ButtonGroupStyle.scss';
</style>    