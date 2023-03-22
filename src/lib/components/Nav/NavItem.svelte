<script>

export let href = ""
export let isActive = false

let classes = isActive ? `text-teal-500 dark:text-teal-400` : `hover:text-teal-500 dark:hover:text-teal-400`

</script>

<li>
    <a
      href={href}
      class="{classes} relative block px-3 py-2 transition">
      <slot/>
      {#if isActive}
        <span class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
      {/if}
    </a>
  </li>