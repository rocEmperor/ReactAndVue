let state = {
    name: 'vue'
}

const getters = {};

// 处理异步数据
const actions = {
    change (context, { payload }) {
        setTimeout(() => {
            context.commit({
                type: 'concat',
                payload: {
                    name: payload.name
                }
            })
        }, 500)
    }
}

// 处理同步数据
const mutations = {
    concat (state, { payload }) {
        let keys = Object.keys(payload);
        keys.forEach((item) => {
            state[item] = payload[item];
        })
    }
}

export default {
    name: 'AboutStore',
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}