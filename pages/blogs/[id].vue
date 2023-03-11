<template>
  <div class="flex flex-col items-center md:flex-row md:items-start">
    <div class="mx-6 mt-12">
      <iframe
        v-for="product in blog.products"
        :key="product"
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style="width: 120px; height: 340px"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        :src="product.affiliateLink"
      ></iframe>
    </div>

    <div
      class="container mx-auto flex flex-col items-center p-6 leading-loose w-3/4"
    >
      <Head>
        <Title>{{ blog.title }}</Title>
        <Meta name="description" :content="blog.intro" />
      </Head>
      <h1 class="text-2xl mt-6 mb-12">{{ blog.title }}</h1>
      <img class="max-h-72 w-3/4" :src="blog.mainImage" />
      <p class="text-lg mb-6 mt-6 pr-6 md:w-3/4">
        {{ blog.intro }}
      </p>

      <div class="mt-4 md:w-3/4">
        <h2 class="underline text-xl mb-2">Advantages:</h2>
        <ul class="mb-6">
          <li v-for="(advantage, index) in blog.advantages" :key="index">
            <span class="text-black text-xl">{{ index + 1 }}</span> -
            {{ advantage }}
          </li>
        </ul>
      </div>
      <div class="mt-4 md:w-3/4">
        <h2 class="underline text-xl mb-2">Disadvantages</h2>
        <ul class="mb-6">
          <li v-for="(disadvantage, index) in blog.disadvantages" :key="index">
            <span class="text-black text-xl">{{ index + 1 }}</span> -
            {{ disadvantage }}
          </li>
        </ul>
      </div>

      <!-- youtube video -->
      <!-- <iframe
        v-if="blog.youtubeLink"
        :src="blog.youtubeLink"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="w-1/2 mb-6 mt-6 h-64 self-center"
      ></iframe> -->
      <!-- Google ads-->
      <!--products-->

      <!-- <div class="container flex justify-center mt-10 gap-12">
        <product-card
          v-for="product in blog.products"
          :key="product"
          :product="product"
        />
      </div> -->
    </div>

    <!--select random products that have same category (3 products )-->
    <div class="mx-6 mt-12">
      <iframe
        v-for="product in randomProducts"
        :key="product._id"
        sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style="width: 120px; height: 340px"
        marginwidth="0"
        marginheight="0"
        scrolling="no"
        frameborder="0"
        :src="product.affiliateLink"
      ></iframe>
    </div>
  </div>
</template>
<script setup>
let blog;
const route = useRoute();
const { data } = await useFetch(`/api/blogs/${route.params.id}`);
blog = data;
let randomProducts;
let pruducstUrls = await useFetch("/api/randProducts");
pruducstUrls = pruducstUrls.data;
randomProducts = pruducstUrls;
</script>
