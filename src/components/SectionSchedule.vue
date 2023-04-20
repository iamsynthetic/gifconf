<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import CollapseCard from './CollapseCard.vue';

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);


onMounted(() => {

  dofunction()

})

function dofunction(){

////////////////////////////////////// animate the headlines in //////////////////////////////////////

  gsap.set('.schedule-headline', {opacity:0, y:100})

  ScrollTrigger.batch('.schedule-headline', {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {cssRule: {opacity:.08}, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {cssRule: {opacity:0}, y:100, duration:.5, ease: "Circ.easeOut"})
  });

  gsap.set('.schedule-main-title', {opacity:0, x:-100})
  
  ScrollTrigger.batch('.schedule-main-title', {
    start: "center bottom",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {cssRule: {opacity:1}, x:0, duration:.5, ease: "Circ.easeInOut"}),
    onLeaveBack: batch => gsap.to(batch, {cssRule: {opacity:0}, x:-100, duration:.5, ease: "Circ.easeInOut"})
  });

}
</script>

<template>
  <div class="general-gutter">
    <div class="schedule-row row-spacer">
        <div class="col1">
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
          <div class="schedule-main-title">SCHEDULE</div>
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
          <div class="schedule-headline schedule-headline-not-on-mobile">SCHEDULE</div>
        </div>
        <div class="schedule-col2">
          <CollapseCard
            title="day 1 - 9am to 11am room 1"
            body="Introduction to the Conference and General Discussions"
          />
          <CollapseCard 
            title="day 1 - 12pm to 1pm room 2"
            body="Gif, when people pronouce them with a J"
          />
          <CollapseCard 
            title="day 1 - 2pm to 4pm room 3"
            body="It's Ok - how to come to grips with pronouncing it wrong and how to start your conversion"
          />
          <CollapseCard  
          title="day 1 - 5pm to 6pm room 1"
          body="WORKSHOP - Do you immediately think of peanut butter when encountering a Gif? A therapy workshop"
          />
          <CollapseCard 
          title="day 2 - 9am to 10am room 1"
          body="Rethinking your pronounciation"
          />
          <CollapseCard 
          title="day 2 - 10am to 1pm room 2"
          body="Gif's - the people that pronounce them with a J and what to do when you encounter them, part 2 a workshop"
          />
          <CollapseCard 
          title="day 2 - 1pm to 2pm room 3"
          body="Gif influencers and their role in society's perception of Gif"
          />
          <CollapseCard 
          body="10 tips for helping others pronounce Gif"
            title="day 2 - 3pm to 4pm room 1"
          />
          <CollapseCard 
          body="Help! my significant other says it wrong! A workshop"
            title="day 2 - 5pm to 6pm room 2"
          />
          <CollapseCard 
          body="Adding Gif's to your everyday, a workshop"
            title="day 3 - 9am to 10am room 1"
          />
          <CollapseCard 
          body="Adding Gif's to other people's everyday, a workshop"
            title="day 3 - 10am to 12pm room 2"
          />
          <CollapseCard 
          body="Recognition for good Gif-ing in your community, a workshop"
            title="day 3 - 1pm to 2pm room 3"
          />
          <CollapseCard 
          body="the Gif of Gab Raffle!"
            title="day 3 - 2pm to 3pm room 1"
          />
          <CollapseCard 
          body="Thank you Closing Ceremony, and free Gif(t)"
            title="day 3 - 4pm to 5pm room 2"
          />
          <CollapseCard 
          body="Get Giffy with it (without slapping anyone) PARTY!"
            title="day 3 - 7pm to 11pm all rooms"
          />
      </div>
    </div>
    <div class="spacer-big spacer-mobile"></div>
  </div>
</template>


<style scoped>

.schedule-row
{
  display:flex;
  flex-direction:row;
  margin:0px;
}

.col1
{
  display:flex;
  flex-direction:column;
  height:auto;
  width:50%;
  z-index:10;
}

.schedule-main-title
{
  margin-top:-20px;
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:10rem;
  font-weight:600;
  line-height:1;
  margin-top:0px;
  opacity:1;
}

.col2
{
  display:flex;
  flex-direction:column;
  height:auto;
  width:50%;
  z-index:10;
}

.schedule-col2
{
  display:flex;
  flex-direction:column;
  height:auto;
  width:50%;
  margin-top:30px;
  z-index:10;
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 1024px)
{
  .schedule-row
  {
    display:flex;
    flex-direction:column;
  }
  .col1
  {
    width:100%;
  }
  .schedule-col2
  {
    width:100%;
  }

  .schedule-headline-not-on-mobile
  {
    display:none;
  }
  .schedule-main-title
  {
    font-size:5rem;
    line-height:1;
  }
}

</style>