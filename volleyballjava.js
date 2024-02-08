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
      var valueCell = rows[i].getElementsByClassName("wins")[0];
      var lossesCell = rows[i].getElementsByClassName("losses")[0];
      var percentageCell = rows[i].getElementsByClassName("percentage")[0];
      var value = Number(valueCell.innerHTML);
      var valueL = Number(lossesCell.innerHTML);
      var losses = lossesCell;
      var percentage = (valueL / value) * 100;
      percentageCell.innerHTML = percentage.toFixed(2) + "%";
      lossesCell.innerHTML = losses.toFixed (0);
    }
  }
  sortTable();
  tablebrains();
