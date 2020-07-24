<template>
    <div class="welcome">
        <h1 class="title"><span>SalHe ♥ Letty</span></h1>
        <p class="slogan">
            <span class="quote-content"></span>
        </p>
        <div class="more">
            <i class="more-btn el-icon-bottom"></i>
        </div>
    </div>
</template>

<script>
    import TypeIt from "typeit";

    export default {
        name: "LoveTime",
        data() {
            return {
                unionTime: new Date('2019/07/25 20:29'), // 官宣时间
            };
        },
        mounted() {
            this.showLoveDuration();
        },
        methods: {
            showLoveDuration() {
                let now = new Date();
                let total = (now - this.unionTime) / 1000;
                let day = Math.floor(total / (24 * 60 * 60));//计算整数天数
                let afterDay = total - day * 24 * 60 * 60;//取得算出天数后剩余的秒数
                let hour = Math.floor(afterDay / (60 * 60));//计算整数小时数
                let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60;//取得算出小时数后剩余的秒数
                let min = Math.floor(afterHour / 60);//计算整数分
                let sec = Math.floor(total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60);//取得算出分后剩余的秒数

                function buildDuration(delta, unit) {
                    console.log(delta, unit)
                    if (delta > 0) return delta + unit;
                    return '';
                }

                let durationText = day + '天'
                // + buildDuration(hour, '小时')
                // + buildDuration(min, '分钟')
                // + buildDuration(sec, '秒');

                let typeIt = new TypeIt('.quote-content', {
                    speed: 100,
                    waitUntilVisible: true,
                    afterComplete: async (step, instance) => {

                    }
                })
                    .type('我与Letty, ')
                    .break()
                    .type('始于 2019/07/25')
                    .break({delay: 500})
                    .type('让我算算...')
                    .break({delay: 200})
                    .type('有多久了呢...')
                    .break()
                    .break()
                    .pause(1500)
                    .type('哦~~')
                    .break()
                    .type(`<strong>${durationText}</strong>`);

                if (day === 365) {
                    typeIt.break()
                        .type('哇哦，整整一年了唉~');
                }

                typeIt.break({delay: 100})
                    .break({delay: 100})
                    .type('这里应该是有🎵音乐的哦~~')
                    .break({delay: 100})
                    .type('如果没有听到的话，点两下屏幕叭~~')
                    .go();
            }
        }
    }
</script>

<style lang="less" scoped>

    .more {
        display: flex;
        justify-content: center;
        width: 100%;
        position: absolute;
        bottom: 30px;
        animation: moreShake 1.5s ease infinite alternate;

        .more-btn {
            align-items: center;
            font-size: 30px;
        }
    }

    @keyframes moreShake {
        0%, to {
            transform: translateY(0);
            opacity: 0.4;
        }

        50% {
            transform: translateY(10px);
            opacity: 1;
        }
    }

    .welcome {
        height: 100vh;
        text-align: center;
        color: white;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;

        background: url(../assets/background/cola.jpg) no-repeat top center fixed;
        background-size: cover;

        .title {
            margin-bottom: 20px;

            span {
                padding: 10px 50px;
                background: rgba(158, 186, 197, .5);
                border-radius: 50px;
            }
        }

        .slogan {
            margin-bottom: 10px;
        }
    }

    @keyframes cursorFlash {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>