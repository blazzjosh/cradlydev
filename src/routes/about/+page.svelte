<script lang="ts">
    import type { PageData } from './$types';
    import Icon from '$lib/components/Icon.svelte';
    export let data: PageData;

    let socials = [
        { name:"Twitter", href: "https://twitter.com/cradlydev"},
        { name:"Instagram", href: "https://www.instagram.com/josh__hh/"},
        { name:"Github", href: "https://github.com/blazzjosh"},
        { name:"Linkedin", href: "https://www.linkedin.com/in/cradlyjosh/"}
    ]
</script>

<svelte:head>
    <title>About - Josh Horsfall</title>
        <meta
          name="description"
          content="I'm Josh Horsfall, a full-stack software engineer based in Lagos, Nigeria."
        />
</svelte:head>

<div class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img
            src="portrait3.png"
            alt=""
            sizes="(min-width: 1024px) 32rem, 20rem"
            class="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
          />
        </div>
      </div>
      <div class="lg:order-first lg:row-span-2">
        <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Josh, the Dev who's bringing your wildest tech dreams to life!</h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>After working as an Engineering Procurement Specialist, I became interested in exploring the growing need for IT solutions in my field. I taught myself programming, which hooked me with the creative problem-solving and endless possibilities that software development offers.</p>
          <p>My experience in Chemical Engineering has given me a unique perspective, enabling me to approach problems in innovative ways and find creative solutions. I have worked with amazing clients, developing efficient and user-friendly web applications and software solutions, which has helped me become a well-rounded software engineer.</p>
          <p>Outside of work, I enjoy spending time with my family, exploring the outdoors, reading, and playing video games. My hobbies help me unwind and recharge after a long day.</p>
          <p>My current interests include web development, AI exploration, and data analytics. As a software engineer, I'm always looking for innovative ways to create better, more efficient applications that meet my clients' unique needs. I believe AI and machine learning have the potential to revolutionize the way we interact with technology, and I'm excited to continue learning and growing in this exciting field.</p>
        </div>
      </div>
      <div class="lg:pl-20">
        <ul>
            {#each socials as {name, href}}
            <li class='flex'>
                <a
                target="_blank"
                  {href}
                  class="mt-4 group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                  <Icon name={name.toLowerCase()} class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                  <span class="ml-4">Follow on {name}</span>
                </a>
              </li>
              {/each}

              <li class='flex'>
                <a
                  href="mailto:cradlydev@gmail.com"
                  class="w-full mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40 group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
                >
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"><path fill-rule="evenodd" d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path></svg>
                  <span class="ml-4">cradlydev@gmail.com</span>
                </a>
              </li>
        </ul>
      </div>
    </div>
  </div>