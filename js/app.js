$(document).foundation()

/*
function addValuesToDetails() {
  this
}
*/

/** buildColorDiv
  *   args:color
  *   returns: the div as a string
  */
var buildColorDiv = function(color) {
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
  };

/* An object is essentially a collection of properties
  ex. obj.propName
  var n = 7; var s = "hello"; var a = []; var f = function() {};
  */

  /*
  var davey = {
    'firstName': 'Davey', //property name is a string
    'lastName': 'Strus'
  };

  To retrieve values:
  davey['firstName']

  To modify values:
  davey['lastName'] = 'Jones'
  */

/**  buildList
  *   args: firstName, age, hairColorDiv, birthplace
  */
var buildList = function(listValues) {
  var dl = document.createElement('dl');
  dl.style.border = '1px solid red';
  dl.innerHTML = buildListItem('First Name', listValues.firstName) +
  buildListItem('Hair Color', listValues.hairColor) +
  buildListItem('Age', listValues.age) +
  buildListItem('Birthplace', listValues.birthplace);

  return dl;

  /*
  return ' \
  <dl> \
    ' + buildListItem('First Name', listValues.firstName) + '\
    ' + buildListItem('Hair Color', listValues.hairColor) + '\
    ' + buildListItem('Age', listValues.age) + '\
    ' + buildListItem('Birthplace', listValues.birthplace) + '\
  </dl>';*/

};

var buildListItem = function(term, definition) {
  var li = ' \
  <li> \
    <dt>'+ term +'</dt> \
    <dd>' + definition + '</dd> \
  </li>';
  return li;
}

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('div.details');
  var hairColor = this.hairColor.value;
  var listValues = {
      firstName: this.firstName.value,
      age: this.age.value,
      birthplace: this.birthplace.value,
      hairColor: buildColorDiv(hairColor)
    };

    //var firstName = this.firstName.value;
    //var age = this.age.value;
    //var birthplace = this.birthplace.value;
    //var colorDiv = buildColorDiv(hairColor);

    //details.innerHTML += buildList(listValues);
details.appendChild(buildList(listValues));
    /*
    details.innerHTML += ' \
    <dl> \
    <dt>First Name</dt>\
    <dd>' + firstName  + '<dd> \
      \
    <dt>Hair Color</dt> \
      <dd>' + colorDiv  + '</dd> \
      \
    <dt>Age</dt> \
      <dd>' + age + '</dd> \
      \
    <dt>Birthplace</dt> \
    <dd>' + birthplace + '</dd> \
      \
    </dl>'; */
  };


var myForm = document.querySelector('form');
myForm.onsubmit = addValuesToDetails;
