<template>
  <span class="tag-label">
    <slot />
  </span>
</template>

<script setup lang="ts">
// Placeholder component to satisfy TS include; not used in MDX.
</script>

<style scoped>
.tag-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 12px;
  border-radius: 12px;
  background: #2b7aff;
  color: #ffffff;
  font-weight: 700;
  font-size: 11px;
  line-height: 1;
  letter-spacing: 0.25px;
  width: fit-content;
}
</style>
