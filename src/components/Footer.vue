<template>
<div class="container my-4">
    <div class="d-flex justify-content-center">
        <a :href="header.href" class="mx-3 fs-4" v-for="header in footer.headers">{{ header.label }}</a>
    </div>
    <div class="d-flex justify-content-center my-3">
        <a :href="description.href" class="mx-3 fs-5 opacity-50" v-for="description in footer.descriptions">{{description.label}}</a>
    </div>
    <div class="d-flex justify-content-center">
        <a :href="icon.href" class="mx-3 fs-4" v-for="icon in footer.icons"><i :class="icon.class"></i></a>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            footer: {
                headers: [{
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, ],
                descriptions: [{
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, {
                    label: 'Link',
                    href: ''
                }, ],
                icons: [{
                    class: 'fa-brands fa-instagram',
                    href: ''
                }, ]
            }
        }
    },
}
</script>

<style scoped>
a {
    color: white;
    cursor: pointer;
    text-decoration: none;
}
</style>
