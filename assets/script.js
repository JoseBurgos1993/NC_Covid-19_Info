
// DATA needed - number of cases, number of deaths, complete tests, number hospitalized

$("document").ready(function(){
            
    // GLOBAL VARIABLES \\
    const queryURL = "https://services.arcgis.com/iFBq2AW9XO0jYYF7/arcgis/rest/services/NCCovid19/FeatureServer/0/query?where=1%3D1&outFields=CONAME,County,Total,Deaths,StateCases,USCases,USDeaths,CountyCases,Hosp,Pop2018,Rate10k&outSR=4326&f=json";

    var data;

    // FUNCTIONS \\
    function runAjax(){
        $.ajax({url: queryURL, method: "GET"}).then(function(response){
            data = JSON.parse(response);
            
            const name = "Transylvania".toLowerCase(); // <---- You can type the county name here for testing

            countyData = getCountyData(name);
            if(countyData === null){
                alert("This county does not exist in North Carolina!");
            } else{
                    
                /*
                example of how we would query

                $("#countyName")  .val(countyData.attributes.County);
                $("#countyDeaths").val(countyData.attributes.Deaths);
                $("#countyCases") .val(countyData.attributes.CountyCases);
                */
            }
        });
    }

    function getCountyData(name){
        // There are 100 counties
        for(let i=0; i<100; i++){
            const tempCoName = data.features[i].attributes.CONAME.toLowerCase();
            const tempCounty = data.features[i].attributes.County.toLowerCase();
            if(name === tempCoName || name === tempCounty){
                console.log(data.features[i].attributes);
                return data.features[i].attributes;
            }
        }
        return null;
    }


    // EVENT LISTENERS \\
    


    // MAIN \\
    function main(){
        runAjax();
    }
    main();
});