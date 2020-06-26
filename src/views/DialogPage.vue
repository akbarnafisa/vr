<template>
  <div>
    <div class="container">
      <div class="row flex flex-center">
        <Button @click="showModal = true">Show Dialog</Button>
      </div>
    </div>
    <Dialog
      v-model="showModal"
      @close="showModal = false"
    >
      <span slot="header">Dialog</span>
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