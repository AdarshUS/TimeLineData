var initialTime = 480;

var data = [{
start: 0,
duration: 15,
title: "Exercise"
}, {
start: 25,
duration: 30,
title: "Travel to work"
}, {
start: 30,
duration: 30,
title: "Plan day"
}, {
start: 60,
duration: 15,
title: "Review yesterday's commits"
}, {
start: 100,
duration: 15,
title: "Code review"
}, {
start: 180,
duration: 90,
title: "Have lunch with John"
}, {
start: 360,
duration: 30,
title: "Skype call"
}, {
start: 370,
duration: 45,
title: "Follow up with designer"
}, {
start: 400,
duration: 30,
title: "Push up branch"
}];

document.addEventListener("DOMContentLoaded", function() {
for (let i = 0; i < data.length; i++) {
var obj = data[i];
var startMinutes = initialTime + obj.start;
var endTime = startMinutes + obj.duration;
var duration = endTime - startMinutes;

var divElement = document.createElement("div");
divElement.style.width = "80%";
divElement.style.height = duration + "px"; 
divElement.style.background = "#d1e4fb";
divElement.style.fontSize="10px"
divElement.style.borderLeft="2px solid blue";
divElement.innerHTML = obj.title;
// divElement.style.margin="10px";
divElement.class='timeline_duration'

document.body.appendChild(divElement);
//  if(i!=0)
//   {
    var nextobj=data[i+1];
    var next_startMinutes = initialTime + nextobj.start;
    // var next_endTime =  next_startMinutes + nextobj.duration;

    var gap= next_startMinutes-endTime;
    var divGapElement = document.createElement("div");
    divGapElement.style.width = "80%";
    divGapElement.style.height = gap + "px"; 
    divGapElement.style.background = "#fff";
    document.body.appendChild(divGapElement);
//   }
}

});
