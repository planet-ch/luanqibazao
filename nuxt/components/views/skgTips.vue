<template>
    <div class="tips" >
        <div class="center">
            <!--<div class="close" @click="close">
                 <img src="/en/img/tips/close.png" alt="" > 
            </div>-->
             <!-- <div class="heard">
                “SKG”官方声明
            </div>
            <div class="title">
            	 严厉打击侵犯“SKG”品牌权益的行为
            </div>
            <div class="ts">
            	致广大消费者：
            </div>
            <div class="content">
               	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近期，“SKG”品牌发现，多渠道出现模仿、盗用“SKG”品牌相关视觉图片、视频素材、品牌关键词等侵权行为。<br/>
 				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“SKG”品牌方已展开全网打假行动，将严厉打击，追究侵权方的法律责任。<br/>
				 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;以下店铺销售的是“SKG”假货，请广大消费者购买“SKG”产品，务必认准官方授权渠道。
            </div>
            <div class="footer">
               	<img src="/en/img/tips/1.png" alt="" />
               	<img src="/en/img/tips/2.png" alt="" />
               	<img src="/en/img/tips/3.png" alt="" />
               	<img src="/en/img/tips/4.png" alt="" />
               	<img src="/en/img/tips/5.png" alt="" />
            </div> 
            <div class="gs">
            	广东艾诗凯奇智能科技有限公司<br/>
            	二〇一九年九月二十一日
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    name:'tips',
    computed:{
        status(){
            return this.$store.state.tipsStatus
        }
    },
    watch:{
    },
    methods:{
        close(){
            localStorage.setItem("UpdateTip2", false);
            this.$store.commit("UpdateTip",false);
        }
    },
    mounted(){
    	 this.$store.commit("UpdateTip",false);
    }
}
</script>
<style lang="scss" scoped>
.tips{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background:#fff;
    z-index: 999;
    .close{
            position: absolute;
		    top: 0;
		    right: 0;
		    width: 40px;
		    height: 40px;
		    cursor: pointer;
		    font-size: 20px;
	        img{
	            width: 100%;
	        }
    }
    .center{
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
        width: 90%;
        max-width: 600px;
        box-sizing: border-box;
        padding: 15px;
        //background-image: url("/en/img/tips/bg.png");
        background-size: 50%;
        background-position: left bottom;
        background-repeat: no-repeat;
        background-color: #fff;
        
        .heard{
        	text-align: center;
		    font-size: 23px;
		    font-weight: 700;
		    padding-top: 5px;
        }
        .title{
        	font-size: 16px;
		    font-weight: 700;
		    text-align: center;
		    padding-top: 5px;
        }
        .ts{
        	font-size: 15px;
		    font-weight: 700;
		    text-align: left;
		    padding-top: 3px;
        }
        .content{
            padding-top: 5px;
		    text-align: justify;
		    font-size: 14px;
		    line-height: 25px;
        }
        .footer{
            width: 100%;
            text-align: left;
            img{
                width: 33%;
    			height: 170px;
            }

        }
        .gs{
        	    font-size: 15px;
			    font-weight: 700;
			    text-align: right;
			    line-height: 23px;
			    margin-top: 10px;
			    position: absolute;
			    right: 2px;
			    bottom: 3px;
			    height: 42px;
        }
    }
}
@media screen and ( min-width: 1025px) {
    .tips{
        .center{
            max-width: 600px;
            .phone{
                display: none;
            }
            .pc{
                display: block;
            }
        }
    }
}
@media screen and ( max-width: 1024px) {
    .tips{
        .center{
            .phone{
                display: block;
            }
            .pc{
                display: none;
            }
        }
    }
}
@media screen and (max-width: 420px){
	.tips{
		.center{
			 width: 100%;
		    height: 100%;
		    padding: 5px;
		    top: 50%!important;
		    .title {
			    padding-top: 5px!important;
			    font-size: 14px;
		    }
		    .heard {
			    padding-top: 5px!important;
			    font-size: 20px!important;
			}
			.content{
			    line-height: 22px;
			    font-size: 13px;
			}
			.footer{
			img{
			    width: 33%;
				    height: 137.39px!important;
				}
			}
			.gs{
	    		font-size: 13px!important;
			}
		}
		
	}
}
@media screen and (max-width: 320px){
	.tips .center {
	    width: 100%;
	    height: 100%;
	    padding: 3px;
	}
	.tips .close {
	    position: absolute;
	    top: 0;
	    right: 0;
	    width: 20px;
	    height: 20px;
	    cursor: pointer;
	    font-size: 17px;
	}
}

</style>