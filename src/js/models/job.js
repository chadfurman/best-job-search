import config from "../config";

var Job = function(data) {
  if (!data) { data = {}; }
  this.description = m.prop(data.description);
  this.name = m.prop(data.name);
  this.company = m.prop(data.company);
  this.levels = m.prop(data.levels);
  this.tags = m.prop(data.tags);
  this.locations = m.prop(data.locations);
  this.categories = m.prop(data.categories);
  this.publicationDate = m.prop(data.publicationDate);
  this.link = m.prop(data.link);
}

Job.search = function(options) {
    if (!options) {
      options = {page: 1}
    }

    if (!options.page) {
      options.page = 1;
    }

    options.apiKey = config.apiKey;
    return m.request({method: "GET", url: config.apiUrl + "/jobs?" + m.route.buildQueryString(options)})
      .then(function(data) {
        var resultList = [],
            result = null;

        for (var i = 0; i < data.results.length; i++) {
          result = data.results[i];
          resultList.push(new Job({
            description: result.contents,
            name: result.name,
            company: result.company,
            levels: result.levels,
            tags: result.tags,
            locations: result.locations,
            categories: result.categories,
            publicationDate: result.publication_date,
            link: result.refs && result.refs.landing_page
          }));
        }

        return resultList;
      });
  }

export default Job;
