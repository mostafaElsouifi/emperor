<template>
  <ClientOnly>
    <!--Cards container-->
    <div
      class="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center"
    >
      <BlogCard v-for="blog in allBlogs" :key="blog._id" :blog="blog" />
    </div>
  </ClientOnly>
</template>
<script setup>
let allBlogs;
const { data } = await useFetch("/api/blogs/all");
allBlogs = data;
</script>
