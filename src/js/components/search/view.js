import select from '../select/select';

var expandedDescriptions = {};
var view = function(ctrl) {
  return m('div.container-fluid', [
    m('div.row.row-nowrap',[
      m('form.controls', [
        m('div.column-header.controls-header',[
          m('h2', 'Search Criteria')
        ]),
        m('div.column-sub-header', [
          m('h6', '* hold ctrl for multiple selections')
        ]),
        m('div.form-group', [
          m('label', {for: 'companies'}, 'Select Companies'),
          m.component(select, {
            options: function() { return ctrl.companies.sort() },
            className: 'form-control',
            change: function(e) { ctrl.selectedCompanies($(e.target).val()) },
            idName: 'companies',
            multiple: true
          })
        ]),
        m('div.form-group', [
          m('label', {for: 'categories'}, 'Select Categories'),
          m.component(select, {
            options: function() { return ctrl.categories.sort() },
            className: 'form-control',
            change: function(e) { ctrl.selectedCategories($(e.target).val()) },
            idName: 'categories',
            multiple: true
          })
        ]),
        m('div.form-group', [
          m('label', {for: 'levels'}, 'Select Levels'),
          m.component(select, {
            options: function() { return ctrl.levels.sort() },
            className: 'form-control',
            change: function(e) { ctrl.selectedLevels($(e.target).val()) },
            idName: 'levels',
            multiple: true
          })
        ]),
        m('div.form-group', [
          m('label', {for: 'locations'}, 'Select Locations'),
          m.component(select, {
            options: function() { return ctrl.locations.sort() },
            className: 'form-control',
            change: function(e) { ctrl.selectedLocations($(e.target).val()) },
            idName: 'locations',
            multiple: true
          })
        ]),
        m('div.form-group', [
          m('div.checkbox', [
            m('input[type=checkbox]#flexible', {onclick: m.withAttr('checked', ctrl.flexible), checked: ctrl.flexible()}),
            m('label', {for: 'flexible'}, 'Include flexible location roles?'),
          ]),
        ]),
        m('div.btn.btn-primary#search-button', {onclick: function() { ctrl.search(); }}, 'Search')
      ]),
      m('div.results', [
        m('div.column-header.results-header',[
          m('h2', 'Search Results'),
          ctrl.jobs().length ? m('div.pagination', [
            ctrl.page() > 1 ? m('div.btn.btn-primary', {onclick: function() { ctrl.search(ctrl.page() - 1); }}, 'Previous Page') : '',
            'Page ' + ctrl.page(),
            m('div.btn.btn-primary', {onclick: function() { ctrl.search(ctrl.page() + 1); }}, 'Next Page'),
          ]) : '',
        ]),
        ctrl.jobs().map(function(job, index) {
          return m('div.job', [
            m('h3.name', [
              m('a', {href: job.link(), target: '_blank'}, job.name())
            ]),
            m('div.company', [
              m('strong', 'Company: '),
              job.company().name,
            ]),
            job.levels() && job.levels().length ? m('div.levels', [
              m('strong', 'Levels: '),
              job.levels().map(function(item, index) {
                return m('span', item.name + (index < job.levels().length - 1 ? ', ' : ''))
              })
            ]) : '',
            job.tags() && job.tags().length ? m('div.tags', [
              m('strong', 'Tags: '),
              job.tags().map(function(item, index) {
                return m('span', item.name + (index < job.tags().length - 1 ? ', ' : ''))
              })
            ]) : '',
            job.locations() && job.locations().length ? m('div.locations', [
              m('strong', 'Locations: '),
              job.locations().map(function(item, index) {
                return m('span', item.name + (index < job.locations().length - 1 ? ', ' : ''))
              })
            ]) : '',
            job.categories() && job.categories().length ? m('div.categories', [
              m('strong', 'Categories: '),
              job.categories().map(function(item, index) {
                return m('span', item.name + (index < job.categories().length - 1 ? ', ' : ''))
              })
            ]) : '',
            m('div.description',
              {
                className: expandedDescriptions[index] ? 'expanded' : '',
                onclick: function() {
                  expandedDescriptions[index] = !expandedDescriptions[index];
                }
              },
              m.trust(job.description()),
              [
                m('div.feather-bottom')
              ]
            ),
          ]);
        })
      ])
    ]),
    // search results
    // sort order
    // result list
    // pagination
  ])
}

export default view;