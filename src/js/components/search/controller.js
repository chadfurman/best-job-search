import data from "./data";
import jobModel from "../../models/job"

var Job = new jobModel();

var controller = function() {
  var ctrl = this;
  this.jobs = m.prop([]);
  this.selectedCompanies = m.prop([]);
  this.selectedCategories = m.prop([]);
  this.selectedLevels = m.prop([]);
  this.selectedLocations = m.prop([]);
  this.page = m.prop(1);
  this.descending = m.prop(false);
  this.flexible = m.prop(false);

  this.companies = data.companies;
  this.categories = data.categories;
  this.levels = data.levels;
  this.locations = data.locations;

  this.search = function (page) {
    if (page) { ctrl.page(page); }

    var options = {
      page: page ? page : 1,
      descending: ctrl.descending(),
      flexible: ctrl.flexible()
    };

    if (ctrl.selectedCompanies()) {
      options.company = ctrl.selectedCompanies();
    }

    if (ctrl.selectedCategories()) {
      options.category = ctrl.selectedCategories();
    }

    if (ctrl.selectedLevels()) {
      options.level = ctrl.selectedLevels();
    }

    if (ctrl.selectedLocations()) {
      options.location = ctrl.selectedLocations();
    }

    ctrl.jobs = jobModel.search(options);
  }
};

export default controller;
