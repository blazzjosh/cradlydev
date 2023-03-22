<script>
	
	export let article = {
		title: "Crafting a design sysytem for a multiplaetary future",
		date: "September 5, 2023",
		link: "https://github.com/",
		description: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system."

	}
	export let klass=""
	export let eyebrow_klass = ""
</script>


<div class={`${klass} group relative flex flex-col items-start`}>
	<h2 class="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
		{article.title}
		<div class="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
		<a href={article.link}>
		  <span class="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
		  <span class="relative z-10"></span>
		</a>
	
	</h2>
	<p class={`${eyebrow_klass} relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500 pl-3.5`}>
		<span class="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
			<span class="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
		</span>
		{article.date}
	</p>

	<p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
		{article.description}
	</p>
	
	<div aria-hidden="true" class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">
		Read article
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="ml-1 w-3 h-3 stroke-current">
			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
		  </svg>
	</div>
</div>
