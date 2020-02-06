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
  remove_spin_credits()
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
  var value = Math.floor((Math.random() * 587341) + 1);
  var symbol;
  switch (true) {
    case (value <= 101020):
        symbol = "9";
        break;
    case (value > 101020 && value <= 181200):
        symbol = "10";
        break;
    case (value > 181200 && value <= 255633):
        symbol = "11";
        break;
    case (value > 255633 && value <= 325677):
        symbol = "12";
        break;
    case (value > 325677 && value <= 389361):
        symbol = "13";
        break;
    case (value > 389361 && value <= 448393):
        symbol = "14";
        break;
    case (value > 448393 && value <= 495282):
        symbol = "T";
        break;
    case (value > 495282 && value <= 532499):
        symbol = "S";
        break;
    case (value > 532499 && value <= 559920):
        symbol = "C";
        break;
    case (value > 559920 && value <= 587341):
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
  var isWin = false;
  var winSymbol;

  if (a1 == b1 && b1 == c1) {
    isWin = true;
  }

  if (a2 == b2 && b2 == c2) {
    isWin = true;
  }

  if (a3 == b3 && b3 == c3) {
    isWin = true;
  }

  if (isWin == true) {
    get_win(winSymbol);
  } else {
    get_loss();
  }

}

function get_win(symbol) {
  // TODO different wins for different symbols
  var betSize = document.getElementById("betSize").value;
  var amount = 10;
  var win = amount * betSize;
  add_credits(win);
  update_latest_win(win);
}

function get_loss() {
  var win = 0;
  update_latest_win(win);
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
  alert("BONUS ACTIVATED!");
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
