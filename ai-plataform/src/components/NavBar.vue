<template>
    <nav class="default-page-padding flex justify-between text-text items-center min-h-[78px] min-w-max py-4">
        <LogoComponent :class="'text-primary'" class="fill-primary" />
        <div>
            <ul class="flex gap-4">
                <li>About</li>
                <li>Features</li>
                <li>Our Process</li>
                <li>Benefits</li>
            </ul>
        </div>
        <div class="flex gap-4">
            <button>
                <RouterLink to="/" class="font-semibold">Log In</RouterLink>
            </button>
            <button class="btn-default">
                <RouterLink to="/about">Get Started</RouterLink>
            </button>
        </div>
    </nav>
</template>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';

</script>