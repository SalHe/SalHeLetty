<template>
    <div class="stories">
        <el-timeline>
            <el-timeline-item
                    v-for="(story, index) in stories"
                    :key="index"
                    :timestamp="story.timestamp"
                    :color="story.color"
                    :type="story.type"
                    :icon="story.icon"
                    size="large"
            >
                {{story.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    import AboutUs from "../utils/AboutUs";

    export default {
        name: "OurStories",
        data() {
            return {
                stories: AboutUs.stories
            };
        }
    }
</script>

<style lang="less" scoped>

    .stories {
        width: 100%;
        min-height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;

        background: url(../assets/background/kfc.jpg) repeat-y fixed center top;

        .el-timeline {
            padding: 30px 80px;
            margin: 50px 20px;
            width: 80%;
            background: rgba(255, 255, 255, 0.67);
            border-radius: 15px;
            box-shadow: 5px 5px rgba(44, 62, 80, .1);
        }
    }

</style>