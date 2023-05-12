<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps(['visible'])
</script>

<template>
      <v-dialog v-on:close="props.visible=false" v-model="props.visible"
        transition="dialog-bottom-transition"
        width="300"
      >
      <v-card class="bg-slate-50 dark:bg-slate-800">

          <p class="bg-slate-50 dark:bg-slate-800 text-2xl pt-4
          font-bold text-center mx-4 text-slate-900 dark:text-slate-50">
            Menu</p>
           <ul class="menux">
            <li v-on:click="{router.push('/'); props.visible=false}" class="menu-item">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-home" bounce /></span> Home
            </li> 

            <li v-on:click="{router.push('/activities'); props.visible=false}" class="menu-item">
              <span ><font-awesome-icon class="mr-2" icon="fa-solid fa-puzzle-piece" bounce /></span> Activities
            </li>
            <li v-on:click="{router.push('/all'); props.visible=false}" class="menu-item">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-book" bounce /></span> All articles</li>
            <li class="menu-item" v-on:click="{router.push('/search'); props.visible=false}">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-magnifying-glass" bounce /></span> Search </li>
            <li class="menu-item" v-on:click="{router.push('/login'); props.visible=false}">
              <span><font-awesome-icon class="mr-2" icon="fa-solid fa-blog" bounce /></span> Post an article</li>
           </ul>


            
          </v-card>
     
      </v-dialog>
</template>

<style lang="postcss" scoped>
.bigM{
    margin-left: 3%;
}

@media screen and (max-width: 850px) {
    .bigM{
    margin-left: 3%;
}
}

.menux{
  @apply mb-4 mt-2 text-slate-900 dark:text-slate-50
}
.menu-item{
@apply mx-5 font-bold text-lg  my-4 border-b-2 
}
</style>
