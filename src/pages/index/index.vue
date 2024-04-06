<script setup lang="ts">
const title = ref('Hello')
</script>

<template>
  <view class="flex flex-col items-center justify-center">
    <image
      class="mx-auto mb-[50rpx] mt-[200rpx] h-[200rpx] w-[200rpx]"
      src="/static/images/logo.png"
    />
    <view class="flex justify-center">
      <text class="text-lg text-[#8f8f94]">{{ title }}</text>
    </view>
  </view>
</template>
