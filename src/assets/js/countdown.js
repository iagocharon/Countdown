function countdown() {
  var d = document.getElementsByClassName("days");

  var h = document.getElementsByClassName("hours");

  var m = document.getElementsByClassName("min");

  var s = document.getElementsByClassName("sec");

  var now = new Date().getTime();

  var bd = new Date(2023, 05, 24).getTime();

  var distance = bd - now;
  var days = Math.floor(distance / 86400000);
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (days < 10) {
    days = "0" + days;
  }

  var prev_sec = seconds;
  var prev_min = minutes;
  var prev_hour = hours;
  var prev_day = days;
  d[0].innerHTML = d[1].innerHTML = days;
  h[0].innerHTML = h[1].innerHTML = hours;
  m[0].innerHTML = m[1].innerHTML = minutes;
  s[0].innerHTML = s[1].innerHTML = seconds;

  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = bd - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / 86400000);
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (days < 10) {
      days = "0" + days;
    }

    d[0].innerHTML = d[1].innerHTML = days;
    h[0].innerHTML = h[1].innerHTML = hours;
    m[0].innerHTML = m[1].innerHTML = minutes;
    s[0].innerHTML = s[1].innerHTML = seconds;
    d[2].innerHTML = prev_day;
    h[2].innerHTML = prev_hour;
    m[2].innerHTML = prev_min;
    s[2].innerHTML = prev_sec;

    h[1].style.animation =
      prev_day / 10 != prev_day / 10
        ? "reflect 1s infinite"
        : "stay 1s infinite";
    h[1].style.animation =
      prev_hour / 10 != hours / 10 ? "reflect 1s infinite" : "stay 1s infinite";
    m[1].style.animation =
      prev_min / 10 != minutes / 10
        ? "reflect 1s infinite"
        : "stay 1s infinite";
    s[1].style.animation = "reflect 1s infinite";

    prev_sec = seconds;
    prev_min = minutes;
    prev_hour = hours;
    prev_day = days;
  }, 1000);
}
