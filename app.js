const weatherCast = new Weather;
const ui= new UI;

weatherCast.getUserData()
.then(data => {
    console.log(data.weatherCastInfo);
    ui.showData(data.weatherCastInfo);
})
