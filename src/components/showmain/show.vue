<template>
    <div class="common-layout">
          <el-aside width="100%">
            <el-col >
                <asides></asides>
            </el-col>
          </el-aside>
          <el-main>
            <mainshow></mainshow>
          </el-main>
    </div>
</template>
<script>
import headr  from '../showmain/head.vue'
import asides from '../showmain/aisde.vue'
import mainshow from '../showmain/main.vue'
import { defineComponent } from 'vue';
export default defineComponent ({
  components:{
    headr,
    asides,
    mainshow
  }
})
</script>

<style>
</style>
