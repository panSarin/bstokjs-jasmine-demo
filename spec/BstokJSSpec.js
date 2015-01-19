describe('BstokJS', function() {
  var bstok_js;
  beforeEach(function(){
    bstok_js = new BstokJS();
  });

  it('should be possible to add new member', function(){
    var member = new Person('Adam');
    bstok_js.add_member(member);
    expect(bstok_js.members[0]).toEqual(member);
  });

  it('should be possible to add new member as a speaker', function(){
    var member = new Person('Adam', true);
    bstok_js.add_member(member);
    expect(bstok_js.speakers[0]).toEqual(member);
  });

  it('should be possible to add few members', function(){
    var member1 = new Person('Adam');
    var member2 = new Person('Joe Doe');
    bstok_js.add_member(member1);
    bstok_js.add_member(member2);
    expect(bstok_js.members.length).toEqual(2);
  });

  it('should call give_speech on speakers assigned to current stage during run_stage', function(){
    var member1 = new Person('Adam', true);
    var member2 = new Person('Joe Doe', true);
    bstok_js.add_member(member1);
    bstok_js.add_member(member2);
    spyOn(member1, 'give_speech');
    spyOn(member2, 'give_speech');
    bstok_js.run_stage(0);
    expect(member1.give_speech).toHaveBeenCalled();
    expect(member2.give_speech).not.toHaveBeenCalled();
  });

});


