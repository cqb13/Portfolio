<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isCenterDivVisible = ref(true)
const isDownChevronVisible = ref(true)

const handleScroll = () => {
  if (window.scrollY > 10) {
    isCenterDivVisible.value = false
  } else {
    isCenterDivVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header class="flex justify-between fixed w-screen px-10 pt-10">
    <div class="flex flex-col items-start">
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="https://github.com/cqb13" target="_blank">GitHub</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="https://www.linkedin.com/in/maksim-straus/" target="_blank">LinkedIn</a>
    </div>
    <div v-if="isCenterDivVisible" class="flex items-center flex-col gap-0">
      <p class="font-heading font-black text-xl text-center">Maksim Straus</p>
      <p class="font-heading text-center">Developer Portfolio</p>
    </div>
    <nav class="flex flex-col items-end">
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#home">Home</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#about">About</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#projects">
        Projects
      </a>
      <a class="font-heading font-bold hover:bg-black hover:text-white transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#contact">
        Contact
      </a>
    </nav>
  </header>
  <RouterView />
</template>
