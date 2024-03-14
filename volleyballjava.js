schedule = new Array();
schedule_dates = new Array(new Date("Apr 8 2024"), new Date("Apr 8 2024"), new Date("Apr 9 2024"), new Date("Apr 9 2024"), new Date("Apr 10 2024"), new Date("Apr 10 2024"), new Date("Apr 10 2024"), new Date("Apr 10 2024"), new Date("Apr 11 2024"), new Date("Apr 11 2024"),
new Date("Apr 15 2024"), new Date("Apr 15 2024"), new Date("Apr 16 2024"), new Date("Apr 16 2024"), new Date("Apr 16 2024"), new Date("Apr 16 2024"), new Date("Apr 17 2024"), new Date("Apr 17 2024"), new Date("Apr 18 2024"), new Date("Apr 18 2024"),
new Date("Apr 22 2024"), new Date("Apr 22 2024"), new Date("Apr 22 2024"), new Date("Apr 22 2024"), new Date("Apr 23 2024"), new Date("Apr 23 2024"), new Date("Apr 24 2024"), new Date("Apr 24 2024"), new Date("Apr 25 2024"), new Date("Apr 25 2024"), new Date("Apr 25 2024"), new Date("Apr 25 2024"),
new Date("Apr 29 2024"), new Date("Apr 29 2024"), new Date("Apr 30 2024"), new Date("Apr 30 2024"), new Date("May 01 2024"), new Date("May 01 2024"), new Date("May 01 2024"), new Date("May 01 2024"), new Date("May 02 2024"), new Date("May 02 2024"),
new Date("May 06 2024"), new Date("May 06 2024"), new Date("May 07 2024"), new Date("May 07 2024"), new Date("May 07 2024"), new Date("May 07 2024"), new Date("May 08 2024"), new Date("May 08 2024"), new Date("May 09 2024"), new Date("May 09 2024"),
new Date("May 13 2024"), new Date("May 13 2024"), new Date("May 13 2024"), new Date("May 13 2024"));
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
const number_of_games = 16;
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
  date_day = date.getDay();
  today_day = today.getDay();

  if(date_month === today_month){
      if(date_day === today_day){
          return true;
      }
      else{return false;}
  }
  else{return false;}
}


function update_announcement(){
  function format_date(date){
    date_month = date.toLocaleString("default", {month:"long"});
    date_day = date.getDate().toString();
    formatted = date_month.concat(" ").concat(date_day);
    return formatted;
  }
  date = new Date()
  success = 0;
  announcement = document.getElementById("drop-announce-content");
  for(i = 0; i < schedule_dates.length; i++){
    if(check_match(date, schedule_dates[i])){
      const para = document.createElement("p");
      var node = document.createTextNode(format_date(schedule_dates[i]))
      para.appendChild(node);
      announcement.appendChild(para);
      success++;
    }
  }
  if(success == 0){
    const para = document.createElement("p");
    const br = document.createElement("b");
    for(i = 0; i < 5; i++){
      var node = document.createTextNode(format_date(schedule_dates[i]))
      para.appendChild(node);
      announcement.appendChild(para);
      annnouncement.appendChild(br)
    }
  }
}

tablebrains();
sortTable();
update_announcement();