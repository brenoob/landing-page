<template>
    <nav class="default-page-padding flex justify-between text-text items-center min-h-[78px] min-w-max py-4">
        <RouterLink to="/" class="font-semibold">
            <LogoComponent :class="'text-primary'" class="fill-primary" />
        </RouterLink>
        <div>
            <ul class="flex gap-4">
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="">Features</RouterLink>
                </li>
                <li>
                    <RouterLink to="">Our Process</RouterLink>
                </li>
                <li>
                    <RouterLink to="">Benefits</RouterLink>
                </li>
            </ul>
        </div>
        <div class="flex gap-4">
            <button>
                Log In
            </button>
            <button class="btn-default">
                <RouterLink to="/login">Get Started</RouterLink>
            </button>
        </div>
    </nav>
</template>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';

</script>