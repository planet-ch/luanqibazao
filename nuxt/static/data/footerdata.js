const maindata = {
  // link: ["关于SKG", "产品中心", "招商合作", "线下门店", "会员中心", "中央维修"],
  link: [
    {
      title: "About SKG",
      url: "/about",
      children: []
      // children: [
      //   {
      //     title: "品牌故事",
      //     path: "/about/2"
      //   },
      //   {
      //     title: "品牌简介",
      //     path: "/about/0",
      //     templateID: 2,
      //     children: [],
      //     sortNum: 1,
      //     page: "inner"
      //   },
      //   {
      //     title: "品牌历程",
      //     path: "/about/4",
      //     templateID: 2,
      //     children: [],
      //     sortNum: 2,
      //     page: "inner"
      //   }
      // ]
    },
    {
      title: "Products",
      url: "/product",
      children: []
      // children: [
      //   {
      //     title: "massager ",
      //     path: "/product/class/0",
      //     templateID: 2,
      //     children: [],
      //     sortNum: 1,
      //     page: "inner"
      //   }
      //   // ,
      //   // {
      //   //   title: "美容仪",
      //   //   path: "/product/class/1",
      //   //   templateID: 2,
      //   //   children: [],
      //   //   sortNum: 2,
      //   //   page: "inner"
      //   // }
      // ]
    },
    {
      title: "contactUs",
      url: "/contactUs",
      children: []
    },
    {
      title: "Join Us  ",
      url: "/zhaoshang",
      children: []
    },
    // {
    //   title: "线下门店  ",
    //   url: "/offline",
    //   children: []
    // },
    // {
    //   title: "会员中心  ",
    //   url: "/test",
    //   children: []
    // },
    {
      title: "After-sales Service  ",
      url: "/server",
      children: []
    }
  ],
  tel: [
    {
      name: "National service hotline",
      phone: "86-400-822-0888"
    },
    {
      name: "Investment cooperation hotline",
      phone: "86-0757-23617777"
    }
    // {
    //   name: "海外联系方式",
    //   phone: ""
    // },
    // {
    //   name: "香港热线",
    //   phone: "400-88099699"
    // },
    // {
    //   name: "English",
    //   phone: "400-88099699"
    // },
    // {
    //   name: "选择语言",
    //   phone: "中文/English"
    // }
  ],
  icp:
    `<a href='https://beian.miit.gov.cn' target='_blank' style='color:#f2f2f2;'>COPYRIGHT 2017SKG. 保留所有权利<br> 备案号:粤ICP备13079021号-6</a>
    <div style="background:url('/img/icp_icon.png') no-repeat left center;padding-left:30px;">粤公网安备 44060602001369号</div>`,
  eqcode: [
    {
      title: "Ins",
      photoUrl: `/en/img/ins.png`,
      url: "/"
    },
    {
      title: "Facebook",
      photoUrl: `/en/img/facebook.png`,
      url: "www.facebook.com/"
    },
    {
      title: "twitter",
      photoUrl: `/en/img/twitter.png`,
      url: "/"
    }
  ]
};
export default maindata;
