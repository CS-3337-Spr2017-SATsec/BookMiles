// class Calendar takes care of storing the calendar internally in module Controller

function Calendar() {
  this.id = 0;
  this.events = [];

  var month_end = [];
  month_end[0] = -1;
  month_end[1] = 31;
  month_end[2] = 28;
  month_end[3] = 31;
  month_end[4] = 30;
  month_end[5] = 31;

  var month = 1; // starts in february
  var day = 23;  // starts on Feb 23rd 

  for (var i=0; i<17; i++) {
    this.events.push({
      id: this.id,
      title: "BIOL1010 Lab Meeting",
      text: "Intro to Biology Laboratory",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T15:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T17:00:00"
    });
    this.id++;
    this.events.push({
      id: this.id,
      title: "BIOL1010 Class Meeting",
      text: "Intro to Biology Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T18:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T19:00:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    this.events.push({
      id: this.id,
      title: "CS3035 Class Meeting",
      text: "Programming Paradigms Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T08:50:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T10:50:00"
    });
    this.id++;
    this.events.push({
      id: this.id,
      title: "CS3186 Class Meeting",
      text: "Intro to Automata Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T18:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T19:15:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    this.events.push({
      id: this.id,
      title: "BIOL1010 Class Meeting",
      text: "Intro to Biology Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T18:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T19:00:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    this.events.push({
      id: this.id,
      title: "CS3035 Class Meeting",
      text: "Programming Paradigms Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T08:50:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T10:50:00"
    });
    this.id++;
    this.events.push({
      id: this.id,
      title: "CS3186 Class Meeting",
      text: "Intro to Automata Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T18:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T19:15:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    this.events.push({
      id: this.id,
      title: "CS3801 Class Meeting",
      text: "Ethical Issues in Computing Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T16:00:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T20:00:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    this.events.push({
      id: this.id,
      title: "CS3337 Class Meeting",
      text: "Software Engineering Lecture",
      start: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T11:30:00",
      end: "2017-0" + month + "-" + (day < 10 ? "0" + day : day) + "T15:40:00"
    });
    this.id++;
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
    day++;
    if (day > month_end[month]) {
      month++;
      day = 1;
    }
  }
}

Calendar.prototype.addEvent = function(title, text, start, end) {
  this.events.push({
    id: this.id,
    title: title,
    text: text,
    start: start,
    end: end
  })
  this.id++;
}

Calendar.prototype.getEvent = function(date) {
  return null;
}
