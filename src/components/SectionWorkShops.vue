<!-- this component is going be a 'promo' just some words and a video or image -->

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(CSSRulePlugin);

let num = 0;
let limit = 6;
let mobilenum = 0;
let mobilelimit = 6;
let nextisdisabled = ref(false);
let previousisdisabled = ref(true);
let mobilenextisdisabled = ref(false);
let mobilepreviousisdisabled = ref(true);

// let wsprevarrow = String
// let wsnextarrow = String
// let mobilewsprevarrow = String
// let mobilewsnextarrow = String

onMounted(() => {
  doWorkshopFunction()
})


const doWorkshopFunction = () => {

  ////////////////////////////////////// animate the headlines in //////////////////////////////////////

  gsap.set('.workshop-headline-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".workshop-headline-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });

  gsap.set('.ws-headline-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".ws-headline-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });

  ////////////////////////////////////// animate the txt in //////////////////////////////////////

  gsap.set('.ws-txt-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".ws-txt-anim", {
      start: "center bottom",
      end: "top 90%",
      onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, ease: "Circ.easeOut"}),
      onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });
  
  ////////////////////////////////////// animate the image in //////////////////////////////////////

  gsap.set('.workshop-img-anim', {opacity:0, y:100})

  ScrollTrigger.batch(".workshop-img-anim", {
    start: "top 90%",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, y:0, duration:.5, delay:.15, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, y:100, duration:.5, ease:"Circ.easeOut"})
  });

  ////////////////////////////////////// animate the buttons in //////////////////////////////////////

  gsap.set('.wsprevarrow', {opacity:0, x:-25})

  ScrollTrigger.batch('.wsprevarrow', {
    start: "top 90%",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:.4, x:0, duration:.5, delay:.15, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:-25, duration:.5, ease:"Circ.easeOut"})
  });

  gsap.set('.wsnextarrow', {opacity:0, x:25})

  ScrollTrigger.batch('.wsnextarrow', {
    start: "top 90%",
    end: "top 90%",
    onEnter: batch => gsap.to(batch, {opacity:1, x:0, duration:.5, delay:.15, ease:"Circ.easeOut"}),
    onLeaveBack: batch => gsap.to(batch, {opacity:0, x:25, duration:.5, ease:"Circ.easeOut"})
  });
}

const clicker = (bool) => {
  
  if(bool == 'next')
  {
    if(num <= 3)
    { 
      let oldnum = num;
      num++
      animateImagesAndText(oldnum, 25, -25)
      
      if(num > 0)
      {
        previousisdisabled.value = false;
        gsap.to('.wsprevarrow', {opacity:1, duration:.5})
      }
    }
    else if(num == 4)
    {
      let oldnum = num;
      num = 5
      animateImagesAndText(oldnum, 25, -25)
      
      nextisdisabled.value = true;
      gsap.to('.wsnextarrow', {opacity:.4, duration:.5})

      previousisdisabled.value = false;
      gsap.to('.wsprevarrow', {opacity:1, duration:.5})
      
    }
  }
  else if(bool == 'previous')
  {
    if(num > 1)
    {
      let oldnum = num;
      num--
      animateImagesAndText(oldnum, -25, 25)

      if(num < limit)
      {
        nextisdisabled.value = false;
        gsap.to('.wsnextarrow', {opacity:1, duration:.5})
      }
    }
    else if(num == 1)
    {
      let oldnum = num;
      num = 0
      animateImagesAndText(oldnum, -25, 25)

      previousisdisabled.value = true;
      gsap.to('.wsprevarrow', {opacity:.4, duration:.5})
 
      nextisdisabled.value = false;
      gsap.to('.wsnextarrow', {opacity:1, duration:.5})
    }
  }

  else if(bool == 'mobilenext')
  {
    if(mobilenum <= 3)
    { 
      let mobileoldnum = mobilenum;
      mobilenum++
      mobileanimateImagesAndText(mobileoldnum, 25, -25)
      
      if(mobilenum > 0)
      {
        mobilepreviousisdisabled.value = false;
        gsap.to('.mobilewsprevarrow', {opacity:1, duration:.5})
      }
    }
    else if(mobilenum == 4)
    {
      let mobileoldnum = mobilenum;
      mobilenum = 5
      mobileanimateImagesAndText(mobileoldnum, 25, -25)
      
      mobilenextisdisabled.value = true;
      gsap.to('.mobilewsnextarrow', {opacity:.4, duration:.5})

      mobilepreviousisdisabled.value = false;
      gsap.to('.mobilewsprevarrow', {opacity:1, duration:.5})
    }
  }
  else if(bool == 'mobileprevious')
  {
    if(mobilenum > 1)
    {
      let mobileoldnum = mobilenum;
      mobilenum--
      mobileanimateImagesAndText(mobileoldnum, -25, 25)

      if(mobilenum < limit)
      {
        mobilenextisdisabled.value = false;
        gsap.to('.mobilewsnextarrow', {opacity:1, duration:.5})
      }
    }
    else if(mobilenum == 1)
    {
      let mobileoldnum = mobilenum;
      mobilenum = 0
      mobileanimateImagesAndText(mobileoldnum, -25, 25)

      mobilepreviousisdisabled.value = true;
      gsap.to('.mobilewsprevarrow', {opacity:.4, duration:.5})
 
      mobilenextisdisabled.value = false;
      gsap.to('.mobilewsnextarrow', {opacity:1, duration:.5})
    }
  }
}

const animateImagesAndText = (oldnum, param1, param2) => {

  //animate images
  gsap.set(['.wsimg'+num], {y:param1})
  gsap.to(['.wsimg'+oldnum], {opacity:0, y:param2, duration:.5, ease:"Expo.easeOut"})
  gsap.to(['.wsimg'+num], {opacity:1, y:0, duration:.5, delay:.15, ease:"Expo.easeOut"})

  //animate text
  gsap.set(['wstxt'+num], {x:-param1})
  gsap.to(['.wstxt'+oldnum], {opacity:0, x:-param2, duration:.5, ease:"Expo.easeOut"})
  gsap.to(['.wstxt'+num], {opacity:1, x:0, duration:.5, delay:.15, ease:"Expo.easeOut"})
}

//mobile 
const mobileanimateImagesAndText = (mobileoldnum, param1, param2) => {

//animate images
gsap.set(['.mobilewsimg'+mobilenum], {y:param1})
gsap.to(['.mobilewsimg'+mobileoldnum], {opacity:0, y:param2, duration:.5, ease:"Expo.easeOut"})
gsap.to(['.mobilewsimg'+mobilenum], {opacity:1, y:0, duration:.5, delay:.15, ease:"Expo.easeOut"})

//animate text
gsap.set(['mobilewstxt'+mobilenum], {x:-param1})
gsap.to(['.mobilewstxt'+mobileoldnum], {opacity:0, x:-param2, duration:.5, ease:"Expo.easeOut"})
gsap.to(['.mobilewstxt'+mobilenum], {opacity:1, x:0, duration:.5, delay:.15, ease:"Expo.easeOut"})
}
</script>

<template>
  <div id="workshops" class="general-gutter">
    <div class="workshop-col row-spacer">
        <div class="col-container">
          <div class="mobile-layout">
            <div class="row">
              <div class="s2-title4 ws-big-headline workshop-headline-anim">WORKSHOPS</div>
            </div>
            <div class="row">
              <div class="wscol1">
                <div class="mobilewsimg0">
                  <div class="workshop-img-container workshop-img-anim">
                    <img src="/workshops/workshop1.jpg" alt="image of people talking around a computer">
                  </div>
                </div>
                <div class="mobilewsimg1">
                  <div class="workshop-img-container">
                    <img src="/workshops/workshop2.jpg" alt="image of someone wearing headphones on a computer">
                  </div>
                </div>
                <div class="mobilewsimg2">
                  <div class="workshop-img-container">
                    <img src="/workshops/workshop3.jpg" alt="image of two people looking at a monitor">
                  </div>
                </div>
                <div class="mobilewsimg3">
                  <div class="workshop-img-container">
                    <img src="/workshops/workshop4.jpg" alt="image of someone looking at a laptop">
                  </div>
                </div>
                <div class="mobilewsimg4">
                  <div class="workshop-img-container">
                    <img src="/workshops/workshop5.jpg" alt="image of people sitting around a wooden table in an office">
                  </div>
                </div>
                <div class="mobilewsimg5">
                  <div class="workshop-img-container">
                    <img src="/workshops/workshop6.jpg" alt="image of people standing and talking">
                  </div>
                </div>
              </div> 
            </div>
            <div class="row">
              <div class="ws-copy-container">
                <div class="allwstxt mobilewstxt0">
                  <div class="ws-headline ws-headline-anim">Do you immediately think of peanut butter when encountering a Gif?</div>
                  <p class="ws-txt-anim">starting day 1 from 5pm to 6pm in room 1. This workshop will help attendees acclimate themselves
                    with what a gif is, how to properly say it, and how to associate it with something other than a peanut based spread.
                  </p>
                </div>
                <div class="allwstxt mobilewstxt1">
                  <div class="ws-headline">Gif when people pronouce them with a J</div>
                  <p>day 2 - 10am to 1pm room 2. This one is a continuation from a session from day 1. During this workshop attendees will
                    participate in groups and practice confronting people who happen to say the word incorrectly.
                  </p>
                </div>
                <div class="allwstxt mobilewstxt2">
                  <div class="ws-headline">Help! my significant other says it wrong!</div>
                  <p>day 2 - 5pm to 6pm room 2. This one should be fun! Attendees will practice with others in active role-playing,
                    where they will be tasked with confronting, in a non-threatening way, those they care about the most. Bring your actual
                    significant other to ramp the fun up to eleven!
                  </p>
                </div>
                <div class="allwstxt mobilewstxt3">
                  <div class="ws-headline">Adding Gif's to your everyday</div>
                  <p>day 3 - 9am to 10am room 1. This workshop gives attendees practical ways they can add Gif's to their everyday lives.
                    Tips and tricks, handy techniques and just overall great ideas!
                  </p>
                </div>
                <div class="allwstxt mobilewstxt4">
                  <div class="ws-headline">Adding Gif's to other people's everyday</div>
                  <p>day 3 - 10am to 12pm room 2. A twist on another workshop, this one gives attendees the challenge of trying to provide
                    other people with gif related goodness to help improve their everyday lives. Gif's aren't just for us!
                  </p>
                </div>
                <div class="allwstxt mobilewstxt5">
                  <div class="ws-headline">Recognition for good <br>Gif-ing in your community</div>
                  <p>day 3 - 1pm to 2pm room 3. A special workshop that provides attendees ways that they can show recognition to others
                    that have been providing their communities with the gift of Gif's. Tips, tricks, helpful advice, and lots of fun!
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="ws-button-container">
                <button class="ws-arrow-circle wsprev mobilewsprevarrow" :disabled="mobilepreviousisdisabled" @click="clicker('mobileprevious')">
                    <div class="ws-arrow-1" ref="schedulearrow">
                        <span></span>
                    </div>
                </button>
                <button class="ws-arrow-circle mobilewsnextarrow" :disabled="mobilenextisdisabled" @click="clicker('mobilenext')">
                    <div class="ws-arrow-2" ref="schedulearrow">
                        <span></span>
                    </div>
                </button>
              </div>
            </div>
          </div>
          <div class="desktop-layout">
            <div class="wscol1">
              <div class="workshop-col2 wsimg0">
                <div class="workshop-img-container workshop-img-anim">
                  <img src="/workshops/workshop1.jpg" alt="image of people talking around a computer">
                </div>
              </div>
              <div class="workshop-col2 wsimg1">
                <div class="workshop-img-container">
                  <img src="/workshops/workshop2.jpg" alt="image of someone wearing headphones on a computer">
                </div>
              </div>
              <div class="workshop-col2 wsimg2">
                <div class="workshop-img-container">
                  <img src="/workshops/workshop3.jpg" alt="image of two people looking at a monitor">
                </div>
              </div>
                <div class="workshop-col2 wsimg3">
                <div class="workshop-img-container">
                  <img src="/workshops/workshop4.jpg" alt="image of someone looking at a laptop">
                </div>
              </div>
              <div class="workshop-col2 wsimg4">
                <div class="workshop-img-container">
                  <img src="/workshops/workshop5.jpg" alt="image of people sitting around a wooden table in an office">
                </div>
              </div>
              <div class="workshop-col2 wsimg5">
                <div class="workshop-img-container">
                  <img src="/workshops/workshop6.jpg" alt="image of people standing and talking">
                </div>
              </div>
            </div>
            <div class="wscol2">
              <div class="s2-title4 ws-big-headline workshop-headline-anim">WORKSHOPS</div>
              <div class="ws-copy-container">
                <div class="allwstxt wstxt0">
                  <div class="ws-headline ws-headline-anim">Do you immediately think of peanut butter when encountering a Gif?</div>
                  <p class="ws-txt-anim">starting day 1 from 5pm to 6pm in room 1. This workshop will help attendees acclimate themselves
                    with what a gif is, how to properly say it, and how to associate it with something other than a peanut based spread.
                  </p>
                </div>
                <div class="allwstxt wstxt1">
                  <div class="ws-headline">Gif<br> when people pronouce them with a J</div>
                  <p>day 2 - 10am to 1pm room 2. This one is a continuation from a session from day 1. During this workshop attendees will
                    participate in groups and practice confronting people who happen to say the word incorrectly.
                  </p>
                </div>
                <div class="allwstxt wstxt2">
                  <div class="ws-headline">Help! my significant other says it wrong!</div>
                  <p>day 2 - 5pm to 6pm room 2. This one should be fun! Attendees will practice with others in active role-playing,
                    where they will be tasked with confronting, in a non-threatening way, those they care about the most. Bring your actual
                    significant other to ramp the fun up to eleven!
                  </p>
                </div>
                <div class="allwstxt wstxt3">
                  <div class="ws-headline">Adding Gif's to your everyday</div>
                  <p>day 3 - 9am to 10am room 1. This workshop gives attendees practical ways they can add Gif's to their everyday lives.
                    Tips and tricks, handy techniques and just overall great ideas!
                  </p>
                </div>
                <div class="allwstxt wstxt4">
                  <div class="ws-headline">Adding Gif's to other people's everyday</div>
                  <p>day 3 - 10am to 12pm room 2. A twist on another workshop, this one gives attendees the challenge of trying to provide
                    other people with gif related goodness to help improve their everyday lives. Gif's aren't just for us!
                  </p>
                </div>
                <div class="allwstxt wstxt5">
                  <div class="ws-headline">Recognition for good <br>Gif-ing in your community</div>
                  <p>day 3 - 1pm to 2pm room 3. A special workshop that provides attendees ways that they can show recognition to others
                    that have been providing their communities with the gift of Gif's. Tips, tricks, helpful advice, and lots of fun!
                  </p>
                </div>
              </div>
              <div class="ws-button-container">
                <button class="ws-arrow-circle wsprev wsprevarrow" :disabled="previousisdisabled" @click="clicker('previous')">
                    <div class="ws-arrow-1" ref="schedulearrow">
                        <span></span>
                    </div>
                </button>
                <button class="ws-arrow-circle wsnextarrow" :disabled="nextisdisabled" @click="clicker('next')">
                    <div class="ws-arrow-2" ref="schedulearrow">
                        <span></span>
                    </div>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class="spacer-big spacer-mobile"></div> 
  </div>
</template>


<style>

.workshop-col
{
  display:flex;
  flex-direction:column;
  height:1000px;
}

.mobile-layout
{
  display:none;
}

.desktop-layout
{
  display: flex;
  flex-direction: row;
  width: 100vw;
}

.s2-title4
{
  margin-left:30px;
}

.col-container
{
  display:flex;
  flex-direction:row;
}

.wscol1
{
  flex:0 670px;
}

.ws-copy-container
{
  margin-top:100px;
  height:inherit
}

.allwstxt{
  position:absolute;
  top:0;
  left:0;
  padding:50px 200px 0 40px;
  opacity:.5;
}

.ws-headline{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:3rem;
  font-weight:600;
  margin-bottom:10px;
}

.wstxt0{
  z-index:1010;
  opacity:1;
}
.wstxt1{
  z-index:1011;
  opacity:0;
}
.wstxt2{
  z-index:1012;
  opacity:0;
}
.wstxt3{
  z-index:1013;
  opacity:0;
}
.wstxt4{
  z-index:1014;
  opacity:0;
}
.wstxt5{
  z-index:1015;
  opacity:0;
}

.ws-button-container
{
  padding:210px 0 0 40px;
  position:relative;
  z-index:20000;
}

.wsprev
{
  opacity:.4;
}
.ws-arrow-circle
{
    width:40px;
    height:40px;
    border-radius:50%;
    margin-right:14px;
    background-color:#F280CA;
    cursor: pointer;
}
.ws-arrow-1
{
    position: absolute;
  top: 43%;
  left: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(-180deg);
}
.ws-arrow-1 span {
  display: block;
  width: 12px;
  height: 12px;
  border-bottom: 3px solid #0D0D0D;
  border-right: 3px solid #0D0D0D;
  transform: rotate(-45deg);
  margin: -3px;
  animation: animate 2s infinite;
}

.ws-arrow-2
{
    position: absolute;
  top: 43%;
  left: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(-90deg);
}
.ws-arrow-2 span {
  display: block;
  width: 12px;
  height: 12px;
  border-bottom: 3px solid #0D0D0D;
  border-right: 3px solid #0D0D0D;
  transform: rotate(45deg);
  margin: -3px;
  animation: animate 2s infinite;
}

.wscol2
{
  flex:1;
  height:300px;
}

.ws-big-headline
{
  font-family: 'Antonio', sans-serif;
  color: #F2F2F2;
  font-size:8rem;
  font-weight:600;
  line-height:.8;
}

.workshop-col2
{
  width:670px; 
  padding:0 50px 0 20px;
}

.wsimg0{
  position:absolute;
  z-index:999;
  right:0vw;
  opacity:1;
}

.wsimg1{
  position:absolute;
  z-index:1004;
  right:0vw;
  opacity:0;
}
.wsimg2{
  position:absolute;
  z-index:1003;
  right:0vw;
  opacity:0;
}
.wsimg3{
  position:absolute;
  z-index:1002;
  right:0vw;
  opacity:0;
}
.wsimg4{
  position:absolute;
  z-index:1001;
  right:0vw;
  opacity:0;
}
.wsimg5{
  position:absolute;
  z-index:1000;
  right:0vw;
  opacity:0;
}

.workshop-img-container
{
  top:0;
  left:0;
  width:600px;
  height:800px;
}

.workshop-img-container img
{
  top:0;
  left:0;
  width:100%;
  height:100%;
  object-fit:cover;
  z-index:0;  

  filter: brightness(1) contrast(1) grayscale(.7);
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{
  .mobile-layout
  {
    display:block;
  }

  .desktop-layout
  {
    display:none;
  }

  .workshop-col
  {
    height:auto;
  }
  
  .wscol1
  {
    height:275px;
    margin-top:30px;
  }

  .mobilewsimg0
  {
    position:absolute;
    z-index:999;
    right:0vw;
    opacity:1;
  }

  .mobilewsimg1
  {
    position:absolute;
    z-index:1004;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg2
  {
    position:absolute;
    z-index:1003;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg3
  {
    position:absolute;
    z-index:1002;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg4
  {
    position:absolute;
    z-index:1001;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg5
  {
    position:absolute;
    z-index:1000;
    right:0vw;
    opacity:0;
  }

  .workshop-img-container
  {
    position:relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .worshop-img-container img
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .s2-title4
  {
    margin-left:0px;
  }
  .ws-big-headline
  {
    font-size:5rem;
  }

  .ws-copy-container
  {
    margin-top: 0px;
    width: 100%;
    height: 200px;
  }
  .allwstxt
  {
    padding:0px;
    opacity:0;
  }
  
  .mobilewstxt0
  {
    opacity:1;
  }

  .ws-headline
  {
    font-size: 1.125rem;
  }
  .ws-button-container
  {
    padding:0px;
  }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{
  .mobile-layout
  {
    display:block;
  }

  .desktop-layout
  {
    display:none;
  }

  .workshop-col
  {
    height:auto;
  }
  
  .wscol1
  {
    height:425px;
    margin-top:30px;
  }

  .mobilewsimg0
  {
    position:absolute;
    z-index:999;
    right:0vw;
    opacity:1;
  }

  .mobilewsimg1
  {
    position:absolute;
    z-index:1004;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg2
  {
    position:absolute;
    z-index:1003;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg3
  {
    position:absolute;
    z-index:1002;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg4
  {
    position:absolute;
    z-index:1001;
    right:0vw;
    opacity:0;
  }
  .mobilewsimg5
  {
    position:absolute;
    z-index:1000;
    right:0vw;
    opacity:0;
  }

  .workshop-img-container
  {
    position:relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .worshop-img-container img
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
  }

  .s2-title4
  {
    margin-left:0px;
  }
  .ws-big-headline
  {
    font-size:8rem;
  }

  .ws-copy-container
  {
    margin-top: 0px;
    width: 100%;
    height: 200px;
  }
  .allwstxt
  {
    padding:0px;
    opacity:0;
  }
  
  .mobilewstxt0
  {
    opacity:1;
  }

  .ws-copy-container
  {
    height: 200px;
  }

  .ws-headline
  {
    font-size: 2rem;
  }
  .ws-button-container
  {
    padding:0px;
  }
}

</style>