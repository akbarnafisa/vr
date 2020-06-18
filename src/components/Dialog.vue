<template>
  <transition name="fade">
    <div class="modal-mask" v-if="value" @click="$emit('close')">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot name="header">Header</slot>
          <button class="modal-default-button" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .4s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  min-height: 35px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .2s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-default-button {
  float: right;
}

.modal {
  &-enter, &-leave {
    opacity: 0;
  }

  &-enter &-container,
  &-leave &-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
}


.fade-enter-active, .fade-leave-active-active {
  transition: opacity .15s ease-in-out;
  -webkit-transition: -webkit-opacity .15s ease-in-out;
}

.fade-enter,
.fade-leave-active,
.alert-leave-active,
.alert-dialog-leave-active {
  opacity: 0;
  transition: opacity .15s ease-in-out;
  -webkit-transition: -webkit-opacity .15s ease-in-out;

}
</style>