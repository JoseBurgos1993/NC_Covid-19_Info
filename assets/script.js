
// DATA needed - number of cases, number of deaths, complete tests, number hospitalized

$("document").ready(function(){
            
    // GLOBAL VARIABLES \\
    const queryURL = "https://services.arcgis.com/iFBq2AW9XO0jYYF7/arcgis/rest/services/NCCovid19/FeatureServer/0/query?where=1%3D1&outFields=CONAME,County,Total,Deaths,StateCases,USCases,USDeaths,CountyCases,Hosp,Pop2018,Rate10k,COCAPS&outSR=4326&f=json";


    // FUNCTIONS \\
    function runAjax(){
        $.ajax({url: queryURL, method: "GET"}).then(function(response){
            data = JSON.parse(response);
            
            const name = "Transylvania".toLowerCase(); // <---- You can type the county name here for testing

            getCountyData(name);
        });
    }

    function getCountyData(name){
        console.log("HERE");
        // There are 100 counties
        for(let i=0; i<100; i++){
            const tempCoName = data.features[i].attributes.CONAME.toLowerCase();
            const tempCounty = data.features[i].attributes.County.toLowerCase();
            if(name === tempCoName || name === tempCounty){
                console.log(data.features[i]);
                break; // Ends FOR loop
            }
        }
    }


    // EVENT LISTENERS \\



    // MAIN \\
    function main(){
        var data = runAjax();
    }
    main();
});