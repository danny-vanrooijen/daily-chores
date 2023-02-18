<template>
  {{ name }}
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  completed?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  completed: false,
});
</script>
