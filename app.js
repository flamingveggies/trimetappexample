document.getElementById("getdata").addEventListener("click", function() {
    var request = new XMLHttpRequest();
    var url = "https://developer.trimet.org/ws/v2/vehicles?appID=D065A3A5DAE4622752786CEB9&routes=";
    
    request.addEventListener("load", function() {
        var response;
        var htmlString = "";
        
        response = JSON.parse(request.responseText);
        
        htmlString += "<ul>";
        for (var i = 0; i < response.resultSet.vehicle.length; i++) {
            htmlString += "<li>" + response.resultSet.vehicle[i].signMessage + ": "+ -response.resultSet.vehicle[i].delay +" seconds late.</li>";
        };
        htmlString += "</ul>";
        
        document.getElementById("results").innerHTML = htmlString;
    });
    
    request.open("GET", url + document.getElementById("query").value);
    request.send();
});
