<script setup>
import { ref } from 'vue';
import Button from './Button.vue';
import { RouterLink } from 'vue-router';
import { Icon } from '@iconify/vue';

const showFeatures = ref(false);
const features = [
    { name: 'Analytics', link: '/analytics' },
    { name: 'Collaboration', link: '/collaboration' },
    { name: 'AI Tools', link: '/ai-tools' },
    { name: 'Security', link: '/security' }
];

const showDocs = ref(false);
const docs = [
    { name: 'API Reference', link: '/api' },
    { name: 'User Guides', link: '/guides' },
    { name: 'Tutorials', link: '/tutorials' },
    { name: 'Release Notes', link: '/release-notes' }
];

</script>

<template>

    <nav class="flex items-center justify-between px-10 py-6 border-b border-gray-800">

        <div class="text-xl font-semibold cursor-pointer">
            <router-link to="/">
                SkillSphere
            </router-link>

        </div>

        <ul class="hidden md:flex gap-8 text-gray-400">

            <li class="relative group">
                <div class="flex items-center gap-1 cursor-pointer hover:text-white"              
                >
                    Features
                        <Icon icon="mdi:chevron-down"
                        class="transition-transform duration-600 group-hover:rotate-180" />
                    </div>
                    <ul
                        class="absolute left-0 mt-0 w-48 bg-gray-900 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto group-hover:pointer-events-auto transition-opacity duration-300">
                        <li v-for="feature in features" 
                        :key="feature.name" 
                        class="px-4 py-2 hover:bg-gray-800">
                            <router-link :to="feature.link">{{ feature.name }}</router-link>
                        </li>
                    </ul>
            </li>
            <li class="relative group">
                <div class="flex items-center gap-1 cursor-pointer hover:text-white">
                    Docs
                    <Icon icon="mdi:chevron-down"
                    class="transition-transform duration-600 group-hover: rotate-180"/>
                </div>
                <ul
                    class="absolute left-0 mt-0 w-48 bg-gray-900 text-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-auto group-hover:pointer-events-auto transition-opacity duration-300">

                    <li
                     v-for="doc in docs "
                        :key="doc.name"
                        class="px-4 py-2 hover:bg-gray-800"
                     >
                     <router-link :to="doc.link">{{ doc.name }}</router-link>

                    </li>
                </ul>
            </li>
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