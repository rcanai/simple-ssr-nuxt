<template>
  <div>
    {{ a }}
    <div>
      <hr>
      {{ url }}
    </div>
  </div>
</template>

<script>
export default {
  fetch () {
    let url = ''
    if (process.server) {
      url = this.$nuxt.context.req.url
    }
    const { a = 'a' } = this.$route.query
    this.a = a
    this.url = url
  },
  data () {
    return {
      a: '',
      url: ''
    }
  }
}
</script>
