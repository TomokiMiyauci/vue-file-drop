<template>
  <div class="bg-red-600">{{ message }}</div>
</template>

<script>
  export default {
    props: {
      message: {
        type: String,
        default: '',
      },
    },
  }
</script>
