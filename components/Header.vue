<template>
  <header
    class="bg-gray-800 text-white flex items-center justify-between px-4 py-3"
  >
    <div>
      <NuxtLink to="/" class="text-2xl">Emperor Shaheen</NuxtLink>
    </div>
    <div class="relative w-64">
      <input
        type="text"
        class="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none focus:shadow-outline-blue"
        placeholder="Search"
      />
      <button class="absolute right-0 top-0 mt-3 mr-4" @click="requestApi">
        <svg
          class="h-4 w-4 fill-current text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
      </button>
    </div>
  </header>
</template>
<script>
export default {
  name: "Header",
};
</script>
