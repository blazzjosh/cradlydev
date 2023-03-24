<script>
  import { DarkMode, Navbar, NavBrand, NavLi, NavUl, NavHamburger, Avatar} from 'flowbite-svelte'
</script>


<Navbar navClass="px-2 sm:px-4 py-2.5 w-full bg-white dark:bg-zinc-900" color="dark" class="mx-auto max-w-2xl lg:max-w-5xl p-4" let:hidden let:toggle>
  <NavBrand href="/">
    <Avatar id="avatar-menu" src="" />
  </NavBrand>
  <div class="flex items-center md:order-2">
    <DarkMode/>
    <NavHamburger on:click={toggle} class1="w-full md:flex md:w-auto md:order-1"/>
  </div>

  <NavUl {hidden}>
    <NavLi href="/about">About</NavLi>
    <NavLi href="/articles">Articles</NavLi>
    <NavLi href="/projects">Projects</NavLi>
    <NavLi href="/speaking">Speaking</NavLi>
    <NavLi href="/uses">Uses</NavLi>
  </NavUl>
</Navbar>