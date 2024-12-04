<template>
  <div class="home">
    <BookList @details="updateDetails" />
    <BookDetails :activeBook="activeBook" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BookDetails from "@/components/BookDetails.vue";
import BookList from "@/components/BookList.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    BookDetails,
    BookList,
  },
  setup() {
    const activeBook = ref(-1);

    const updateDetails = (index: number) => {
      activeBook.value = index;
    };

    return {
      activeBook,
      updateDetails,
    };
  },
});
</script>
