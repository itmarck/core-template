<template>
  <not-found-page></not-found-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import NotFoundPage from '../pages/NotFoundPage.vue'

export default defineComponent({
  components: {
    NotFoundPage,
  },
})
</script>
