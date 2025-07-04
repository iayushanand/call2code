<script>
  import { Wheat } from '@lucide/svelte';
  import { House } from '@lucide/svelte';
  import { CloudSun } from '@lucide/svelte';
  import { Tractor } from '@lucide/svelte';
</script>



<nav class="fixed top-0 left-0 w-full z-20 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/10 dark:border-white/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">

    <a href="/">
    <h1 class="text-xl font-bold text-white inline-flex items-center space-x-2">
        <Wheat class="w-5 h-5" />
        <span>Agri Assist</span>
    </h1>
    </a>


    <ul class="flex space-x-6 text-white text-sm">
      <li><a href="/" class="hover:underline"> <House class="w-5 h-5" /> </a></li>
      <li><a href="/weather" class="hover:underline"> <CloudSun class="w-5 h-5" /> </a></li>
      <li><a href="/seeds" class="hover:underline"> <Tractor class="w-5 h-5" /> </a></li>
    </ul>
  </div>
</nav>