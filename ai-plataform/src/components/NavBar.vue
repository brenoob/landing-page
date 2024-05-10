<template>
    <nav class="default-page-padding flex justify-between text-text items-center min-h-[78px] min-w-max py-4">
        <RouterLink to="/" class="font-semibold"><LogoComponent :class="'text-primary'" class="fill-primary" /></RouterLink>
        <div>
            <ul class="flex gap-4">
                <RouterLink to="/about"><li>About</li></RouterLink>
                <RouterLink to=""> <li>Features</li></RouterLink>
                <RouterLink to=""> <li>Our Process</li></RouterLink>
                <RouterLink to=""> <li>Benefits</li></RouterLink>
            </ul>
        </div>
        <div class="flex gap-4">
            <button>
                Log In
            </button>
            <button class="btn-default">
                <RouterLink to="/register">Get Started</RouterLink>
            </button>
        </div>
    </nav>
</template>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';

</script>