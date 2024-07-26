<template>
<div class="vw-100 my-5">
    <Vue3Marquee :pauseOnHover="true" :duration="30" :clone="true">
        <div v-for="col in columns" :key="col" style="height: 550px">
            <div :style="{height: (100/col.length) - 3 + '%'}" v-for="item in col" :key="item" class="my-3 mx-2 rounded-4 overflow-hidden">
                <img class="h-100 w-100" v-if="item.type === 'image'" :src="item.src" alt="image">
                <div class="h-100 w-100 d-flex flex-column justify-content-center align-items-center bg-dark" v-if="item.type === 'text'">
                    <h1 :style="{color: item.headerColor}">{{ item.header }}</h1>
                    <div>{{ item.description }}</div>
                </div>
            </div>
        </div>
    </Vue3Marquee>
</div>
</template>

<script>
import {
    Vue3Marquee
} from 'vue3-marquee';

export default {
    components: {
        Vue3Marquee,
    },
    data() {
        return {
            columns: [
                [{
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/1.png',
                            import.meta.url).href,
                    },
                    {
                        type: 'text',
                        header: '313131',
                        headerColor: 'red',
                        description: 'safasfsa safd sa sadfasfsafsafas fas sa'
                    },
                ],
                [{
                        type: 'text',
                        header: '313131',
                        headerColor: 'red',
                        description: 'safasfsa safd sa sadfasfsafsafas fas sa'
                    },
                    {
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/2.png',
                            import.meta.url).href,
                    },
                ],
                [{
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/3.png',
                            import.meta.url).href,
                    },
                    {
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/4.png',
                            import.meta.url).href,
                    },

                ],
                [{
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/5.png',
                            import.meta.url).href,
                    },
                    {
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/6.png',
                            import.meta.url).href,
                    },
                    {
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/7.png',
                            import.meta.url).href,
                    },

                ],
                [{
                        type: 'image',
                        src: new URL('../assets/SlidingPhotos/8.png',
                            import.meta.url).href,
                    },

                ]
            ]
        }
    }
}
</script>

<style scoped>
</style>
