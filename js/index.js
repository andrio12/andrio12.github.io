var myViewModel = function() {

  self = this;

  //drop down listinn
  self.availableFields = ko.observableArray([
  	"Instructions",
  	"Multiple Choice Question",
  	"Text Field Question"
  ]);
  self.selectedField = ko.observable("Multiple Choice Question");

  //create the selected field
  self.newField = ko.observable("");

  self.addField = function() {
  	self.questions.push(self.selectedField() + "ViewModel")
  };

  //customize new field 
  self.question = ko.observable("");
  self.questions = ko.observableArray([]);

  self.addQuestion = function() {
  	self.questions.push(self.question());
  }.bind(self);

};

var InstructionsViewModel = function() {
	var self = this;
	self.instructions = ko.observable("");
	console.log("hallo");
};





$(document).ready(function() {
  ko.applyBindings(new myViewModel);
});
