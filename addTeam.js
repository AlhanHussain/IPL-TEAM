//Loading data from Local storage



let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));


//Form submissin Handling
$("#addteamform").submit(function (e) {


    e.preventDefault();


    let inp_val = $("#inp1").val();
    //Creating short name
    let shortName = '';
    for(let i=0;i<inp_val.length;i++){
        if(i == 0){
            shortName += inp_val[i++].toUpperCase();
            continue;
        }else if(inp_val[i] == ' '){
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
//Adding the new team object to the local team array
    let addData = {
        "id": localTeam.length,
        "teamFullName":$("#inp1").val() ,
        "sName": shortName,
        
        "teamIcon": $("#inp3").val(),
        "WonCount": $("#inp4").val(),


    }
//Updating the local storage
   localTeam.push(addData);
   localStorage.setItem("teamArray", JSON.stringify(localTeam)); 

   //Redirecting to Another Page
   location.href = `./teams.html?name=${addData.sName}`;
})

     