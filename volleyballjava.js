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
  date = new Date();
  var text;
  const str_table = localStorage.getItem("AAA-00000");
  const table = str_table.innerHTML;
  var rows = table.rows;
  for(i=1;i<(rows.length - 1);i++) {
    var today = rows[i].getElementById("date")[0];
    if(check_match(date,today)){
      text.append("match.");
    }
    document.getElementsByClassName("drop-announce-content").innerHTML = text;
  }
}

tablebrains();
sortTable();
update_announcement();