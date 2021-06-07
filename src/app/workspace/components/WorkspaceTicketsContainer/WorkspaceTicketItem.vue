<template>
  <article>
    <span>Soy un ticket</span>
    <p>{{ ticket }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    ticket: { required: true, type: Object },
  },
})
</script>
