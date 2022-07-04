import Vue from 'vue'
import Vuex from 'vuex'
import saveDay from '@/store/moduls/saveDay'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        saveDay
    }
})