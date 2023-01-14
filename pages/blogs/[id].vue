<template>
  <div class="container mx-auto flex flex-col items-center p-6 leading-loose">
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
        <li v-for="(disadvantage, index) in blog.disadavntages" :key="index">
          <span class="text-black text-xl">{{ index + 1 }}</span> -
          {{ disadvantage }}
        </li>
      </ul>
    </div>

    <!-- youtube video -->
    <iframe
      :src="blog.youtubeLink"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="w-1/2 mb-6 mt-6 h-64 self-center"
    ></iframe>

    <!--products-->

    <div class="container flex justify-center mt-10">
      <product-card
        v-for="product in blog.products"
        :key="product"
        :product="product"
      />
    </div>
  </div>
</template>
<script setup>
let blog;
const route = useRoute();
const { data } = await useFetch(`/api/blogs/${route.params.id}`);
blog = data;
</script>
