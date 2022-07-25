<template>
    <div class='list'>
        <div class='list__navigation' >
            <Navigation @addCard='nameEvent' :openEdit='openWindowEdit' @closeWindow='closeEdit' @newNameEvent='getNewNameEvent'/>
        </div>
        <div class='list__card' v-if="cardList.length > 0" >
            <Card
            @deleteCard='removeCard'
            @editCard='startEditCard'
            @idNewEventCard='setNewEventCardId'
            v-for='card in cardList'
            :setIdCard = 'card.id'
            :cardEvent='card' 
            :key='card.id'
            :title='card.name' />
        </div>
    </div>
</template>

<script>
import Navigation from '@/pages/Navigation/Navigation.vue'
import Card from '@/components/Card/Card.vue'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            cardList: [],
            cardItem: 
                {
                    name: '',
                    id: ''
                },
            idCard: '',
            openWindowEdit: false,
            idCardNewEvent: ''
        }
    },
    created() {
        console.log(this.outputCard())
    },
    methods: { 
        nameEvent(data) {
            this.cardList.push({id: Math.floor(Math.random() * 300), name: data})
        },
        removeCard(data) {
            this.idCard = data;
            this.cardList = this.cardList.filter(elem => elem.id !== this.idCard)
        },
        startEditCard(data) {
            if(data) this.openWindowEdit = true
        },
        closeEdit(data) {
            if(!data) this.openWindowEdit = false
        },
        setNewEventCardId(data) {
            this.idCardNewEvent = data
        },
        getNewNameEvent(data) {
            this.cardList.forEach(elem => {
                if(elem.id === this.idCardNewEvent) elem.name = data 
            })
        },
        ...mapActions(['outputCard'])
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