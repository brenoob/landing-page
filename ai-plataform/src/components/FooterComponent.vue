<template>
    <footer class="flex relative justify-between text-card bg-primary w-full max-h-[270px] p-8 mt-16 rounded-lg">
        <div class="flex flex-col gap-4">
            
            <LogoComponent class="fill-card"/>

            <h3>Unlock the power of AI technology to revolutionize your software development process.</h3>

            <div class="flex absolute left-0 bottom-8 gap-5">
                <p class="">© 2024 SoftCraft. All rights reserved.</p>
                <p>Privacy Policy</p>
                <p class="">Terms of Service </p>
                
            </div>

        </div>
        <ul class="flex flex-col gap-6">
            <li>About</li>
            <li>Features</li>
            <li>Our Process</li>
            <li>Benefits</li>
        </ul>
        <ul class="flex flex-col gap-6">
            <li>Blog</li>
            <li>Contact</li>
            <li>Hiring</li>
        </ul>
        <div class="search flex gap-1">
            <input type="text" placeholder="Search..." class="w-[204px] h-[32px] rounded-md px-2 text-text dark:text-textSecond">
            <button class="btn-default bg-backgroundSecond dark:bg-background max-w-28 max-h-8">Search</button>
        </div>
    </footer>
</template>
<script setup lang="ts">
import LogoComponent from './LogoComponent.vue';

</script>
<style scoped>
footer {
    width: 100vw;
}
</style>