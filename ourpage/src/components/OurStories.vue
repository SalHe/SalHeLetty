<template>
    <div class="stories">
        <el-timeline>
            <el-timeline-item
                    v-for="(story, index) in stories"
                    :key="index"
                    :timestamp="story.timestamp"
                    size="large"
            >
                {{story.content}}
            </el-timeline-item>
        </el-timeline>
    </div>
</template>

<script>
    export default {
        name: "OurStories",
        data() {
            return {
                stories: [
                    {timestamp: '2019-07-25', content: '我们在一起了'},
                    {timestamp: '2019-08-06', content: '我成功被大学录取，叫了同学一起吃饭，宝贝从深圳飞回来，带了朵玫瑰'},
                    {timestamp: '2019-08-07', content: '今天穿得很漂亮，人生第一次合照'},
                    {timestamp: '2019-08-12', content: '因为出去玩吵架'},
                    {timestamp: '2019-08-14', content: '一起去游乐园'},
                    {timestamp: '2019-08-27', content: '你和龙宇去滑雪场，和爸妈去了景区'},
                    {timestamp: '2019-09-30', content: '终于等到国庆，我们在你的学校逛了下，拍了合照，吃了晚饭'},
                    {timestamp: '2019-10-01', content: '收拾行李一起回家，在车上，你啵了我一口，还有拥抱~'},
                    {timestamp: '2019-10-09', content: '你有了自己的英文名——Letty'},
                    {timestamp: '2019-10-24', content: '你的第一个生日，我从学校坐车过来找你，骑了会车，吃了晚饭，第二天带你去吃快餐'},
                    {timestamp: 'Future', content: 'To be continued...'},

                ]
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

        background: url(../assets/kfc.jpg) no-repeat fixed center top;

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