<script lang="ts">
  import type { PageData } from "./$types"
  import { Modal, Video } from "flowbite-svelte"
  // export let data: PageData;

  const showcase = [
    {
      name: "Summarizer with OpenAI GPT-4",
      description: "Simplify your reading with Summarize, an article summarizer that transforms lengthy articles into clear and concise summaries",
      link: { href: "https://webpagesummarizer.vercel.app/", label: "webpagesummarizer.app" },
      logo: "https://webpagesummarizer.vercel.app/assets/logo-0ea84079.svg",
      src: "/showcase/sumz.png",
      technologies: ["React", "Redux", "Vercel", "ChatGPT-4"],
    },
  
  ]

  const projects = [
    {
      name: "CloudDocs",
      description: "Secure file storage and sharing with permission-based access!",
      link: { href: "http://adhocweb.tech", label: "adhocweb.tech" },
      logo: "/logos/clouddocs.png",
      src: "/videos/clouddocs.mp4",
    },
    {
      name: "aceAppraisal",
      description: "Designed to help you achieve showcase your accomplishments!",
      link: { href: "http://adhocweb.tech", label: "adhocweb.tech" },
      logo: "/logos/target.png",
      src: "/videos/aceappraisals.mp4",
    },
    {
      name: "Taskapp",
      description: "Productivity app designed to boost your efficiency and help you achieve your goals!",
      link: { href: "http://adhocweb.tech", label: "adhocweb.tech" },
      logo: "/logos/task.png",
      src: "/videos/taskapp.mp4",
    },
    {
      name: "xPense",
      description: "Easily track your expenses, categorize your spending, and set budgets to ensure that you stay on track with your finances.",
      link: { href: "http://adhocweb.tech", label: "adhocweb.tech" },
      logo: "/logos/expense.png",
      src: "/videos/expense.mp4",
    },
    {
      name: "caterGo",
      description: "The schematics for the first rocket I designed that successfully made it to orbit.",
      link: { href: "http://adhocweb.tech", label: "adhocweb.tech" },
      logo: "/logos/catergo.png",
      src: "/videos/catergo.mp4",
    },
  ]
  let open = false
  let vidSrc = ""
  const popupModal = (src: string) => {
    open = true
    vidSrc = src
  }
</script>

<svelte:head>
  <title>Projects - Josh Horsfall</title>
  <meta name="description" content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order." />
</svelte:head>

<Modal bind:open size="xl" autoclose>
  <div class="text-center">
    <Video src={vidSrc} autoplay controls trackSrc="flowbite.mp4" />
  </div>
</Modal>

<section class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
  <header class="max-w-2xl">
    <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">Things I’ve made trying to put my dent in the universe.</h1>
    <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">I've done many small projects over time, but there are a few that I'm particularly proud of. Some of them are available for anyone to use and modify, so if you find something that catches your eye, you can take a look at the code and even suggest ways to make it better!</p>
  </header>

  <div class="mt-16 space-y-20">
    <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="grid max-w-6xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Showcase</h2>
        <div class="md:col-span-3">
          <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-2">
            {#each showcase as { name, description, link, logo, technologies, src }}
              <li class="hover:bg-zinc-50 hover:dark:bg-zinc-800/50 min-h-[22.5rem] relative h-full flex flex-col p-2 rounded-2xl">
                <div class="flex h-8 items-center my-1 -mx-1.5 px-2">
                  <div class="flex flex-row ml-auto">
                    <div class="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <a href={link.href} target="_blank" class="cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.0" stroke="currentColor" class="text-zinc-800 dark:text-zinc-100 w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    </a>
                    </div>
                  </div>
                </div>

                <div class="px-6 flex flex-col ">
                  <h2 class="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    {name}
                  </h2>

                  <div class="py-2 flex gap-2">
                    {#each technologies as tech}
                      <span class="inline-flex items-center rounded-md bg-green-500/10 px-2 py-1 text-xs font-medium text-green-400 ring-1 ring-inset ring-green-500/20">{tech}</span>
                    {/each}
                  </div>

                  <p class="relative z-10 my-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {description}
                  </p>
                </div>

                <div class="relative flex flex-1 flex-col">
                  <img alt="Post Cover" {src} class="object-cover my-2 rounded-xl h-40 bg-white shadow-md shadow-zinc-800/5" loading="lazy" />
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </section>

    <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div class="grid max-w-6xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Products</h2>
        <div class="md:col-span-3">
          <ul class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {#each projects as { name, description, link, logo, src }}
              <li on:click={() => popupModal(src)} on:keydown class="group relative flex flex-col items-start">
                <div class="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <img src={logo} alt="" class="h-8 w-8" />
                </div>
                <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  <div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />

                  <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                  <span class="relative z-10">{name}</span>
                </h2>
                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {description}
                </p>

                <p class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none">
                    <path
                      d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                      fill="currentColor" />
                  </svg>
                  <span class="ml-2">{link.label}</span>
                </p>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </section>
  </div>
</section>
