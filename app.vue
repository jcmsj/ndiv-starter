<template>
  <div class="flex items-center min-h-screen justify-center">
    <div class="card bg-base-200">
      <div class="card-body">
        <div class="card-title"><Icon name="material-symbols:favorite" /> NDIV Starter by JCSJ</div>
        <ul class="menu rounded-box [&_a]:flex [&_a]:justify-between [&_img]:w-12 gap-2 [&_img]:h-12 [&_a]:text-xl">
          <li>
            <a href="https://nuxt.com/docs" class="link" target="_blank">
              <img src="/favicon.ico">
              Nuxt docs
              <Icon name="material-symbols:share" />
            </a>
          </li>
          <li>
            <a href="https://daisyui.com/components/" class="link" target="_blank">
              <img src="https://daisyui.com/favicon.ico">
              DaisyUI
              <Icon name="material-symbols:share" />
            </a>
          </li>
          <li>
            <a href="https://icones.js.org/" class="link" target="_blank">
              <img src="https://icones.js.org/favicon.svg">
              Icones
              <Icon name="material-symbols:share" />
            </a>
          </li>
          <li>
            <a href="https://vueuse.org/functions.html" class="link" target="_blank">
              <img src="https://vueuse.org/favicon.ico" alt="">
              VueUse
              <Icon name="material-symbols:share" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
useAppHead()
</script>
