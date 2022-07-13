<template>
    <div class='list'>
        <div class='list__navigation' >
            <Navigation @addCard='nameEvent'/>
        </div>
        <div class='list__card' v-if="cardList.length > 0" >
            <Card
            @deleteCard='removeCard'
            v-for='card in cardList'
            :setIdCard = 'card.id'
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
                },
            idCard: ''
        }
    },
    methods: { 
        nameEvent: function(data) {
            this.cardList.push({id: Math.floor(Math.random() * 300), name: data})
        },
        removeCard: function(data) {
            this.idCard = data;
            this.cardList = this.cardList.filter(elem => elem.id !== this.idCard)

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