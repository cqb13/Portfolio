<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const darkMode = ref(false)

if (localStorage.getItem('dark-mode') === 'true') {
  darkMode.value = true;
  document.querySelector('html').classList.add('dark');
} else {
  darkMode.value = false;
  document.querySelector('html').classList.remove('dark');
}

if (localStorage.getItem('dark-mode') === 'true') {
  darkMode.value = true;
  document.documentElement.classList.add('dark');
}

const toggleDarkMode = () => {
  if (darkMode.value == true) {
    document.documentElement.classList.remove('dark');
    darkMode.value = false;
    localStorage.setItem('dark-mode', false);
  } else {
    document.documentElement.classList.add('dark');
    darkMode.value = true;
    localStorage.setItem('dark-mode', true);
  }
}

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

var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function (e) {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});</script>

<template>
  <header class="flex justify-between fixed w-screen px-10 pt-10 max-lg:px-5 max-semiLg:px-0 max-semiLg:pt-0">
    <div class="flex flex-col items-start max-semiLg:hidden">
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="https://github.com/cqb13" target="_blank">GitHub</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="https://www.linkedin.com/in/maksim-straus/" target="_blank">LinkedIn</a>
    </div>
    <div v-if="isCenterDivVisible" class="flex items-center flex-col gap-0 max-semiLg:hidden">
      <p class="font-heading font-black text-xl text-center">Maksim Straus</p>
      <p class="font-heading text-center">Developer Portfolio</p>
    </div>
    <nav
      class="flex flex-col items-end max-semiLg:items-center max-semiLg:justify-center max-semiLg:w-full max-semiLg:flex-row max-semiLg:bg-white max-semiLg:bg-opacity-5 max-semiLg:backdrop-blur-xl">
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#home">Home</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#about">About</a>
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#projects">
        Projects
      </a>
      <a class="font-heading font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 m-0 px-2 tracking-wider ease-in-out"
        href="#contact">
        Contact
      </a>
    </nav>
  </header>
  <RouterView />
  <footer class="flex justify-between items-center px-5 text-sm">
    <p>Copyright ©2024</p>
    <p>Created by Maksim Straus</p>
  </footer>
  <div v-if="!darkMode" class="fixed bottom-5 right-5 cursor-pointer" @click="toggleDarkMode">
    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
      class="hover:fill-amber-600 transition-all duration-300 ease-in-out">
      <path
        d="m5.64 17-.71.71a1 1 0 0 0 0 1.41 1 1 0 0 0 1.41 0l.71-.71A1 1 0 0 0 5.64 17M5 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1m7-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1M5.64 7.05a1 1 0 0 0 .7.29 1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.41l-.71-.71a1 1 0 0 0-1.41 1.41Zm12 .29a1 1 0 0 0 .7-.29l.71-.71a1 1 0 1 0-1.41-1.41l-.64.71a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.29ZM21 11h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2m-9 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m6.36-2A1 1 0 0 0 17 18.36l.71.71a1 1 0 0 0 1.41 0 1 1 0 0 0 0-1.41ZM12 6.5a5.5 5.5 0 1 0 5.5 5.5A5.51 5.51 0 0 0 12 6.5m0 9a3.5 3.5 0 1 1 3.5-3.5 3.5 3.5 0 0 1-3.5 3.5" />
    </svg>
  </div>
  <div v-if="darkMode" class="fixed bottom-5 right-5 cursor-pointer" @click="toggleDarkMode">
    <svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
      class="fill-white hover:fill-violet-600 transition-all duration-300 ease-in-out">
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M2.9.5a.4.4 0 0 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm3 3a.4.4 0 1 0-.8 0v.6h-.6a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 1 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zm-4 3a.4.4 0 1 0-.8 0v.6H.5a.4.4 0 1 0 0 .8h.6v.6a.4.4 0 0 0 .8 0v-.6h.6a.4.4 0 0 0 0-.8h-.6zM8.544.982l-.298-.04c-.213-.024-.34.224-.217.4q.211.305.389.632A6.602 6.602 0 0 1 2.96 11.69c-.215.012-.334.264-.184.417q.103.105.21.206l.072.066.26.226.188.148.121.09.187.131.176.115q.18.115.37.217l.264.135.26.12.303.122.244.086a6.6 6.6 0 0 0 1.103.26l.317.04.267.02q.19.011.384.011a6.6 6.6 0 0 0 6.56-7.339l-.038-.277a6.6 6.6 0 0 0-.384-1.415l-.113-.268-.077-.166-.074-.148a6.6 6.6 0 0 0-.546-.883l-.153-.2-.199-.24-.163-.18-.12-.124-.16-.158-.223-.2-.32-.26-.245-.177-.292-.19-.321-.186-.328-.165-.113-.052-.24-.101-.276-.104-.252-.082-.325-.09-.265-.06zm1.86 4.318a7.6 7.6 0 0 0-.572-2.894 5.601 5.601 0 1 1-4.748 10.146 7.6 7.6 0 0 0 3.66-2.51.749.749 0 0 0 1.355-.442.75.75 0 0 0-.584-.732q.093-.174.178-.355A1.25 1.25 0 1 0 10.35 6.2q.052-.442.052-.9" />
    </svg>
  </div>
</template>
