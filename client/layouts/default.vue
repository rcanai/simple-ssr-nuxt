<template>
  <div>
    <the-header />
    <main>
      <nuxt />
    </main>
    <the-footer />
  </div>
</template>

<script>
import TheHeader from '@/components/layouts/TheHeader'
import TheFooter from '@/components/layouts/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
