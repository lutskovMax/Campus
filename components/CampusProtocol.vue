<template>
  <v-container class="bg-white py-2 rounded-xl pb-11 pt-7">
    <v-row class="px-4 py-2">
      <v-col cols="12" sm="auto" class="pr-xs-0 pr-sm-4 px-0">
        <v-img src="/assets/images/protocol.png"></v-img>
      </v-col>
      <v-col cols="auto px-0">
        <h2 class="title mb-3">Open Campus</h2>
        <p class="text-black opc-7 mb-6 d-none d-sm-block">
          A Web3 Education Protocol to tokenize educational content - first
          adopted by Tiny Tap
        </p>

        <v-row class="px-0 py-2 pl-3">
          <v-col cols="12" sm="auto" class="px-0">
            <v-btn class="mr-2 text-black" variant="tonal">
              <span class="mr-1">
                <v-img src="../assets/images/icons/link.svg"></v-img>
              </span>
              Сайт
            </v-btn>

            <v-btn
              class="mr-2 text-black"
              variant="tonal"
              prepend-icon="fas fa-file"
            >
              Whitepaper
            </v-btn>
          </v-col>
          <v-col cols="12" sm="auto" class="px-0 text-right">
            <v-btn class="mr-2 text-black" variant="tonal">
              <span class="mr-1">
                <v-img src="../assets/images/icons/doc.svg"></v-img>
              </span>
              Подробности
            </v-btn>

            <v-btn variant="tonal" class="text-black">
              <span class="mr-1">
                <v-img src="../assets/images/icons/faq.svg"></v-img>
              </span>
              FAQ
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row class="px-4 py-2">
      <v-col
        cols="auto"
        class="d-none d-lg-flex py-0 px-0 align-center calendar"
        v-for="(item, index) in items.slice(0, 4)"
        :key="item.id"
      >
        <v-col class="bg-yellow-darken-1 rounded-lg" cols="auto">
          <v-row class="px-5 pt-3 pb-5">
            <v-col class="px-0 py-0">
              <h4 class="mb-1">{{ item.title }}</h4>
              <span>{{ item.date }}</span>
              <v-divider class="mx-1 p-0 d-inline" vertical></v-divider>
              <span>{{ item.time }}</span>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="auto" class="px-1" v-if="index < 3">
          <v-icon icon="fas fa-caret-right" style="color: #fedc4a"></v-icon>
        </v-col>
      </v-col>
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
          title: "Рассчитать максимальное вложение",
          date: "2023-09-08",
          time: "03:00",
        },

        {
          id: 2,
          title: "Фиксация USDT",
          date: "2023-09-12",
          time: "14:00",
        },
        {
          id: 3,
          title: "Распределение токенов",
          date: "2023-09-15",
          time: "01:00",
        },
        {
          id: 4,
          title: "Распределение",
          date: "2023-09-16",
          time: "10:00",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.title {
  font-size: 40px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.calendar {
  &:last-child {
    display: none;
  }
}
</style>
