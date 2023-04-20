<script setup>
import loader from './components/Loader.vue'
import theheader from './components/SectionHeader.vue';
import freshperspective from './components/SectionFreshPerspective.vue';
import venue from './components/SectionVenue.vue';
import speakers from './components/SectionSpeakers.vue';
import workshops from './components/SectionWorkShops.vue';
import schedule from './components/SectionSchedule.vue';
import mapit from './components/SectionMapWhereItIs.vue';
import freestuff from './components/SectionFreeStuff.vue';
import partners from './components/SectionPartners.vue';
import thefooter from './components/SectionFooter.vue';
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

let isLoading = ref(true)
let isDoneLoading = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaderEndAnim()
  }, 2000)
})

const loaderEndAnim = function(){
  gsap.to('.loader', {opacity:0, duration:1, onComplete:showHideComponents})
}

const showHideComponents = function(){
  isLoading.value = false;
  isDoneLoading.value = true;
}

</script>

<template>
    <div id="app-container" class="div-container">
      <loader v-if="isLoading"/>
      <theheader v-if="isDoneLoading"/>
      <freshperspective v-if="isDoneLoading"/>
      <venue v-if="isDoneLoading"/>
      <speakers v-if="isDoneLoading"/> 
      <!-- <workshops v-if="isDoneLoading"/>
      <schedule v-if="isDoneLoading"/>
      <mapit v-if="isDoneLoading"/>
      <freestuff v-if="isDoneLoading"/>
      <partners v-if="isDoneLoading"/>
      <thefooter v-if="isDoneLoading"/> -->
    </div>
</template>

<style scoped>

.div-container
{
  width:100vw;
  height:100%;
}

</style>
