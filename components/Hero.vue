<script setup>
import camera from "~/public/camera.png";
import PromoImg1 from "~/public/promo_img1.png";
import PromoImg2 from "~/public/promo_img2.png";
</script>

<template>
  <div
    class="lg:px-36 sm:px-6 px-3 mt-8 flex flex-wrap sm:gap-x-2 lg:gap-x-4 h-auto sm:h-[30rem] text-white gap-y-8"
  >
    <ProductCategoryList />
    <div
      class="lg:w-[43%] sm:w-[39%] sm:h-[30rem] bg-mainSlider bg-cover bg-center bg-no-repeat rounded-lg w-full h-[33rem] lg:p-12 sm:p-8 p-5 flex items-center justify-center lg:flex-nowrap flex-wrap"
    >
      <span class="lg:text-left sm:text-center">
        <h6 class="font-semibold tracking-wider text-accent mb-5">
          SPECIAL OFFER
        </h6>
        <h1 class="font-black tracking-wider text-3xl">
          SAVE 20% ON YOUR FIRST ORDER
        </h1>
        <NuxtLink to="/sign-up">
          <button
            class="mt-10 text-primary bg-accent rounded-lg py-3 px-8 font-semibold hover:bg-accent-hover tracking-wider"
          >
            SIGNUP NOW!
          </button>
        </NuxtLink>
      </span>
      <div class="lg:ms-[-5rem]">
        <img :src="camera" class="" alt="" />
      </div>
    </div>

    <div
      class="sm:w-[35.5%] lg:w-[28%] sm:h-[33rem] h-auto w-full flex flex-col gap-y-5"
    >
      <div
        class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg h-[15rem] relative p-4 flex justify-start items-center sm:h-[14.3rem]"
      >
        <div class="sm:w-[45%] w-[60%]">
          <h4 class="font-bold text-lg tracking-wider">
            SAVE 35% ALL DSLR CAMERAS
          </h4>
          <NuxtLink to="/product/dslr">
            <h5
              class="text-accent font-normal tracking-wider cursor-pointer mt-3"
            >
              SHOP NOW
            </h5>
          </NuxtLink>
        </div>
        <div class="absolute top-1 right-0">
          <img :src="PromoImg1" class="w-25" alt="" />
        </div>
      </div>
      <div
        class="bg-gradient-to-t from-[#1F2126] to-[#33363D] drop-shadow-2xl rounded-lg h-[15rem] sm:h-[14.3rem] relative p-4 flex justify-start items-center"
      >
        <div class="sm:w-[45%] w-[58%]">
          <h4 class="font-bold text-lg tracking-wider">
            SAVE 35% ALL FILM CAMERAS
          </h4>
          <NuxtLink to="/product/film">
            <h5
              class="text-accent font-normal tracking-wider cursor-pointer mt-3"
            >
              SHOP NOW
            </h5>
          </NuxtLink>
        </div>
        <div class="absolute top-1 right-0">
          <img :src="PromoImg2" class="w-25" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
