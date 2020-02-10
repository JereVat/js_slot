function init() {
  var betSize = document.getElementById("betSize").value = 10;
  var a1 = document.getElementById("a1").value = "10";
  var a2 = document.getElementById("a2").value = "13";
  var a3 = document.getElementById("a3").value = "14";
  var b1 = document.getElementById("b1").value = "B";
  var b2 = document.getElementById("b2").value = "T";
  var b3 = document.getElementById("b3").value = "10";
  var c1 = document.getElementById("c1").value = "13";
  var c2 = document.getElementById("c2").value = "12";
  var c3 = document.getElementById("c3").value = "10";
  var d1 = document.getElementById("d1").value = "11";
  var d2 = document.getElementById("d2").value = "C";
  var d3 = document.getElementById("d3").value = "T";
  var d1 = document.getElementById("d1").value = "10";
  var d2 = document.getElementById("d2").value = "C";
  var d3 = document.getElementById("d3").value = "T";
  var e1 = document.getElementById("e1").value = "10";
  var e2 = document.getElementById("e2").value = "11";
  var e3 = document.getElementById("e3").value = "12";
}

function test() {
  var i;
  var highestWin = 0;
  for (i = 0; i < 10000; i++) {
    play();
    var win = Number(document.getElementById("latestWin").textContent);
    if (win > highestWin) {
      highestWin = win;
    }
  }
  console.log(highestWin);
}

function changeBet() {
  var betSize = document.getElementById("betSize").value;
  if (betSize == 10) {
    document.getElementById("betSize").value = 20;
  } else if (betSize == 20) {
    document.getElementById("betSize").value = 30;
  } else if (betSize == 30) {
    document.getElementById("betSize").value = 40;
  } else if (betSize == 40) {
    document.getElementById("betSize").value = 50;
  } else {
    document.getElementById("betSize").value = 10;
  }
}

function play() {
  if (check_balance() == false) {
    return alert("Not enough credits");
  }
  remove_spin_credits();
  var values = ["9", "10", "11", "12", "13", "14", "T", "C", "S", "B"];
  var elements = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3", "d1", "d2", "d3", "e1", "e2", "e3"];
  var i;
  var reel1HasBonus = false;
  var reel2HasBonus = false;
  var reel3HasBonus = false;
  var reel4HasBonus = false;
  var reel5HasBonus = false;

  for (i = 0; i < elements.length; i++) {
    var symbol = get_random();

    while (elements[i][0] == 'a' && reel1HasBonus == true && symbol == 'B') {
      var symbol = get_random(values);
    }
    while (elements[i][0] == 'b' && reel2HasBonus == true && symbol == 'B') {
      var symbol = get_random(values);
    }
    while (elements[i][0] == 'c' && reel3HasBonus == true && symbol == 'B') {
      var symbol = get_random(values);
    }
    while (elements[i][0] == 'd' && reel4HasBonus == true && symbol == 'B') {
      var symbol = get_random(values);
    }
    while (elements[i][0] == 'e' && reel5HasBonus == true && symbol == 'B') {
      var symbol = get_random(values);
    }
    document.getElementById(elements[i]).value = symbol;
    document.getElementById(elements[i]).style.backgroundImage = "url('img/" + symbol + ".png')";

    if (elements[i][0] == 'a' && symbol == 'B') {
      reel1HasBonus = true;
    } else if (elements[i][0] == 'b' && symbol == 'B') {
      reel2HasBonus = true;
    } else if (elements[i][0] == 'c' && symbol == 'B') {
      reel3HasBonus = true;
    } else if (elements[i][0] == 'd' && symbol == 'B') {
      reel4HasBonus = true;
    } else if (elements[i][0] == 'e' && symbol == 'B') {
      reel5HasBonus = true;
    }
  }
  check_wins();
  check_bonus(elements);
}

function get_random() {
  // 559920
  var value = Math.floor((Math.random() * 575535) + 1);
  var symbol;
  switch (true) {
    case (value <= 98990):
        symbol = "9";
        break;
    case (value > 98990 && value <= 177558):
        symbol = "10";
        break;
    case (value > 177558 && value <= 250494):
        symbol = "11";
        break;
    case (value > 250494 && value <= 319130):
        symbol = "12";
        break;
    case (value > 319130 && value <= 481490):
        symbol = "13";
        break;
    case (value > 481490 && value <= 439379):
        symbol = "14";
        break;
    case (value > 439379 && value <= 485326):
        symbol = "T";
        break;
    case (value > 485326 && value <= 521795):
        symbol = "S";
        break;
    case (value > 521795 && value <= 548665):
        symbol = "C";
        break;
    case (value > 548665 && value <= 575535):
        symbol = "B";
        break;
    default:
        break;
  }
  return symbol
}

function check_wins() {
  var a1 = document.getElementById("a1").value;
  var a2 = document.getElementById("a2").value;
  var a3 = document.getElementById("a3").value;
  var b1 = document.getElementById("b1").value;
  var b2 = document.getElementById("b2").value;
  var b3 = document.getElementById("b3").value;
  var c1 = document.getElementById("c1").value;
  var c2 = document.getElementById("c2").value;
  var c3 = document.getElementById("c3").value;
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  var d3 = document.getElementById("d3").value;
  var d1 = document.getElementById("d1").value;
  var d2 = document.getElementById("d2").value;
  var d3 = document.getElementById("d3").value;
  var e1 = document.getElementById("e1").value;
  var e2 = document.getElementById("e2").value;
  var e3 = document.getElementById("e3").value;

  // TODO extend win lines
  var win1symbol;
  var win2symbol;
  var win3symbol;
  var win4symbol;
  var win5symbol;
  var line1lenght = 0;
  var line2lenght = 0;
  var line3lenght = 0;
  var line4lenght = 0;
  var line5lenght = 0;

  // Line 1
  if (a1 == b1 && b1 == c1) {
    win1symbol = a1;
    if (c1 == d1 && d1 == e1) {
      line1lenght = 5;
    } else if (c1 == d1 && d1 != e1) {
      line1lenght = 4;
    } else {
      line1lenght = 3;
    }
  }

  // Line 2
  if (a2 == b2 && b2 == c2) {
    win2symbol = a2;
    if (c2 == d2 && d2 == e2) {
      line2lenght = 5;
    } else if (c2 == d2 && d2 != e2) {
      line2lenght = 4;
    } else {
      line2lenght = 3;
    }
  }

  // Line 3
  if (a3 == b3 && b3 == c3) {
    win3symbol = a3;
    if (c3 == d3 && d3 == e3) {
      line3lenght = 5;
    } else if (c3 == d3 && d3 != e3) {
      line3lenght = 4;
    } else {
      line3lenght = 3;
    }
  }

  // Line 4
  if (a1 == b2 && b2 == c3) {
    win4symbol = a1;
    if (c3 == d2 && d2 == e1) {
      line4lenght = 5;
    } else if (c3 == d2 && d2 != e1) {
      line4lenght = 4;
    } else {
      line4lenght = 3;
    }
  }

  // Line 5
  if (a3 == b2 && b2 == c1) {
    win5symbol = a3;
    if (c1 == d2 && d2 == e1) {
      line5lenght = 5;
    } else if (c1 == d2 && d2 != e1) {
      line5lenght = 4;
    } else {
      line5lenght = 3;
    }
  }

  var total_win = 0;

  if (line1lenght >= 3) {
    total_win = total_win + get_win(win1symbol, line1lenght);
  }

  if (line2lenght >= 3) {
    total_win = total_win + get_win(win2symbol, line2lenght);
  }

  if (line3lenght >= 3) {
    total_win = total_win + get_win(win3symbol, line3lenght);
  }

  if (line4lenght >= 3) {
    total_win = total_win + get_win(win4symbol, line4lenght);
  }

  if (line5lenght >= 3) {
    total_win = total_win + get_win(win5symbol, line5lenght);
  }

  add_credits(total_win);
  update_latest_win(total_win);
}

function get_win(symbol, line_len) {
  var betSize = document.getElementById("betSize").value;
  var win;
  switch (true) {
    case (symbol == "9" && line_len == 3):
        win = betSize * 0.5;
        break;
    case (symbol == "9" && line_len == 4):
        win = betSize * 1;
        break;
    case (symbol == "9" && line_len == 5):
        win = betSize * 1.5;
        break;
    case (symbol == "10" && line_len == 3):
        win = betSize * 2;
        break;
    case (symbol == "10" && line_len == 4):
        win = betSize * 2.5;
        break;
    case (symbol == "10" && line_len == 5):
        win = betSize * 3.5;
        break;
    case (symbol == "11" && line_len == 3):
        win = betSize * 2.5;
        break;
    case (symbol == "11" && line_len == 4):
        win = betSize * 3.5;
        break;
    case (symbol == "11" && line_len == 5):
        win = betSize * 5;
        break;
    case (symbol == "12" && line_len == 3):
        win = betSize * 3;
        break;
    case (symbol == "12" && line_len == 4):
        win = betSize * 4.5;
        break;
    case (symbol == "12" && line_len == 5):
        win = betSize * 6.5;
        break;
    case (symbol == "13" && line_len == 3):
        win = betSize * 4;
        break;
    case (symbol == "13" && line_len == 4):
        win = betSize * 6.5;
        break;
    case (symbol == "13" && line_len == 5):
        win = betSize * 10;
        break;
    case (symbol == "14" && line_len == 3):
        win = betSize * 5;
        break;
    case (symbol == "14" && line_len == 4):
        win = betSize * 8.5;
        break;
    case (symbol == "14" && line_len == 5):
        win = betSize * 15;
        break;
    case (symbol == "T" && line_len == 3):
        win = betSize * 10;
        break;
    case (symbol == "T" && line_len == 4):
        win = betSize * 20;
        break;
    case (symbol == "T" && line_len == 5):
        win = betSize * 50;
        break;
    case (symbol == "S" && line_len == 3):
        win = betSize * 20;
        break;
    case (symbol == "S" && line_len == 4):
        win = betSize * 50;
        break;
    case (symbol == "S" && line_len == 5):
        win = betSize * 150;
        break;
    case (symbol == "C" && line_len == 3):
        win = betSize * 50;
        break;
    case (symbol == "C" && line_len == 4):
        win = betSize * 180;
        break;
    case (symbol == "C" && line_len == 5):
        win = betSize * 700;
        break;
    default:
        win = 0;
        break;
  }
  return win;
}

function add_credits(win_amount) {
  var text = document.getElementById("balance").textContent;
  var balance = Number(text);
  balance = balance + win_amount;
  document.getElementById("balance").innerHTML = balance;
}

function remove_spin_credits() {
  var betSize = document.getElementById("betSize").value;
  var text = document.getElementById("balance").textContent;
  var balance = Number(text);
  balance = balance - betSize;
  document.getElementById("balance").innerHTML = balance.toString();
}

function update_latest_win(win) {
  document.getElementById("latestWin").innerHTML = win;
}

function activate_bonus() {
  return 1;
  // alert("BONUS ACTIVATED!");
}

function check_bonus(elements) {
    var i;
    var count = 0;
    for (i = 0; i < elements.length; i++) {
      if (document.getElementById(elements[i]).value == 'B') {
        count += 1;
      }
    }
    if (count == 3) {
      activate_bonus();
    }
}

function check_balance() {
  var text = document.getElementById("balance").textContent;
  var betSize = document.getElementById("betSize").value;
  var balance = Number(text);
  if (balance >= betSize) {
    return true;
  } else {
    return false;
  }
}
