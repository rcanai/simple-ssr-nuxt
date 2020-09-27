<template>
  <div>
    {{ a }}
  </div>
</template>

<script>
export default {
  fetch () {
    const { a = 'a' } = this.$route.query
    this.a = a
  },
  data () {
    return {
      a: ''
    }
  }
}
</script>
