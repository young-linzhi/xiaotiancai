<template>
    <el-main >
    <RouterView :key="key"></RouterView>
    </el-main>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent ({
    data(){    
    },
    computed:{
        key(){
            return this.$route.path
        }
    }
})
</script>

<style>
</style>

