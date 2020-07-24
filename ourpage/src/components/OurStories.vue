<template>
    <div class="stories">
        <el-timeline>
            <el-timeline-item
                    v-for="(story, index) in stories"
                    :key="index"
                    :timestamp="story.timestamp"
            >
                {{story.content}}
            </el-timeline-item>
            <el-timeline-item timestamp="future">
                to be continued...
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
                    {timestamp: '2019-01-10', content: '我回家了，但是没能见到你'},
                    {timestamp: '..........', content: '这期间我去见过你，慢慢的就去你家做了客'},
                    {
                        timestamp: '2020-01-21',
                        content: '疫情爆发，全国进入抗疫阶段，疫情出现了许许多多的美丽逆行者，他们受人尊敬。同时也因为疫情，很多人的工作还有学生们的学习都停滞了，我们也都没有返校。'
                    },
                    {timestamp: '..........', content: '疫情形式逐渐得到控制，而其他国家开始大爆发'},
                    {timestamp: '2020-05-25', content: '你们就要开学了，我从家送你去学校'},
                    {timestamp: '2020-05-30', content: '分别'},
                    {timestamp: '2020-06-29', content: '终于等到你们放假~~在外面玩了几天，我有了人生第一次“应酬”....'},
                    {timestamp: '2020-07-10', content: '你又要走了，想要去打工找钱买📷。如果不因为各种专业、课程一堆东西，我也跟着你去了。'},
                    {timestamp: '..........', content: '.......'},
                    {timestamp: '2020-07-25', content: '在一起满一年了，虽然没有在同一座城市，但是很想你'}

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

        background: url(../assets/background/kfc.jpg) no-repeat fixed center top;

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