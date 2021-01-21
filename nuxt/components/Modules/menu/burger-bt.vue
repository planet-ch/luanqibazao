<template>
  <div class="burger" :class="{'close':isClose}">
    <div class="inner">
      <span></span>
    </div>
  </div>
</template>
<script>
export default {
    props:{
        isClose:{
            type:Boolean,
            default:()=>false
        }
    }
}
</script>

<style lang="scss" scoped>
$hover-color: #ddb996;
$size:50px;
.burger {
  width: $size;
  height: $size;
  position: relative;
  transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  &.close {
      // background: $hover-color;
    .inner {
      &::before {
        transform: translateY(9px) rotate(45deg);
      }
      span {
        opacity: 0;

      } 
      &::after {
        transform: translateY(-9px) rotate(-45deg);

      }
    }
  }
  .inner {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: 26px;
    height: 20px;
    span,
    &::before,
    &::after {
      content: "";
      display: block;
      width: 100%;
      height: 2px;
      background-color: #000;
      position: absolute;
      transition: 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    span {
      top: 50%;
      margin-top: -1px;
    }
    &::before {
      top: 0;
    }
    &::after {
      bottom: 0;
    }
  }
}
</style>

