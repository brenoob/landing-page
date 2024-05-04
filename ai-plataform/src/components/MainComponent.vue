<template>
    <main>
        <div class="default-page-padding">
            <div class="welcome flex flex-col justify-between w-screen lg:flex-row md:w-full mt-4 mb-8
            ">
                <!-- sizes w-[501px] h-[314px] -->
                <div class="flex flex-col items-start justify-center w-[31.313rem] h-[19.625rem]">
                    <h1 class="font-instrument text-4xl font-bold mb-4">
                        Discover the Power of SoftCraft's <span class="text-primary">AI Platform</span>
                    </h1>
                    <p>Experience the versatility and ease of use with SoftCraft's cutting-edge AI-driven platform. Unlock
                        the potential of AI technology for software creation.</p>
                    <button class="btn-default mt-8">Get 14 days free trial</button>
    
                </div>
                <div class="w-[37rem] h-[34.875rem] min-w-fit">
                    <CardStatus msg="216"
                        class="lg:flex float-left absolute  hidden  rounded-lg right-[510px] mt-[340px] w-[19.5rem] h-[11.875rem] text-[1.2rem] max-h-[190px] " />
                    <!-- sizes w-[592px] h-[558px] -->
                    <img class="" src="@/assets/images/banner-one.svg" alt="woman happy">
                    <CardStatus msg="220"
                        class="lg:flex float-right absolute hidden rounded-lg right-4 -mt-64  w-[12.75rem]  h-[7.875rem] " />
                </div>
            </div>
            <div class="marcas mt-24">
                <h2 class="flex justify-center text-3xl font-instrument">
                    Trusted by industry-leading companies around
                    the globe</h2>
                <div class="logo-marcas flex justify-evenly mt-8">
                    <img src="@/assets/images/logo-marcas/applepay-logo.svg" alt="">
                    <img src="@/assets/images/logo-marcas/Google-logo.svg" alt="">
                    <img src="@/assets/images/logo-marcas/microsoft-logo.svg" alt="">
                    <img src="@/assets/images/logo-marcas/amazonaws-logo.svg" alt="">
                    <img src="@/assets/images/logo-marcas/netflix-logo.svg" alt="">
                </div>
            </div>
            <div class="flex xl:flex-row mx-auto flex-col justify-between items-center my-32">
                <div class="md:w-[575px] w-screen">
                    <div class="flex">
                        <CardStatus msg="220" class="w-[12.75rem] h-[7.875rem]" />
                        <div class="flex items-center ml-16 ">
                            <img src="@/assets/images/lila-Doe.svg" class="size-[51px]" alt="">
                            <div class="ml-2">
                                <h2>Lila Doe</h2>
                                <p>CTO, ABC Company</p>
                            </div>
                        </div>
    
                    </div>
                    <div
                        class="flex flex-col w-[34.563rem] gap-3 mx-auto my-4 p-4 bg-card text-text dark:text-textSecond rounded-lg shadow-xl">
                        <div class="flex ">
                            <img src="@/assets/images/CheckCircle.svg" alt="" class="h-6 w-6 mr-3">
                            <p class="text-sm">Unleash your creativity and bring ideas to life.</p>
                        </div>
                        <div class="flex ">
                            <img src="@/assets/images/CheckCircle.svg" alt="" class="h-6 w-6 mr-3">
                            <p class="text-sm">Accelerate your development process and save valuable time.</p>
                        </div>
                        <div class="flex ">
                            <img src="@/assets/images/CheckCircle.svg" alt="" class="h-6 w-6 mr-3">
                            <p class="text-sm">Deliver exceptional user experiences with AI-powered solutions.</p>
                        </div>
                    </div>
                    <div class=" flex items-center justify-end  ">
                        <img src="@/assets/images/lara-Sanches.svg" class="size-[51px]" alt="">
                        <div class="ml-2">
                            <h2>Lara Sanches</h2>
                            <p>CTO, ABC Company</p>
                        </div>
                        <CardStatus msg="216" class="ml-16 max-w-[19.5rem] text-[1rem] h-[11.875rem]" />
                    </div>
                </div>
                <div class="md:w-[534px] lg:mt-8 w-screen">
                    <h2 class="font-instrument text-3xl mb-8">
                        Unlock the Power of AI with SoftCraft's Cutting-Edge Features
                    </h2>
                    <p>
                        Experience seamless software creation with SoftCraft's innovative technology. Our AI-driven
                        platform simplifies complex processes, empowering you to bring your ideas to life.
                    </p>
                    <button class="btn-seeMore dark:border-text dark:text-text">See More</button>
                </div>
            </div>
        </div>
        <VideoArea />
        <div class="default-page-padding">
            <div class="text-center font-instrument text-5xl">
                <h2>Discover the Power of SoftCraft: A Step-by-Step Software Creation Process</h2>
            </div>
            <AreaCardProcess class="" />
            <div class="flex lg:flex-row flex-col gap-2 justify-center items-center">
                <img src="@/assets/images/image-frame.svg" class="lg:mt-8 mt-32 max-h-[500px]" alt="">
                <div class=" flex flex-col gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                        <path class="fill-primary"
                            d="M221.28 34.75a64 64 0 0 0-90.49 0L60.69 104A15.9 15.9 0 0 0 56 115.31v73.38l-29.66 29.65a8 8 0 0 0 11.32 11.32L67.32 200h73.38a15.92 15.92 0 0 0 11.3-4.68l69.23-70a64 64 0 0 0 .05-90.57m-79.21 11.31A48 48 0 0 1 211.79 112h-56.46l34.35-34.34a8 8 0 0 0-11.32-11.32L120 124.69V67.87ZM72 115.35l32-31.67v57l-32 32ZM140.7 184H83.32l56-56h56.74Z" />
                    </svg>
                    <h2 class="font-instrument text-3xl">
                        Unlock Powerful Features Today
                    </h2>
                    <p>
                        Discover the core functionalities of SoftCraft and unleash the potential of AI-driven software
                        creation.
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                        <path class="fill-primary"
                            d="M207 50.25A87.46 87.46 0 0 0 144.6 24h-.33A87.48 87.48 0 0 0 82 49.81L20.61 112a16 16 0 0 0 .06 22.56l28.66 28.66a15.92 15.92 0 0 0 11.32 4.69h.09a16 16 0 0 0 11.36-4.82l60.9-62.4a16.08 16.08 0 0 1 22.41-.21a15.6 15.6 0 0 1 4.73 11.19a16.89 16.89 0 0 1-4.85 12L93 183.88a16 16 0 0 0-.17 22.79l28.66 28.66a16.06 16.06 0 0 0 22.52.12l61.8-60.45c34.45-34.5 34.98-90.44 1.19-124.75M60.65 151.89L32 123.24l23.8-24.12l28.52 28.52ZM132.79 224l-28.68-28.65l24.38-23.57L157 200.32Zm61.76-60.44l-26.11 25.54L140 160.68l26.44-25.57l.1-.09a33 33 0 0 0 9.57-23.5A31.44 31.44 0 0 0 166.47 89a32.2 32.2 0 0 0-44.9.5l-26.08 26.68L67 87.74l26.35-26.65A71.51 71.51 0 0 1 144.27 40h.27a71.55 71.55 0 0 1 51.05 21.48c27.66 28.07 27.16 73.9-1.04 102.1Z" />
                    </svg>
                    <h2 class="font-instrument text-3xl">
                        Streamline Your Workflow
                    </h2>
                    <p>
                        Experience seamless integration and innovative iconography that simplifies software development.
                    </p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256">
                        <path class="fill-primary"
                            d="M198.63 57.37a32 32 0 0 0-45.19-.06l-11.65 12.21a8 8 0 0 1-11.58-11l11.72-12.29a1.59 1.59 0 0 1 .13-.13a48 48 0 0 1 67.88 67.88a1.59 1.59 0 0 1-.13.13l-12.29 11.72a8 8 0 0 1-11-11.58l12.21-11.65a32 32 0 0 0-.1-45.23m-84.42 129.11l-11.65 12.21a32 32 0 0 1-45.25-45.25l12.21-11.65a8 8 0 0 0-11-11.58l-12.33 11.72a1.59 1.59 0 0 0-.13.13a48 48 0 0 0 67.88 67.88a1.59 1.59 0 0 0 .13-.13l11.72-12.29a8 8 0 1 0-11.58-11ZM216 152h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16M40 104h24a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m120 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8M96 72a8 8 0 0 0 8-8V40a8 8 0 0 0-16 0v24a8 8 0 0 0 8 8" />
                    </svg>
                    <h2 class="font-instrument text-3xl">
                        Unleash Your Creativity
                    </h2>
                    <p>
                        Embrace dynamic graphics and unleash your creativity with SoftCraft's AI-powered platform.
                    </p>
                </div>
            </div>
            <div class="about flex w-full flex-col justify-center mt-32">
                <img src="@/assets/images/Rectangle-42.svg" class="w-full" alt="">
                <div class="mt-16 ">
                    <h2 class="font-instrument text-3xl mb-8 text-center">Unlock the Power of AI-Driven Software Creation with SoftCraft</h2>
                    <p>SoftCraft is a cutting-edge platform that combines the latest advancements in artificial intelligence with user-friendly features, making it easy for businesses of all sizes to develop innovative software solutions. With SoftCraft, you can bring your ideas to life and stay ahead in the rapidly evolving tech landscape.</p>
                </div>
            </div>
            <div class="flex items-center gap-8 mt-8 w-[1871px]">
                <CardsReviews class="w-[565px] h-[342px]" />
                <CardsReviews class="w-[565px] h-[342px]" />
                <CardsReviews class="w-[565px] h-[342px]" />
            </div>
            <div class="flex justify-center mt-8">
                <div class="flex justify-center rounded-lg shadow-xl p-8  max-w-[1152px] max-h-[384px] bg-card mt-16">
                    <div class="max-w-[805px] max-h-[223px]">
                        <h2 class="font-instrument text-3xl mb-8 text-primary flex-nowrap  text-nowrap whitespace-nowrap">Create AI-driven software effortlessly</h2>
                        <p>Unlock the power of AI technology to revolutionize your software development process.</p>
                        <button class="btn-default mt-8">Get 14 days free trial</button>
                    </div>
                    <img src="@/assets/images/Assistant-1--Streamline-Milano.svg" class="w-[300px] h-[300px]" alt="">
                </div>
            </div>
        </div>
    </main>
    <FooterComponent />
</template>
<script setup lang="ts">
import CardStatus from '@/components/CardStatus.vue';
import VideoArea from './VideoArea.vue';
import AreaCardProcess from './AreaCardProcess.vue';
import CardsReviews from './CardsReviews.vue';
import FooterComponent from './FooterComponent.vue';
</script>