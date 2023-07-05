<script lang="ts">
  import "../app.postcss"
  import Nav from "$lib/components/Nav.svelte"
  import Footer from "$lib/components/Footer.svelte"
</script>

<div class="fixed inset-0 flex justify-center sm:px-8">
  <div class="flex w-full max-w-7xl lg:px-8">
    <div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
  </div>
</div>
<div class="relative">
  <Nav />
  <main>
    <slot />
  </main>
  <Footer />
</div>
