<template>
  <section class="template">
    <div class="section">
      <slot name="tickets"></slot>
    </div>
    <div class="section">
      <slot name="default"></slot>
    </div>
    <div class="section">
      <slot name="client"></slot>
    </div>
  </section>
</template>

<style>
.template {
  gap: 1rem;
  margin: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.section {
  background-color: #fafafa;
  padding: 1rem;
}
</style>
