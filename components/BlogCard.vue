<template>
  <div
    class="w-72 shadow-md transition-all duration-300 rounded-md mb-6 mr-6"
    id="card"
  >
    <img
      class="w-full max-h-64 rounded-tr-lg rounded-tl-lg"
      :src="blog.mainImage"
      alt="Blog post image"
    />
    <h2 class="p-2 m-0">
      {{ blog.title.split(" ").slice(0, 5).join(" ") }}
    </h2>
    <p class="p-4 pt-0 m-0 text-sm text-gray-500">
      {{ blog.intro.substring(0, 100) }} .......
    </p>
    <nuxt-link
      :to="`/blogs/${blog._id}`"
      class="block p-4 text-white bg-gray-800 rounded-br-lg rounded-bl-lg text-center no-underline"
      >Read more</nuxt-link
    >
  </div>
</template>
<script>
export default {
  name: "BlogCard",
  props: ["blog"],
};
</script>

<style scoped>
#card {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
