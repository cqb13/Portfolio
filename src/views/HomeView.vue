<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '../assets/projects.ts'
import { technologies } from '../assets/technologies.ts'
const isDownChevronVisible = ref(true)

const handleScroll = () => {
  if (window.scrollY > window.innerHeight - window.innerHeight / 5) {
    isDownChevronVisible.value = false
  } else {
    isDownChevronVisible.value = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const birthDate = new Date('2007-3-30')

const startDate = new Date('2018-10-25')

const age = ref(new Date(Date.now() - birthDate.getTime()).getFullYear() - 1970)
const experience = ref(new Date(Date.now() - startDate.getTime()).getFullYear() - 1970)

const getIconPath = (iconName: string) => {
  return new URL(`../assets/icons/${iconName}`, import.meta.url).href;
}
</script>

<template>
  <main class="px-10">
    <section id="home" class="flex items-center justify-center h-screen">
      <div>
        <h1 class="font-heading font-black text-9xl">Hi, I'm Maksim</h1>
        <div class="flex gap-2 justify-center align-center">
          <a href="https://github.com/cqb13" target="_blank"
            class="cursor-pointer hover:fill-highlight transition-all duration-300 ease-in-out">
            <svg width="60" height="60" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer">
              <path
                d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/maksim-straus" target="_blank">
            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer hover:fill-highlight transition-all duration-300 ease-in-out">
              <path
                d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
            </svg>
          </a>
        </div>
      </div>
      <a href="#about" class="animate-bounce absolute bottom-20" v-if="isDownChevronVisible">
        <img src="../assets/chevronDown.svg" alt="chevron down" />
      </a>
    </section>
    <section id="about" class="min-h-screen px-32 pt-40">
      <div class="w-1/2">
        <h2 class="font-heading font-black text-6xl">About Me</h2>
        <span class="font-body text-2xl">
          I’m a {{ age }}-year-old web developer with {{ experience }} years of experience. I have a strong background
          in
          <b class="text-highlight">Java</b>, <b class="text-highlight">TypeScript</b>, and
          <b class="text-highlight">Rust</b>.
        </span>
      </div>
      <div class="mt-2">
        <h3 class="font-heading font-black text-3xl">Technologies</h3>
        <div class="grid grid-cols-4 gap-2">
          <div v-for="technology in technologies" :key="technology.name"
            class="border-black border-2 rounded-lg p-10 flex gap-2 align-center">
            <img :src="getIconPath(technology.icon)" :alt="technology.name" width="60" height="60">
            <p class="flex flex-col justify-center align-center text-2xl">{{ technology.name }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="min-h-screen px-32 pt-40">
      <h2 class="font-heading font-black text-6xl">Projects</h2>
      <span class="font-body text-xl">View more on
        <a href="https://github.com/cqb13" target="_blank" class="text-highlight">my GitHub</a></span>
      <section class="flex flex-col gap-2">
        <div v-for="project in projects">
          <div v-if="project.type == 'important'" class="bg-slate-50 rounded p-1">
            <section class="flex justify-between gap-2">
              <div class="w-1/2">
                <h3 class="font-heading font-black text-3xl">{{ project.title }}</h3>
                <p class="font-heading text-lg">{{ project.description }}</p>
              </div>
              <div class="w-1/2">
                <img :src="project.image" :alt="project.title" class="w-full h-5/6 rounded" />
              </div>
            </section>
            <div class="flex gap-2 justify-between items-center text-xl">
              <a :href="project.github" v-if="project.github" target="_blank"
                class="text-highlight font-bold text-center hover:tracking-widest transition-all duration-300 ease-in-out">
                View Code
              </a>
              <a :href="project.website" v-if="project.website" target="_blank"
                class="text-highlight font-bold text-center hover:tracking-widest transition-all duration-300 ease-in-out">
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  </main>
</template>
