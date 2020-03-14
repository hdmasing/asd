class UI{
    constructor(){
        this.weatherCastprofile = document.getElementById('weatherinfo');
    }
    showData(userData){
            
        this.weatherCastprofile.innerHTML= `
        <div class="col-md-9">
        <div class="row">
         
                <h3 class="font-weight-bold text-info" text-align-center>${userData.timezone}</h3>
            
                <ul class="list-group">
                    <li class="list-group-item">${userData.currently.summary}</li>
                    <li class="list-group-item">Temperature: ${((userData.currently.temperature- 32)/1.8).toFixed(2)} °C </li>
                    <li class="list-group-item">Wind: ${userData.currently.windSpeed} m/s </li>
                </ul>
                   
            </div>
        
        
        
        `
    }
    
}
