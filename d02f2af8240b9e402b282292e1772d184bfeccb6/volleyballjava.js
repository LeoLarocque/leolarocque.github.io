var page_name = window.location.pathname;

schedule = new Array(
  //new Array(new Date("Apr 8 2024"), "Brawlers", "Grizzlies", null, null), moved to May 14
  //new Array(new Date("Apr 8 2024"), "Tempests", "Patriots", null, null), moved to May 14
  new Array(new Date("Apr 9 2024"), "Chargers", "Royals", 0, 2),
  new Array(new Date("Apr 9 2024"), "Spartans", "Jets", 0, 2),
  new Array(new Date("Apr 10 2024"), "Royals", "Tempests", 1, 0),
  new Array(new Date("Apr 10 2024"), "Chargers", "Jets", 0, 1),
  new Array(new Date("Apr 10 2024"), "Spartans", "Patriots", 1, 0),
  new Array(new Date("Apr 10 2024"), "Grizzlies", "Brawlers", 0, 1),
  new Array(new Date("Apr 11 2024"), "Patriots", "Brawlers", 1, 1),
  new Array(new Date("Apr 11 2024"), "Spartans", "Tempests", 0, 2),

  new Array(new Date("Apr 15 2024"), "Jets", "Royals", 0, 2),
  new Array(new Date("Apr 15 2024"), "Grizzlies", "Chargers", 0, 2),
  new Array(new Date("Apr 16 2024"), "Patriots", "Chargers", 1, 0),
  new Array(new Date("Apr 16 2024"), "Jets", "Grizzlies", 1, 0),
  new Array(new Date("Apr 16 2024"), "Royals", "Spartans", 1, 0),
  new Array(new Date("Apr 16 2024"), "Tempests", "Brawlers", 1, 0),
  new Array(new Date("Apr 17 2024"), "Tempests", "Royals", 1, 1),
  new Array(new Date("Apr 17 2024"), "Chargers", "Jets", 1, 1),
  new Array(new Date("Apr 18 2024"), "Grizzlies", "Patriots", null, null),
  new Array(new Date("Apr 18 2024"), "Brawlers", "Spartans", null, null),

  new Array(new Date("Apr 22 2024"), "Jets", "Patriots", null, null),
  new Array(new Date("Apr 22 2024"), "Chargers", "Royals", null, null),
  new Array(new Date("Apr 22 2024"), "Spartans", "Brawlers", null, null),
  new Array(new Date("Apr 22 2024"), "Grizzlies", "Tempests", null, null),
  new Array(new Date("Apr 23 2024"), "Spartans", "Grizzlies", null, null),
  new Array(new Date("Apr 23 2024"), "Jets", "Tempests", null, null),
  new Array(new Date("Apr 24 2024"), "Royals", "Brawlers", null, null),
  new Array(new Date("Apr 24 2024"), "Patriots", "Chargers", null, null),
  new Array(new Date("Apr 25 2024"), "Tempests", "Spartans", null, null),
  new Array(new Date("Apr 25 2024"), "Patriots", "Grizzlies", null, null),
  new Array(new Date("Apr 25 2024"), "Royals", "Jets", null, null),
  new Array(new Date("Apr 25 2024"), "Brawlers", "Chargers", null, null),
);

function update_table() {
  var rows, team1, team2, wins1, wins2, games_played;
  const table = document.getElementById("Table1");
  rows = table.rows;
  for (i = 0; i < schedule.length; i++) {
    team1 = schedule[i][1];
    team2 = schedule[i][2];
    wins1 = schedule[i][3];
    wins2 = schedule[i][4];
    games_played = wins1 + wins2;
    for (j = 1; j < rows.length; j++){
      if(rows[j].getElementsByClassName("table-names")[0].innerHTML == team1){
        tot_games = rows[j].getElementsByClassName("games-played")[0];
        tot_wins = rows[j].getElementsByClassName("wins")[0];
        tot_games_data = Number(tot_games.innerHTML) + games_played;
        tot_wins_data = Number(tot_wins.innerHTML) + wins1;
        tot_games.innerHTML = tot_games_data.toFixed(0);
        tot_wins.innerHTML = tot_wins_data.toFixed(0);
      }
      if(rows[j].getElementsByClassName("table-names")[0].innerHTML == team2){
        tot_games = rows[j].getElementsByClassName("games-played")[0];
        tot_wins = rows[j].getElementsByClassName("wins")[0];
        tot_games_data = Number(tot_games.innerHTML) + games_played;
        tot_wins_data = Number(tot_wins.innerHTML) + wins2;
        tot_games.innerHTML = tot_games_data.toFixed(0);
        tot_wins.innerHTML = tot_wins_data.toFixed(0);
      }
    }
  }
}

function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("Table1");
    switching = true;
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        if (Number(x.innerHTML) < Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }

function tablebrains() {
  const table = document.getElementById("Table1");
  var rows = table.rows;
  for (var i = 1; i < rows.length; i++) {
      games_played = rows[i].getElementsByClassName("games-played")[0];
      wins = rows[i].getElementsByClassName("wins")[0];
      losses = rows[i].getElementsByClassName("losses")[0];
      points = rows[i].getElementsByClassName("points")[0];
      win_percent = rows[i].getElementsByClassName("percentage")[0];
      loss_data = Number(games_played.innerHTML) - Number(wins.innerHTML)
      percent_data = (Number(wins.innerHTML)/Number(games_played.innerHTML))*100
      points.innerHTML = Number(wins.innerHTML)*2;
      losses.innerHTML = loss_data.toFixed(0);
      win_percent.innerHTML = percent_data.toFixed(2);
      
  }
}
function format(array){
  date = array[0];
  team1 = array[1];
  team2 = array[2];
  date_month = date.toLocaleString("default", {month:"long"});
  date_day = date.getDate().toString();
  formatted = date_month.concat(" ").concat(date_day).concat(": ").concat(team1).concat(" vs ").concat(team2).concat("   ");
  return formatted;
}

function update_announcement(){
  date = new Date()
  success = 0;
  head = false;
  head1 = false;
  announcement = document.getElementById("drop-announce-content");
  for(i = 0; i < schedule.length; i++){
    if(schedule[i][0].getMonth() === date.getMonth() && schedule[i][0].getDate() === date.getDate()){
      if(!head){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<strong>Today's games:</strong>";
        announcement.appendChild(newDiv);
        head = true;
      }
      var newDiv = document.createElement("div");
      newDiv.textContent = format(schedule[i]);
      announcement.appendChild(newDiv);
      success++;
    }
    else if(schedule[i][0].getMonth() === date.getMonth(0) && schedule[i][0].getDate() - 1 === date.getDate()){
      if(!head1){
        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<strong>Tomorrow's games:</strong>";
        announcement.appendChild(newDiv);
        head1 = true;
      }
      var newDiv = document.createElement("div");
      newDiv.textContent = format(schedule[i]);
      announcement.appendChild(newDiv);
      success++;
    }
  }
  if(success < 4){
    var newDiv = document.createElement("div");
    newDiv.innerHTML = "<strong>Upcoming games:</strong>";
    announcement.appendChild(newDiv);
    var date = new Date();
    var i = success;
    while(schedule[i - success][0].getMonth() <= date.getMonth() && schedule[i - success][0].getDate() < date.getDate()){
      i++;
    }
    console.log(schedule[i][0])
  }
}

function update_schedule(){
  date = new Date()
  const table = document.getElementById("Table1");
  for(i=0;i<schedule.length;i++) {
    var row = table.insertRow(-1);

    var cell_date = row.insertCell(0);
    var cell_info = row.insertCell(1);
    var cell_result = row.insertCell(2);

    cell_date.innerHTML = schedule[i][0].toLocaleString("default", {month:"long"}).concat(" ").concat(schedule[i][0].getDate()).concat(", ").concat(schedule[i][0].getFullYear());
    cell_info.innerHTML = schedule[i][1].concat(" vs ").concat(schedule[i][2]);
    if(schedule[i][0].getMonth() < date.getMonth() && schedule[i][0].getDate() < date.getDate()){
      cell_result.innerHTML = schedule[i][3].concat("-").concat(schedule[i][4]);
    }
    else{cell_result = "";}
  }
}

update_announcement()//default function
if(page_name === "/d02f2af8240b9e402b282292e1772d184bfeccb6/index.html"){
  update_table()
  tablebrains()
  sortTable()
}
else if(page_name === "/d02f2af8240b9e402b282292e1772d184bfeccb6/schedule.html"){
  document.addEventListener("DOMContentLoaded", update_schedule());
}
else {
  //no functions yet
}
