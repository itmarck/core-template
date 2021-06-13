<template>
  <workspace-ticket-item
    v-for="(ticket, index) in tickets"
    :key="index"
    :ticket="ticket"
  ></workspace-ticket-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WorkspaceTicketItem from './WorkspaceTicketItem.vue'

export default defineComponent({
  components: {
    WorkspaceTicketItem,
  },

  props: {
    tickets: { required: true, type: Array },
  },
})
</script>
