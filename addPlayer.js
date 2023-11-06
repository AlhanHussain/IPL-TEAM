//Loading data from Local storage
let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

//Populating a select dropdown with team names
var selectTeam = document.getElementById("inp6");
for (var i = 0; i < localTeam.length; i++) {
  selectTeam.innerHTML += `
    <option value="${localTeam[i].teamFullName}">${localTeam[i].teamFullName}</option>
               
    `;
}
var newData = 10;

//Handling form submission
$("#addteamform").submit(function (e) {
  e.preventDefault();
  let inp_val = $("#inp6").val();
  //Creating short name
  let shortName = "";
  for (let i = 0; i < inp_val.length; i++) {
    if (i == 0) {
      shortName += inp_val[i++].toUpperCase();
      continue;
    } else if (inp_val[i] == " ") {
      shortName += inp_val[++i].toUpperCase();
      i++;
    }
  }
  //Handling true or false
  var trueOrFal = "";
  if ($("#inp3").val() == "true") {
    trueOrFal = true;
  } else {
    trueOrFal = false;
  }
  //Creating player object
  let addPlayer = {
    // Pushing the player data to the local player array
    id: localPlayers.length,
    playerName: $("#inp1").val(),
    from: shortName,
    price: $("#inp2").val() + "Cr",
    isPlaying: trueOrFal,
    description: $("#inp4").val(),
    playerImg: $("#inp5").val(),
    playerTeam: $("#inp6").val(),
  };
  //Updating Local storage
  localPlayers.push(addPlayer);
  localStorage.setItem("playerArray", JSON.stringify(localPlayers));

  //Redirecting to another page
  location.href = "./index.html";
});
