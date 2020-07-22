<template>
    <div class="us">
        <div class="couple">
            <div class="avatar-nickname">
                <img :src="lettyAvatar" alt="Letty">
                <span>Letty</span>
            </div>
            <div class="avatar-nickname">
                <img :src="kissGif" alt="kiss">
                <span>♥</span>
            </div>
            <div class="avatar-nickname">
                <img :src="salheAvatar" alt="SalHe">
                <span>SalHe</span>
            </div>
        </div>
        <div class="progress">
            <el-steps :active="2" finish-status="success" align-center>
                <el-step title="认识" description="2013"></el-step>
                <el-step title="在一起" description="2019/07/25"></el-step>
                <el-step title="婚礼" description="期待你穿上婚纱的样子"></el-step>
                <el-step title="白头" description="希望老来可以一起看日落"></el-step>
            </el-steps>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Us",
        data() {
            return {
                salheAvatar: require('../assets/avatar/salhe.jpg'),
                lettyAvatar: require('../assets/avatar/letty.jpg'),
                kissGif: require('../assets/kiss.gif')
            };
        }
    }
</script>

<style lang="less" scoped>

    .us {
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;

        background: url(../assets/background/tr1001_1.jpg) no-repeat center top fixed;
        background-size: cover;
        color: white;
        text-align: center;

        .couple {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;

            .avatar-nickname {
                width: 100px;

                display: flex;
                flex-direction: column;

                img {
                    width: 100px;
                    border-radius: 50%;
                    margin-bottom: 8px;
                }

                &:first-child {
                    margin-right: 20px;
                }

                &:nth-child(2) {
                    width: 70px;

                    img {
                        width: 70px;
                    }
                }

                &:last-child {
                    margin-left: 20px;
                }
            }
        }

        .progress {
            margin: 0 20px;
        }
    }
</style>