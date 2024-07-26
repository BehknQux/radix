<template>
<div class="container d-flex justify-content-center my-5">
    <apexchart :width="chartOptions.chart.width" :type="chartOptions.chart.type" :options="chartOptions" :series="series"></apexchart>
</div>
</template>

<script>
export default {
    data() {
        return {
            series: [44, 55, 41, 17, 90],
            chartOptions: {
                chart: {
                    width: 700,
                    type: 'donut',
                },
                labels: ['Custom Label 1', 'Custom Label 2', 'Custom Label 3', 'Custom Label 4', 'Custom Label 5'],
                plotOptions: {
                    pie: {
                        startAngle: -90,
                        endAngle: 270,
                        customScale: 1,
                        donut: {
                            background: 'transparent',
                            size: '50%',
                            labels: {
                                show: true,
                                name: {
                                    show: true,
                                },
                                value: {
                                    show: true,
                                    color: 'white'
                                },
                                total: {
                                    show: true,
                                    color: 'white'
                                }
                            }
                        },
                    },
                },
                dataLabels: {
                    enabled: true
                },

                fill: {
                    type: 'gradient',
                },
                legend: {
                    labels: {
                        colors: 'white',
                        fontSize: '200'
                    },
                    position: 'bottom',
                    color: 'white',
                    formatter: function (val, opts) {
                        return val
                    }
                },
                responsive: [{
                    breakpoint: 480,
                    options: {
                        chart: {
                            width: 200
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            },

        }
    },
}
</script>

<style scoped>

</style>
