$(document).ready(function() {
  window.dancers = [];
  var originalTops = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node[0]);
    window.dancers.push(dancer.$node[0]);
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