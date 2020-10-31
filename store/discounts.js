export const state = () => ({
  discounts: []
})

export const mutations = {
  DISCOUNTS_SET(state, discounts) {
    state.discounts = discounts
  }
}

export const actions = {
  async getAllDiscounts({ commit }) {
    const url = `/Discount/GetAllDiscounts`

    try {
      const response = await this.$axios.$get(url)
      commit('DISCOUNTS_SET', response)
    } catch (error) {
      /* eslint-disable no-console */
      console.error(error)
    }
  }
}

export const getters = {}
