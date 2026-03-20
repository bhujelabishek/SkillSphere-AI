<script setup>
import Button from './Button.vue';
import { RouterLink } from 'vue-router';
</script>

<template>

    <nav class="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <div class="text-xl font-semibold cursor-pointer">
            <router-link to="/">
                SkillSphere
            </router-link>

        </div>

        <ul class="hidden md:flex gap-8 text-gray-400">
            
            <li class="hover:text-white cursor-pointer">Features</li>
            <li class="hover:text-white cursor-pointer">Docs</li>
            <li class="hover:text-white cursor-pointer">Pricing</li>
            <li class="hover:text-white cursor-pointer">Resources</li>
            <li class="hover:text-white cursor-pointer">Organization</li>
            <li class="hover:text-white cursor-pointer">Request a demo</li>

        </ul>

        <div class="flex gap-3">

            <router-link to="/login">
                <Button variant="secondary">
                    Login
                </Button>
            </router-link>
            <router-link to="/signup">
                <Button variant="primary">Sign Up</Button>
            </router-link>

        </div>
    </nav>
</template>