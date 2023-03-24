<script lang="ts">
    import Card from "$lib/components/Card.svelte";
    import {articles} from './data' 
</script>


<svelte:head>
    <title>Articles - Josh Horsfall</title>
        <meta
          name="description"
          content="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
        />
</svelte:head>


<section class="mx-auto max-w-2xl lg:max-w-5xl p-4 mt-16 sm:mt-32">
    <header class="max-w-2xl">
      <h1 class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
        Writing on software design, company building, and the aerospace industry.
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order
      </p>
    </header>
    <div class="mt-16 sm:mt-20">
        <div class="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
            <div class="flex max-w-3xl flex-col space-y-16">
              {#each articles as article}
              <article class="md:grid md:grid-cols-4 md:items-baseline">
                <Card {article} klass="md:col-span-3" eyebrow_klass="md:hidden"></Card>
                <p class={`relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5`}>
                    <span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                        <span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                    </span>
                    {article.date}
                </p>
            </article>
              {/each}
            </div>
          </div>

    </div>
  </section>