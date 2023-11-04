const ctx=document.getElementById("myChart").getContext('2d')
let chart;
let initialData={
    labels: [],
    datasets: [{
        label:'DataSet',
        data:[],
        borderColor: 'black',
        borderWidth: 1,
        fill: false,
    }],
};

const config={
    type: 'line',
    data: initialData,
    options:{
        scales: {
            x: {
                type: 'linear',
                position: 'bottom',
                title: {
                    display: true,
                    text: 'Time',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Value',
                },
            },
        },
        animation:false,
    },
};

chart= new Chart(ctx,config);

function updateGraph(){
    const newData=Math.random()*100;
    
    // if(chart.data.datasets[0].data.length>=5){
    //     chart.data.labels.shift()
        
    //     chart.data.datasets[0].data.shift()
    // }
    chart.data.labels.push(chart.data.labels.length)
    chart.data.datasets[0].data.push(newData)
    chart.update()
}
setInterval(updateGraph,1000)
