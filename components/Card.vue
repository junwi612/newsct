<template>
  <view>
    <view class="px-4 sm:px-0 flex flex-col lg:flex-row">
      <view class="flex-1 w-full mb-5">
        <view
          class="bg-white overflow-hidden shadow rounded-lg flex flex-col"
          @click="goToDetail(1)"
        >
          <img
            class="object-cover rounded-t-lg max-h-96 lg:max-h-96 h-auto"
            src="https://fastly.picsum.photos/id/866/1920/1080.jpg?hmac=dNBuPEp10RySTqlc5EpGw7QyrFIpBd2X88r1Ixla7pw"
            alt="新闻图片"
          />
          <view class="p-4 flex-1">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">新闻标题</h3>
            <p class="text-gray-600 mb-4">
              这是一段描述，详细说明新闻的内容，提供更多信息。
            </p>
            <a
              href="#"
              class="bg-gray-900 text-gray-100 hover:bg-gray-800 transition-colors duration-200 px-3 py-1 rounded no-underline"
              @click.prevent="goToDetail(1)"
            >
              阅读全文
            </a>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script></script>

<style scoped></style>
