var page_name = window.location.pathname;

schedule = new Array(
  new Array(new Date("Apr 8 2024"), "Brawlers", "Grizzlies", null, null),
  new Array(new Date("Apr 8 2024"), "Tempests", "Patriots", null, null),
  new Array(new Date("Apr 9 2024"), "Chargers", "Royals", null, null),
  new Array(new Date("Apr 9 2024"), "Spartans", "Jets", null, null),
  new Array(new Date("Apr 10 2024"), "Royals", "Tempests", null, null),
  new Array(new Date("Apr 10 2024"), "Chargers", "Jets", null, null),
  new Array(new Date("Apr 10 2024"), "Spartans", "Patriots", null, null),
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

function check_match(date, today){
  date_month = date.getMonth();
  today_month = today.getMonth();
  date_day = date.getDate();
  today_day = today.getDate();

  if(date_month === today_month){
      if(date_day === today_day){
          return true;
      }
      else{return false;}
  }
  else{return false;}
}

function update_announcement(){
  function format(array){
    date = array[0];
    team1 = array[1];
    team2 = array[2];
    date_month = date.toLocaleString("default", {month:"long"});
    date_day = date.getDate().toString();
    formatted = date_month.concat(" ").concat(date_day).concat(": ").concat(team1).concat(" vs ").concat(team2).concat("   ");
    return formatted;
  }
  date = new Date()
  success = 0;
  announcement = document.getElementById("drop-announce-content");
  for(i = 0; i < schedule.length; i++){
    if(check_match(date, schedule[i][0])){
      var newDiv = document.createElement("div");
      newDiv.textContent = format(schedule[i]);
      announcement.appendChild(newDiv);
      success++;
    }
  }
  if(success == 0){
    var date = new Date();
    var i = 0;
    while(schedule[i][0].getMonth() < date.getMonth() && schedule[i][0].getDate() < date.getDate()){
      i++;
    }
    var j = i + 4
    for(i; i < j; i++){
      var newDiv = document.createElement("div");
      newDiv.textContent = format(schedule[i]);
      announcement.appendChild(newDiv);
    }
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
