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
  display: flex;
}

.section {
  width: 256px;
  border-right: 1px solid gray;
}
</style>
