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
        games_played = rows[i].Document.getElementsByClassName("games-played")[0];
        wins = rows[i].Document.GetElementsByClassName("wins")[0];
        losses = rows[i].Document.GetElementsByClassName("losses")[0];
        points = rows[i].Document.GetElementsByClassName("points")[0];
        win_percent = rows[i].Document.GetElementsByClassName("percentage")[0];
    }
  }
  sortTable();
  tablebrains();
