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
          I'm Josh Horsfall, a full-stack software engineer based in Lagos, Nigeria.
        </h1>
        <div class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
          <p>While my degree is in Chemical Engineering, my journey into software engineering began when I was working as an Engineering Procurement Specialist. I noticed a growing need for IT solutions in my field, and I became interested in exploring this area further.</p>


          <p>I started teaching myself programming and was soon hooked. I loved the creative problem-solving aspect of software development and the endless possibilities it presented. I knew that this was the career path I wanted to pursue, so I started learning everything I could about software development.</p>
          
        <p>Since then, I've been fortunate enough to work with some amazing clients, developing web applications and software solutions that are both efficient and user-friendly. My background in Chemical Engineering has given me a unique perspective that allows me to approach problems in innovative ways and find creative solutions.</p>
          
        <p>When I'm not working, I love spending time with my family. I have a wonderful wife and two amazing children who always keep me on my toes. We enjoy exploring the outdoors and creating new memories together.</p>
          
          <p>In my free time, I also have a few hobbies that I enjoy. I'm an avid reader and love delving into new ideas and perspectives. I'm also a fan of video games, which help me unwind and recharge after a long day.</p>
          
          <p> Right now, I'm particularly interested in the fields of web development, AI exploration, and data analytics. As a software engineer, I'm always looking for new and innovative ways to create better, more efficient applications that meet the unique needs of my clients. I believe that AI and machine learning have the potential to revolutionize the way we interact with technology, and I'm constantly exploring new tools and techniques to stay at the forefront of these fields.</p>
          
        <p>Overall, I'm dedicated to my work and passionate about the power of technology to change the world for the better. I'm excited to see where the future of software development takes me and look forward to continuing to learn and grow in this exciting field.
          ChatGPT Mar 23 Version. Free Research Preview. ChatGPT may produce inaccurate information about people, places, or facts.</p>
     
        </div>
      </div>
      <div class="lg:pl-20">
        <ul>
            {#each socials as {name, href}}
            <li class='flex'>
                <a
                  href="/"
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