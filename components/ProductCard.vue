<template>
  <div
    class="w-72 shadow-md transition-all duration-300 rounded-md mb-6 mr-6"
    id="card"
  >
    <span class="inline p-4">{{ product.country }}</span>
    <img
      class="w-3/4 ml-6 max-h-64 rounded-tr-lg rounded-tl-lg"
      :src="product.image"
      alt="Blog post image"
    />
    <h2 class="p-4 m-0 text-lg">
      {{ product.name.split(" ").slice(0, 5).join(" ") }}...
    </h2>

    <h2 class="text-center text-2xl mb-2 text-green-800">
      {{ !isNaN(+product.price) ? product.price + "$" : product.price }}
    </h2>

    <a
      :href="product.affiliateLink"
      target="_blank"
      class="block p-2 text-white bg-green-600 rounded-br-lg rounded-bl-lg text-center no-underline"
      >{{ product.type === "service" ? "Get It Now" : "Buy Now" }}</a
    >
  </div>
</template>
<script>
export default {
  name: "ProductCard",
  props: ["product"],
  data() {},
};
</script>
