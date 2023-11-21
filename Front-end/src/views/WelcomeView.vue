<template>
        <div style="width: 100vw; height: 100vh; overflow: hidden; display: flex">
            <div style="flex: 1;">
                <el-image style = "width: 100%;height: 100%" fit="cover"
                    src="https://www.scu.edu/media/institutional-pages/news-amp-events/760-MA15_Fountain__5_15_068.jpg"/>
            </div>
            <div class="welcome-title">
                <div style="font-size: 30px;font-weight:bold;">Welcome to the SCU Community Marketplace</div>
            </div>
            <div style="width: 400px;background-color: white z-index:1">
                <router-view v-slot="{ Component }">
                <transition name="el-fade-in-linear" mode="out-in">
                    <component :is="Component" style="height: 100%"/>
                </transition>
                </router-view>
            </div>
        </div>
</template>

<script setup>
</script>

<style scoped>
.welcome-title {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color:white;
    text-shadow: 0 0 10px black;
}
</style>