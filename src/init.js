$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancerMakerFunctionName');
    // console.log(dancerMakerFunctionName);
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // console.log(window)
    // console.log (window[dancerMakerFunctionName])

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node[0]);
  });
});