<script setup>

import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { useStore } from '@/stores/Store'

const store = useStore()

onMounted(() => {
  gsap.from('.loader-txt-anim', {opacity:0, y:100, duration:.5, ease: "Circ.easeOut"})
})

</script>

<template>
    <div class="loader">
        <div class="loader-txt loader-txt-anim">
            JUST A MINUTE.
        </div>
    </div>
</template>

<style scoped>

</style>