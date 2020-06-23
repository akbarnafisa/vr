<template>
  <div>
    <div class="container">
      <div class="row ">
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :data="card"
          class="col-sm-6 col-xl-4"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'

export default {
  components: {
    Card,
  },
  data () {
    return {
      cards: [{
        image: 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      {
        image: 'https://images.unsplash.com/photo-1491406213019-05b162a72c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      {
        image: 'https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      {
        image: 'https://images.unsplash.com/photo-1497384401032-2182d2687715?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      {
        image: 'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      {
        image: 'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
        title: 'Improving UI Design Through Better Typography',
        author: ' John Doe',
        avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&q=60',
        date: '13 June, 2020'
      },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>

</style>