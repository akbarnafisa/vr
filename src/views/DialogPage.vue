<template>
  <div>
    <Button @click="showModal = true">Show Modal</Button>
    <Dialog
      v-model="showModal"
      @close="showModal = false"
    >
      <span slot="header">New header</span>
    </Dialog>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Dialog from '@/components/Dialog'

export default {
  components: {
    Button,
    Dialog
  },
  data () {
    return {
      showModal: false
    }
  },
}
</script>

<style lang="scss" scoped>

</style>