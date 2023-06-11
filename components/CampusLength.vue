<template>
  <v-container class="bg-white py-2 rounded-xl pb-11 pt-7">
    <h2 class="pl-6 pl-none section_title pb-8">Длительность подписки</h2>
    <v-row class="px-4 px-sm-10 py-2">
      <v-row v-for="item in items" :key="item.id" class="mb-0 mb-xs-6 pl-14 pl-none">
        <v-col class="px-0" cols="1" sm="auto">
          <v-img src="../assets/images/length.svg"></v-img>
        </v-col>
        <v-col cols="11" sm="9">
          <h2 class="mb-2 lengh-title">{{ item.title }}</h2>
          <span class="fz-18">{{ item.date }}</span>
          <v-divider class="mx-1 p-0 d-inline" vertical></v-divider>
          <span class="fz-18">{{ item.time }}</span>
          <p class="fz-18 opc-7 mt-2 d-none d-sm-block">{{ item.description }}</p>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: "Расчётный период удержания BNB",
          date: "2023-09-08",
          time: "03:00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus"
        },
        {
          id: 2,
          title: "Расчётный период удержания BNB",
          date: "2023-09-08",
          time: "03:00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus"
        },
        {
          id: 3,
          title: "Расчётный период удержания BNB",
          date: "2023-09-08",
          time: "03:00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus"
        },
        {
          id: 4,
          title: "Расчётный период удержания BNB",
          date: "2023-09-08",
          time: "03:00",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat tempus risus, eu cursus urna bibendum et. Vestibulum ligula mauris, pharetra non pretium in, scelerisque vitae risus"
        },
        // Додайте інші елементи за потреби
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.pl-none {
    @media (max-width: 768px) {
       padding-left: 0 !important;
      }
}


.fz-18 {
    font-size: 18px;

    @media (max-width: 768px) {
       font-size: 12px;
    }
}

</style>