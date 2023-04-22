<script>
  import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar} from 'flowbite-svelte'
  import {page} from '$app/stores'

  let links = [
    {href:"/about", name: "About"},
    {href:"/articles", name: "Articles"},
    {href:"/projects", name: "Projects"},
    {href:"/uses", name: "Uses"}
    ]
    
</script>


<Navbar navClass="mx-auto max-w-2xl lg:max-w-5xl p-4 px-2 sm:px-4 py-2.5 w-full bg-white dark:bg-zinc-900" color="dark" let:hidden let:toggle>
  <NavBrand href="/">
    <Avatar id="avatar-menu" src="" />
  </NavBrand>
  <div class="flex items-center md:order-2">
    <DarkMode/>
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>

  <NavUl {hidden} class="">
    {#each links as {href, name}}
    <NavLi active={href === $page.url.pathname ? true : false} activeClass={href === $page.url.pathname ? "relative block text-teal-500" : ""} nonActiveClass="relative block transition hover:text-teal-500 dark:hover:text-teal-400" {href}>{name}
      {#if href === $page.url.pathname}
        <span class="absolute inset-x-1 -bottom-[4px] h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0"></span>
    {/if}
    </NavLi>
    {/each}
  </NavUl>
</Navbar>