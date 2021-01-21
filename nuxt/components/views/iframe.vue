<template>
  <div class="mainFrame">
    <iframe :src="mysrc" ref="dataList" frameborder="0"></iframe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mysrc: "/demo/b.htm"
    };
  },
  computed: {
    mysrcComputed() {
      return window["srcChge"];
    }
  },
  created() {
    let that = this;
    window["srcChge"] = dataSrc => {
      that.mysrc = dataSrc;
    };
  }
};
</script>
