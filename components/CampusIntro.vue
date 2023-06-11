<template>
  <v-container class="bg-white py-2 rounded-xl pb-11 pt-7 px-6 px-sm-10">
    <v-row class="align-center">
      <v-col cols="6" sm="auto" class="px-1"
        ><h2 class="section_title">Open Campus</h2></v-col
      >
      <v-col cols="auto" sm="auto" class="ml-auto px-0 px-sm-auto img-wrap" >
        <v-btn class="px-0 mx-2" variant="text"
          ><v-img src="../assets/images/icons/open-1.svg"></v-img
        ></v-btn>
        <v-btn  class="px-0 mx-2" variant="text"
          ><v-img src="../assets/images/icons/open-2.svg"></v-img
        ></v-btn>
        <v-btn  class="px-0 mx-2" variant="text"
          ><v-img src="../assets/images/icons/open-3.svg"></v-img
        ></v-btn>
      </v-col>
    </v-row>

    <v-row class="pb-16">      <p class="opc-7 fz-18">
        A Web3 Education Protocol to tokenize educational content - first
        adopted by Tiny Tap
      </p></v-row>

    <v-row class="pb-15">
      <h3 class="subtitle pb-5">Project Introduction</h3>
      <p class="fz-18 opc-7">
        Open Campus Protocol is a web3 education protocol for tokenizing
        educational content by enabling teachers and creators to monetize the
        content that they created. Its mission is to ensure teachers’
        contribution to the society is recognised and provide a global,
        alternative education system for learners worldwide. <br />
        TinyTap is Open Campus Protocol’s first adopter, it is known for its
        no-code authoring platform that has produced over 250k interactive
        lessons to date. It is a top 10 grossing kids mobile application on the
        App Store and Google Play with 9 million+ families and 100k+ content
        creators.<br />
        EDU is the native token of the Open Campus ecosystem (including
        TinyTap), where EDU can be used on the Open Campus platform and
        participate in Open Campus DAO governance proposals to guide the
        direction of the protocol development.
      </p>
    </v-row>

    <v-row>
      <h3 class="subtitle pb-8">Project Introduction</h3>
    </v-row>

    <v-row>
      <v-col>
        <v-row
          v-for="item in data"
          :key="item.title"
          class="d-flex align-center justify-center circle-wrap pb-2 sale"
          style="position: relative"
        >
          <v-col class="py-0 px-0">
            <h3 class="flex-grow-1 text-right opc-7 font-weight-regular">
              {{ item.title }}
            </h3>
          </v-col>
          <v-col class="py-0 px-00 px-sm-10" cols="auto">
            <div class="circle"></div>
          </v-col>
          <v-col class="py-0 px-0">
            <h3 class="flex-grow-1 font-weight-medium">{{ item.value }}</h3>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      data: [
        { title: "Hard Cap", value: "2.500.000 USD" },
        { title: "Total Token Supply", value: "1.000.000.000 EDU" },
        {
          title: "Initial Circulating Supply",
          value: "14.50% of Total Token Supply",
        },
        {
          title: "Public Sale Token Price",
          value:
            "0.05 USD (price in BNB will be determined prior to the start of subscription)",
        },
        { title: "Tokens Offered", value: "50.000.000 EDU" },
        {
          title: "Hard Cap Per User",
          value:
            "15.000 USD (price in BNB will be determined prior to the start of subscription)",
        },
        { title: "Token Sale Vesting Period", value: "No lockup" },
        { title: "Token Type", value: "TRC20" },
        { title: "Token Distribution", value: "After the end of token sale" },
      ],
    };
  },
};
</script>

<style lang="scss">
.circle-wrap {
  &:not(:last-child) {
    &::before {
      content: "";
      width: 3px;
      height: 135%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 8px;
      background-color: #fedc4a;
    }
  }
}

.img-wrap {
    @media (max-width: 500px) {
        button {
            min-width: auto;
            max-width: 20px;
        }

        img{
        max-width: 21px;
    }
    }
 


}
</style>
