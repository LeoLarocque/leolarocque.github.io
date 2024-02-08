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
  var number_of_games = 16;
  function tablebrains() {
    var table = document.getElementById("Table1");
    var rows = table.rows;
    for (var i = 1; i < rows.length; i++) {
        games_played = rows[i].getElementsByClassName("games-played")[0];
        wins = rows[i].GetElementsByClassName("wins")[0];
        losses = rows[i].GetElementsByClassName("losses")[0];
        points = rows[i].GetElementsByClassName("points")[0];
        win_percent = rows[i].GetElementsByClassName("percentage")[0];
        loss_data = Number(games_played.InnerHTML) - Number(wins.InnerHTML)
        percent_data = (Number(wins.InnerHTML)/Number(games_played.InnerHTML))*100
        points.InnerHTML = Number(wins.InnerHTML)*2;
        losses.InnerHTML = loss_data.toFixed(0);
        win_percent.innerHTML = percent_data.toFixed(2);
        
    }
  }
  sortTable();
  tablebrains();
