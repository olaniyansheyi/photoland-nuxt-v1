<script setup></script>

<template>
  <div
    class="flex items-center justify-center flex-col gap-y-5 bg-primary py-16 w-full text-white text-center"
  >
    <span>
      <h1 class="font-bold text-2xl tracking-wide">
        SUBSCRIBE TO OUR NEWSLETTER
      </h1>
      <p class="font-normal tracking-wide mt-5">
        Be the first to get the latest trends,production and much more!
      </p>
    </span>
    <div class="flex gap-x-2 lg:w-[60%] w-[90%] sm:w-[70%]">
      <input
        type="text"
        placeholder="Type your email here..."
        class="w-[85%] rounded-lg outline-none px-5 placeholder:text-primary text-primary"
      />
      <button
        class="text-primary bg-accent hover:bg-accent-hover py-3 px-5 rounded-lg"
      >
        submit
      </button>
    </div>
    <p class="w-[70%]">
      All Right Reserved. &copy;2024 | Built by sheyi olaniyan.
    </p>
    <div
      class="flex justify-center items-center gap-x-5 text-2xl cursor-pointer mt-5"
    >
      <a href="https://twitter.com/olaniyanoe1704">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a
        href="https://www.linkedin.com/in/sheyi-olaniyan-37a775291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      >
        <font-awesome-icon :icon="['fab', 'twitter']" />
      </a>
      <a href="https://wa.me/8135158754">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
      </a>
    </div>
  </div>
</template>
