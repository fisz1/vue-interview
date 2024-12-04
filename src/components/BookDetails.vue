<template>
  <div class="book-details">
    <div v-if="loading">Loading book details...</div>
    <div v-else-if="selectedBookDetails">
      <div>{{ selectedBookDetails.title }}</div>
      <div>{{ selectedBookDetails.author }}</div>
      <div>{{ selectedBookDetails.year }}</div>
      <div>{{ selectedBookDetails.genre }}</div>
    </div>
    <div v-else>No book selected</div>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import { books } from "../mocks/booklist.mock";

export default defineComponent({
  props: {
    activeBook: {
      required: true,
    },
  },
  setup(props) {
    const booksData = ref(books);
    const selectedBookDetails = ref(null);
    const loading = ref(false);

    const fetchBookDetails = (bookIndex) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const book = booksData.value[bookIndex];
          if (book) {
            resolve(book);
          } else {
            reject(new Error("Book not found"));
          }
        }, 1000);
      });
    };

    const updateBookDetails = async () => {
      loading.value = true;
      try {
        const book = await fetchBookDetails(props.activeBook);
        selectedBookDetails.value = book;
      } catch (error) {
        console.error(error);
        selectedBookDetails.value = null;
      } finally {
        loading.value = false;
      }
    };

    watch(() => props.activeBook, updateBookDetails, { immediate: true });

    return {
      booksData,
      selectedBookDetails,
      loading,
    };
  },
});
</script>
