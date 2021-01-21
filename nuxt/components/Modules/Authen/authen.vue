<template>
  <div class="auth">
    <iframe class="aa" src="https://www.skg.com/query/" frameborder="0" border="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
  </div>
</template>
<script>
export default {
  name: "authen",
};

</script>
<style lang="scss" scoped>
@function toVw($px) {
  @return $px/1242 * 100vw;
}
$borderColor: #e4e4e4;
h2 {
  padding: 0;
  margin: 0;
}
.auth {
  .aa{
    width: 100%;
    height: 114vh;
  } 
}
</style>