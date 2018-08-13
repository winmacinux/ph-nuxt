<template>
  <v-card flat class="pa-2" >
    <content-loading :width="100" :height="127" >
      <circle cx="50" cy="39" r="39" />
      <rect x="18" y="97" rx="2" ry="2" width="70" height="10" />
    </content-loading>
  </v-card>
</template>

<style lang="less" scoped>
.card {
  border-radius: 5px;
  cursor: pointer;
  
  &:hover{
    box-shadow: 0 3px 16px 0 rgba(0, 0, 0, .11);
  }
}
</style>
