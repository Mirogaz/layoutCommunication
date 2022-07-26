<template>
    <div class='list'>
        <div class='list__navigation' >
            <Navigation @addCard='nameEvent' :openEdit='openWindowEdit' @closeWindow='closeEdit' @newNameEvent='getNewNameEvent'/>
        </div>
        <div class='loaded' v-if="!isLoaded">Подождите</div>
            <div class='list__card' v-else-if="items.length > 0" >
                <Card
                @deleteCard='removeCard'
                @editCard='startEditCard'
                @idNewEventCard='setNewEventCardId'
                v-for='card in items'
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
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            cardList: [],
            cardItem: 
                {
                    name: '',
                    id: ''
                },
            openWindowEdit: false,
            idCardNewEvent: ''
        }
    },
    created() {
        this.outputCard();
    },
    methods: { 
        ...mapActions('card', ['outputCard']),
        nameEvent(data) {
            this.$store.dispatch('card/sendCard', {avatar: 'avatar', name: data}, {root: true})
        },
        removeCard(data) {
            this.$store.dispatch('card/removeCard', data, {root: true})
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
        }
    },
    computed: {
        ...mapGetters('card',['items', 'isLoaded'])
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