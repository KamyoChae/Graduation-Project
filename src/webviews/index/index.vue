<template>
    <div class="wrapper">

        <IndexHeader />
        <IndexHot />
        <IndexArticle />
        <IndexFoot /> 
    </div>
</template>

<script>
import IndexHeader from './components/IndexHeader'
import IndexHot from './components/IndexHot'
import IndexArticle from './components/IndexArticle'
import IndexFoot from './components/IndexFoot'


export default {
    data(){
        return {

        }
    },
    methods:{},
    components:{
        IndexHeader,
        IndexHot,
        IndexArticle,
        IndexFoot,

    }


}
</script>

<style lang='stylus' scoped>
.wrapper
    position relative
</style>