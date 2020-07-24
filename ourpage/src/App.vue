<template>
    <div id="app" ref="app"
         @mousedown="playBgm"
         @touchstart.stop="playBgm"
         @WeixinJSBridgeReady="playBgm"
         @YixinJSBridgeReady="playBgm"
    >
        <audio ref="player" preload="auto"
               :src="bgm.path"
               @canplay="onCanPlay"
               @play="onPlay"
               @ended="onPlayEnded"
               muted
               autoplay
               hidden
               controls
        ></audio>
        <div class="player">
            <img class="cover" :class="{animated: playing}" :src="bgm.cover"/>
            <h3 class="title">{{ (playing?'🎵 ':'')+ bgm.title + ' - ' + bgm.author }}</h3>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import jQuery from 'jquery'
    import Effects from "./effects";

    export default {
        name: 'App',
        data() {
            return {
                bgms: [
                    {
                        title: '飞鸟和蝉',
                        author: '任然',
                        cover: require('./assets/music/cover/fnhc.jpg'),
                        path: require('./assets/music/飞鸟和蝉.mp3')
                    },
                    {
                        title: '你懂的',
                        author: '小沈阳',
                        cover: require('./assets/music/cover/ndd.jpg'),
                        path: require('./assets/music/你懂的.mp3')
                    }
                ],
                currentBgm: 0,
                playing: false
            }
        },
        mounted() {
            Effects.installSnow();
            let flakes = [];
            for (let i = 1; i <= 4; i++) {
                flakes.push(require('./assets/snowflakes/' + i.toString().padStart(3, '0') + '.png'));
            }
            jQuery('body').wpSuperSnow({
                flakes: flakes,
                totalFlakes: '100',
                zIndex: '999999',
                maxSize: '30',
                maxDuration: '20',
                useFlakeTrans: false
            });
        },
        methods: {
            onCanPlay() {
                this.playAudio();
            },
            playBgm() {
                if (!this.playing || !this.$refs.player.playing) {
                    this.playing = true;
                    this.playAudio();
                }
            },
            onPlayEnded() {
                this.currentBgm++;
            },
            onPlay() {
                this.playing = true;
            },
            playAudio() {
                this.$refs.player.play();
            }
        },
        computed: {
            bgm() {
                return this.bgms[this.currentBgm % this.bgms.length];
            }
        }
    }
</script>

<style lang="less">
    * {
        padding: 0;
        margin: 0;
    }

    body {
        font-family: raleway, century gothic, texgyreadventor, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        box-sizing: border-box;
    }

    .player {
        position: fixed;
        left: 15px;
        top: 15px;
        padding: 10px 15px;
        background: rgba(255, 255, 255, .4);
        box-shadow: 3px 3px rgba(0, 0, 0, .1);
        border-radius: 12px;
        z-index: 9999;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        img.cover {
            width: 50px;
            border-radius: 50%;
            margin-right: 10px;

            &.animated {
                animation: rotation 5s normal infinite linear;
            }

        }

        @keyframes rotation {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }
    }

</style>
