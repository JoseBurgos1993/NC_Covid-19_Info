
// DATA needed - number of cases, number of deaths, complete tests, number hospitalized
// 
$("document").ready(function(){
            
    // GLOBAL VARIABLES \\

    var data;

    // FUNCTIONS \\
    function runAjax(name, number){
        // The parameter 'number' is for determining whether this is the main page loading (1), or the user
        // is on the county tab and pressed the submit button (2). I do this because javascript is really
        // annoying.

        const queryURL = "https://services.arcgis.com/iFBq2AW9XO0jYYF7/arcgis/rest/services/NCCovid19/FeatureServer/0/query?where=1%3D1&outFields=CONAME,County,Total,Deaths,StateCases,USCases,USDeaths,CountyCases,Hosp,Pop2018,Rate10k&outSR=4326&f=json";

        $.ajax({url: queryURL, method: "GET"}).then(function(response){
            data = JSON.parse(response);
            
            countyData = getCountyData(name.toLowerCase());

            if(countyData === null){
                alert("This county does not exist in North Carolina!");
            } else{
                if(number == 1){ // State
                    /*
                    $("#TotalDeaths").val(countyData.attributes.TotalDeaths);
                    $("#TotalCases").val(countyData.attributes.TotalCases);
                    $("#Tested").val(countyData.attributes.Tested);
                    $("#Hospitalized").val(countyData.attributes.Hospitalized);
                    */

                } else if(number == 2){ // County
                    /*
                    $("#countyName").val(countyData.attributes.County);
                    $("#countyDeaths").val(countyData.attributes.Deaths);
                    $("#countyCases").val(countyData.attributes.CountyCases);
                    */
                }
            }
        });
    }

    function getLocation(){
        //const queryURL = "https://data.healthcare.gov/resource/geocodes-usa-with-counties.json";
        const queryURL = "https://data.healthcare.gov/resource/geocodes-usa-with-counties.json?state=NC";
        $.ajax({url: queryURL, method: "GET"}).then(function(response){
            console.log(response);
        });
    }

    function getCountyData(name){
        // There are 100 counties
        for(let i=0; i<100; i++){
            // Compares county names and returns the correct one
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
    /*
    $(".submit").on("click", function(){
        const name = $("#textField").val();
        runAjax(name,2);
    });

    */


    // MAIN \\
    function main(){
        getLocation();

        //runAjax("Transylvania", 1); // <---- You can type the county name here for testing
    }
    main();
    ////////////////////////

    //
    function findCounty(position){
        const queryURL = "https://geo.fcc.gov/api/census/block/find?latitude=" + position.coords.latitude + "&longitude=" + position.coords.longitude + "&format=json";
        $.ajax({url: queryURL, method: "GET"}).then(function(response){
            console.log("FCC API");
            console.log(response.County.name);
        });
    }

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(findCounty);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    //function showPosition(position) {
    //    alert("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
    //}
});