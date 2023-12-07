<template>
  <div class="mainNav" id="mainNav" style="background-color: #000; text-align: center;">
    <div class="box_center cf">
      <h2 style="color: #fff; font-size: 24px;">欢迎你来到一点一横长。在这里，文学是一种生存方式</h2>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getToken } from "@/utils/auth";
import { getAuthorStatus } from "@/api/author";

export default {
  name: "Navbar",
  setup() {
    const route = useRoute();
    const router = useRouter();

    // Remove other logic if not needed

    return {};
  },
};
</script>
