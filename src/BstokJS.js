function BstokJS() {
  this.members = new Array();
  this.speakers = new Array();
}
BstokJS.prototype.add_member = function(person) {
  this.members.push(person);
  if(person.speaker){
    this.speakers.push(person);
  }
};

BstokJS.prototype.run_stage = function(stage){
  this.speakers[stage].give_speech();
  for(var i = 0; i < this.members.length; i++){
    this.members[i].listen();
  }
}
