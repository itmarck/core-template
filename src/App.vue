<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import EmptyLayout from '@@/layouts/EmptyLayout.vue'
import DefaultLayout from '@@/layouts/DefaultLayout.vue'

export default defineComponent({
  components: {
    EmptyLayout,
    DefaultLayout,
  },

  setup() {
    const route = useRoute()

    const layout = computed(() => {
      const name = route.meta.layout || 'default'
      return `${name}-layout`
    })

    return {
      layout,
    }
  },
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
