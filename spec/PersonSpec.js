describe('Person', function(){
  it('should call listen and grab_a_drink when participate called', function(){
    person = new Person('Adam')
    spyOn(person, 'listen')
    spyOn(person, 'grab_a_drink')
    spyOn(person, 'speak')
    person.participate();
    expect(person.listen).toHaveBeenCalled();
    expect(person.grab_a_drink).toHaveBeenCalled();
    expect(person.speak).not.toHaveBeenCalled();
  });

  it('should call speak and grab_a_drink when give_speech called', function(){
    person = new Person('Adam')
    spyOn(person, 'listen')
    spyOn(person, 'grab_a_drink')
    spyOn(person, 'speak')
    person.give_speech();
    expect(person.listen).not.toHaveBeenCalled();
    expect(person.grab_a_drink).toHaveBeenCalled();
    expect(person.speak).toHaveBeenCalled();
  });
});
