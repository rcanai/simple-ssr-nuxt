<template>
  <div>
    {{ a }}
    <div>
      <hr>
      {{ req }}
    </div>
  </div>
</template>

<script>
export default {
  fetch (context) {
    let req = {}
    if (process.server) {
      req = context.req
    }
    const { a = 'a' } = context.query
    this.a = a
    this.req = req
  },
  data () {
    return {
      a: '',
      req: {}
    }
  }
}
</script>
