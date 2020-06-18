<template>
  <div class="container bg-white p-32 mw-3">
    <div class="row flex flex-wrap flex-center">
      <div
        class="box-wrapper mx-8 mb-24"
        v-for="(color, index) in colors"
        :key="index"
      >
        <div
          :class="`bg-${color} box`"
        />
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'blue-1',
        'blue-2',
        'blue-3',
        'blue-4',
        'blue-5',
        'green-1',
        'green-2',
        'green-3',
        'green-4',
        'green-5',
        'red-1',
        'red-2',
        'red-3',
        'red-4',
        'red-5',
        'yellow-1',
        'yellow-2',
        'yellow-3',
        'yellow-4',
        'yellow-5',
        'grey-1',
        'grey-2',
        'grey-3',
        'grey-4',
        'grey-5',
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.box-wrapper {
  width: 100px;
  .box {
    width: 100%;
    padding-bottom: 100%;
    /* height: 40px; */
  }
}

</style>
