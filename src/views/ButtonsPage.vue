<template>
  <div class="container bg-white p-32 mw-2">
    <div class="row flex flex-center">
      <Button
        v-for="(size, index) in buttonSize"
        :key="index"
        type="primary"
        :size="size"
        class="mx-16 mb-16"
      >
        Button Text
      </Button>
    </div>
    <div class="row flex flex-center">
      <Button
        v-for="(size, index) in buttonSize"
        :key="index"
        type="secondary"
        :size="size"
        class="mx-16 mb-16"
      >
        Button Text
      </Button>
    </div>
    <div class="row flex flex-center">
      <Button
        v-for="(size, index) in buttonSize"
        :key="index"
        type="ghost"
        :size="size"
        class="mx-16 mb-16"
      >
        Button Text
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: {
    Button,
  },
  data () {
    return {
      buttonSize: ['large', 'medium', 'small']
    }
  },
}
</script>
