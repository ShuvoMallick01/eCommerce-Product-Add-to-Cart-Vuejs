<template>
  <div class="pt-10 text-center">
    <nav aria-label="Page navigation example ">
      <ul class="inline-flex -space-x-px text-base h-10">
        <li>
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'cursor-not-allowed': 1 === pageIndex }"
            @click="prevPagination"
            >Previous</a
          >
        </li>
        <li v-for="num in totalPage">
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="[num === pageIndex ? 'bg-gray-200' : '']"
            @click="paginationNumber(num)"
            >{{ num }}</a
          >
        </li>

        <li>
          <a
            href="#"
            class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
            @click="nextPagination"
            :class="{ 'cursor-not-allowed': totalPage === pageIndex }"
            >Next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  inject: [
    "nextPagination",
    "prevPagination",
    "totalPage",
    "pageIndex",
    "paginationNumber",
  ],
};
</script>
