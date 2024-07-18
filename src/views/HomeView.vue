<template>
  <div class="min-h-full">
    <div class="py-10 mx-auto max-w-7x1 px-4 sm:px-6 lg:px-8">
      <header class="mb-4">
        <div class="">
          <h1 class="text-3x1 font-bold leading-tight tracking-tight text-slate-300">Count</h1>
        </div>
        <header>
          <main class="text-white space-y-5">
            <h1>Total: {{  counter }}</h1>
            <p>Squred: {{ authStore.squareCount }}</p>
            <div class="flex gap-3">
              <button class="button-main" @click="authStore.doubleCount">Double Count</button>
            </div>
          </main>
        </header>
      </header>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, Transition } from "vue";
import { storeToRefs } from "pinia";
import { useAuthStore } from "../stores/auth";
import {} from "@heroicons/vue/24/outline";
import { useRoute } from "vue-router"

const route = useRoute();

const authStore = useAuthStore();

const { counter } = storeToRefs(authStore);
</script>