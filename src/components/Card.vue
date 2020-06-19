<template>
  <div class="card-wrapper">
    <div class="card bg-white">
      <img class="card__image" :src="data.image" :alt="data.image">
      <div class="card__content p-20">
        <div class="card__title title title-20 mb-12">
          {{data.title}}
        </div>
        <div class="card__date caption caption-12 flex text-grey-5 justify-end">
          {{data.date}}
        </div>
        <div class="card__author flex align-center body body-14">
          <img class="card__author__avatar mr-12" :src="data.avatar" :alt="data.avatar">
          <div>
            BY <b>{{data.author}}</b>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data:{
        type: Object,
        required: true,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .card-wrapper {
    width: 100%;
    margin-bottom: 32px;
    .card {
      width: 100%;
      height: 100%;
      &__image {
        width: 100%;
        /* max-height: 50% */
      }
      &__author {
        position: relative;
        margin-top: 20px;
        padding-top: 12px;
        &__avatar {
          width: 27px;
          height: 27px;
          border-radius: 100%;
        }
        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          padding: 0 20px;
          background: $grey-1;
        }
      }
    }
  }
</style>