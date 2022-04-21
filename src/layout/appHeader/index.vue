<template>
    <div class="index-header-wrapper">
        <div class="user-info-wrapper">
            <el-image style="width: 40px; height: 40px; border-radius: 50%" :src="url" fit="cover"></el-image>
            <div class="user-detail">
                <p class="user_name">啊实打实</p>
                <el-dropdown @command="handleLoginOut">
                    <span class="el-dropdown-link"> 啊实打实<i class="el-icon-arrow-down el-icon--right"></i> </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
    </div>
</template>

<script>
import { Message } from "element-ui"
export default {
    name: "app-header",
    data() {
        return {
            url: "https://sf3-ttcdn-tos.pstatp.com/img/user-avatar/ccb565eca95535ab2caac9f6129b8b7a~300x300.image",
        }
    },
    methods: {
        handleLoginOut(key) {
            if (key === "logout") {
                window.localStorage.removeItem("userInfo")
                Message({
                    type: "success",
                    message: "退出登录",
                    showClose: true,
                    duration: 3000,
                })
                this.$router.replace({ path: "/login" })
                setTimeout(() => {
                    location.reload()
                }, 500)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.index-header-wrapper {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .user-info-wrapper {
        width: auto;
        margin-right: 30px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        .user-detail {
            margin-left: 10px;
        }
    }
}
</style>
