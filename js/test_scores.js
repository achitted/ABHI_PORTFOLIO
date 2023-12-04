var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { 
    return document.getElementById(id);
};

var addScore = function(){
    var name = $("name").value;
    var score = parseInt($("score").value);
	if(name==""){
		validateForm();
	}
    else{ 
	if(!isNaN(score) && name!="") 
	{
        	names.push(name);52
        	scores.push(score);
        	$("name").value = "";
        	$("score").value = "";
	}
	if (errorDisplayed) {
                var errorMessage = document.querySelector('#name + span');
                errorMessage.remove();
                errorDisplayed = false;
        }
    	}
}
var errorDisplayed=false;
var validateForm = function () {
    var nameInput = document.getElementById('name');
    var nameValue = nameInput.value.trim();

    if (nameValue =='' && !errorDisplayed) {
        var errorMessage = document.getElementById('error-message'); // Get the error message by ID
        if (!errorMessage) {
            errorMessage = document.createElement('span');
            errorMessage.id = 'error-message';
            errorMessage.style.color = 'red';
            nameInput.insertAdjacentElement('afterend', errorMessage);
			errorMessage.textContent = ' Name cannot be empty';
			nameInput.focus();
			errorDisplayed = true;
        }

    } else {
        var errorMessage = document.getElementById('error-message'); // Get the error message by ID
        if (errorMessage) {
            errorMessage.textContent = '';
            errorMessage.remove(); // Remove the error message element from the DOM
            errorDisplayed = false;
        }
    }
}

var displayResults = function(){
    var total = 0;
    for (var i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    var averageScore = parseInt(total / scores.length);
	var h_s=0;
	for(var h=0; h<scores.length;h++)
	{
		if(scores[h]>h_s){
			h_s=scores[h];
			h_index=h;
		}
	}
	var averageScore=parseInt(total/(scores.length));

    $("results").innerHTML = "<hr><h2>Results</h2>";
    $("results").innerHTML += "<p>Average Score = " + averageScore + "</p>";
	$("results").innerHTML += "<p> High Score = " +names[h_index]+" with a score of "+ h_s +"</p>";
}
var displayScores = function() {
    var table = "<h3>Scores</h3><table><tr><th>Name</th><th>Score</th></tr>";
    for (var i = 0; i < names.length; i++) {
        table += "<tr><td>" + names[i] + "</td><td>" + scores[i] + "</td></tr>";
    }
    table += "</table>";
	var st=$("st_container");
	st.innerHTML="<hr>";
	st.innerHTML+=table;
}

window.onload = function () {
    $("add").onclick = addScore;
    $("display_results").onclick = displayResults;
    $("display_scores").onclick = displayScores;
};