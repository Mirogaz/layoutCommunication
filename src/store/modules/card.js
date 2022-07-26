import cardApi from "@/api/card"

const state = {
    dataCard: [],
    isLoaded:false
}

const mutations = {
    SET_CARDS(state, payload) {
        state.dataCard = payload
    },
    POST_CARDS(state, payload) {
        state.dataCard.push(payload)
    },
    DELETE_CARD(state, payload) {
        state.dataCard = state.dataCard.filter(elem => elem.id !== payload)
    },
    LOADED(state) {
        state.isLoaded = true
    }
}

const actions = {
    outputCard(context) {
        return new Promise((resolve) => {
            cardApi
            .getCard()
                .then(res => {
                    context.commit('LOADED')
                    context.commit('SET_CARDS', res.data)
                    resolve(res.data)
                })
                .catch(e => {
                    console.log('Error', e)
                })
        })
    },
    sendCard(context, credentials) {
        return new Promise((resolve) => {
            cardApi
            .postCard(credentials)
                .then(res => {
                    context.commit('POST_CARDS', res.data)
                    resolve(res.data)
                }) 
                .catch(e => console.log('e: ' + e))   
        })
    },
    removeCard(context, idCard) {
        return new Promise(() => {
            cardApi
            .deleteCard(idCard)
                .then(context.commit('DELETE_CARD', idCard))
                .catch(e => console.log(e))
        })
    }
}

const getters = {
    items(state) {
        return state.dataCard
    },
    isLoaded(state) {
        return state.isLoaded
    }
}

export default {
    state,
    getters,
    mutations,
    actions,
    namespaced: true
}