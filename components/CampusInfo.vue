
<template>
  <v-container class="bg-white py-2 rounded-xl pb-7 pt-7">
    <v-row class="px-2 py-2 d-flex align-center justify-space-between">
      <v-col cols="12" sm="6" md="4" lg="3" v-for="(item, index) in dataItems" :key="index">
        <h4 class="mb-2 opc-5 fz-18">{{ item.label }}</h4>
        <span class="fz-18 font-weight-medium">{{ item.value }}</span>
      </v-col>
    </v-row>
    <v-row class="px-2 py-xs-4 d-flex align-center justify-center">
      <v-col cols="12" sm="6" class="text-center mx-auto mt-4">
        <div class="w-full sm:w-1/2 rounded-lg py-2" style="background: #DFDFDF;">
          <h4 class="mb-2 opc-5 fz-18">Макс. на пользователя</h4>
          <span class="fz-18 font-weight-medium">300000 EDU = 45,8429 BNB (=14294 USD)</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>


  
<script>
  export default {
    data() {
      return {
        dataItems: [
          { label: "Тип:", value: "Подписка" },
          { label: "Распределение:", value: "50 000 000, 000 EDU" },
          { label: "Цена:", value: "1 EDU = 0.00015281 BNB" },
          { label: "Мин. вложения:", value: "0.1 BNB" },
        ],
      };
    },
  };
</script>
