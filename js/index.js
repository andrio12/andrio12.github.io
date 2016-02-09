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
};

$(document).ready(function() {
  ko.applyBindings(new myViewModel);
});
