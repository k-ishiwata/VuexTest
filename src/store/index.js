import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        items: [
            {is_do: false, title: 'タスク1'},
            {is_do: true, title: 'タスク2'},
            {is_do: false, title: 'タスク3'}
        ]
    },
    mutations: {
        [types.ADD_TASK] (state, payload) {
            state.items.push(payload.data);
        },
        [types.DONE_TASK] (state, payload) {
            let index = state.items.indexOf(payload.data)
            state.items[index].is_do = !payload.data.is_do
        }
    },
    actions: {
        [types.ADD_TASK] ({ commit }, title) {
            let newItem = {
                title: title,
                is_do: false
            }
            commit( types.ADD_TASK, {
                data: newItem
            })
        },
        [types.DONE_TASK] ({ commit }, item) {
            commit( types.DONE_TASK, {
                data: item
            })
        }
    }
});