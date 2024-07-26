<template>
<div class="my-5 container p-5">
    <div class="row justify-content-center">
        <div v-for="card in cards" :key="card.label" class="col-6 p-5 d-flex justify-content-center hover-effect">
            <i :class="card.logo + ' me-4 fs-2'"></i>
            <div class="">
                <h3>{{card.label}} <i class="fa-solid fa-up-right-from-square fs-5 ms-3"></i></h3>
                <p class="mt-3 text-opacity">{{card.text}}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            cards: [{
                logo: 'fa-solid fa-paper-plane',
                label: 'Community Chat',
                text: 'Lorem ipsum dolor sit amet. Selamun aleykum saas.'
            }, {
                logo: 'fa-brands fa-x-twitter',
                label: 'Community Chat',
                text: 'Lorem ipsum dolor sit amet. Selamun aleykum saas.'
            },{
                logo: 'fa-brands fa-instagram',
                label: 'Community Chat',
                text: 'Lorem ipsum dolor sit amet. Selamun aleykum saas.'
            },{
                logo: 'fa-brands fa-facebook',
                label: 'Community Chat',
                text: 'Lorem ipsum dolor sit amet. Selamun aleykum saas.'
            }, ]
        }
    },
}
</script>

<style scoped>
.hover-effect{
    transition: 0.15s ease;
}
.hover-effect:hover{
    transform: translateY(-0.3rem);
    opacity: 75%;
}
.hover-effect:hover .text-opacity{
    opacity: 100%;
}
.text-opacity{
    opacity: 50%;
}
</style>
