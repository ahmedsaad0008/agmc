<template>
  <Banner :image="bannerImage"/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">News</h2>
    </div>
  <div class="flex flex-col md:flex-row gap-8 p-8">
    <!-- Main Article Section -->
    <div class="flex-1">
      <h1 class="text-2xl text-black font-bold mb-4">The Scalability Solution: Understanding Layer One vs. Layer Two Blockchains</h1>
      <p class="text-gray-500 text-sm mb-6">20 Sep 2023, 8:00pm</p>
      <img
          :src="News"
          alt="Blockchain Image"
          class="w-full rounded-lg mb-6"
      />
      <p class="text-gray-700 text-xl mb-4 leading-6">
        Layer one or L1 refers to a base blockchain protocol like Bitcoin or Ethereum. These networks operate on a decentralized ledger secured by proof-of-work (PoW) mining or proof-of-stake (PoS) staking. L1 chains such as Bitcoin and Ethereum offer unparalleled security. However, during peak times, both of these chains grapple with sluggish transaction speeds and steep fees.
      </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Developers from several L1 networks are working to improve layer one scaling through methods like increasing block size, sharding, and introducing proof-of-stake consensus. However, substantial layer one upgrades require coordination among node operators and can take years to implement. Some blockchains intend to use L2 protocols as either a temporary or long-term solution.
        </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Bitcoin’s Lightning Network (LN) is a second-layer scaling solution designed to facilitate faster, low-cost transactions on the Bitcoin blockchain (L1). It operates on top of Bitcoin’s base layer, allowing for instant payments by circumventing the need for block confirmations.
        </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Transactions on the Lightning Network occur off-chain in payment channels between users. Only channel open and close transactions are recorded on the Bitcoin blockchain. Participants can transact multiple times within these channels, reducing congestion and fees on L1.
        </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Critics target LN for its prevalent use of custodial wallets, as these demand users place trust in third parties to handle their money. Moreover, the off-chain method poses a risk: if nodes lack proper backup, it could trigger an irrevocable loss of funds.
        </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Loopring uses zero-knowledge rollups (ZK-rollups) to batch hundreds of transactions off-chain and generate a cryptographic proof verifying their validity. This proof is submitted to layer one (Ethereum), avoiding the need to process each transaction on-chain.
        </p>
      <p class="text-gray-700 leading-6 text-xl mb-4">
        Polygon ZKEVM also uses ZK-rollup technology to offer high throughput Ethereum transactions with lower fees. On the risk side, some believe that relying heavily on ZK-rollups can introduce centralization risks as validators and sequencers become key to the system
      </p>
    </div>

    <!-- More News Section -->
    <div class="w-full md:w-1/3">
      <h2 class="text-xl font-bold mb-4 text-black">More News</h2>
      <div class="space-y-4">
        <div
            v-for="(news, index) in moreNews"
            :key="index"
            class="flex items-center gap-4 border-b pb-4"
        >
          <img
              :src="news.image"
              :alt="news.title"
              class="w-36 h-36 object-cover rounded-md"
          />
          <div class="flex flex-col justify-between h-100">
            <div>
              <h3 class="text-xl font-semibold text-black">{{ news.title }}</h3>
              <p class="text-sm text-gray-500">{{ news.desc }}</p>
            </div>
            <p class="text-sm text-gray-500">{{ news.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Banner from "@/components/Banner.vue";
import News from "../assets/images/news.svg";
import bannerImage from '@/assets/images/slider2.jpeg'


    const moreNews = ref([
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
      {
        title: "U.S. downs suspected Chinese spy balloon",
        desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
        date: "27 Dec 2020",
        image: News
      },
    ]);

</script>

<style scoped>
/* Add custom styles if needed */
</style>
