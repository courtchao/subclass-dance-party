var makeBoogieDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer boogieDancer"></span>'); 
};

makeBoogieDancer.prototype = Object.create(makeDancer.prototype);

makeBoogieDancer.prototype.constructor = makeBoogieDancer;

makeBoogieDancer.prototype.step = function(timeBetweenSteps) {
  makeDancer.prototype.step.call(this, timeBetweenSteps);
};


