var myViewModel = function() {

  self = this;

  self.personName = ko.observable('Andri');
  self.personAge = ko.observable(33);

  // This observable array initially contains three objects
  self.anotherObservableArray = ko.observableArray([
    { name: "Bungle", type: "Bear" },
    { name: "George", type: "Hippo" },
    { name: "Zippy", type: "Unknown" }
  ]);

  self.people = ko.observableArray([
    { name: 'Franklin', credits: 250 },
    { name: 'Mario', credits: 5800 }
  ]);

  self.seasons = ko.observableArray([
    { name: 'Spring', months: [ 'March', 'April', 'May' ] },
    { name: 'Summer', months: [ 'June', 'July', 'August' ] },
    { name: 'Autumn', months: [ 'September', 'October', 'November' ] },
    { name: 'Winter', months: [ 'December', 'January', 'February' ] }
  ]);

};

$(document).ready(function() {
  ko.applyBindings(new myViewModel);
});
