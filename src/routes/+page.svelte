<script>
	import Card from "$lib/components/Card.svelte";
	import Icon from "$lib/components/Icon.svelte";
	import NewsLetterForm from "$lib/components/NewsLetterForm.svelte";
	import Resume from "$lib/components/Resume.svelte";
	import {articles} from './articles/data'
</script>

<svelte:head>
	<title>
		Josh Horsfall - Efficient Full-Stack Leader: Let's Build Something Amazing!
	</title>
	<meta
		name="description"
		content="I’m Josh, a software designer and entrepreneur based in New York City. I’m the founder and CEO of Planetaria, where we develop technologies that empower regular people to explore space on their own terms."
	/>
</svelte:head>

<section class="mx-auto max-w-2xl lg:max-w-5xl p-4">
	<div class="max-w-2xl">
		<h1
			class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
		>
		Full-stack software engineer, and problem solver.
		</h1>
		<p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
			I'm Josh Horsfall, an efficient full-stack software engineer. With over 3 years of experience, I specialize in HTML5, CSS3, JavaScript, Node.JS, React, and databases. Let's collaborate to build something amazing!
		</p>
		<div class="mt-6 flex gap-6">
			<a class="" href="/">
				<Icon
					name="twitter"
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
				/>
			</a>
			<a class="" href="/">
				<Icon
					name="instagram"
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
				/>
			</a>
			<a class="" href="/">
				<Icon
					name="github"
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
				/>
			</a>
			<a class="" href="/">
				<Icon
					name="linkedin"
					class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:hover:fill-zinc-300"
				/>
			</a>
		</div>
	</div>
</section>



<section class="mx-auto max-w-2xl lg:max-w-5xl mt-24 md:mt-28 p-4">
    <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
      <div class="flex flex-col gap-16">
		{#each articles as article}

        <Card {article}/>
		{/each}
      </div>
      <div class="space-y-10 lg:pl-16 xl:pl-24">
        <NewsLetterForm />
        <Resume />
      </div>
    </div>
  </section>
