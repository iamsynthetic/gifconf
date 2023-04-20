<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

const props = defineProps({
    title: String,
    body: String
})

let btntitle = String;
let container = String;
let thecopy = String;
let dline = String;
let titleref = String;
let schedulearrow = String;
let schedulearrowcircle = String;
let showSection = ref(false);
let isDisabled = ref(false);

const arrowtl = gsap.timeline()

// const arrowAnim = (bool) => {

// if(bool == 'forward')
// {     
//   arrowtl.to('.arrow3', {y:20, duration:.4, delay:.1, ease: 'Circ.easeInOut'})
//   .to('.arrow2', {y:20, duration:.3, delay:-.3, ease: 'Circ.easeInOut'})
//   .to('.arrow1', {y:20, duration:.2, delay:-.2, ease: 'Circ.easeInOut'})
//   .to('.arrow3', {opacity:0, delay:-.5})
//   .to('.arrow2', {opacity:0, delay:-.5})
//   .to('.arrow1', {opacity:0, delay:-.5})
//   .set('.arrow3', {y:-40, opacity:0})
//   .set('.arrow2', {y:-40, opacity:0})
//   .set('.arrow1', {y:-40, opacity:0})
//   .to('.arrow3', {y:0, opacity:1, duration:.4, ease:'Circ.easeInOut'})
//   .to('.arrow2', {y:0, opacity:1, duration:.3, delay:-.3, ease:'Circ.easeInOut'})
//   .to('.arrow1', {y:0, opacity:1, duration:.2, delay:-.2, ease:'Circ.easeInOut'})
  
//   gsap.to('.buybutton', {scaleX:.9, scaleY:.9, duration:.3, ease:'Back.easeInOut'})
//   let rule = CSSRulePlugin.getRule(".buybutton::before"); //get the rule
//   btntl.to(rule, {duration: .5, cssRule: {marginLeft:"0px"}, ease:'Circ.easeInOut'});

// } 
// else if(bool == 'backward')
// {
//   gsap.to('.buybutton', {scaleX:1, scaleY:1, duration:.3, ease:'Back.easeInOut'})
//   let rule = CSSRulePlugin.getRule(".buybutton::before"); //get the rule
//   btntl.to(rule, {duration: .5, cssRule: {marginLeft:"-300px"}, ease:'Circ.easeInOut'});
// }
// }

// const buttonhover = (hovered) => {
//   if(hovered == true)
//   {
//     arrowAnim('forward')
//   }
//   else 
//   {
//     arrowAnim('backward')
//   }
// }



const domouseover = () => 
{
    console.log('mouse over')
    // gsap.to(titleref, {cssRule: {opacity:1}, duration: .5});
    gsap.to('.button-title', {opacity:1, duration:.5})
    console.log('mouse over 2')
}

const domouseleave = () =>
{
    console.log('mouse leave')
    // gsap.to(titleref, {cssRule: {opacity:.4}, duration: .5});
    gsap.to('.button-title', {opacity:.4, duration:.5})
    console.log('mouse leave 2')
}

const toggle = () => 
{

    isDisabled.value = true

    if(showSection.value == false)
    {
        showSection.value = true
        gsap.set(thecopy, {opacity:0})
        gsap.set(dline, {width:'0%', opacity:1})
        gsap.to(schedulearrowcircle, {scaleX:.8, scaleY:.8, backgroundColor:'#F2F2F2', duration:.5, delay:.1, ease:"Back.easeInOut"})
        gsap.to(schedulearrow, {rotate:0, duration:.5, ease:"Expo.easeInOut"})
        gsap.to(dline, {width: '100%', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(container, {height:'80px', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(thecopy, {opacity:1, duration:.5, ease:"Expo.easeInOut", onComplete:setIsDisabled, onCompleteParams:[false, true]})
        
    }
    else
    {
        gsap.to(schedulearrowcircle, {scaleX:1, scaleY:1, backgroundColor:'#F280CA', duration:.5, delay:.1, ease:"Back.easeInOut"})
        gsap.to(schedulearrow, {rotate:-90, duration:.5,  ease:"Expo.easeInOut"})
        gsap.to(dline, {width: '0%', duration:.5, ease:"Expo.easeInOut"})
        gsap.to(thecopy, {opacity:0, duration:.5, ease:"Expo.easeInOut"})
        gsap.to(container, {height: '0px', duration:.5, ease:"Expo.easeInOut", onComplete:setIsDisabled, onCompleteParams:[false, false]})
    }
}

const setIsDisabled = (param1, shouldshowbool) => 
{
    isDisabled.value = param1;
    if(shouldshowbool == false){
        gsap.set(dline, {opacity:0})
        showSection.value = false
        console.log('setIsDisabled() - showSection.value is: ' + showSection.value)
    }
}

</script>

<template>
    <div class="schedule-list">
        <div class="section">
            <button class="btn" ref="btntitle" :disabled="isDisabled" @mouseover="domouseover" @mouseleave="domouseleave" @click="toggle">
                <div class="button-container">
                    <p class="button-title" ref="titleref">{{ props.title }}</p>
                    <button class="schedule-arrow-circle" ref="schedulearrowcircle">
                        <div class="schedule-arrow" ref="schedulearrow">
                            <span class="arrow1"></span>
                        </div>
                    </button>
                </div>
            </button>
            <hr class="darkline" ref="dline"/>
            <div class="content-container" ref="container" v-show="showSection">
                <p class="copy" ref="thecopy">
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