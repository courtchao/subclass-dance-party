var makeFunkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer funkyDancer lineUp"></span>'); 
};

makeFunkyDancer.prototype = Object.create(makeDancer.prototype);

makeFunkyDancer.prototype.constructor = makeFunkyDancer;

makeFunkyDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);

  //this.$node.toggle();
};