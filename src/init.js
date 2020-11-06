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
    console.log (dancer.$node[0].style.top)
    window.dancers.push(dancer.$node[0]);
  });

  $('.lineUp').click(function() {
    for (var i = 0; i < window.dancers.length; i++) {
      console.log (window.dancers[i].style.top)
      originalTops.push(window.dancers[i].style.top);
      window.dancers[i].style.top = '50%';
      console.log (window.dancers[i].style.top)

    }
  });

  $('.backToOG').click(function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i].style.top = originalTops[i];
    }
  });
});