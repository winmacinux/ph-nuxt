<template>
  <v-card flat class="pa-1">
    <content-loading :width="300" :height="200" >
      <rect x="0" y="0" rx="4" ry="4" width="300" height="150" />
      <rect x="0" y="155" rx="4" ry="4" width="150" height="10" />
      <rect x="0" y="170" rx="4" ry="4" width="250" height="10" />
      <rect x="0" y="185" rx="4" ry="4" width="120" height="15" />
    </content-loading>
  </v-card>
</template>
