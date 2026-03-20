<script setup>
defineProps({
 variant: {
  type: String,
  default: "primary"
 }
})
</script>

<template>

<button
:class="[
'px-6 py-3 rounded-lg font-medium transition cursor-pointer hover:scale-105 ',

variant==='primary'
? 'bg-white text-black hover:bg-gray-200'

: 'border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500'
]">

<slot />
</button>

</template>