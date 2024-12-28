<template>
  <div class="container mx-auto">
    <ClientOnly>
      <BackgroundGlowBorder
        class="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden"
        :color="['#A07CFE', '#FE8FB5', '#FFBE7B']"
      >
        <span
          className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-zinc-700/75"
        >
          Glow Border
        </span>
      </BackgroundGlowBorder>
    </ClientOnly>
  </div>
</template>
