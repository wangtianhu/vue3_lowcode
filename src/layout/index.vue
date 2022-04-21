<template>
    <el-container direction="vertical">
        <AppHeader />
        <el-container>
            <AppMenu />
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import AppHeader from "./appHeader/index.vue"
import AppMenu from "./appSide/index.vue"
export default {
    components: {
        AppHeader,
        AppMenu,
    },
    name: "layOut",
}
</script>

<style></style>
