<script setup>
import { technologies } from './assets/technologies.ts'
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from './assets/projects.ts'
import emailjs from '@emailjs/browser'

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

var cursor = document.querySelector('.blob');

document.addEventListener('mousemove', function (e) {
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

const birthDate = new Date('2007-03-30')

const startDate = new Date('2018-10-25')

const age = ref(new Date(Date.now() - birthDate.getTime()).getFullYear() - 1970)
const experience = ref(new Date(Date.now() - startDate.getTime()).getFullYear() - 1970)

const getIconPath = (iconName) => {
  return new URL(`./assets/icons/${iconName}`, import.meta.url).href;
}

const getImagePath = (imageName) => {
  return new URL(`./assets/images/${imageName}`, import.meta.url).href;
}

const formData = ({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const errorMessage = ref('')
const successMessage = ref('')

const clearMessageAfterDelay = (messageRef) => {
  setTimeout(() => {
    messageRef.value = ''
  }, 5000) // 5 seconds
}

const sendEmail = async () => {
  try {
    errorMessage.value = ''
    successMessage.value = ''

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      throw new Error('Please fill in all fields')
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      throw new Error('Please enter a valid email address')
    }

    // Convert newlines to HTML line breaks for email
    const formattedMessage = formData.message
      .replace(/\n/g, '<br>')  // Convert newlines to HTML breaks
      .replace(/\t/g, '&nbsp;&nbsp;&nbsp;&nbsp;')  // Convert tabs to spaces
      .replace(/ {2,}/g, match => '&nbsp;'.repeat(match.length)) // Preserve multiple spaces

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      message: formattedMessage,
      // Include original message for plain text emails
      message_plain: formData.message
    }

    await emailjs.send(
      import.meta.env.VITE_EMAIL_SERVICE_ID,
      import.meta.env.VITE_EMAIL_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAIL_USER_ID
    )

    formData.value = {
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    }

    successMessage.value = 'Message sent successfully!'
    clearMessageAfterDelay(successMessage)
  } catch (error) {
    console.log(error)
    errorMessage.value = error instanceof Error ? error.message : 'Failed to send message'
    clearMessageAfterDelay(errorMessage)
  }
}
</script>

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
  <main class="px-10 max-semiLg:px-5 max-sm:px-2">
    <section id="home" class="flex items-center justify-center h-screen">
      <div>
        <h1 class="font-heading font-black text-center text-9xl max-lg:text-8xl">Hi, I'm Maksim</h1>
        <div class="flex gap-2 justify-center items-center">
          <a href="https://github.com/cqb13" target="_blank"
            class="cursor-pointer hover:fill-highlight dark:fill-white dark:hover:fill-highlight transition-all duration-300 ease-in-out">
            <svg width="60" height="60" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer">
              <path
                d="M12 2.247a10 10 0 0 0-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.64 3.64 0 0 0-1.025-1.413c-.35-.187-.85-.65-.013-.662a2 2 0 0 1 1.538 1.025 2.137 2.137 0 0 0 2.912.825 2.1 2.1 0 0 1 .638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.9 3.9 0 0 1 1.025-2.688 3.6 3.6 0 0 1 .1-2.65s.837-.262 2.75 1.025a9.43 9.43 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025a3.6 3.6 0 0 1 .1 2.65 3.87 3.87 0 0 1 1.025 2.688c0 3.837-2.338 4.687-4.562 4.937a2.37 2.37 0 0 1 .674 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0 0 12 2.247" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/maksim-straus" target="_blank">
            <svg width="60" height="60" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
              class="cursor-pointer hover:fill-highlight dark:fill-white dark:hover:fill-highlight transition-all duration-300 ease-in-out">
              <path
                d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z" />
            </svg>
          </a>
        </div>
      </div>
      <a href="#about" class="animate-bounce absolute bottom-20" v-if="isDownChevronVisible">
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
          class="fill-black dark:fill-white">
          <g fill="none" fill-rule="evenodd">
            <path
              d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
            <path
              d="M13.06 16.06a1.5 1.5 0 0 1-2.12 0l-5.658-5.656a1.5 1.5 0 1 1 2.122-2.121L12 12.879l4.596-4.596a1.5 1.5 0 0 1 2.122 2.12z"
              class="fill-dark dark:fill-white" fill="black" />
          </g>
        </svg>
      </a>
    </section>
    <section id="about" class="min-h-screen px-32 pt-40 max-lg:px-16 max-semiLg:w-full max-semiLg:px-5 max-sm:px-1">
      <div class="w-1/2 max-xl:w-8/12 max-lg:w-11/12">
        <h2 class="font-heading font-black text-6xl">About Me</h2>
        <span class="font-body text-2xl">
          I’m a {{ age }}-year-old developer with {{ experience }} years of experience. I have a strong background
          in
          <b class="text-highlight">Java</b>, <b class="text-highlight">TypeScript</b>, and
          <b class="text-highlight">Rust</b>.
        </span>
      </div>
      <div class="mt-2">
        <h3 class="font-heading font-black text-3xl">Technologies</h3>
        <div class="grid grid-cols-4 gap-2 max-semiLg:grid-cols-3 max-sm:grid-cols-2">
          <div v-for="technology in technologies" :key="technology.name"
            class="border-black border-2 rounded-lg p-10 flex gap-2 flex-wrap items-center justify-center hover:scale-[1.01] transition-all duration-300 ease-in-out">
            <img :src="getIconPath(technology.icon)" :alt="technology.name" width="60" height="60">
            <p class="flex flex-col justify-center items-center text-center text-2xl">{{ technology.name }}</p>
          </div>
        </div>
      </div>
    </section>
    <section id="projects" class="min-h-screen px-32 pt-40 max-lg:px-16 max-semiLg:px-5 max-sm:px-1">
      <h2 class="font-heading font-black text-6xl">Projects</h2>
      <span class="font-body text-xl">View more on
        <a href="https://github.com/cqb13" target="_blank" class="text-highlight hover:underline">my GitHub</a></span>
      <section class="grid grid-cols-2 gap-2 max-semiLg:grid-cols-1">
        <div v-for="project in projects"
          class="flex flex-col gap-2 p-10 justify-between border-black border-2 rounded-lg hover:scale-[1.01] transition-all duration-300 ease-in-out">
          <div class="flex flex-col gap-2 justify-between h-full">
            <div class="flex flex-col gap-2">
              <h3 class="font-heading font-black text-3xl">{{ project.title }}</h3>
              <p class="font-heading text-lg">{{ project.description }}</p>
            </div>
            <div class="flex gap-2">
              <img v-for="technology in project.technologies" :src="getIconPath(technologies[technology].icon)"
                :alt="technologies[technology].name" class="w-[40px] h-[40px]">
            </div>
          </div>
          <div class="flex gap-2 justify-between text-center items-center text-xl max-semiLg:text-lg">
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
      </section>
    </section>
    <section id="contact" class="min-h-screen px-32 pt-40 max-lg:px-16 max-semiLg:px-5 max-sm:px-1">
      <h2 class="font-heading font-black text-6xl">Contact</h2>
      <a href="mailto:maksim@maksimstraus.com" target="_blank"
        class="font-body text-xl text-highlight hover:underline">maksim@maksimstraus.com</a>
      <section class="flex flex-col gap-2">
        <div class="flex gap-2 items-center max-xs:flex-col">
          <input type="text" v-model="formData.firstName" placeholder="Enter first name..."
            class="bg-white bg-opacity-0 rounded-lg border-black border-2 w-full p-4 outline-none focus:border-highlight font-body">
          <input type="text" v-model="formData.lastName" placeholder="Enter last name..."
            class="bg-white bg-opacity-0 rounded-lg border-black border-2 w-full p-4 outline-none focus:border-highlight font-body">
        </div>
        <input type="text" v-model="formData.email" placeholder="Enter email..."
          class="bg-white bg-opacity-0 rounded-lg border-black border-2 w-full p-4 outline-none focus:border-highlight font-body">
        <textarea placeholder="Enter message..." v-model="formData.message"
          class="bg-white bg-opacity-0 rounded-lg border-black border-2 w-full p-4 outline-none focus:border-highlight font-body whitespace-pre-wrap"
          rows="10" cols="30"></textarea>
        <button @click="sendEmail"
          class="font-body text-black dark:text-white p-4 w-full rounded-lg border-black border-2 hover:bg-black dark:hover:bg-white dark:hover:bg-opacity-70 dark:hover:text-black hover:text-white transition-all duration-300 ease-in-out active:tracking-widest">Send
          Message</button>
        <p v-if="errorMessage" class="text-red-500 text-center font-body">{{ errorMessage }}</p>
        <p v-if="successMessage" class="text-green-500 text-center font-body">{{ successMessage }}</p>
      </section>
    </section>
  </main>
  <footer class="flex justify-between items-center px-5 text-sm">
    <p>Copyright ©2025</p>
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
