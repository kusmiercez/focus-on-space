import { GLOBAL_TEMP, CARBON_DIOXIDE } from "./climateData.js";

const fontColor = "rgb(230, 209, 229)";

const createTemperatureChart = () => {
    const ctx = document.getElementById('temp-chart').getContext('2d');
    let gradient = ctx.createLinearGradient(100, 0, 0, 400);
    gradient.addColorStop(0, "rgba(127, 40, 124)");
    gradient.addColorStop(.8, "rgb(86, 108, 247, .7)");
    gradient.addColorStop(1, "rgb(22, 164, 152)");
    const labels = GLOBAL_TEMP.years;
    const data = {
        labels,
        datasets: [
            {
                data: GLOBAL_TEMP.mean,
                label: "Annual mean",
                borderColor: gradient,
                borderWidth: 2
            },
            {
                data: GLOBAL_TEMP.lowess,
                label: "Lowess smoothing",
                borderColor: "rgb(65, 236, 239)",
                borderWidth: 2,
                pointBorderColor: "transparent"
            }
        ]
    }
    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 15
                        },
                        color: fontColor
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        callback: function (value, index, ticks) {
                            return value.toFixed(1) + "°C";
                        },
                        color: fontColor,
                        font: {
                            size: 13,
                        }
                    }
                },
                x: {
                    ticks: {
                        color: fontColor,
                        font: {
                            size: 13,
                        }
                    }
                }
            }

        }
    })
}

const createCO2Chart = () => {
    const ctx = document.getElementById('co2-chart').getContext('2d');
    let gradient = ctx.createLinearGradient(100, 0, 0, 400);
    gradient.addColorStop(0, "rgb(212, 39, 9)");
    gradient.addColorStop(.8, "rgb(224, 159, 30)");
    gradient.addColorStop(1, "rgb(228, 219, 198)");
    const labels = CARBON_DIOXIDE.years;
    const data = {
        labels,
        datasets: [
            {
                data: CARBON_DIOXIDE.mean,
                label: "Globally averaged marine surface annual mean (ppm)",
                borderColor: gradient,
                borderWidth: 2
            }
        ]
    }
    const chart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    labels: {
                        font: {
                            size: 15
                        },
                        color: fontColor
                    }
                }
            },
            scales: {
                y: {
                    ticks: {
                        color: fontColor,
                        font: {
                            size: 13,
                        }
                    }
                },
                x: {
                    ticks: {
                        color: fontColor,
                        font: {
                            size: 13,
                        }
                    }
                }
            }

        }
    })
}

createTemperatureChart();
createCO2Chart();