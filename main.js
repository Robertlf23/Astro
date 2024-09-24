var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

// Populate the dropdown element with the data found in the planets array
var planetsSelect = document.getElementById('planets');
planets.reverse().forEach(function(planet) {
    var option = document.createElement('option');
    option.value = planet[0];
    option.textContent = planet[0];
    planetsSelect.appendChild(option);
});

// Function to calculate weight on selected planet
function calculateWeight(weight, planetName) { 
    var planet = planets.find(p => p[0] === planetName);
    return weight * planet[1];
}

// Handle click event
function handleClickEvent(e) {
    var userWeight = parseFloat(document.getElementById('user-weight').value);
    if (isNaN(userWeight)) {
        alert("Please enter a valid weight.");
        return;
    }

    var planetName = document.getElementById('planets').value;
    var result = calculateWeight(userWeight, planetName);

    var output = document.getElementById('output');
    output.textContent = `If you were on ${planetName}, you would weigh ${parseFloat(result.toFixed(2))}lbs!`;
}

// Set the onclick method for the calculate button
document.getElementById('calculate-button').onclick = handleClickEvent;

