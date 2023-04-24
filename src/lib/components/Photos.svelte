<script>
  import Marquee from 'svelte-fast-marquee';
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  let play = true;

  let arr = [
    {name:"on", rotate:"rotate-2", src: "https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"},
    {name:"on", rotate:"-rotate-2", src: "photos/4.jpg"},
    {name:"on", rotate:"rotate-2", src: "photos/1.png"},
    {name:"on", rotate:"rotate-2", src: "photos/5.jpg"},
    {name:"on", rotate:"rotate-2", src: "photos/7.jpg"},
    {name:"on", rotate:"-rotate-2", src: "https://img.freepik.com/free-psd/dark-mobile-device-mockup_149660-801.jpg?w=1060&t=st=1681424026~exp=1681424626~hmac=bfdf1150a03bb570fa7f3cb9f99f875925c8e3e79ff6e1e832cc08c4bc6c9be2"}
]

</script>


<div class="mt-16 sm:mt-20 ">
    <div class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8 ">
     
      <Marquee  speed={20} play={play}>
      {#each arr as {name, src, rotate}, i}
     
        <div class='m-[20px] {rotate} relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
          <img
            {src}
            alt=""
            sizes="(min-width: 640px) 18rem, 11rem"
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      
      {/each}
    </Marquee>
 
    
    </div>
  </div>

