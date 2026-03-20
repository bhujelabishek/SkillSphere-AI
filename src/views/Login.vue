<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
const router = useRouter()

function handleLogin() {
  // later connect backend
  router.push('/dashboard')
}
</script>

<template>
  <Navbar />
<div class="min-h-screen bg-black text-white">
  <div class="flex items-center justify-center py-20">

    <div class="w-full max-w-md px-6">

      <h1 class="text-3xl font-semibold mb-6 text-center text-yellow-500">
        Log in to SkillSphere
      </h1>

      <button class="w-full border border-gray-700 py-3 rounded-lg mb-4 hover:bg-gray-900">
        Continue with Google
      </button>

      <div class="text-center text-gray-500 mb-4">or</div>

      <input
        type="email"
        placeholder="Email"
        class="w-full mb-4 px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none"
      />

      <input
        type="password"
        placeholder="Password"
        class="w-full mb-4 px-4 py-3 rounded-lg bg-[#111] border border-gray-700 focus:outline-none"
      />

      <button
        @click="handleLogin"
        class="w-full bg-white text-black py-3 rounded-lg font-medium"
      >
        Continue
      </button>

      <p class="text-sm text-gray-500 mt-6 text-center">
        Don't have an account?
        <router-link to="/register" class="text-white underline ml-1">
          Sign up
        </router-link>
      </p>

    </div>

  </div>
</div>
  <Footer />
</template>