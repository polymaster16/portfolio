
<script setup>
import BasicLayout from '../layouts/basic.vue'
import CoolTop from '@/components/CoolTop.vue';
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import { Typed } from "@duskmoon/vue3-typed-js";
import prd from '../assets/linkedinProfile.jpeg'
import fac from '../assets/facebookImg.jpg'

import { useDark, useToggle } from '@vueuse/core';

const darkMode = useDark();
const dmcl = ref(null) ;
  
onMounted(() => {
 // console.log(darkMode)
 if(darkMode.value === true)
   {
    dmcl.value = "shade2"
   }
   else{
    dmcl.value = "shade1"
   }
})


watch(darkMode, (newDarkMode) => {
   // Do something with the updated value.
   //console.log("dmupdaded")
   if(darkMode.value === true)
   {
    dmcl.value = "shade2"
   }
   else{
    dmcl.value = "shade1"
   }
});

const name = ref("William") 
const my = useRouter() 

const options = {
    strings: ["Hello World!", " I'm Kamdem William", "A FullStack Web and Mobile Develloper"],
    loop: true,
    typeSpeed: 90,
  };

  const slides = ref([
{
  img: prd
},
{
  img:"https://cdn.pixabay.com/photo/2015/01/08/18/27/startup-593341_960_720.jpg"
},
{
  img:'https://cdn.pixabay.com/photo/2021/12/15/10/21/chess-6872239_960_720.jpg'
}

  ])
</script>

<template>

      <div class="img1 ">
        <div :class="dmcl">
        <CoolTop/>

        <div class="grid grid-cols-1 lg:grid-cols-2 justify-start mx-9">
  <div>
<carousel dir="rtl" :transition="500" v-bind:wrap-around="true">
    <slide v-for="x in slides" :key="x.img">
      <img class="circularLogo" :src="x.img">
    </slide>
  </carousel>
</div>

<div class="flex flex-col justify-center mt-8 lg:mt-0">
<Typed :options="options">
    <div class="typing heroText"></div>
    </Typed>
  </div>

</div>

</div>

      </div>

     <div class="text-slate-100 text-4xl font-bold text-center mb-4 mt-14">
      About <span class="text-red-500 font-bold">Me</span>
     </div>

     <p class="text-2xl text-left mx-8 mb-4 text-slate-100">
      Hello, I'm William, a software engineering student and a full-stack developer.
     <br>  <span><font-awesome-icon icon="fa-solid fa-fan" spin/></span>
     -I have a passion for building innovative and functional web applications that solve real-world problems. 
     <br> 
     <span><font-awesome-icon icon="fa-solid fa-rocket"  /></span> -From ideation to deployment, I enjoy being involved in all aspects of the development process.

    </p>


    <div class="text-4xl font-bold text-center mb-7 mt-14 text-slate-100">
      My Services
     </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-5 ">
        <div>
        <v-img class="rounded-2xl elevation-10 hover:elevation-20"
        src="https://cdn.pixabay.com/photo/2017/10/05/14/43/register-2819608_960_720.jpg">
        <div class="bg-black opacity-0 hover:opacity-40 h-100">
      </div>
      </v-img>
      <div class="text-2xl text-center text-slate-100 font-bold mt-4">Mobile App Devellopment</div>-bold
    </div>

    <div>
      <v-img class="rounded-2xl elevation-10"
        src="https://cdn.pixabay.com/photo/2016/08/17/04/43/template-1599667_960_720.png">
      <div class="bg-black opacity-0 hover:opacity-40 h-100">
      </div>
      </v-img>
      <div class="text-2xl text-center text-slate-100 font-bold mt-4">
        Your custom Website/ Webapp</div>
    </div>
   
      <div>
      <v-img class="rounded-2xl elevation-10"
        src="https://cdn.pixabay.com/photo/2015/02/05/08/12/stock-624712_960_720.jpg">
        <div class="bg-black opacity-0 hover:opacity-40 h-100">
      </div>
      </v-img>
      <div class="text-2xl text-center text-slate-100 font-bold mt-4">
        Others</div>
      </div>
    </div>


      <div class="text-slate-100 text-4xl font-bold text-center mb-4 mt-14">
      Contact <span class="text-red-500 font-bold">Me</span> For <span class="text-red-500 font-bold">All</span>
     projects
    </div>

    <div class="mx-8 bg-gray-800">
  <v-text-field label="Your Name"
  class="bg-slate-100 text-slate-900"/>

  <v-textarea label="Your Message" max-width="100%"
  class="bg-slate-100 text-slate-900"/>
          

      
</div>

      <br>
In my free time, I love playing chess. It's a great way to challenge my mind and improve my critical thinking skills. I also enjoy exploring new technologies and learning new skills to stay up-to-date with the latest trends in the industry.

My goal is to become a skilled and well-rounded developer who can contribute to the growth of the tech industry. With my dedication, creativity, and attention to detail, I'm confident that I can bring value to any team.

Thank you for visiting my portfolio site. Feel free to take a look at my projects and contact me if you have any questions or collaboration opportunities."







   

</template>

<style lang="" scoped>

</style>

    
