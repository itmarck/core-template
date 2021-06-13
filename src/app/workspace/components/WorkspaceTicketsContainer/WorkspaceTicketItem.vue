<template>
  <article>
    <p>Ticket {{ ticket.id }}</p>
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
