<!-- I know this isn't Touch fish, but fish is cuter than loaf -->

<script setup lang="ts">
import { useMouse } from './mouse'

const { x, y } = useMouse()
</script>

<template>
  <div class="copyright">
    <span>What's Kun's hobby? Of course, it's loafing around!</span>
    <span>Mouse position is at: {{ x }}, {{ y }}</span>
  </div>
</template>

<style lang="scss" scoped>
.copyright {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  span {
    margin-bottom: 10px;
  }
}
</style>
