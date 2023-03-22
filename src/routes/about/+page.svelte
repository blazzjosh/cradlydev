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



<div class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
    <div class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
      <div class="lg:pl-20">
        <div class="max-w-xs px-2.5 lg:max-w-none">
          <img
            src="portrait.jpg"
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
          <p>
            I’ve loved making things for as long as I can remember, and
            wrote my first program when I was 6 years old, just two weeks
            after my mom brought home the brand new Macintosh LC 550 that I
            taught myself to type on.
          </p>
          <p>
            The only thing I loved more than computers as a kid was space.
            When I was 8, I climbed the 40-foot oak tree at the back of our
            yard while wearing my older sister’s motorcycle helmet, counted
            down from three, and jumped — hoping the tree was tall enough
            that with just a bit of momentum I’d be able to get to orbit.
          </p>
          <p>
            I spent the next few summers indoors working on a rocket design,
            while I recovered from the multiple surgeries it took to fix my
            badly broken legs. It took nine iterations, but when I was 15 I
            sent my dad’s Blackberry into orbit and was able to transmit a
            photo back down to our family computer from space.
          </p>
          <p>
            Today, I’m the founder of Planetaria, where we’re working on
            civilian space suits and manned shuttle kits you can assemble at
            home so that the next generation of kids really <em>can</em>{' '}
            make it to orbit — from the comfort of their own backyards.
          </p>
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