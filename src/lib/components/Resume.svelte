<script>
import { Button } from "flowbite-svelte";

let experiences = [
    {org_name: "Adhocweb", logoUrl: "https://www.adhocweb.tech/_app/immutable/assets/test-9a83c3e7.svg", start: "2022", end: "Present", role:"Software Engineer"},
    {org_name: "Chesroc", logoUrl: "/chesroc.svg", start: "2019", end: "2022", role:"Full-Stack Developer"},
    {org_name: "Adexfe", logoUrl: "https://adexfe.com/assets/img/logo.png", start: "Apr 2019", end: "Sep 2019", role:"Internship"}
]
</script>



<div class="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
    <h2 class="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
      <!-- <BriefcaseIcon class="h-6 w-6 flex-none" /> -->

      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" class="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" class="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
      
      <span class="ml-3">Work</span>
    </h2>
    <ol class="mt-6 space-y-4">
      {#each experiences as {org_name, logoUrl, start, end, role}}
        <li  class="flex gap-4">
          <div class="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
            <img src={logoUrl} alt="" class="h-7 w-7" />
          </div>
          <dl class="flex flex-auto flex-wrap gap-x-2">
            <dt class="sr-only">Company</dt>
            <dd class="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {org_name}
            </dd>
            <dt class="sr-only">Role</dt>
            <dd class="text-xs text-zinc-500 dark:text-zinc-400">
              {role}
            </dd>
            <dt class="sr-only">Date</dt>
            <dd
              class="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${ start ?? start} until ${
                end ?? end
              }`}
            >
              <time dateTime={start ?? start}>
                {start ?? start}
              </time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={end ?? end}>
                {end?? end}
              </time>
            </dd>
          </dl>
        </li>
    {/each}
    </ol>
    <Button target="_blank" href="Resume - Josh Horsfall.pdf" color="dark" class="group mt-6 w-full">
      Resume
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    </Button>
  </div>