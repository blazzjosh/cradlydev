<script lang="ts">
    import type { PageData } from './$types';
    import Card from '$lib/components/Card.svelte'
    
    export let data: PageData;
    let arr = [
        { name:"Workstation", list:[
            { product:"15” MacBook Pro, 2.6 GHz 6-Core Intel Core i7, 16GB RAM (2018)", 
            description: "I was using an Intel-based 15” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."},

            {product:"HP VH240A LCD-Backlit 24 Inch Anti-Glare FHD (1920 x 1080) Monitor",
            description: " This display matches we already have and used to expand the desktop for work. It is reliable and ergonomic. If starting again, there are better options. "
        }
        ]},

        { name:"JS Frameworks", list:[
            { product:"Sveltekit", 
            description: "I was using an Intel-based 15” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations."},

            {product:"React",
            description: " This display matches we already have and used to expand the desktop for work. It is reliable and ergonomic. If starting again, there are better options. "
        }
        ]}
    ]
</script>

<svelte:head>
    <title>Uses - Josh Horsfall</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
</svelte:head>


<section class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
    <header class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Software I use, gadgets I love, and other things I recommend.
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff.
      </p>
    </header>
    
    <div class="mt-16 space-y-20">
        {#each arr as {name, list}}
        <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
                    <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                        <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                            {name}
                        </h2>
                        <div class="md:col-span-3">
                            <ul class="space-y-16">
                                {#each list as {product, description}}
                                <li class='group relative flex flex-col items-start'>
                                    <h3 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
                                        {product}
                                      </h3>
                                      <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                        {description}
                                      </p>
                                </li>
                                {/each}
                              </ul> 
                        </div>
                    </div>
        </section>
{/each}
  

    </div>
</section>