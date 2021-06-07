<template>
  <workspace-main-template>
    <template #tickets>
      <workspace-tickets-container></workspace-tickets-container>
    </template>

    <template #default> Selecciona un ticket </template>

    <template #client> No hay un cliente seleccionado </template>
  </workspace-main-template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import WorkspaceTicketsContainer from '../components/WorkspaceTicketsContainer/index.vue'
import WorkspaceMainTemplate from '../templates/WorkspaceMainTemplate.vue'

export default defineComponent({
  components: {
    WorkspaceTicketsContainer,
    WorkspaceMainTemplate,
  },
})
</script>
