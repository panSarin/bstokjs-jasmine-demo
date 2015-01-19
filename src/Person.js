function Person(name, speaker, beer){
  this.name = name;
  this.speaker = speaker || false;
  this.beer = beer || false;
}

Person.prototype.participate = function() {
  this.listen();
  this.grab_a_drink();
}

Person.prototype.give_speech = function() {
  this.speak();
  this.grab_a_drink();
}

Person.prototype.listen = function(){};
Person.prototype.speak = function(){};
Person.prototype.grab_a_drink = function(){
  if(this.beer) {
    this.grab_a_beer();
  }else{
    this.grab_a_soda();
  }
};

Person.prototype.grab_a_beer = function(){};
Person.prototype.grab_a_soda = function(){};
