<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const props = defineProps({
    title: String,
    body: String,
    classtitle: String,
    classschedulearrowcircle: String,
    classschedulearrow: String,
    classdline: String,
    classcontainer: String,
    classthecopy: String
})

let showSection = ref(false);
let isDisabled = ref(false);
let titleclass = props.classtitle;
let schedulearrowcircleclass = props.classschedulearrowcircle;
let schedulearrowclass = props.classschedulearrow;
let dlineclass = props.classdline;
let containerclass = props.classcontainer;
let thecopyclass = props.classthecopy;

const domouseover = () => 
{
    gsap.to(String('.'+titleclass), {opacity:1, duration: .5});
}

const domouseleave = () =>
{
    gsap.to(String('.'+titleclass), {opacity:.4, duration: .5});
}

const toggle = () => 
{

    isDisabled.value = true

    if(showSection.value == false)
    {
        showSection.value = true
        gsap.set(String('.'+thecopyclass), {opacity:0})
        gsap.set(String('.'+dlineclass), {width:'0%', opacity:1})
        gsap.to(String('.'+schedulearrowcircleclass), {scaleX:.8, scaleY:.8, backgroundColor:'#F2F2F2', duration:.5, delay:.1, ease:"Back.easeInOut"})
        gsap.to(String('.'+schedulearrowclass), {rotate:0, duration:.5, ease:"Expo.easeInOut"})
        gsap.to(String('.'+dlineclass), {width: '100%', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(String('.'+containerclass), {height:'80px', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(String('.'+thecopyclass), {opacity:1, duration:.5, ease:"Expo.easeInOut", onComplete:setIsDisabled, onCompleteParams:[false, true]})
        
    }
    else
    {
        gsap.to(String('.'+schedulearrowcircleclass), {scaleX:1, scaleY:1, backgroundColor:'#F280CA', duration:.5, delay:.1, ease:"Back.easeInOut"})
        gsap.to(String('.'+schedulearrowclass), {rotate:-90, duration:.5,  ease:"Expo.easeInOut"})
        gsap.to(String('.'+dlineclass), {width: '0%', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(String('.'+thecopyclass), {opacity:0, duration:.5, ease:"Expo.easeInOut"})
        gsap.to(String('.'+containerclass), {height: '0px', duration:.5, ease:"Expo.easeInOut", onComplete:setIsDisabled, onCompleteParams:[false, false]})
    }
}

const setIsDisabled = (param1, shouldshowbool) => 
{
    isDisabled.value = param1;
    if(shouldshowbool == false){
        gsap.set(String('.'+dlineclass), {opacity:0})
        showSection.value = false
    }
}

</script>

<template>
    <div class="schedule-list">
        <div class="section">
            <button class="btn" :disabled="isDisabled" @mouseover="domouseover" @mouseleave="domouseleave" @click="toggle">
                <div class="button-container">
                    <p class="button-title" :class="classtitle">{{ props.title }}</p>
                    <button class="schedule-arrow-circle" :class="classschedulearrowcircle">
                        <div class="schedule-arrow" :class="classschedulearrow">
                            <span class="arrow1"></span>
                        </div>
                    </button>
                </div>
            </button>
            <hr class="darkline" :class="classdline"/>
            <div class="content-container" :class="classcontainer" v-show="showSection">
                <p class="copy" :class="classthecopy">
                    {{ props.body }}
                </p>
            </div>
        </div>
    </div>
</template>


<style>

.section 
{
  margin:0 80px 20px 50px;
}

.btn
{
    all: unset;
    cursor: pointer;
    font-family: 'Antonio', sans-serif;
    color: #F2F2F2;
    font-size:2rem;
    font-weight:300;
    line-height:1.25;
    width:100%;
}

.button-container
{
  display:flex;
  flex-direction:row;
  width:100%;
}

.button-title
{
    font-size:2rem;
    opacity:.4;
    flex-grow:2;
}

.schedule-arrow-circle
{
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:#F280CA;
}
.schedule-arrow
{
    position: absolute;
  top: 43%;
  left: 38%;
  transform: translate(-50%, -50%);
  transform: rotate(-90deg);
  cursor: pointer;
}
.schedule-arrow span {
  display: block;
  width: 12px;
  height: 12px;
  border-bottom: 3px solid #0D0D0D;
  border-right: 3px solid #0D0D0D;
  transform: rotate(45deg);
  margin: -3px;
  animation: animate 2s infinite;
}

.lightline
{
    opacity:0;
}

.darkline 
{
    opacity:.1;
    background-color:#F280CA;
    height:2px;
    border:none;
    margin-top:10px;
}

.content-container
{
    width:500px;
    height:0px;
}

.copy
{
    margin-top:10px;
    color:#F2F2F2;
    font-family:'Lato';
    font-weight: 700;
    font-size: 1rem;
}

/********************* MEDIA QUERIES *****************************/

/* mobile */
@media only screen and (min-width: 375px) and (max-width: 767px)
{   
    .section 
    {
        margin:0;
    }

    .button-title
    {
        font-size:1.375rem;
    }

    .content-container
    {
        width:80%;
    }

    .copy
    {
        margin-top:20px;
    }
}

/* tablet */
@media only screen and (min-width: 768px) and (max-width: 1024px)
{   
    .section 
    {
        margin:0px 0px 20px 0px;
    }
    .button-title
    {
        font-size:2rem;
    }
}






</style>