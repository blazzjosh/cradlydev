<script lang="ts">
    import Card from '$lib/components/Card.svelte'
import type { PageData } from './$types';
    
    export let data: PageData;
</script>


<section class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
    <header class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        I've spoken at events all around the world and been interviewed for many podcasts.
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.
      </p>
    </header>
    
    <div class="mt-16 space-y-20">
        <section class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div class="space-y-20">
                <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                    <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                    Conferences
                    </h2>
                    <div class="md:col-span-3">
                        <div class="space-y-16">
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>

                <div class="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
                    <h2 class="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                     Podcasts
                    </h2>
                    <div class="md:col-span-3">
                        <div class="space-y-16">
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</section>
