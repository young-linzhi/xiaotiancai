<template>
    <el-row class="tac">
      <el-col :span="16" >
        <el-menu
          default-active="2"
          router
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
        <el-container>
        <el-menu-item index="/show/page1">
            <span>
              <el-icon><ShoppingCart /></el-icon>
                促销历史管理
            </span>
          </el-menu-item>
          <el-menu-item index="/show/page2">
            <el-icon><ShoppingCart /></el-icon>
            <span>促销商品分类管理</span>
          </el-menu-item>
          <el-menu-item index="/show/page3">
            <el-icon><ShoppingCart /></el-icon>
            <span>促销商品管理</span>
          </el-menu-item>
          <el-menu-item index="/show/page4">
            <el-icon><ShoppingCart /></el-icon>
            <span>促销管理</span>
          </el-menu-item>
        </el-container>
        </el-menu>
      </el-col>
    </el-row>
</template>
<script>
</script>