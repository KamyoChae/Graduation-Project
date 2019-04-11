<template>
<div class="wrapper">
    <UserMain />
    <UserList />
    <IndexFoot />
</div>

</template>

<script>

import IndexFoot from '@web/index/components/IndexFoot'
import UserMain from './components/UserMain'
import UserList from './components/UserListNav'
export default {
    data(){
        return {

        }
    },
    components:{
        UserMain,
        UserList,
        IndexFoot,

    }

}
</script>

<style lang='stylus' scoped>

.wrapper
    width 100vw 
</style>