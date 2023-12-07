<template>
  <div class="topMain">
    <div class="box_center cf">
      <i class="line mx10" style="background-color: #000; height: 20px;"></i>

      <router-link :to="{ name: 'home' }" class="logo fl" style="text-align: center;">
        <img :src="logo" alt="一点一横长 一笔到天涯" />
      </router-link>

      <i class="line mx10" style="background-color: #000; height: 20px;"></i>

      <div class="searchBar fl" style="text-align: center; background-color: rgba(0, 0, 0, 0.5);">
        <div class="search cf">
          <input
            v-model="keyword"
            type="text"
            placeholder="书名、作者、关键字"
            class="s_int"
            v-on:keyup.enter="searchByK"
          />
          <label class="search_btn" id="btnSearch" @click="searchByK()">
            <i class="icon"></i>
          </label>
        </div>
      </div>

      <i class="line mx10" style="background-color: #000; height: 20px;"></i>

      <div class="bookShelf fr" id="headerUserInfo" style="color: #fff;">
        <span v-if="!token" class="user_link" style="color: #fff;">
          <router-link :to="{ name: 'login' }" class="mr15">登录</router-link>
          <i class="line mx10" style="background-color: #000; height: 20px;"></i>
          <router-link :to="{ name: 'register' }" class="mr15">注册</router-link>
        </span>

        <span v-if="token" class="user_link" style="color: #fff;">
          <router-link :to="{ name: 'userSetup' }" class="mr15">{{ nickName }}</router-link>
          <i class="line mx10" style="background-color: #000; height: 20px;"></i>
          <a @click="logout" href="javascript:void(0)" style="color: #fff;">退出</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/images/logo.png";
import { reactive, toRefs, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { getToken, getNickName, removeToken, removeNickName, removeUid } from "@/utils/auth";
export default {
  name: "Top",
  setup(props, context) {
    const state = reactive({
      keyword: "",
      nickName: getNickName(),
      token: getToken(),
    });
    state.nickName = getNickName();
    state.token = getToken();
    const route = useRoute();
    const router = useRouter();
    state.keyword = route.query.key;
    const searchByK = () => {
      router.push({ path: "/bookclass", query: { key: state.keyword } });
      context.emit("eventSerch", state.keyword);
    };
    const logout = () => {
      removeToken();
      removeNickName();
      removeUid();
      state.nickName = "";
      state.token = "";
    };
    return {
      ...toRefs(state),
      logo,
      searchByK,
      logout,
    };
  },
};
</script>
