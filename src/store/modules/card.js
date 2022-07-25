import getCard from "@/api/card"

const state = {
    dataCard: []
}

const mutations = {
    getDataCard(state, payload) {
        state.dataCard = payload
    }
}

const actions = {
    outputCard(context) {
        console.log(1)
        return new Promise((resolve) => {
            getCard
                .then(res => {
                    context.commit('getDataCard', res.data)
                    console.log(2)
                    resolve(res.data)
                    console.log(3)
                })
                .catch(e => {
                    console.log('Error', e)
                })
        })
    }
}

export default {
    state,
    mutations,
    actions
}