<template>
  <v-container class="status py-3 px-2">
    <v-row class="bg-white py-2 rounded-t-xl px-2">
      <v-col cols="auto">
        <v-img src="/assets/images/icons/arrow-back.png"></v-img>
      </v-col>
      <v-divider class="mx-2 p-0 d-inline" vertical></v-divider>
      <v-col class="d-flex align-center">
        <span class="d-none d-sm-block" style="color: #b5b5b5">LAUNCHPAD / DETAILS / PROJECT / 1</span>
      </v-col>
      <v-col class="ml-auto" cols="auto">
        <v-btn class="px-0" :ripple="false" variant="text">Open Campus</v-btn>
      </v-col>
    </v-row>
    <v-row class="px-2 py-4 d-flex align-center">
      <v-col><h2 class="text-white">Open Campus</h2></v-col>
      <v-col class="ml-auto" cols="auto"
        ><span class="bg-blue py-1 px-2 rounded">PENDING</span></v-col
      >
    </v-row>
  </v-container>
</template>

<style lang="scss">

</style>
