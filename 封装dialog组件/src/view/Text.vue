<template>
    <div>
         <button @click="getdilog('inifo')" >提示信息</button>
         <button @click="getdilog('success')">成功信息</button>
         <button @click="getdilog('error')">失败信息</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        getdilog(str) { 
          this.$dialog(str) 
        },
        
    },
   
}
</script>
<style scoped  lang="scss">

</style>