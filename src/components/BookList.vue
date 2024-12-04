<template>
  <div class="book-list">
    <ul>
      <li v-for="(book, index) in booksData" :key="book.title">
        <a href="#" @click="$emit('details', index)">{{ book.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { books } from "../mocks/booklist.mock";

export default defineComponent({
  setup() {
    const booksData = ref(books);

    return {
      booksData,
    };
  },
});
</script>
