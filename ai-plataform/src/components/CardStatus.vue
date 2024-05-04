<script setup lang="ts">
defineProps( {
    msg: String,
} )
</script>
<template>
    <div class="container-employees text-[0.675rem] whitespace-nowrap flex justify-center items-center bg-card dark:text-textSecond rounded-lg p-4 shadow-xl">
        <div class="employees w-screen flex flex-col gap-5">
            <div class="">
                <p class="text-sm whitespace-nowrap">
                    Total Employees
                </p>
                <p class="text-3xl font-poppins font-medium" >
                    {{ msg }}
                </p>
            </div>
            <div class="text-shading">
                <p>
                    120 Men
                </p>
                <p>
                    96 Women
                </p>
            </div>
        </div>
        <div class="flex flex-col justify-center">
            <div class="flex flex-col items-center">
                <p class="text-primary">
                    +2%
                </p>
                <img src="@/assets/images/arrow-up.svg" alt="">
            </div>
            <img src="@/assets/images/employees-graphic.svg" alt="">
            <p class="font-roboto mx-auto mt-5 bg-shading text-textSecond dark:text-text  rounded-sm p-1">
                +2% Past month
            </p>
        </div>
    </div>
</template>