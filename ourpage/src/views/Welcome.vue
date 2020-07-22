<template>
    <div>
        <LoveTime></LoveTime>
        <Us></Us>
        <OurStories></OurStories>
        <el-backtop></el-backtop>
    </div>
</template>

<script>
    import LoveTime from "../components/LoveTime";
    import Us from "../components/Us";
    import OurStories from "../components/OurStories";

    export default {
        name: "Welcome",
        components: {
            OurStories,
            LoveTime,
            Us
        }
    }
</script>

<style lang="less" scoped>


</style>