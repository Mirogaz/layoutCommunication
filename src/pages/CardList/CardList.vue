<template>
    <div class='list'>
        <div class='list__navigation' >
            <Navigation @addCard='nameEvent'/>
        </div>
        <div class='list__card' v-if="cardList.length > 0" >
            <Card
            v-for='card in cardList'
            :cardEvent='card' 
            :key='card.id'
            :title='card.name' />
        </div>
    </div>
</template>

<script>
import Navigation from '@/pages/Navigation/Navigation.vue';
import Card from '@/components/Card/Card.vue';

export default {
    data() {
        return {
            cardList: [],
            cardItem: 
                {
                    name: '',
                    id: ''
                }
        }
    },
    methods: { 
        nameEvent: function(data) {
            this.cardList.push({id: data, name: data})
        }
    },
    components: {
        Navigation,
        Card
    }
}

</script>

<style lang='scss'>
    @import 'CardListStyle.scss';
</style>