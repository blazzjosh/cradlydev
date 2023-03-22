<script lang="ts" >
  //@ts-nocheck
    import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar, Dropdown, DropdownItem, DropdownHeader, DropdownDivider } from 'flowbite-svelte'
    let btnClass = 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2';
    import {page} from '$app/stores'
    import {onMount, onDestroy} from 'svelte'
    import DesktopNavigation from './DesktopNavigation.svelte';
 


    const clamp = (number, a, b) =>  {
      let min = Math.min(a, b)
      let max = Math.max(a, b)
      return Math.min(Math.max(number, min), max)
}
  

    $: isHomePage =  $page.route.id === "/" ? true : false
    let y = 0; //windowScrollY
    

    let myElement;
    $: downDelay = myElement?.offsetTop ?? 0;
    let upDelay = 64

   //update avatar
      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      $: scrollY = downDelay - y
      let scale = 1
      let x = 0

      $: {
        scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
        scale = clamp(scale, fromScale, toScale)

        x = (scrollY * (fromX - toX)) / downDelay + toX
        x = clamp(x, fromX, toX)
      }
      
    
    $: avatarimagetransform = `transform: translate3d(${x}rem, 0, 0) scale(${scale});`;

   
    
  
   

    onMount(() => {
      
      
    })



  
  

    

  </script>

<svelte:window bind:scrollY={y}/>
  
 <!-- <div class="box" style="left: 13%; top: {yPos}%; width:{scale}px; height:{scale}px">
          (23, {yPos})
        </div> -->
  <!-- <Navbar let:hidden let:toggle class="mx-auto max-w-2xl lg:max-w-5xl bg-white dark:bg-zinc-900">
    <NavBrand href="/">
      <Avatar id="avatar-menu" src="https://flowbite.com/docs/images/logo.svg" />
    </NavBrand>
    <div class="flex items-center md:order-2">
      <DarkMode {btnClass} />
      <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
    </div>
   
    <NavUl {hidden}>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/articles">Articles</NavLi>
      <NavLi href="/projects">Projects</NavLi>
      <NavLi href="/speaking">Speaking</NavLi>
      <NavLi href="/uses">Uses</NavLi>

    </NavUl>
  </Navbar> -->

  <header class="border pointer-events-none relative z-50 flex flex-col" style="height: var(--header-height); marginBottom: var(--header-mb)">


    {#if isHomePage}
  <div bind:this={myElement} class="order-last mt-[calc(theme(spacing.16)-theme(spacing.3))]"/>
  <!-- container  with large avatar -->
  <div class='sm:px-8'>
    <div class="top-0 order-last -mb-3 pt-3 mx-auto max-w-7xl lg:px-8" style="position: var(--header-position)">
      <div class="top-[var(--avatar-top,theme(spacing.3))] w-full"style="position: var(--header-inner-position)">
        <div class="relative">
          <div class="absolute left-0 top-3 origin-left transition-opacity h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
          style="opacity: var(--avatar-border-opacity, 0); transform: var(--avatar-border-transform)"/>
          <a href="/" style="{avatarimagetransform}" class="pointer-events-auto block h-16 w-16 origin-left">
            <img src="" alt="" class="h-16 w-16 rounded-full bg-zinc-100 object-cover dark:bg-zinc-800" />
          </a>
        </div>
      </div>
    </div>
  </div>
  {:else}
  <!-- container -->
  <div class="top-0 z-10 h-16 pt-6" style="position: var(--header-position)">
    <div class='sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full' style="position: var(--header-inner-position)">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="relative flex gap-4">
          
          <div class="flex flex-1">
            <!-- check if not homepage -->
            {#if !isHomePage}

            <div class='h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'>
              <Avatar />
            </div>
             {/if}
               
              
            <!-- check if not homepage -->
          </div>
          <div class="flex flex-1 justify-end md:justify-center">
            <!-- <MobileNavigation className="pointer-events-auto md:hidden" /> -->
            <DesktopNavigation  />

          </div>
          <div class="flex justify-end md:flex-1">
            <div class="pointer-events-auto">
              SwitcheHEre

              <!-- <ModeToggle /> -->
            </div>
          </div>
        </div>


      </div>
    </div>
          
  </div>


  {/if}

  scale:{scale}
yPos: {x}
  </header>


  <style>
    :root {
      --header-height: 180px;
      --header-mb: -116px;
      --header-position: "sticky";
      --header-inner-position: "fixed";
      --content-offset: 116px;
      --avatar-top: 10px;
      --avatar-image-transform: translate3d(0rem, 0, 0) scale(1);
      --avatar-border-transform:translate3d(-0.222222rem, 0, 0) scale(1.77778);
      --avatar-border-opacity:0;
    }
 
  </style>