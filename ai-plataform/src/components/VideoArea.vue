<template>
    <div class="w-screen flex items-start h-[735px]">
        <div class="flex px-0 items-end bg-primary mt-32 bg-bottom w-full h-[463px]">
            <video autoplay :controlslist="'nodownload'" :loop="true" controls
                class="mx-auto w-[930px] h-[630px]" src="@/assets/video-example.mp4">
            </video>
    
        </div>
    </div>
</template>