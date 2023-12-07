<template>
  <Header />
 
    <!-- Right Column -->
    <div class="right-column">
      <img :src="require('@/assets/images/literature.jpg')" alt="literature" />
      <!-- Leave some white space on the right -->
    </div>
 

  <FriendLink />
  <Footer />
</template>

<script>
// Your script remains unchanged
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { listHomeBooks } from "@/api/home";
import { ElMessage, ElLoading } from "element-plus";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import LatestNews from "@/components/home/LatestNews";
import FriendLink from "@/components/home/FriendLink";
import BookVisitRank from "@/components/home/BookVisitRank";
import BookNewestRank from "@/components/home/BookNewestRank";
import BookUpdateRank from "@/components/home/BookUpdateRank";
export default {
  name: "home",
  components: {
    Header,
    LatestNews,
    FriendLink,
    BookVisitRank,
    BookNewestRank,
    BookUpdateRank,
    Footer,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const state = reactive({
      // 轮播图
      sliderContent: [],
      // 编辑推荐
      editorRecommend: [],
      imgBaseUrl: process.env.VUE_APP_BASE_IMG_URL,
    });

    onMounted(async () => {
      const loadingInstance = ElLoading.service({
        target: "#topBooks2",
        text: "加载中。。。",
      });
      const { data } = await listHomeBooks();
      loadingInstance.close();

      await data.forEach((book) => {
        if (book.type == 1) {
          // 编辑推荐
          state.editorRecommend[state.editorRecommend.length] = book;
        }
      });
    });

    const bookDetail = (bookId) => {
      router.push({ path: `/book/${bookId}` });
    };

    return {
      ...toRefs(state),
      bookDetail,
    };
  }
};
</script>

<style scoped>
.left-column-title {
  font-size: 38px;
  
}
.right-column {
  display: flex;
  justify-content: center;
  align-items: center;
}
.right-column img {
  max-width: 100%; /* Ensure the image doesn't exceed the container width */
}

</style>
