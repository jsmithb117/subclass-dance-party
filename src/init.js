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
    dancer.distances ={};
    dancer.index = window.dancers.length;
    dancer.top = dancer['$node'][0].style.top;
    dancer.left = dancer['$node'][0].style.left;
    var distanceTo = function (topCur, topTo, leftCur, leftTo) {
      var a = Math.abs(topCur - topTo);
      var b = Math.abs(leftCur - leftTo);
      return Math.sqrt((Math.pow(a, 2)) + (Math.pow(b, 2)));
    };
    for (let i = 0; i < window.dancers.length; i++ ){
      var topCur = Number(dancer['$node'][0].style.top.slice(0, -2));
      var leftCur = Number(dancer['$node'][0].style.left.slice(0, -2));
      var topTo = Number(window.dancers[i]['$node'][0].style.top.slice(0, -2));
      var leftTo = Number(window.dancers[i]['$node'][0].style.left.slice(0, -2));
      var distance = distanceTo(topCur, topTo, leftCur, leftTo);
      dancer.distances[i] = distance;
      window.dancers[i]['distances'][dancer.index] = distance;
    }

    $('body').append(dancer.$node[0]);
    window.dancers.push(dancer);
  });

  $('.lineUp').click(function() {
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i]['$node'][0].style.top = '50%';
    }
  });

  $('.backToOG').click(function() {
    for (let i = 0; i < window.dancers.length; i++) {
      window.dancers[i]['$node'][0].style.top = window.dancers[i].top;
    }
  });

  $('.pythagGroup').click(function() {
    var classes = ['wicked', 'weird'];

    for (var i = 0; i < window.dancers.length; i++) {
      var currentNode = window.dancers[i];
      var currentNodeDistances = currentNode.distances;
      var randomClass = classes[Math.floor(Math.random() * classes.length)];
      if (!currentNode.modified) {
        currentNode['$node'][0].classList.value = randomClass;
      }
      for (var node in currentNodeDistances) {
        var distance = currentNodeDistances[node];
        if (distance <= 200) {
          if (!window.dancers[Number(node)].modified) {
            window.dancers[Number(node)]['$node'][0].classList.value = randomClass;
            window.dancers[Number(node)].modified = true;
          }
        }
      }
    }
  });
});

//uncomment line 22 and use Math.pow so pomander doesn't complain.

//move window.dancers iteration before push and append
//add 'distances' property of dancer
//set 'index' property of dancer to window.dancers.length

//currently, the push command pushes only the node, change it to add the entire dancer object
//within iteration, set distance property to current node
//within iteration, set distance property in node being iterated
//adjust references when creating topCur, leftCur, topTo, leftTo variables to reference the new data structure in the window.dancers array

//set top and left properties of each node just after it's created
//adjust lineUp method to reference new data structure
//adjust backToOG method to reference new data structure


// {
//   "$node":{
//     "0":{},
//     "length":1
//   },
//   "distances":{
//     "0":227.46568358302338,
//     "1":149.7277884195182,
//     "3":565.9814798736794
//   },
//     "index":2,
//     "top":"443.001px",
//     "left":"235.046px",
//     "modified": false
// }
