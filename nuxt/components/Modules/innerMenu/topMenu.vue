<template>
  <div class="topMenu" @click="gotoTop">
    <svg viewBox="0 0 1024 1024">
      <path
        d="M233.376 722.752L278.624 768 512 534.624 745.376 768l45.248-45.248L512 444.128zM192 352h640V288H192z"
        fill="#181818"
        p-id="6962"
      ></path>
    </svg>
  </div>
</template>
<script>
export default {
  name: "topMenu",
  data() {
    return {
      //
    };
  },
  methods: {
    gotoTop() {
      window.scrollTo(0, 0)
    }
  }
};
</script>
<style lang="scss" scoped>
.topMenu {
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: rgba($color: #000000, $alpha: 0.7);
  // border:1px solid #515151;
  padding: 6px;
  svg {
    width: 100%;
    path {
      fill: rgba($color: #ffffff, $alpha: 0.8);
    }
  }
}
</style>
