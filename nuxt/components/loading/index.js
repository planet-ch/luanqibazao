import loading from "./loading.vue";
const load = {
  install: Vue => {
    Vue.component("load", loading);
  }
};
export default load;
