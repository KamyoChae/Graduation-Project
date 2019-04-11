<template>
    <div class="wrapper">
        <div class="title" v-if="this.pages == 'login'">登录</div>
        <div class="title" v-else>注册</div>

        <div class="logo"></div>
        <div class="inputbox">
            <input type="text" name="username" id="username" placeholder="学号/用户名">
            <input type="password" name="password1" id="password1" placeholder="密码">
            <input type="password" v-if="this.pages != 'login'" name="password2" id="password2" placeholder="确认密码">
            <span class="forgetPa">忘记密码</span>
            <router-link tag='button' to="/Index" v-if="this.pages == 'login'">登录</router-link>
            <button v-else>注册</button>

        </div>
        <div class="foot">
            <p v-if="this.pages == 'login'" @click="toRegister"><span class="register" >注册</span>账号，加入社团大家庭</p>
            <p v-else><span class="login" @click="toRegister">登录</span>账号，进入社团大家庭</p>
        </div>
    </div>

</template>

<script>
export default {
    data(){
        return{ 
            pages:'login',

        }
    },
    methods: {
        toRegister(){ 
            // 登录注册页切换
            this.pages == 'login' ? this.pages = 'register' : this.pages = 'login' 
        }
    },
}
</script>

<style lang='stylus' scoped> 
.wrapper
    position relative
    width 100vw
    height 100vh
    background #fff 
    .title
        width 10vw
        text-align center
        line-height 3em
        color #888 
        margin auto
    .logo
        width 50vw
        height 0
        padding-bottom  50% 
        background-image url(../images/logo.png)
        background-size 100% 
        background-repeat no-repeat
        margin auto
    .inputbox
        display flex
        flex-direction column 
        width 80vw 
        margin auto 
        input  
            border 1px solid #ddd
        input, span , button 
            padding .5em 1em
            border-radius 5px
            margin-bottom 1em
        span 
            font-size .6em
            text-align right 
            color #2196f3
        button 
            background #2196f3
            color #ffffff
            box-shadow 0px 5px 10px #3d83b6 
    .foot
        width 100%
        text-align center
        position absolute
        bottom 2em
        color #aaa
        .register, .login
            color #2196f3

</style>    