<script setup lang="ts">
const cards = Array.from({ length: 5 }, () => ({
  logo: 'test',
}))
</script>

<template>
  <section class="container mx-auto rounded-2xl">
    <div class="grid grid-cols-8 h-[600px]">
      <div class="col-span-6">
        Left
      </div>

      <div class="col-span-2">
        <LandingLogoGrid :cards>
          <template #logo="{ logo }">
            {{ logo }}
          </template>
        </LandingLogoGrid>
      </div>
    </div>
  </section>
</template>
