<template>
  <workspace-ticket-list :tickets="tickets"></workspace-ticket-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WorkspaceTicketList from './WorkspaceTicketList.vue'

export default defineComponent({
  components: {
    WorkspaceTicketList,
  },
  setup() {
    return {
      tickets: [{ id: 2 }, { id: 3 }],
    }
  },
})
</script>
