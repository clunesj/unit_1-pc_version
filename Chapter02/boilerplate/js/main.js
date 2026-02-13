// //initialize function called when the script loads
// function initialize(){
//     cities();
// };

// //function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//     var cityPop = [
//     { 
//         city: 'Madison',
//         population: 233209
//     },
//     {
//         city: 'Milwaukee',
//         population: 594833
//     },
//     {
//         city: 'Green Bay',
//         population: 104057
//     },
//     {
//         city: 'Superior',
//         population: 27244
//     }]

//     //create the table element
//     var table = document.createElement("table");

//     //create a header row
//     var headerRow = document.createElement("tr");

//     //add the "City" and "Population" columns to the header row
//     headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")

//     //add the row to the table
//     table.appendChild(headerRow);

//     //loop to add a new row for each city
//     for(var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         table.insertAdjacentHTML('beforeend',rowHtml);
//     }

//     document.querySelector("#myDiv").appendChild(table);
// }

// document.addEventListener('DOMContentLoaded',initialize)

// Add all scripts to the JS folder
// function onLoadFunction(){
//     var mydiv = document.getElementById("mydiv");
//     mydiv.innerHTML = "Hello World";
// };
// window.onload = onLoadFunction();

//initialize function called when the script loads
function initialize(){
    cities();
};

//function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//     var cities = [
//         'Madison',
//         'Milwaukee',
//         'Green Bay',
//         'Superior'
//     ];
//     var population = [
//         233209,
//         594833,
//         104057,
//         27244
//     ];

//new function for adding cities and populations to a table - jc
function cities(){
    var cityPop = [
        {city: 'Madison', 
            population: 233209},
        {city: 'Milwaukee',
             population: 594833},
        {city: 'Green Bay', 
            population: 104057},
        {city: 'Superior', 
            population: 27244}
    ];



    //create the table element
    var table = document.createElement("table");

    //create a header row
    var headerRow = document.createElement("tr");

    // //add the "City" column
    // var cityHeader = document.createElement("th");
    // cityHeader.innerHTML = "City";
    // headerRow.appendChild(cityHeader);

    // //add the "Population" column
    // var popHeader = document.createElement("th");
    // popHeader.innerHTML = "Population";
    // headerRow.appendChild(popHeader);

    // add city and population columns using new method - jc
    headerRow.insertAdjacentHTML('beforeend', '<th>City</th><th>Population</th>');

    //add the row to the table
    table.appendChild(headerRow);

    //loop to add a new row for each city
    // for (var i = 0; i < cities.length; i++){
    //     var tr = document.createElement("tr");

    //     var city = document.createElement("td");
    //     city.innerHTML = cities[i];
    //     tr.appendChild(city);

    //     var pop = document.createElement("td");
    //     pop.innerHTML = population[i];
    //     tr.appendChild(pop);

    //     table.appendChild(tr);
    // };
    // loop to add a new row for each city - jc
//     for (vari = 0; i < cityPop.length; i++){
//         var tr = document.createElement("tr");
        
//         var city = document.createElement("td");
//         city.innerHTML = cityPop[i].city;
//         tr.appendChild(city);

//         var population = document.createElement("td");
//         population.innerHTML = cityPop[i].population;
//         tr.appendChild(population);
//         table.appendChild(tr);
//     };
// }
// trying out a different loop type - jc
    // cityPop.forEach(function(cityObject){
    //     var tr = document.createElement("tr");

    //     var city = document.createElement("td");
    //     city.innerHTML = cityObject.city;
    //     tr.appendChild(city);

    //     var population = document.createElement("td");
    //     population.innerHTML = cityObject.population;
    //     tr.appendChild(population);

    //     table.appendChild(tr);
    // });



    // adding a new loop - jc
    for (var i = 0; i < cityPop.length; i++){
        var rowHTML = '<tr><td>' + cityPop[i].city + '</td><td>' + cityPop[i].population + '</td></tr>';
        table.insertAdjacentHTML('beforeend', rowHTML);


    }

    // commenting this out to test the new stuff - jc
    document.querySelector("#newDiv").appendChild(table);

                //Added below Example 3.8...
    //click listener with anonymous handler function
    document.querySelector("table").addEventListener("click", function(){
        alert('Madison Rocks! Go Badgers!');
    });

    //named handler function for removable listener
    function clickme(){
        alert('Yeah Green Bay! Go Packers!');
    };

    //Added below Example 3.6...
    //change the text color
    document.querySelector('#newDiv').style.color = 'red';

    //change the text size and alignment
    document.querySelector('#newDiv').style.fontSize = '2em';
    document.querySelector('#newDiv').style.textAlign = 'left';

    //get the text color and add it as text to the div
    var thecolor = document.querySelector('newDiv').style.color;
    document.querySelector('#newDiv').insertAdjacentHTML('beforeend',thecolor);

    //add the event listener
    document.querySelector("table").addEventListener('click', clickme);

    //remove the event listener
    document.querySelector("table").removeEventListener('click', clickme);

}

        // //Added at Example 3.5 line 44...
        // //get the div id
        // var theid = document.querySelector('#myDiv').getAttribute('id');

        // //theid is 'myDiv'; add it as text to the div
        // document.querySelector('#myDiv').insertAdjacentHTML('beforeend',theid);

        // //add the class 'foo' to the div
        // document.querySelector('#myDiv').setAttribute('class', 'foo');

        // //Check your work with the Inspector!

        // Example 3.6 - jc
        //get the div id
        var theid = document.querySelector('#myDiv').id;

        //set the id to newdiv
        document.querySelector('#myDiv').id = "newDiv";

        //set the class 
        document.querySelector('#newDiv').className = "foo";








// end of the new stuff! - jc
document.addEventListener('DOMContentLoaded', initialize);




//         var tr = document.createElement("tr");

//         var city = document.createElement("td");
//         // first conditional - jc
//         if (cityPop[i].city == 'Madison'){
//             city.innerHTML == 'Badgerville';
//         } else if (cityPop[i].city == 'Green Bay'){
//             city.innerHTML == 'Packerville';
//         } else {
//             city.innerHTML = cityPop[i].city;
//         }
//         tr.appendChild(city);

//         var population = document.createElement("td");
//         // second conditional - jc
//         if (cityPop[i].population < 500000){
//             population.innerHTML = cityPop[i].population;
//         } else {
//             population.innerHTML = 'Too big!';
//         };
//         tr.appendChild(population);

//         table.appendChild(tr);
//     };

       

//     //add the table to the div in index.html
//     var myDiv = document.querySelector("#myDiv").appendChild(table);
//     // myDiv.appendChild(table);
// };

// //call the initialize function when the window has loaded
// window.onload = initialize();