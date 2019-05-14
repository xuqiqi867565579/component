<template>
    <div class='dialog' :class="title==='info'?'info':title==='success'?'success':'error'">
           {{title}}
        <!-- <button>取消<button> -->
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            default:"info"
        }
       
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){
        setTimeout(()=>{
            this.$destroy()
        },2000)
    },
    destroyed(){
        console.log(this.$el,"222")
        // console.log(document.body)
        // document.body.removeChild(this.$el)
    }
}
</script>
<style scoped lang="scss">
.dialog{
    width:100px;
    height:100px;
   
}
.error{
     background:red;
}
.success{
     background:green;
}
.info{
     background:#ccc;
}

</style>