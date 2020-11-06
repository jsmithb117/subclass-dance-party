$(document).ready(function() {

  window.dancers = [];
  var originalTops = [];
  var estimates = [];
  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');
    var dancerMakerFunction = window[dancerMakerFunctionName];

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    var distanceTo = function (topCur, topTo, leftCur, leftTo) {
      topCur = Number(topCur.toString().slice(0, topCur.length-2));
      topTo = Number(topTo.toString().slice(0, topTo.length-2));
      leftCur = Number(leftCur.toString().slice(0, leftCur.length-2));
      leftTo = Number(leftTo.toString().slice(0, leftTo.length-2));
      var a = Math.abs(topCur - topTo);
      var b = Math.abs(leftCur - leftTo);
      // return Math.sqrt((a ** 2) + (b ** 2));
    };

    $('body').append(dancer.$node[0]);
    window.dancers.push(dancer.$node[0]);
    for (let i = 0; i < window.dancers.length; i++ ){
      var topCur = window.dancers[window.dancers.length - 1].style.top;
      var leftCur = window.dancers[window.dancers.length - 1].style.left;

      var topTo = window.dancers[i].style.top;

      var leftTo = window.dancers[i].style.left;

      var distance = distanceTo(topCur, topTo, leftCur, leftTo);
    }
  });

  $('.lineUp').click(function() {
    for (var i = 0; i < window.dancers.length; i++) {
      originalTops.push(window.dancers[i].style.top);
      window.dancers[i].style.top = '50%';
    }
  });

  $('.backToOG').click(function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].style.top = originalTops[i];
    }
  });


});

