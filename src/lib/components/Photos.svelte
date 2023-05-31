<script>
  import Marquee from "svelte-fast-marquee"
  let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"]

  let play = true

  let arr = [
    // { name: "on", rotate: "rotate-2", src: "photos/3.png" },
    { name: "on", rotate: "-rotate-2", src: "photos/4.jpg" },
    { name: "on", rotate: "rotate-2", src: "photos/13.png" },
    { name: "on", rotate: "rotate-2", src: "photos/5.jpg" },
    { name: "on", rotate: "rotate-2", src: "photos/12.png" },
    // { name: "on", rotate: "-rotate-2", src: "photos/10.png" },
  ]
</script>

<div class="mt-16 sm:mt-20">
  <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
    <!-- <Marquee speed={20} {play}>
      {#each arr as { name, src, rotate }, i}
        <div class="m-[20px] {rotate} hover:-rotate-6 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <img {src} alt="" sizes="(min-width: 640px) 18rem, 11rem" class="absolute inset-0 h-full w-full object-cover" />
        </div>
      {/each}
    </Marquee> -->

    
      {#each arr as { name, src, }, i}
        <div class="hover:-rotate-6 relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl">
          <img {src} alt="" sizes="(min-width: 640px) 18rem, 11rem" class="absolute inset-0 h-full w-full object-cover" />
        </div>
      {/each}
    
  </div>
</div>
