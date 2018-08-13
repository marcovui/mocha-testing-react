import assert from 'assert';

describe('Object Test', () => {
  it('should have property name', () => {
    var car = {name:'Figo', Maker:'Ford'}

    car.should.have.property('name');
  });

  it('should have property name with value Figo', () => {
    var car = {name:'Figo', Maker:'Ford'}
    car.should.have.property('name').equal('Figo');
  });

  it('should compare objects', () => {
    var car = {name:'Figo', Maker:'Ford'}
    var car1 = {name:'Figo', Maker:'Ford'}

    // car.should.equal(car1);
    car.should.deep.equal(car1);
  });

  /*
  it('handling null', () => {
    var car = null;
    //car.should.not.exist;
    //should.exist(car);
  });
  */
});