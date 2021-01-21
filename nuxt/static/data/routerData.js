const routerData = [
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/components/Modules/menu/menu.vue")
  },
  {
    path: "/footer",
    name: "footer",
    component: () => import("@/components/Modules/footer/footer.vue")
  },
  {
    path: "/contactUs",
    name: "contactUs",
    component: () => import("@/components/Modules/contactUs/contactUs.vue")
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/Modules/template/home.vue")
  },
 
];
export default routerData;
