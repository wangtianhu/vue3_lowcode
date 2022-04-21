<template>
    <div class="side-ar-wrapper">
        <template v-for="(ro, roIndex) in routelist">
            <el-menu-item
                :key="roIndex"
                @click="handleJump(ro.children[0].path)"
                :index="ro.children[0].path"
                v-if="ro.children.length === 1"
            >
                <template slot="title">
                    <p>{{ ro.children[0].meta.title }}</p>
                </template>
            </el-menu-item>
            <el-submenu :index="ro.path" :key="roIndex" v-else>
                <template slot="title">
                    <span>{{ ro.name }}</span>
                </template>
                <template v-for="child in ro.children">
                    <sidebar-item
                        class="nest-menu"
                        v-if="child.children && child.children.length > 0"
                        :routelist="[child]"
                        :key="child.path"
                    >
                    </sidebar-item>
                    <el-menu-item v-else :key="child.path" @click="handleJump(child.path)" :index="child.path">
                        <template slot="title">
                            <p>{{ child.name }}</p>
                        </template>
                    </el-menu-item>
                </template>
            </el-submenu>
        </template>
    </div>
</template>

<script>
export default {
    name: "sidebarItem",
    props: {
        routelist: {
            default: [],
        },
    },
    methods: {
        handleJump(path) {
            this.$router.push({ path })
        },
    },
}
</script>

<style></style>
