<template>
    <el-menu
        mode="vertical"
        unique-opened
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <SideBar :routelist="routelist" />
    </el-menu>
</template>

<script>
import SideBar from "./sideBar.vue"
export default {
    name: "app-side",
    components: {
        SideBar,
    },
    computed: {
        routelist() {
            return this.$router.options.routes.filter(({ hidden }) => !hidden)
        },
    },
    methods: { handleOpen() {}, handleClose() {} },
}
</script>

<style></style>
