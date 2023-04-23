<script lang="ts">
	import {
		DarkMode,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger,
		Avatar,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
	} from "flowbite-svelte";

	import "../app.postcss";
	import Nav from "$lib/components/Nav.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import {onMount} from 'svelte'

	function handleScroll(event: any) {
    console.log('scroll event:', event);
  }

	</script>



<div class="fixed inset-0 flex justify-center sm:px-8">
	<div class="flex w-full max-w-7xl lg:px-8">
	  <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
	</div>
  </div>
  <div class="relative">
	<Nav />
	<main>
		<slot/>
	  <!-- <Component previousPathname={previousPathname} {...pageProps} /> -->
	</main>
	<Footer />
  </div>
