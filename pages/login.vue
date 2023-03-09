<template>
  <div class="">
    <form
      @submit.prevent="login"
      class="flex flex-col items-center justify-center mt-12"
    >
      <input type="email" v-model="email" placeholder="Email" />
      <input type="password" v-model="password" placeholder="Password" />
      <button
        type="submit"
        class="bg-gray-500 px-10 py-1 text-white text-lg mt-6 rounded"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script setup></script>
