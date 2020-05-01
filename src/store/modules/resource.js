const state = {
    category: undefined,
}

const mutations = {
    SET_CATEGORY: (state, category) => {
        state.category = category;
    }
}

const actions = {
    setCategory({
        commit
    }, category) {
        commit('SET_CATEGORY', category);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
}