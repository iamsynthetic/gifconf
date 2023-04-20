<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap/all'
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
            :classtitle="'title1'"
            :classschedulearrowcircle="'sacircle1'"
            :classschedulearrow="'sa1'" 
            :classdline="'dl1'"
            :classcontainer="'container1'" 
            :classthecopy="'copy1'"
          />
          <CollapseCard 
            title="day 1 - 12pm to 1pm room 2"
            body="Gif, when people pronouce them with a J"
            :classtitle="'title2'"
            :classschedulearrowcircle="'sacircle2'"
            :classschedulearrow="'sa2'" 
            :classdline="'dl2'"
            :classcontainer="'container2'" 
            :classthecopy="'copy2'"
          />
          <CollapseCard 
            title="day 1 - 2pm to 4pm room 3"
            body="It's Ok - how to come to grips with pronouncing it wrong and how to start your conversion"
            :classtitle="'title3'"
            :classschedulearrowcircle="'sacircle3'"
            :classschedulearrow="'sa3'" 
            :classdline="'dl3'"
            :classcontainer="'container3'" 
            :classthecopy="'copy3'"
          />
          <CollapseCard  
          title="day 1 - 5pm to 6pm room 1"
          body="WORKSHOP - Do you immediately think of peanut butter when encountering a Gif? A therapy workshop"
          :classtitle="'title4'"
            :classschedulearrowcircle="'sacircle4'"
            :classschedulearrow="'sa4'" 
            :classdline="'dl4'"
            :classcontainer="'container4'" 
            :classthecopy="'copy4'"
          />
          <CollapseCard 
          title="day 2 - 9am to 10am room 1"
          body="Rethinking your pronounciation"
          :classtitle="'title5'"
            :classschedulearrowcircle="'sacircle5'"
            :classschedulearrow="'sa5'" 
            :classdline="'dl5'"
            :classcontainer="'container5'" 
            :classthecopy="'copy5'"
          />
          <CollapseCard 
          title="day 2 - 10am to 1pm room 2"
          body="Gif's - the people that pronounce them with a J and what to do when you encounter them, part 2 a workshop"
          :classtitle="'title6'"
            :classschedulearrowcircle="'sacircle6'"
            :classschedulearrow="'sa6'" 
            :classdline="'dl6'"
            :classcontainer="'container6'" 
            :classthecopy="'copy6'"
          />
          <CollapseCard 
          title="day 2 - 1pm to 2pm room 3"
          body="Gif influencers and their role in society's perception of Gif"
          :classtitle="'title7'"
            :classschedulearrowcircle="'sacircle7'"
            :classschedulearrow="'sa7'" 
            :classdline="'dl7'"
            :classcontainer="'container7'" 
            :classthecopy="'copy7'"
          />
          <CollapseCard 
          body="10 tips for helping others pronounce Gif"
            title="day 2 - 3pm to 4pm room 1"
            :classtitle="'title8'"
            :classschedulearrowcircle="'sacircle8'"
            :classschedulearrow="'sa8'" 
            :classdline="'dl8'"
            :classcontainer="'container8'" 
            :classthecopy="'copy8'"
          />
          <CollapseCard 
          body="Help! my significant other says it wrong! A workshop"
            title="day 2 - 5pm to 6pm room 2"
          />
          <CollapseCard 
          body="Adding Gif's to your everyday, a workshop"
            title="day 3 - 9am to 10am room 1"
            :classtitle="'title9'"
            :classschedulearrowcircle="'sacircle9'"
            :classschedulearrow="'sa9'" 
            :classdline="'dl9'"
            :classcontainer="'container9'" 
            :classthecopy="'copy9'"
          />
          <CollapseCard 
          body="Adding Gif's to other people's everyday, a workshop"
            title="day 3 - 10am to 12pm room 2"
            :classtitle="'title10'"
            :classschedulearrowcircle="'sacircle10'"
            :classschedulearrow="'sa10'" 
            :classdline="'dl10'"
            :classcontainer="'container10'" 
            :classthecopy="'copy10'"
          />
          <CollapseCard 
          body="Recognition for good Gif-ing in your community, a workshop"
            title="day 3 - 1pm to 2pm room 3"
            :classtitle="'title11'"
            :classschedulearrowcircle="'sacircle11'"
            :classschedulearrow="'sa11'" 
            :classdline="'dl11'"
            :classcontainer="'container11'" 
            :classthecopy="'copy11'"
          />
          <CollapseCard 
          body="the Gif of Gab Raffle!"
            title="day 3 - 2pm to 3pm room 1"
            :classtitle="'title12'"
            :classschedulearrowcircle="'sacircle12'"
            :classschedulearrow="'sa12'" 
            :classdline="'dl12'"
            :classcontainer="'container12'" 
            :classthecopy="'copy12'"
          />
          <CollapseCard 
          body="Thank you Closing Ceremony, and free Gif(t)"
            title="day 3 - 4pm to 5pm room 2"
            :classtitle="'title13'"
            :classschedulearrowcircle="'sacircle13'"
            :classschedulearrow="'sa13'" 
            :classdline="'dl13'"
            :classcontainer="'container13'" 
            :classthecopy="'copy13'"
          />
          <CollapseCard 
          body="Get Giffy with it (without slapping anyone) PARTY!"
            title="day 3 - 7pm to 11pm all rooms"
            :classtitle="'title14'"
            :classschedulearrowcircle="'sacircle14'"
            :classschedulearrow="'sa14'" 
            :classdline="'dl14'"
            :classcontainer="'container14'" 
            :classthecopy="'copy14'"
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