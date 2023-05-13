<script lang="ts" setup>

function mailTo(){
  window.open(`mailto:uili.kam8@gmail.com.com?subject=${'Lets get in touch'}&body=${'Hello Melvin, I am ..'}%20goes%20here`);
}
function whatsapp(){
  window.open('https://wa.me/659036855')
}
</script>

<template>
  <div class="center">
    <div class="grid grid-cols-2 gap-9 ml-5 lg:ml-9 pb-6  pt-5">
        <v-btn
        @click="whatsapp"
          icon
          size="x-large"
          color="success"
        >
        <font-awesome-icon class="text-4xl font-extrabold" icon="fa-brands fa-whatsapp" shake />
        </v-btn>
        <v-btn
          icon
          color="pink"
          size="x-large"
          @click="mailTo()"
        >
        <font-awesome-icon class="text-3xl font-extrabold" icon="fa-solid fa-envelope"  />
        </v-btn>
       
      </div>
    </div>
</template>
