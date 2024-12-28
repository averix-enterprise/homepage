<script lang="ts" setup>
const props = defineProps<{ text: string, class?: string }>()
const buttonRef = ref<HTMLButtonElement>()
</script>

<template>
  <button ref="buttonRef" :class="cn('group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold', props.class)">
    <span class="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
      {{ text }}
    </span>

    <div class="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
      <span>{{ text }}</span>
    </div>
    <div class="absolute left-[18%] top-[40%] size-2 scale-100 rounded-full bg-transparent transition-all duration-300 group-hover:left-0 group-hover:top-0 group-hover:size-full group-hover:scale-[1.8] group-hover:bg-averix-purple" />
  </button>
</template>
