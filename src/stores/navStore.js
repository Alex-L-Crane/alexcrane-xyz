import { defineStore } from 'pinia'

export const useNavStore = defineStore('nav', {
  state: () => ({
    // maybe a menu toggle later
    showMenu: false,
  }),
})
