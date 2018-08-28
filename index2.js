// poster frame click event
$(document).on('click','.js-videoPoster',function(ev) {
  ev.preventDefault();
  var $poster = $(this);
  var $wrapper = $poster.closest('.js-videoWrapper');
  videoPlay($wrapper);
});

// play the targeted video (and hide the poster frame)
function videoPlay($wrapper) {
  var $iframe = $wrapper.find('.js-videoIframe');
  var src = $iframe.data('src');
  // hide poster
  $wrapper.addClass('videoWrapperActive');
  // add iframe src in, starting the video
  $iframe.attr('src',src);
}

// stop the targeted/all videos (and re-instate the poster frames)
function videoStop($wrapper) {
  // if we're stopping all videos on page
  if (!$wrapper) {
    var $wrapper = $('.js-videoWrapper');
    var $iframe = $('.js-videoIframe');
  // if we're stopping a particular video
  } else {
    var $iframe = $wrapper.find('.js-videoIframe');
  }
  // reveal poster
  $wrapper.removeClass('videoWrapperActive');
  // remove youtube link, stopping the video from playing in the background
  $iframe.attr('src','');
}

function welcome(){
  document.write("Welcome!".fontsize(10).italics().bold().fontcolor("#99827d") + "</p>");
}

var person;
function getName() {
  person = prompt("Lets get some information about you before we start!", "Please enter your name");
}

function displayMessage() {
  document.write("Hello ".fontsize(6).fontcolor("#99827d").italics() + person.fontsize(6).fontcolor("#99827d").italics() + "! It is nice to meet you!".fontsize(6).fontcolor("#99827d").italics() + "</p>");
}

function getData(){
  var data = 'test';
  document.write("Here is your data: " + data + "</p>");
}

const toMoney = (x) => {
  return "$"+x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function getMajor(fileID) {
  var xhttp = new XMLHttpRequest();
  var strOut = "";
  var j = 1;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
    {
      var lines = this.responseText.split("\n");
      var strOut = "<ul>";
      for ( i = 0; i < lines.length; i++)
      {
        var field = lines[i].split(",");
        strOut += field;
        strOut += "</a></li>";
      }
      strOut += "</ul>";
      strOut = strOut.split(","); //BEST LINE IN THE CODE
      for ( i = 8; i < strOut.length; i++)
      {
        if(strOut[i+3]=='*'){
        if(document.getElementById("major"+j) != null && document.getElementById("major"+j) != undefined)
          {
          document.getElementById("major"+j).innerHTML = strOut[i];
          j++;
          }
        }
      }
    }
  };
  xhttp.open("GET", fileID, true);
  xhttp.send();
}

function getMinor(fileID,x) {
  var xhttp = new XMLHttpRequest();
  var strOut = "";
  var j = 1;
  var countstart = 0;
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200)
    {
      var lines = this.responseText.split("\n");
      var strOut = "<ul>";
      for ( i = 0; i < lines.length; i++)
      {
        var field = lines[i].split(",");
        strOut += field;
        strOut += "</a></li>";
      }
      strOut += "</ul>";
      strOut = strOut.split(","); //BEST LINE IN THE CODE
      for ( i = 8; i < strOut.length; i++)
      {
        if(strOut[i+3]=='*' && countstart != x){
          countstart++;
        }
        else {
          break;
        }
      }
      i = i + 3;
      for(i; strOut[i+7] != '*'; i = i + 4)
      {
        if(document.getElementById("minor"+j) != null && document.getElementById("minor"+j) != undefined)
          {
          document.getElementById("minor"+j).innerHTML = strOut[i];
          j++;
          }
      }
      document.getElementById("minor"+j).innerHTML = strOut[i];

    }
  };
  xhttp.open("GET", fileID, true);
  xhttp.send();
}
