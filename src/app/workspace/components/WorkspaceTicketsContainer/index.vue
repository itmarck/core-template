<template>
  <workspace-ticket-item :ticket="ticket"></workspace-ticket-item>
</template>

<script lang="ts">
import WorkspaceTicketItem from './WorkspaceTicketItem.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    WorkspaceTicketItem,
  },
  setup() {
    return {
      ticket: { id: 2 },
    }
  },
})
</script>
