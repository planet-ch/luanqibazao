<template>
  <div class="proDetail">
    <skgMenu />
    <div class="ads">
      <div class="photo" v-for="(item,index) in proKind" :key="index">
        <img :src="item" alt="">
      </div>
    </div>
    <Foot />
  </div>
</template>

<script>
import skgMenu from "@/components/Modules/menu/menu.vue"
import Foot from "@/components/Modules/footer/footer.vue"
export default {
	name: "Store",
	components: {
			skgMenu,
			Foot
  },
  watch:{
    "$store.state.productFlag":function(){
      window.scrollTo(0,0)
      this.$route.query.index = this.$store.state.productParams;
      // console.log(this.$route.query.index)
      this.getDetail();

    }
  },
  head() {
    console.log(this.productDetail[this.$route.params.id], this.$route.query.index)
    let productName = this.productDetail[this.$route.params.id][this.$route.query && this.$route.query.index].name
    return {
      title: `SKG ${productName}简介_${productName}原理_参数_常见问题_评价-SKG官网`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: `${productName}简介_${productName}原理,参数,常见问题,评价。SKG作为时尚的颈椎按摩仪品牌，集研发、生产、销售、培训为一体，主要经营颈椎按摩仪,护颈仪,颈部按摩器,颈椎按摩器等。`
        },
        {
          hid: 'Keywords',
          name: 'Keywords',
          content: productName
        }
      ]
    }
  },
  data(){
    return {
      proKind:  [],
      k6:[
        "https://file-skg.skg.com/skg.com/20210113/d761e7c3b40743d891e939febe1584ca.jpg",
        "https://file-skg.skg.com/skg.com/20210113/63b155a450c2461daa93625417740c10.jpg",
        "https://file-skg.skg.com/skg.com/20210113/37d6f9f41c3b4f529d54268eab92953a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/873e7b3d0bb844d6ad498d3bc3ac6607.jpg",
        "https://file-skg.skg.com/skg.com/20210113/49b067219b8b41e89dc67fab3631f2b6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f18205b4dca14962b8ad7d6f1ccc5f18.jpg",
        "https://file-skg.skg.com/skg.com/20210113/463d4209c3fa4ecf987e8362cd684154.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f84409d45e6940c8a5a7e31963d9b5e0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a1acb13cb03644d1a6864bba44e0ddd7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e9a0fae7e0d14af5ac151849602eb6af.jpg",
        "https://file-skg.skg.com/skg.com/20210113/9493ef8c381142d286d873d8a761e532.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7bc68336bc914989894e0edd8088245f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/fb3d7a3295304046a82a0a8d05fe773d.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ac1c6b73e5164ff69b5ffbd3c1ce467b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b37e6bd1a45e44c883f81c7175b24718.jpg",
        "https://file-skg.skg.com/skg.com/20210113/da4fb4a4be7a4729a16e9f12b51130d8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a87f5f2a7c8648a28e54fc67ff6f9257.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4f4936fb91d140a19b2e9aee758ca1d8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/aa9b23c9d914401bb8972fa9e21dea9e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4083f4e3aaf545c2a5775cbf22733b02.jpg",
        "https://file-skg.skg.com/skg.com/20210113/37c7904822554139806be0337f7dc7e0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/bea3f7379c7c41fb9669b5c9892023f4.jpg",
        "https://file-skg.skg.com/skg.com/20210113/505597a2383545d1873353ede6d7f69c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6ee619d4dbe9455c9a0390edfa7f70dd.jpg",
        "https://file-skg.skg.com/skg.com/20210113/9556d8e0e0844245836a4e035aa92a8c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/32b1035fba4b429f86d6523d0e963ea9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3864c6ba0ce043938e638d759e2f9dbc.jpg",
        "https://file-skg.skg.com/skg.com/20210113/de9066d2134a401793efb776d51a08bd.jpg",
        "https://file-skg.skg.com/skg.com/20210113/fbde7c34c28b4e93918db2a8e2869e57.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dd30b350d5ba48b6a4f5a2c112a2701f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/958f63ba46ff48429beab182e6814209.jpg",
        "https://file-skg.skg.com/skg.com/20210113/89f7e84f9fd24e78a8c78aefc0417ba9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ce0d3237c0494337a7975fddca0cc246.jpg",
        "https://file-skg.skg.com/skg.com/20210113/0c7533d79b8e495fbbd0924ebb8dd40c.jpg"
      ],
      k5JD: [
            "https://file-skg.skg.com/skg.com/20200813/8212f9e2acfa4ae195f080789aa0a34a.jpg",
            "https://file-skg.skg.com/skg.com/20200813/54f8f6339cdd432e9a9e0bc4a4e32452.jpg",
            "https://file-skg.skg.com/skg.com/20200813/304a9daa512a4421a893f9fb2eb7a2bf.jpg",
            "https://file-skg.skg.com/skg.com/20200813/23d05c9587534b8cb733da39fd391f93.jpg",
            "https://file-skg.skg.com/skg.com/20200813/a231c8f0133244beb8eb28e8a9cf2c0e.jpg",
            "https://file-skg.skg.com/skg.com/20200813/c1c0076e1104418bbb88726bd1c06c9a.jpg",
            "https://file-skg.skg.com/skg.com/20200813/73430e82ff714bee96222e6a3b109909.jpg",
            "https://file-skg.skg.com/skg.com/20200813/560f9b09dbee45c4955c2cfd284afb67.jpg",
            "https://file-skg.skg.com/skg.com/20200813/cea75c3f39354aae838a9c011841e046.jpg",
            "https://file-skg.skg.com/skg.com/20200813/7218bc3adb3f43bc942441f14b0e3fde.jpg",
            "https://file-skg.skg.com/skg.com/20200813/d9680eecacb74656941290d596005b4e.jpg",
            "https://file-skg.skg.com/skg.com/20200813/474a2e352a08412fa0d719828cd094c8.jpg",
            "https://file-skg.skg.com/skg.com/20200813/00db9686458142d98e34daff791cd042.jpg",
            "https://file-skg.skg.com/skg.com/20200813/390ef3d1d3ff4868881afd67d1e9c2e1.jpg",
            "https://file-skg.skg.com/skg.com/20200813/1a4c135fdcea4b6d8113a05dd893e7a5.jpg",
            "https://file-skg.skg.com/skg.com/20200813/59c5bf01bc0a4eec9a6d37451cbd27fb.jpg",
            "https://file-skg.skg.com/skg.com/20200813/635b33cac26341118b81a57f82564b76.jpg",
            "https://file-skg.skg.com/skg.com/20200813/d0b3952146b041a39fd2620145c54e58.jpg",
            "https://file-skg.skg.com/skg.com/20200813/e51b64ecbd9e4e66b87aee203ea1ad4d.jpg",
            "https://file-skg.skg.com/skg.com/20200813/71c7fe2934a849489a30430d6de1bd66.jpg",
            "https://file-skg.skg.com/skg.com/20200813/ae683ec0db464f9181dd9b25d5376045.jpg",
            "https://file-skg.skg.com/skg.com/20200813/a73072932e7348a3a96e2928edff530d.jpg",
            "https://file-skg.skg.com/skg.com/20200813/8972133afef142e0a27293115309c0f5.jpg",
            "https://file-skg.skg.com/skg.com/20200813/ffffaa653b6d4320a2c90da0c6340598.jpg",
      ],
      k5PLUS: [
            "https://file-skg.skg.com/skg.com/20200814/2238d30e3ba4413a92283f07285b7032.jpg",
            "https://file-skg.skg.com/skg.com/20200814/a645797a5a5e420583e5a970082f5e50.jpg",
            "https://file-skg.skg.com/skg.com/20200814/613786d5a80648f88b9323fd5a04c4de.jpg",
            "https://file-skg.skg.com/skg.com/20200814/a7a4c3c85c004fdbb7b0487bbee2a838.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c82d3189c708444194886f393e42bd45.jpg",
            "https://file-skg.skg.com/skg.com/20200814/a360ba920acc4419a70b6e844194bc21.jpg",
            "https://file-skg.skg.com/skg.com/20200814/cca5d4bf68d346f691fbac7243aceb5b.jpg",
            "https://file-skg.skg.com/skg.com/20200814/5b40d0ed14e04c30a193100cdaff08a3.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c75cceb8115f4c28bd71670ed6acc5c0.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c673846f357a480eb67d08457edf8de4.jpg",
            "https://file-skg.skg.com/skg.com/20200814/a58f57ebef9c42b1957f1af05d62d38b.jpg",
            "https://file-skg.skg.com/skg.com/20200814/9db2bfca858e4cbb99eeca5f86f4a912.jpg",
            "https://file-skg.skg.com/skg.com/20200814/e5fb3d4413a042c08d22cfa1d78739a0.jpg",
            "https://file-skg.skg.com/skg.com/20200814/53734e5c3baa434289633e39d4a0deec.jpg",
      ],
      k5ZG: [
            "https://file-skg.skg.com/skg.com/20200814/f7ec8bdf601b41609423b4652f0e5ed7.jpg",
            "https://file-skg.skg.com/skg.com/20200814/6f8447b98a04444bb13908050ac605e4.jpg",
            "https://file-skg.skg.com/skg.com/20200814/8104ddd7f28847afadf8bf3e0a735afc.jpg",
            "https://file-skg.skg.com/skg.com/20200814/ed01aa6a59874abda7bc016cdc8327ac.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c045fcb55f774a62aa33dca1bfa0d432.jpg",
            "https://file-skg.skg.com/skg.com/20200814/63533081e82c44d9b72be743bd13fee3.jpg",
            "https://file-skg.skg.com/skg.com/20200814/369ba10d95a64cb0bd5702468e935442.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c8d870f00cbe41f5830a4bb016d0074a.jpg",
            "https://file-skg.skg.com/skg.com/20200814/125ae0adbd384e74a2cb78d1db4d90a2.jpg",
            "https://file-skg.skg.com/skg.com/20200814/500ecd52ddc54b018b835b2ca2d045d8.jpg",
            "https://file-skg.skg.com/skg.com/20200814/989fedfe209e40c98dcbdcf8e644bfbe.jpg",
            "https://file-skg.skg.com/skg.com/20200814/3f34006786d5432e9b0c465dd18005d1.jpg",

      ],
      k5AI: [
            "https://file-skg.skg.com/skg.com/20200814/4f2945a4f35d42d9b3f9923adeb98bb4.jpg",
            "https://file-skg.skg.com/skg.com/20200814/1d79e3c1b4ba411f95f406c708c8a3d3.jpg",
            "https://file-skg.skg.com/skg.com/20200814/9307dab6ed614d53b34df5002bb9cdb9.jpg",
            "https://file-skg.skg.com/skg.com/20200814/2a8eb681ac5e43f2a4a1cc3a79c43143.jpg",
            "https://file-skg.skg.com/skg.com/20200814/443e02dc21304a4dbca89de2058b8c27.jpg",
            "https://file-skg.skg.com/skg.com/20200814/9d2e401f96e244c292d48c05d634a724.jpg",
            "https://file-skg.skg.com/skg.com/20200814/68897972c6d94134b1b14d87827683c6.jpg",
            "https://file-skg.skg.com/skg.com/20200814/dbbf1b2ddd8d4a4790ee4a61357a962b.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f8b57eb90f6f460e96ec9f33d70101ff.jpg",
            "https://file-skg.skg.com/skg.com/20200814/dc1cfbe2bebd47e1a7d59923035f2e82.jpg",
            "https://file-skg.skg.com/skg.com/20200814/8cea69e529744498bae94aa52be1d034.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f82a64eb97324d98931661e98b52589f.jpg",
            "https://file-skg.skg.com/skg.com/20200814/3d90e43060b14456ae37ba60dedec6cc.jpg",
            "https://file-skg.skg.com/skg.com/20200814/b111ceed536a431d9c508d25db96e5ed.jpg",
            "https://file-skg.skg.com/skg.com/20200814/1a3736b36b6b486187c35ee04094512c.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f372fd79450d4035a4e3257cb917d297.jpg",
            "https://file-skg.skg.com/skg.com/20200814/11aaf9b41a6c4372bc40e1a5a846730f.jpg",
            "https://file-skg.skg.com/skg.com/20200814/81fd1cde9c524e329918d447454a0ede.jpg",
            "https://file-skg.skg.com/skg.com/20200814/4eaf92e4956b4da59f9d50a92610d476.jpg",
            "https://file-skg.skg.com/skg.com/20200814/af5e90893ee648639890a5f9d1800c5c.jpg",
            "https://file-skg.skg.com/skg.com/20200814/993c7cdeafd54ee0a6ad40d0c32a0b68.jpg",
            "https://file-skg.skg.com/skg.com/20200814/921d15ba9c754a58b10fd52d3d78815e.jpg",
            "https://file-skg.skg.com/skg.com/20200814/eb89af26e60e41e6901f016fd944583f.jpg",
            "https://file-skg.skg.com/skg.com/20200814/830155148c9349aaa8f759bb57d31328.jpg",
      ],
      k5BL:[
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/5f1ebc2ed40f452d8f316e8094de6db8.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/c656b7de191a425881263cc6c4496f2e.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/a8709023e579490c8178fdc2436a84a5.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/40b1f0ef72c74bcd8c1c9464011244eb.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/b3a32228e0494d05a087c550dd0be673.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/5fbfae3885d3413f81399fec13a528e8.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/6cf341f39ee948578b00e2c45b5af213.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/21cd67c7ea8348a8aa9940fd8daa89d4.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/34175572f4ff470b92cdb966f0de79f7.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/e7520ffe013442348c7194be70366e11.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/cec7eb035f4f48ae819b9a7177632643.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/6dd893d21aee41b88e660514dc878327.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/575ea7daffd045eabf59278c30bf5c2f.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/774e00a368a24ec79dc4e97068ec3006.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/d7a992dbd7fe49218b2dd09b8a2eddfd.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/5df861bb81c644ce9250621b5fca7e5f.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/8202633bdbb74cd0b95360487acd69c4.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/e3f5835c9032431489bc2e0e1dea9e69.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f55a5efab3ee4628b4fa8fe6d67bff49.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/05e7fd9976814d22b324c0ea923ff35c.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/191d5a949e4a44ad8cb591d61f3948fd.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/cb41b4402b43464fa5e28addc6c80d64.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/d52525b0f8b04178b15867fccc6f7679.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/2a08fa4e0f0f4a6ab1a998225a020364.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/c2e1e2ea3d6048f6929179479d52dc18.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/5b3dc5500adf4a67a6bd1f2f0ce8396f.jpg"
      ],
      newk5: [
        "https://file-skg.skg.com/skg.com/20210113/e0abb00dae6f4e0782b002f0831662e6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ea6fdb35d55b424eb50da9a75db7015e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/cea3b03edcdb4a3caedec02fb664b95f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7249d7c6ee6f4ccdae2c4823cfe82d82.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4d4943e4b9fa499a9b65ca720e3ab767.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ff4faaed6cd14cc6ad359660259611cf.jpg",
        "https://file-skg.skg.com/skg.com/20210113/8b78f43a0385402f8107ec4278766eb5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/78afa4a5719546abb7ae4004d7b74894.jpg",
        "https://file-skg.skg.com/skg.com/20210113/bcd1da24288442c4ae46712087df85b5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5561cb878c154d69bfd29f0d100ff901.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c26dfa7674d14d1e9695f82c4ffea079.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d2a08537c7844f7493175b3790b23429.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6eaedec9ee7c469bb9aa810f4534be1c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f51f1aba259f44919d5a14bdca53e130.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6a97f3843d6e401895d860b826caf1e5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/602f4d8361374549be86f1a2734d0090.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6e3573a8bc734ff3a2d2b2207f8b2fa6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/16ffe45a1b5c4427a87dd4891cb2cc14.jpg",
        "https://file-skg.skg.com/skg.com/20210113/98b7b89e431841d9ba5c81db30e4c3f1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/403fe193a6454a98a1d1e58c6a6cdc85.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5c82787cd3804a08a916a68687fe4c58.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5522bc23d7894c2fba7f9790474b5113.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ecc66f694d3e4de5830286a42f778132.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a7ba8ef4831c48d891c1686fde821702.jpg",
        "https://file-skg.skg.com/skg.com/20210113/36d0c10e21974f5e9f49fc66e2c4957c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dac031dd2524401e80a2505e7162c461.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b660a5c40f0a442fb4e4b57f55f455b5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2d0511d969ca410b83e77793282c33c3.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e2fbff2d48a54a0d863d40216195a513.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ec894ab9b5bb4a56adee924377b724bb.jpg",
        "https://file-skg.skg.com/skg.com/20210113/52ab02bad9dd4a47b7c06e35c02b42b8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/791af953a3284ea98687be1f15591d8b.jpg"
      ],
      k6SLH: [
            "https://file-skg.skg.com/skg.com/20200814/926ba5c5c881477d94d1fdcf3398255e.jpg",
            "https://file-skg.skg.com/skg.com/20200814/81357a4a613d4530b10841625c70a542.jpg",
            "https://file-skg.skg.com/skg.com/20200814/3f17f462c7e74761a6552dbb3e89fa2c.jpg",
            "https://file-skg.skg.com/skg.com/20200814/43675803e18e47eea2a6c02d0a9584f1.jpg",
            "https://file-skg.skg.com/skg.com/20200814/a5ebeccd78484dcb804893d9663d65a2.jpg",
            "https://file-skg.skg.com/skg.com/20200814/fb42b41f6c334658adb5461a050e44bd.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f7e053b673054256b8568dd63198b595.jpg",
            "https://file-skg.skg.com/skg.com/20200814/28013c12f63044f69dd7731a2bd8a772.jpg",
            "https://file-skg.skg.com/skg.com/20200814/66b93e9a4d904582ac60fbb6ae79f033.jpg",
            "https://file-skg.skg.com/skg.com/20200814/649410b5f66448a69c2b64a05be9a37a.jpg",
            "https://file-skg.skg.com/skg.com/20200814/3ad664772ac64d3ea78f7466af9a33ea.jpg",
            "https://file-skg.skg.com/skg.com/20200814/19c6daac302e457ebe4378bb00dca5bd.jpg",
            "https://file-skg.skg.com/skg.com/20200814/5b306d92939a4b6ea0aef5b011494648.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f4ba8d7cc8d34e1aa9a8b8d043250893.jpg",
            "https://file-skg.skg.com/skg.com/20200814/e96bfd78d45740298a0b9337d0cde27d.jpg",
            "https://file-skg.skg.com/skg.com/20200814/fbb1e4eb7deb4098a3b1f7eb56f5eb21.jpg",
            "https://file-skg.skg.com/skg.com/20200814/8e8812865e5a49db805614841f713b7f.jpg",
            "https://file-skg.skg.com/skg.com/20200814/f25bd6f01eb8456699cb7d9bab81656b.jpg",
            "https://file-skg.skg.com/skg.com/20200814/c383738fcf9d480b8fcdc942c745d269.jpg",
            "https://file-skg.skg.com/skg.com/20200814/ef337cf43f834cd3ab026138c156f30b.jpg",
            "https://file-skg.skg.com/skg.com/20200814/9464663d3b8d4b818e77de76961784f1.jpg",
            "https://file-skg.skg.com/skg.com/20200814/0b3306f4ae42431eb9058667a96cdcf8.jpg",
            "https://file-skg.skg.com/skg.com/20200814/4cfc5b1420794adab5bd36bdbd6d8efb.jpg",
            "https://file-skg.skg.com/skg.com/20200814/19c1ac5e4a784434bb3b4b50f6d04443.jpg",
            "https://file-skg.skg.com/skg.com/20200814/e75257d052e045c29186666b4be262ae.jpg",
            "https://file-skg.skg.com/skg.com/20200814/ff11de24901d40e7a843b4047c9f6097.jpg",
            "https://file-skg.skg.com/skg.com/20200814/817cbe26775e4a6ea649dda3dfc58529.jpg",
            "https://file-skg.skg.com/skg.com/20200814/8154fdb0878e42f199ece4505e32161a.jpg",
            "https://file-skg.skg.com/skg.com/20200814/3a4c033d5e464910ac474e778129f595.jpg",
            "https://file-skg.skg.com/skg.com/20200814/b10fbfb32e614ed2982075012481c635.jpg",
            "https://file-skg.skg.com/skg.com/20200814/22b318651df94c7aba72edf0e4cb15bc.jpg"
      ],
      k4: [
        "https://file-skg.skg.com/skg.com/20210104/525f57d292d849e7b477aebf78c70fd4.jpg",
        "https://file-skg.skg.com/skg.com/20210104/bec3425080a44289a161113be936e718.jpg",
        "https://file-skg.skg.com/skg.com/20210104/6247d0308a7a4324981ac2aff29848ed.jpg",
        "https://file-skg.skg.com/skg.com/20210104/e98a9cad531145aa8e3359bfdc8f2c1e.jpg",
        "https://file-skg.skg.com/skg.com/20210104/76d7c228a55349af87074ac1b1f58367.jpg",
        "https://file-skg.skg.com/skg.com/20210104/e73bb55fc7004d0fb4ea75b81e6a31d8.jpg",
        "https://file-skg.skg.com/skg.com/20210104/7c6de171d5954638b1047ab101928fb4.jpg",
        "https://file-skg.skg.com/skg.com/20210104/281d465539f34c4b9aad569be6ff8117.jpg",
        "https://file-skg.skg.com/skg.com/20210104/fef87d568faa40fb9dbbd7f32b4c1a9f.jpg",
        "https://file-skg.skg.com/skg.com/20210104/1c1d7be08fb44b398a4e96fadd502836.jpg",
        "https://file-skg.skg.com/skg.com/20210104/37f95af308a44ec6afcb86211ce7d937.jpg",
        "https://file-skg.skg.com/skg.com/20210104/ea4ed1965da1492799a2b40505090cae.jpg",
        "https://file-skg.skg.com/skg.com/20210104/d06f4d4e7f834b01baac0c6ca7d11553.jpg",
        "https://file-skg.skg.com/skg.com/20210104/e457fd29530a41619a00216bca59ef91.jpg",
        "https://file-skg.skg.com/skg.com/20210104/c610ef8585b8452ab4ba156dca289611.jpg",
        "https://file-skg.skg.com/skg.com/20210104/cceb484acd7e4fd2a8afce404c3b8a17.jpg",
        "https://file-skg.skg.com/skg.com/20210104/df011c107815435181402b18021395e1.jpg",
        "https://file-skg.skg.com/skg.com/20210104/058d120f3eeb49bd9dd59cb7bda7af88.jpg",
        "https://file-skg.skg.com/skg.com/20210104/e07ad1bd256349f7b141a9fb9099f730.jpg",
        "https://file-skg.skg.com/skg.com/20210104/288a48d0f3f6473288567324e24b242f.jpg",
        "https://file-skg.skg.com/skg.com/20210104/95849ea3cc4f4243ab679343ae08f51f.jpg",
        "https://file-skg.skg.com/skg.com/20210104/8e0e241fae9f4b569cd1d9b048d9ce3c.jpg",
        "https://file-skg.skg.com/skg.com/20210104/11fc444ece7441879df5625a224bd2fe.jpg",
        "https://file-skg.skg.com/skg.com/20210104/d539e4f1a12148b2ae064504bd13d681.jpg",
        "https://file-skg.skg.com/skg.com/20210104/7e722376a8a74145a9d954121d7d6c7c.jpg",
        "https://file-skg.skg.com/skg.com/20210104/193cc1cc846e46d88edd70a360635baa.jpg",
        "https://file-skg.skg.com/skg.com/20210104/305959a5ace744cd84505efd0de3fdfc.jpg",
        "https://file-skg.skg.com/skg.com/20210104/1b6fa9518b1c447391455951590e77dc.jpg",
        "https://file-skg.skg.com/skg.com/20210104/9978d9a04dec42e9b0e3bf834fb48ab0.jpg",
        "https://file-skg.skg.com/skg.com/20210104/ebda0e7e7497410d8b2323aeafb5f35a.jpg"
      ],
      k3_1: [
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/7df6632d59e74325a6437c1eec3af4d5.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/724ae1af1f554784aa21e06853a5c3be.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/816c0eeedf274655b36b9f905a721d03.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/23c344caf4734b44b3056df03b8ede6c.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/74646db4ba604c3a86240345cbafcd05.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/ec51e1e6b954492d9dc65f92f061b0f1.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/d68b262206884aadb9c13f494b776beb.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/04028c8dd1654bb5a7fffae63802a3df.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/8c667b26f5a447b3aa565ba7b4cfc326.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/ae85f292189c40ceb939fa8feaab374c.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/aca3fad0b079423fb33c8f387b57a62d.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/4ee458a05010406cbe64ca71fcdf17c0.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f4ff443c2bcb48e29adaacfecb635ce8.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/a0e56581033241b0ba9e6017a79d9162.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/38d2d3ae97f14a2bb74893ef2655fa47.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/3ba4f38458ef4771b78dd5ce28087aa7.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f4fcea28cb6e4d92adc0dba7d47954bc.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/7c29415cef4443599b28f10efcccccd0.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/1655edbcbb8b40b58aa201d9458f95ca.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f02ad219efd444889f4e158abc549e45.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/d547bdaa51234f38934a17472e1c6d78.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/9822da0bb91240cb8874c6616fd80048.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f140e430069b4858854de6e9671ef18f.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f6d67a8827a0485e980ba021176300d1.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/35faf529d0434b17885e7d197158df6b.jpg"
      ],
      k3_2: [
        "https://file-skg.skg.com/skg.com/20210113/192c55d99d3349f284cd7e3bcc403f34.jpg",
        "https://file-skg.skg.com/skg.com/20210113/69ab00d613f6481bbaff5e3b3f59170c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/18937bb68a304f6bb0d68c63e118f847.jpg",
        "https://file-skg.skg.com/skg.com/20210113/76592668308b467bbf57494c0f896106.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ddf28f7cb185480a9a546c142e5e2e8f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/42cbce47ac4e4175b013515e1afb6c91.jpg",
        "https://file-skg.skg.com/skg.com/20210113/650ca602fbd044888c75364c5842534e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/74e2f72ad03145638791d08e40e1e38f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/9484b4775d8548bea0d9df718de8de72.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c471c8705c1c414bb37a46f5e8c6b9d4.jpg",
        "https://file-skg.skg.com/skg.com/20210113/66db93575a594844a6a67c89e66d077c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b083df5f943a410990d38a7af758d2d3.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3b128dc4f4e14e7f96c4c3d75eae429f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f66f132a606544a08121f6c90a0c22de.jpg",
        "https://file-skg.skg.com/skg.com/20210113/01e99de0489441718a113324bd21f57d.jpg",
        "https://file-skg.skg.com/skg.com/20210113/49e44ee5d67c465d85cad44e6c0c6d38.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3e50e7cc6b87448ab6d6bf5179adf6c6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e19a186cda4a4de088db55c84e0f35f2.jpg",
        "https://file-skg.skg.com/skg.com/20210113/73ce2f388b984fc4a6d771c20471150a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3697b73e0db14e9ab5d10c28f860a3c1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/fd0422a3c04b4aeea691d47f7927bb85.jpg",
        "https://file-skg.skg.com/skg.com/20210113/0de8e335793949cb97d5f0de56326a4c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3eadf4744cac47b3abe290bc7c696054.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4572fa67f13f40edb6aca1c7c5189266.jpg"
      ],
      k3_3:[
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/10d3848328f84a69b8f6de2f0a52bdb1.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/b1fbd6ec419144159f3c2012c55942e7.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/8460c9dd658b4d4a9c12e8ea20a9847d.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/82b3f8d55de447f7b26481f8043979e3.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/26ffddcf3caf4d73bfdc0d26ee66b6df.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/e4432072f5f944bab09b9aa4e7274c35.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/c55c29f6ea264ed7905e6654d2aca500.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/971dfd6328714865a6893df8284a8adf.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/2dd6b052355445b192041d36ddd039b4.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/8c07c62f126d497688f374cccf625083.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/9e434a3dd6dd4b86a6fd44d2e0e0bbcc.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/407567a4747a4144bcded9e7ae79b003.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/9b5d2fc3df2f46e3909d6fd947fa133e.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/7ce447acd0774609beed978f0ed18af5.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/32f7b920f937431799614f2d0c1dfc94.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/4c3fb4f6090e463993a5abd2c6096022.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/8ffef614b9d345ab8cbf2fd731052c02.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/57e92875e11b42fbbd6ebb1da3cbdf0f.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/f20ee0ea421546c4a15921f35627e98d.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/9b5fd62145d843dca867300566dd9968.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/e3c86ca1152b478cbd62249973c76fea.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/7e91a60b11cd4791aea176094ab58305.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/e12704c7aa7342c6a8d37e9d01a36eb2.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/9d9e56d5af2942a385c3d921a439b5de.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/6602c5f32e2b40edb6282f956b61521b.jpg",
        "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201031/5c1d304cb37b47e187b3532f39a1f4e8.jpg"
      ],
      dz_1: [
            "https://file-skg.skg.com/skg.com/20200813/e3390282c79d49a9bcfb85941dacfa0e.jpg",
            "https://file-skg.skg.com/skg.com/20200813/77566ca687a54fd18b0441ba6ce743c0.jpg",
            "https://file-skg.skg.com/skg.com/20200813/0abecfc7958d44c79fd094e4995815e6.jpg",
            "https://file-skg.skg.com/skg.com/20200813/d7b365c62a1f4277bd9793206cd4ed6c.jpg",
            "https://file-skg.skg.com/skg.com/20200813/efe2e297a42242c28a179ebb9c206fc7.jpg",
            "https://file-skg.skg.com/skg.com/20200813/e63244e0ad714a9d9f9ce6f4fa68fef4.jpg",
            "https://file-skg.skg.com/skg.com/20200813/9716c6ae9ace44568367709f631a343b.jpg",
            "https://file-skg.skg.com/skg.com/20200813/4346b83e57104ae389aefbcec64ed27c.jpg",
            "https://file-skg.skg.com/skg.com/20200813/8c224276448a4308ae034b65b0edeaef.jpg",
            "https://file-skg.skg.com/skg.com/20200813/84a9d30e3d624fa1aa2a1754d1ee7b2a.jpg",
            "https://file-skg.skg.com/skg.com/20200813/241fb4e6b11741268881e69c3330c356.jpg",
            "https://file-skg.skg.com/skg.com/20200813/57f47c522739493897ac4f2a344b7fef.jpg",
            "https://file-skg.skg.com/skg.com/20200813/57d266262ce74c479397424f424f2f1c.jpg",
            "https://file-skg.skg.com/skg.com/20200813/e34b9716edc340588ceb89260b940ec3.jpg",
            "https://file-skg.skg.com/skg.com/20200813/ebbda4a3ae844d56ba0a6815194a7c78.jpg",
            "https://file-skg.skg.com/skg.com/20200813/4b13de15370f4faa922e8fa15f4cc092.jpg",
            "https://file-skg.skg.com/skg.com/20200813/5b7c9f436d2541399a29ccba57b04443.jpg",
            "https://file-skg.skg.com/skg.com/20200813/bc4e0a87155e42dfa49b2f32c452dc2c.jpg",
            "https://file-skg.skg.com/skg.com/20200813/2c12fedbe20d4c228ec4d4185a6f8367.jpg",
            "https://file-skg.skg.com/skg.com/20200813/676c33e8973c4975ac93c3f219f7e65c.jpg",
            "https://file-skg.skg.com/skg.com/20200813/89031a99a7a746588711157fd2f470ba.jpg",
            "https://file-skg.skg.com/skg.com/20200813/94440c67bd0a4662834827db5d55aa85.jpg",
            "https://file-skg.skg.com/skg.com/20200813/fd4b923934434f2aafe739ec28491970.jpg"
      ],
      eyes_4301: [
        "https://file-skg.skg.com/skg.com/20210113/5666879941fb426d9261d6d6aa4c8921.jpg",
        "https://file-skg.skg.com/skg.com/20210113/08c6d514df5b419bad2ae6a3cb7c2153.jpg",
        "https://file-skg.skg.com/skg.com/20210113/17d5c7f3b41e4578b5030251a9d263cc.jpg",
        "https://file-skg.skg.com/skg.com/20210113/8d28910f8eda44899322723c607dbd3e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/692acdbd116c40e7bf4ea0c7ce96e226.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2e49ce64c4964955b43b1728c41e52f9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f2837c1127634a5c90b351ed997f5a84.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7ff4bb4003124758b2cd7ab604734a63.jpg",
        "https://file-skg.skg.com/skg.com/20210113/0e5bcb8ac9a046f68be19d1c8b782897.jpg",
        "https://file-skg.skg.com/skg.com/20210113/44912c5788b243789fc9dd516e1070e0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6933764820944410a8514b147f64c215.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4d9408928879477ca2eadaf324e3ded1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/10a738c8b6ad4dfa950f00db7be95e95.jpg",
        "https://file-skg.skg.com/skg.com/20210113/0ce7821cba244c018153c58fbda501db.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d50239817a3842f99eb877bcc3b5bf72.jpg",
        "https://file-skg.skg.com/skg.com/20210113/52a93da9a418487a986418db219d9402.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dc3b98d0bdf94425a5cfc40fde8a7355.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ac1070a9ee7f416eae0c2892127890da.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7a55af7994c94bceb6602241f6b8af53.jpg"
      ],
      eyes_4306: [
        "https://file-skg.skg.com/skg.com/20210113/52a2b9987eaf4b43ab3decbdd030f4cf.jpg",
        "https://file-skg.skg.com/skg.com/20210113/23bf630d76144186b3031e79c07aba42.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a7a438bc73744c1e9aefb621348a1894.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2d5fa264f5e642aa9ed6b2027a97e05a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/77a52b57236e45d49922f04a8aae14c5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/10bf7863bdc443cda712c1f5c2348315.jpg",
        "https://file-skg.skg.com/skg.com/20210113/41ced36fd6ab40af849b1aeec42c97a3.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a6e5301a249a488a9185b4d215e8950c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/08ec88ab748d499f9b5e82e9d30cae5f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/24cebdce6fc6422192283a5a6a8e8768.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e5f9362f64b04a61bcfe065ca2a25f23.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e08ac72c36174cc2b78c33e8f72c3e55.jpg",
        "https://file-skg.skg.com/skg.com/20210113/49c33eaf6bdc4f5b8019585736887dad.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c3c8f164ff454e99bf7f8beb002e700a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/82dcc6a403a6449aad7b72a09eade28b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/06d34e9308c14b8b8830d29ec25a7774.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dfdde0f7c9404a84919367d7f63e1f69.jpg",
        "https://file-skg.skg.com/skg.com/20210113/83b82b297a6d45c3b8e58c7fbf98adda.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a9b693d397e8451ea456a678621023a6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c8ce2055e2a84a298f6c56bd2a986b29.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d858f5f9b868470a9c86690879aee1b7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b7451a6b9cfc436eb6c4a8997e2f0133.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b1dc88e6420844e98346e55b981259ca.jpg",
        "https://file-skg.skg.com/skg.com/20210113/0c14f798296548969019371c4d89cb19.jpg",
        "https://file-skg.skg.com/skg.com/20210113/753dd8365c074cc899f3148f165fc9ab.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c0e9a784b8574da4b82cb194dde9c346.jpg"
      ],
      newK4: [
        "https://file-skg.skg.com/skg.com/20210113/ed5bd8ce321543dbbfd9f826a4f21861.jpg",
        "https://file-skg.skg.com/skg.com/20210113/30d6d7042d9a4911b4850bcf38ad3a10.jpg",
        "https://file-skg.skg.com/skg.com/20210113/674edea421f74d488abcbee611bb70d6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b0e883ab0a204af3b4934cc12c02c554.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dae04d9ce014420b9ab6003362a0d2f2.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f800853d9caa41d893242584c03646e0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/099b2154902f45779942a25a05b17f96.jpg",
        "https://file-skg.skg.com/skg.com/20210113/94d0d8da455a4655ad8ad5cda9a3c981.jpg",
        "https://file-skg.skg.com/skg.com/20210113/be7f858cf0674079b9bfb96d35aaaf56.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e36af2bff0fa432d8bed8fb8e4d6ce93.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e453be8c7fe64248966d1596b7d46e03.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3847ba14ed7e43e8b6115ceffce57f7f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/278ddb8d334d4fc0b6af2d0ef7ec52e1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/816ef783ae2b413c94826bdceac2e34f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/be4e8588c91044a4a11a4d9a99aff4bd.jpg",
        "https://file-skg.skg.com/skg.com/20210113/fa7ec02aa09548d88c5ab34fe1f6c49f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e3a6e6bc1e354821888dc2eb3d7d13d0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6a56d61207364a4ab627ce9d92237ed8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/1d54659a42be45e59a8c324316f05fe8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e5dfd12c37fe4f01983b169a7c0d4212.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c33ebe0bde034f5b96deec73f6939dd0.jpg",
        "https://file-skg.skg.com/skg.com/20210113/1582cd0090c3444aa0d98ea5efe5acc8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/cb10ef1560f5415dbbdfe1434738e7a7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/555660a89af6452794d907b40fef1a13.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d8608c2b8f6146e1904449f25cde6a55.jpg"
      ],
      game: [
          "https://file-skg.skg.com/skg.com/20200908/81e4b56e0a8f4104a6ce1871a10e0d14.jpg",
          "https://file-skg.skg.com/skg.com/20200908/b9cac12219554c4d984c7dde299f6847.jpg",
          "https://file-skg.skg.com/skg.com/20200908/95e51464bb8547129f4f855387473097.jpg",
          "https://file-skg.skg.com/skg.com/20200908/461a0bed12864913991f4b96372f7a5c.jpg",
          "https://file-skg.skg.com/skg.com/20200908/416c758f4c204791ad66f1fbdc2d5ca6.jpg",
          "https://file-skg.skg.com/skg.com/20200908/8b8e0a829c5947dcb050411036e33224.jpg",
          "https://file-skg.skg.com/skg.com/20200908/840d9e6e56734e9aa435c1684f82ac3c.jpg",
          "https://file-skg.skg.com/skg.com/20200908/37db3f6c577747dda362154172643536.jpg",
          "https://file-skg.skg.com/skg.com/20200908/3db4eeae73d74a8ba43e58e68c40033e.jpg",
          "https://file-skg.skg.com/skg.com/20200908/a2e2da1914de4fd38c406661bbebfb08.jpg",
          "https://file-skg.skg.com/skg.com/20200908/c9058ad5cca84b7eaf7c1344a5a9739b.jpg",
          "https://file-skg.skg.com/skg.com/20200908/5a8dafde963c4ba783793b6d995d1e08.jpg",
          "https://file-skg.skg.com/skg.com/20200908/4307d5dc2333441c891a8690e347d610.jpg",
          "https://file-skg.skg.com/skg.com/20200908/32ecab342ade4f7cb06774499d025e5b.jpg",
          "https://file-skg.skg.com/skg.com/20200908/b4da35c039b240ac83db32658f6065d3.jpg",
          "https://file-skg.skg.com/skg.com/20200908/57134848473a4fdb97c3354601bc8763.jpg",
          "https://file-skg.skg.com/skg.com/20200908/c4ef3236417d4d10b45851256c1a3b77.jpg",
          "https://file-skg.skg.com/skg.com/20200908/c45a41ba4f1c47bc87b59ae26df85cc5.jpg",
          "https://file-skg.skg.com/skg.com/20200908/0df1b9c884ae4618ad1c4ef6613c47f1.jpg",
          "https://file-skg.skg.com/skg.com/20200908/ee13336f03cd43a3aeb670c8ecb55702.jpg",
          "https://file-skg.skg.com/skg.com/20200908/e886d0d447f8440c8677b3c8ba03a0f8.jpg",
          "https://file-skg.skg.com/skg.com/20200908/8c8c7f942b184e2997c8032712626843.jpg",
          "https://file-skg.skg.com/skg.com/20200908/9935c771bbfd4c78ac60417857d43e7b.jpg",
          "https://file-skg.skg.com/skg.com/20200908/98ee338d377e4217b0d73cb422dd525f.jpg"
      ],
      jinmo: [
        "https://file-skg.skg.com/skg.com/20210113/7cf416645f92420cb487f732a74cb9ba.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b5003658e3894a7bb26a762c9122cd4c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b880e21c3d864b94a47feeb1eb7ad6c9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d921de270d0b4b9294596bafa3a7445f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2a963ef5802a462c8ef6872539fa0a46.jpg",
        "https://file-skg.skg.com/skg.com/20210113/179ceef25ebb41c3ad558d09c7866eb3.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f59b5cc64781447385c01dfe7a915f16.jpg",
        "https://file-skg.skg.com/skg.com/20210113/4a88d1208ac54219b4c64c98fbc74a6e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/06a45b2c26134444a637a9b29297ce6f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7df0f979ef7c4cefae7f37171ee4786b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ee86f9802cac458490ca5ef3fa432878.jpg",
        "https://file-skg.skg.com/skg.com/20210113/06443ce66c3542a1a1ac3f4b1de17b34.jpg",
        "https://file-skg.skg.com/skg.com/20210113/547fa5c2af77487eb9fb9c298cb8f86d.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d870a80605774be09b61fba38d1b1d11.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e0989964686d482b831f6efaabb26e16.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dc959118a7a84d728ef8b2d5d96ee1ed.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3bc46ad64c6f4f93901449ea85078913.jpg",
        "https://file-skg.skg.com/skg.com/20210113/8740b768500c41b68a809834fa2ed929.jpg",
        "https://file-skg.skg.com/skg.com/20210113/1fa318918b6d4bf1afc0ce512bc37385.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d844865fbb7e419ab053a1b7889819fd.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c79cc4979941414583ad25869e9137d4.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b5dd0a9f2a8448a7a20e48137a287786.jpg",
        "https://file-skg.skg.com/skg.com/20210113/038e086a49fe43ef846bee5c1f8cbdf5.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5e1e880f1f1c408e97e81999d3ddf1d3.jpg",
        "https://file-skg.skg.com/skg.com/20210113/26f1c792c5f34149b282ff09a45b3bd8.jpg"
      ],
      k4_4588: [
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/5689ffd19319450fa20c205ad74f296a.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/ceb304cddf4a4e35ab038d0a43dfb3c6.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/d4739499bf294bd4a50cce634742df8f.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/d1e0ed2d83d7481ea72af81836a22fea.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/aa92cf98fca549b6b3491837114de357.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/39f596ee1a164a2fa838091c303302a8.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/acf21097d0174cc8b9bd5a766bba756d.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/7b1058b8e9bf4b2cb36d0e19ef5bfd17.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/f5bccfa82a8349c6ab393f0b67b1944f.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/efbeb50498924b81987cd87fb705edac.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/2d793266697f46cd8aa9119cc52d30ce.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/81026e80d8c9430abb836ef1a9aafd4f.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/3516f9ec2e6040559cb598046bf8e21d.jpg",
          "https://file-beike.obs.cn-south-1.myhuaweicloud.com/officialTest/20201027/2043248a23ce484294bf40f6fcad4701.jpg"
      ],
      G7: [
          "https://file-skg.skg.com/skg.com/20201230/ea2371bce86342bf8582462dbca9ba94.jpg",
          "https://file-skg.skg.com/skg.com/20201230/a6218675b2db42d997a08ee973d43e65.jpg",
          "https://file-skg.skg.com/skg.com/20201230/9c12f1b6e6cc4c8999f7d4450bbcd22b.jpg",
          "https://file-skg.skg.com/skg.com/20201230/49cde369e07d41e3a9545a0b41cbde80.jpg",
          "https://file-skg.skg.com/skg.com/20201230/4e032cd58b124014b22a33b3bfc27ac7.jpg",
          "https://file-skg.skg.com/skg.com/20201230/485989e43fdd4fae981b832dc2da0efb.jpg",
          "https://file-skg.skg.com/skg.com/20201230/659d061d90934ea2b46820298f3d33dd.jpg",
          "https://file-skg.skg.com/skg.com/20201230/be8eccd940a04da882b5561720f89942.jpg",
          "https://file-skg.skg.com/skg.com/20201230/9a677554cac248dfa95981dc7ee1c9db.jpg",
          "https://file-skg.skg.com/skg.com/20201230/c9806179f0fc41f98ba3f7dcaa838605.jpg",
          "https://file-skg.skg.com/skg.com/20201230/861811ea54e2476bac99601c7318cee1.jpg",
          "https://file-skg.skg.com/skg.com/20201230/7802903fa2d34ca0a2b40098d8b63b1b.jpg",
          "https://file-skg.skg.com/skg.com/20201230/8325df487c3c4cefadffd0b22da4d0e6.jpg",
          "https://file-skg.skg.com/skg.com/20201230/de683645c2c54aae8a6226a279080b86.jpg",
          "https://file-skg.skg.com/skg.com/20201230/8639d1a3abc74067a81287403df58ffd.jpg",
          "https://file-skg.skg.com/skg.com/20201230/6c8c289bf540400da2f4daf3d366e021.jpg",
          "https://file-skg.skg.com/skg.com/20201230/42e65067e0ea4f719411c2d58201e77f.jpg",
          "https://file-skg.skg.com/skg.com/20201230/e6dbfaaaeff94200a8e86a501e4c0601.jpg"
      ],
      F5: [
        "https://file-skg.skg.com/skg.com/20210113/7cc712abbd7d4959b109286b0d886408.jpg",
        "https://file-skg.skg.com/skg.com/20210113/7bb00af5471744d692f60c1c5da18506.jpg",
        "https://file-skg.skg.com/skg.com/20210113/d19e92b224e7410082d20251d8dd14a4.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5df7014daecd48b98377434a73f7efd1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/bce682f5c7f24365bffe34e49a76fd7c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/dec840129e6e435f8457fb8ce988f7d9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2804ec92747f43ffbbaa1d0b48bbaeb7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c8083e9e03554f24b1902b3234b2c259.jpg",
        "https://file-skg.skg.com/skg.com/20210113/2d81b7ba9d864ea7af598499fc050ca8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/be7bc89caa2849b18c43e2ba397d93f9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/22508c9c27924b5dafa1f8ec3473e74e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/22de4faa11c24860ae39798958e097b7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/a38898ddb86c438fab079aa110eeca6c.jpg",
        "https://file-skg.skg.com/skg.com/20210113/3f294e4749bf458f8446afee7ea57ee7.jpg",
        "https://file-skg.skg.com/skg.com/20210113/fce0aaee07c7438f852333a17449abb6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/db0bf15073c747ec9bb7f73d8bdfb89b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f5fd937162264a42be6d46a2de64606a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/532d907dd8ca4d3b8d6745d8565116d1.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b0609642ea03435fbf9d8dff45912b91.jpg",
        "https://file-skg.skg.com/skg.com/20210113/5cf0c9c31337406a92078e3e324a271f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ac98c4713bcc42cb9b3ac728ec9a8284.jpg",
        "https://file-skg.skg.com/skg.com/20210113/924a84cb4f8b402c9181bf6792232fb6.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c02ad5da867b41d18da897fb5f2d974d.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ac6d789ac4134de298e70d8eee9e1a5b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/8b5fc4e0d9dd44cfb151f2b3758c1f74.jpg"
      ],
      E4: [
        "https://file-skg.skg.com/skg.com/20210113/8c73ccfcd8c0444b95f34a40c82bd010.jpg",
        "https://file-skg.skg.com/skg.com/20210113/08245397c66144d7a189b4a8ba4ff41a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f1479ac72cb34cd395a9c5eca20bc289.jpg",
        "https://file-skg.skg.com/skg.com/20210113/39c19c0156a045b8a80c6d23d27bf92d.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f9b7bb8d46b94a0f8b571ca95a29d041.jpg",
        "https://file-skg.skg.com/skg.com/20210113/376d08e6798c41abaf9f913ab84ee419.jpg",
        "https://file-skg.skg.com/skg.com/20210113/ae7b0269e88445e497138db091847397.jpg",
        "https://file-skg.skg.com/skg.com/20210113/bce4c6651c4b4b6883fddaca244d8c4a.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e17b175ac5c447ab82752f0f0ac07d9f.jpg",
        "https://file-skg.skg.com/skg.com/20210113/78d04aa6385644e79d77b44c8e683f22.jpg",
        "https://file-skg.skg.com/skg.com/20210113/868f2bce929b42aaa575742d10b35810.jpg",
        "https://file-skg.skg.com/skg.com/20210113/56517497a575421ea7ce04790d974713.jpg",
        "https://file-skg.skg.com/skg.com/20210113/84406337323344c58cbc194c72d3a7b8.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c1b16f52706a4792a61ec4c7ae3963fb.jpg",
        "https://file-skg.skg.com/skg.com/20210113/f5ab8282a3314b27875b60ed77b493e4.jpg",
        "https://file-skg.skg.com/skg.com/20210113/63d8cd9b1f384c00984cdca575e471ab.jpg",
        "https://file-skg.skg.com/skg.com/20210113/288da44d56c44877b035361d9a0a8899.jpg",
        "https://file-skg.skg.com/skg.com/20210113/e445194ee7c44aca9a9a0ce0d179f87e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/9c948a249be44cd4875b0f8a113936af.jpg",
        "https://file-skg.skg.com/skg.com/20210113/116d3b246874490c9c128dd8e8336e05.jpg",
        "https://file-skg.skg.com/skg.com/20210113/93aaa946230848288da05c4b522ddba9.jpg",
        "https://file-skg.skg.com/skg.com/20210113/c2f55fa3ce484ab68b6f21e2cf665e4e.jpg",
        "https://file-skg.skg.com/skg.com/20210113/6bf825bed6ef418caef29fac1a8f21a2.jpg",
        "https://file-skg.skg.com/skg.com/20210113/48a1fca973de4a078b286f058d8bf85b.jpg",
        "https://file-skg.skg.com/skg.com/20210113/b9e4731b1fa1474c86d20cefbdd6cb18.jpg"
      ],
      productDetail: {
        k6: [
          {
            name: 'K6炫彩浅蓝'
          },
          {
            name: 'K6炫彩浅粉'
          },
          {
            name: 'K6炫彩墨绿'
          },
          {
            name: 'K6炫彩蓝'
          },
          {
            name: 'K6炫彩浅银'
          }
        ],
        newk5: [
          {
            name: '全新K5'
          }
        ],
        k5PLUS: [
          {
            name: 'k5PLUS'
          }
        ],
        k5Pro: [
          {
            name: 'k5尊贵'
          }
        ],
        k5Classic: [
          {
            name: '4098经典'
          }
        ],
        k5BLE: [
          {
            name: '4098蓝牙'
          }
        ],
        k5AI: [
          {
            name: 'k5AI'
          }
        ],
        newK4: [
          {
            name: '全新K4'
          }
        ],
        k4: [
          {
            name: 'k4'
          }
        ],
        4588: [
          {
            name: '4588'
          }
        ],
        k3_1: [
          {
            name: 'K3蒂芙尼蓝'
          }
        ],
        k3_2: [
          {
            name: 'k3浅灰'
          }
        ],
        k3_3: [
          {
            name: 'k3象牙白'
          }
        ],
        dz_1: [
          {
            name: 'K6(娜小古粉色定制款)'
          }
        ],
        dz_2: [
          {
            name: 'K6(娜小古白色定制款)'
          }
        ],
        dz_3: [
          {
            name: 'K6(施华洛世奇水晶限量款)'
          }
        ],
        dz_4: [
          {
            name: 'K6(娜小古红色定制款)'
          }
        ],
        jinmo: [
          {
            name: 'F3筋膜枪'
          }
        ],
        4306: [
          {
            name: 'E3'
          }
        ],
        4301: [
          {
            name: '4301'
          }
        ],
        G7: [
          {
            name: 'G7'
          }
        ],
        F5: [
          {
            name: 'F5'
          }
        ],
        E4: [
          {
            name: 'E4'
          }
        ],
      }
    }
  },
  methods:{
    getDetail(){
      switch(this.$route.params.id){
        case "k6": this.proKind = this.k6;break;
        case "k5Classic": this.proKind = this.k5JD;break;
        case "k5BLE": this.proKind = this.k5BL;break;
        case "k5PLUS": this.proKind = this.k5PLUS;break;
        case "k5Pro": this.proKind = this.k5ZG;break;
        case "k5AI": this.proKind = this.k5AI;break;
        case "newk5": this.proKind = this.newk5;break;
        case "k4": this.proKind = this.k4;break;
        case "k3_1": this.proKind = this.k3_1;break;
        case "k3_2": this.proKind = this.k3_2;break;
        case "k3_3": this.proKind = this.k3_3;break;
        case "dz_1": this.proKind = this.dz_1;break;
        case "dz_2": this.proKind = this.dz_1;break;
        case "dz_3": this.proKind = this.k6SLH;break;
        case "dz_4": this.proKind = this.dz_1;break;
        case "4301": this.proKind = this.eyes_4301;break;
        case "4306": this.proKind = this.eyes_4306;break;
        case "newK4": this.proKind = this.newK4;break;
        case "game": this.proKind = this.game;break;
        case "jinmo": this.proKind = this.jinmo;break;
        case "4588": this.proKind = this.k4_4588;break;
        case "G7": this.proKind = this.G7;break;
        case "F5": this.proKind = this.F5;break;
        case "E4": this.proKind = this.E4;break;
      }
    }
  },
  mounted(){
    window.scrollTo(0,0)
    this.getDetail();

  }

}
</script>

<style lang="scss" scoped>
.proDetail {
  padding-top: 50px;
  overflow-x: hidden;
  .photo {
    width: 100vw;
    img{
      width: 100%;
      display: block;
    }
  }
}
@media screen and (min-width: 768px) {
  .proDetail {
  padding-top: 60px;
  overflow-x: hidden;
    .photo {
      width: 900px;
      margin: 0 auto;
      box-shadow: 0 0 10px #eee;
    }
    .ads{
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
}
</style>
