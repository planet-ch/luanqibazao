<template>
    <div class="reg">
        <ul>
            <li><router-link target="_blank" to="/distribution/distribution" class="client">经销商登录</router-link></li>
            <!-- <li><router-link to="/login/Client" class="client">经销商登录</router-link></li>
            <li><router-link to="/login/user" class="user">用户登录</router-link></li>
            <li><router-link to="/login/reg" class="reg">注册</router-link></li> -->
        </ul>
    </div>
</template>
<style lang="scss">
$font-color: #afafaf;
.reg{
    ul{
        li{
            margin: 0;
            // margin: 0 0 0 10px;
            float: left;
            a{
                color: rgba(255, 255, 255, 0.7);
                padding-left: 20px;
                margin-left: 0px;
                // margin-left: 20px;
                &:hover{
                    color: rgba(255, 255, 255, 1);
                }
                &.client{
                    background-image: url("/en/img/SVG/login_client.svg");
                    background-size: 12px;
                    background-position: left 2px;
                    background-repeat: no-repeat;
                }
                &.user{
                    background-image: url("/en/img/SVG/login_user.svg");
                    background-size: 12px;
                    background-position: left 2px;
                    background-repeat: no-repeat;
                }
                &.reg{
                    background-image: url("/en/img/SVG/reg.svg");
                    background-size: 14px;
                    background-position: left 1px;
                    background-repeat: no-repeat;
                }
            }
        }
        &:after{
            content: '';
            display: block;
            clear: both;
        }
    }
}
@media screen and (max-width: 420px) {
    .reg{
    ul{
        li{
            margin: 0;
            float: none;
            a{
                color: $font-color;
                padding-left: 0;
                margin-left: 0;
                &:hover{
                    color: $font-color;
                }
                &.client{
                    background: none;
                }
                &.user{
                    background: none;
                }
                &.reg{
                    background: none;
                }
            }
        }
        &:after{
            content: '';
            display: block;
            clear: both;
        }
    }
}
}

</style>

