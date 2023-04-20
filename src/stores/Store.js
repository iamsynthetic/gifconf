import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore({
  id: 'store',
  
  state: () => ({
    contentReady: false
  }),

  actions: {
    contentIsReady(){
      console.log('contentIsReady')
      this.contentReady = true;
    }
  }

})
