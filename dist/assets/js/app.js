(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _search = require('./components/search/search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//initialize the application
m.mount(document.body, { controller: _search2.default.controller, view: _search2.default.view });

},{"./components/search/search":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _data = require("./data");

var _data2 = _interopRequireDefault(_data);

var _job = require("../../models/job");

var _job2 = _interopRequireDefault(_job);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Job = new _job2.default();

var controller = function controller() {
  var ctrl = this;
  this.jobs = m.prop([]);
  this.selectedCompanies = m.prop([]);
  this.selectedCategories = m.prop([]);
  this.selectedLevels = m.prop([]);
  this.selectedLocations = m.prop([]);
  this.page = m.prop(1);
  this.descending = m.prop(false);
  this.flexible = m.prop(false);

  this.companies = _data2.default.companies;
  this.categories = _data2.default.categories;
  this.levels = _data2.default.levels;
  this.locations = _data2.default.locations;

  this.search = function (page) {
    if (page) {
      ctrl.page(page);
    }

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

    ctrl.jobs = _job2.default.search(options);
  };
};

exports.default = controller;

},{"../../models/job":8,"./data":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'companies': ['Sailthru', 'Grasshopper', 'Outbrain', 'CrowdTwist', 'When I Work', 'Ogilvy', 'Odyssey', 'charity: water', 'GA Communication Group', 'Bridgespan', 'TYRA Beauty', 'Gannett', 'Birchbox', 'Airbnb', 'Lincoln Center', 'Kiva', 'Mashable', 'NPR', 'Sephora', 'Heartland Alliance', 'Goodwill', 'Bluewolf', 'HomeAway', 'Warby Parker', 'Pinterest', 'GapTech', 'Artsicle', 'Levatas', 'Uber', 'TomTom', 'StellaService', 'Flickr', 'OptionsCity', 'StackCommerce', 'Tasting Table', 'Handy', 'Yext', 'Method', 'Department of Labor', 'Opower', 'NFL', 'ClaimTrak', 'Twitch', 'SXSW', 'Continuum Analytics', 'ScaleFactor', 'Lithium', 'SoFi', 'ZestFinance', 'Zoosk', 'Dormify', 'WeWork', 'World Wildlife Fund', 'Teach For America', 'Dyn', 'EF Education First', 'Oprah Winfrey Network', 'Sears Holdings', 'Chicago Cubs', 'Encyclopædia Britannica', 'Fortegra', 'Intelligentsia Coffee &amp; Tea', 'Goose Island Brewery', 'Bright Pink', 'Pabst Brewing Company', 'Pinsight Media+', 'GEICO', 'TED', 'Zappos', 'Venture For America', 'Bookspan', 'Nextdoor', 'Freshbooks', '\'wichcraft', 'AlphaSights', 'Call Box (formerly Century Interactive)', 'Bonobos', 'CarMax', 'CourseHorse', 'Recombine', 'Deloitte', 'mywedding.com', 'DogVacay', 'Slack', 'VMware', 'Prezi', 'Rubicon Project', 'Black Mountain Systems', 'Squarespace', 'Contently', 'Akilah Group', 'GLG', 'The Nerdery', 'San Francisco Chronicle', 'Screen Pilot', 'Bitly', 'Braintree', 'Cortina Productions', 'GrubHub', 'Distractify', 'Networked Insights', 'Genesys', 'Reebok', 'Factual', 'Codeup', 'Dolby', 'Bounce Exchange', 'Upwork', 'Cardlytics', 'Spherical', 'Symphony', 'Tresta', 'Radius', 'Plated', 'Axial', 'Grafik', 'Sir Kensington\'s', 'Marriott International', 'MM.LaFleur', 'Rambler On', 'RideScout', 'Schoology', 'Skout', 'AddThis', 'Taboola', 'Balsam Brands', 'Aviary', 'The Muse', 'TravelClick', 'MailChimp', 'Eventbrite', 'AppNexus', 'Hypertherm', 'Omnigon', 'Nestio', 'VideoBlocks', 'IEX Group', 'mobileforming', 'Placemeter', 'Devmountain', 'GoHealth', 'SmartBear', 'Medallia', 'TripleLift', 'Dow Jones', 'Gravity', 'Take-Two Interactive Software', 'Hometeam', 'Cloudera', 'Spanx', 'Hudl', 'Citizen Schools', 'eMarketer', 'The Wall Street Journal', 'Shutterstock', 'Mohawk Industries', 'Core Digital Media', 'Good Apple Digital', 'PivotDesk', 'Brightbox', 'ThoughtWorks', 'Tile', 'Funding Circle', 'Dextro', 'Stack Overflow', 'DigitalOcean', 'HBO', 'One Month', 'InMobi', 'NextCapital', 'GlobalGiving', 'Bloomberg', 'Cornerstone OnDemand', 'MD Insider', 'MediaRadar', 'Payscape', 'Fiverr', 'Stylight', 'Gigwalk', 'RepEquity', 'Rocket Games', 'L2', 'The New York Foundling', 'HZDG', 'Knot Standard', 'Imagitas', 'Pactiv', 'Blinds.com', 'Response Mine', 'Engine Room Technology', 'Ultimate Software', 'Magoosh', 'Progressive Insurance', 'Corvirtus', 'AOL', 'Credit Karma', 'Huge', 'Spiceworks', 'Rocksauce', 'Horizon Group USA', 'FTD Companies', 'Goodwin Procter', 'Yodle', 'Treasure Data', 'Ditto', 'Insight Consulting Group', 'Farmigo', 'Owens &amp; Minor', 'Alphaserve Technologies', 'CEB', 'Framebridge', 'Ninthlink', 'Karma', 'KPMG', 'Tilt', 'Double Robotics', 'Relias Learning', 'Red Ventures', 'iProspect', 'HotelTonight', 'Waypoint Homes', 'Fetch Robotics', 'Quantcast', 'Outdoor Voices', 'AbelsonTaylor', 'PureWow', 'Inspirato', 'Clarabridge', 'Rover', 'CloudPassage', 'Peanut Labs', 'Oak Mortgage', 'Penske Motor Group', 'Jumpcut Studios', 'OutboundEngine', 'CARFAX', 'King Arthur Flour', 'TNTP', 'LiveRamp', 'HomeAdvisor', 'Twilio', 'Work Better', 'Wellness Connection of Maine', 'Euclid Analytics', 'Fashion GPS', 'Autodesk', 'Spencer Stuart', 'HealthcareSource', 'JAMF Software', 'Bai Brands', 'Hillary for America', 'Good Sports', 'Dex Media', 'Thoughtspot', 'Bizzabo', 'Moz', 'Belly', 'Ebates', 'Circa Healthcare', 'Smashbox Cosmetics', 'Rain Bird', 'Gap Inc.', 'Veeva', 'RevZilla', 'Appian', 'Imgur', 'Persado', 'App Annie', 'CarGurus', 'Cleveland Research Company', 'Amazing.com', 'M Financial Group', 'TrackMaven', 'Canvas', 'YES Prep', 'Trustwave', 'The Broad Residency in Urban Education', 'Ironhack', 'Society for the Promotion of Japanese Animation', 'BetterCloud', 'NeueHouse', 'City of Houston', 'Lending Club', 'W by Worth', 'Guggenheim Partners', 'MakerSquare', 'HelloSign', 'Vynamic', 'Esri', 'PulsePoint', '1871', 'JINX', 'Target', 'SendGrid', 'Swirl', 'Anne Lewis Strategies', 'Broadridge', 'JDI', 'Affect', 'CA Technologies', 'Counsyl', 'Client Resources, Inc.', 'Lytx', 'Hearst Media Services', 'Understory Weather', 'BuildSavings', 'Influenster', 'Expedite Financial', 'Work Market', 'SmartBrief', 'Banfield Pet Hospital', 'Plum Organics', 'Tapingo', 'Grindr', 'Ascendum', 'Perfect Sense', 'Conversant', 'Redfin', 'LegalZoom', 'The Trium Group', 'LivePerson', 'Betterment', 'Magnetic', 'Education Pioneers', 'iMedicare', 'Shopify', 'iCIMS', 'Financial Finesse', 'Redbubble', 'TubeMogul', 'Venmo', 'Scribd', 'Curacao', 'Livefyre', 'The Honest Company', 'TripAdvisor', 'Trumaker', 'Entrepreneurs\' Organization', 'Signpost', 'Pep', 'Andela', 'Phase One', 'Polaris', 'Thumbtack', 'Virool', 'Gallup', 'Main Street Hub', 'Peloton Cycle', 'OwnLocal', 'DX Marketing', 'the Washington Redskins', 'OpenMarket', 'Frontline Technologies', 'Datadog', 'Remix', 'ProQuest', 'Comcast', 'DataSift', 'Allstate', 'LISI', 'Armani', 'Asana', 'Skillshare', 'Atlassian', 'CommonBond', 'ContextMedia', 'LRN', 'McKinsey', 'Kasasa', 'FiscalNote', 'Elevation Church', 'Nordson', 'Yello', 'Dia&amp;Co', 'REVOLT', 'Austin Film Festival', 'Phoenix Energy', 'Spredfast', 'Pocket Gems', 'POLITICO', 'General Assembly', 'Riviera', 'Ziprealty', 'Insikt', 'Arrow Electronics', 'Triose', 'Jive', 'Southern Management Corporation', '8020 Consulting', 'VigLink', 'DMC Atlanta', 'AppFolio', 'Return Path', 'Goosehead Insurance', 'Prosper Marketplace', 'Bozzuto', 'priceline.com', 'The Avenue West', 'Dun &amp; Bradstreet', 'Lever', 'Discovery', 'Facebook', 'Wallaby Financial', 'Maven Wave', 'Voxy', 'W4', 'Quintiles', 'Dropbox', 'Simplicity Consulting', 'Daon', 'Chartbeat', 'City of Hope', 'Fueled', 'Condé Nast', 'Owens Corning', 'MuleSoft', 'Duarte', 'Galileo', 'Roblox'],
  'categories': ['Account Management', 'Business &amp; Strategy', 'Creative &amp; Design', 'Customer Service', 'Data Science', 'Editorial', 'Education', 'Engineering', 'Finance &amp; Data', 'Fundraising &amp; Development', 'Healthcare &amp; Medicine', 'HR &amp; Recruiting', 'Legal', 'Marketing &amp; PR', 'Operations', 'Project &amp; Product Management', 'Retail', 'Sales', 'Social Media &amp; Community'],
  'levels': ['Internship', 'Entry Level', 'Mid Level', 'Senior Level'],
  'locations': ['Accra, GH', 'Accra, Ghana', 'A Coruna, Spain', 'Albany, NY', 'Albuquerque, NM', 'Alexandria, LA', 'Alexandria, VA', 'Allentown, PA', 'Almaty, Kazakhstan', 'Amherst, MA', 'Amsterdam, Netherlands', 'Ankara, Turkey', 'Ann Arbor, MI', 'Asheville, NC', 'Astana, Kazakhstan', 'Athens, GR', 'Athens, Greece', 'Atlanta, GA', 'Atlantic City, NJ', 'Atyrau, Kazakhstan', 'Auckland, New Zealand', 'Auckland, NZ', 'Augusta, GA', 'Austin, TX', 'Bakersfield, CA', 'Baltimore, MD', 'Bangalore, India', 'Bangkok, Thailand', 'Barcelona, Spain', 'Basking Ridge, NJ', 'Beaver Creek, CO', 'Beaverton, MI', 'Bedminster, NJ', 'Beijing, China', 'Bellingham, WA', 'Bend, OR', 'Berlin, Germany', 'Billings, MT', 'Biloxi, MS', 'Birmingham, AL', 'Birmingham, MI', 'Bismarck, ND', 'Bloomington, IL', 'Bogota, Colombia', 'Boise, ID', 'Bologna, Italy', 'Bonita Springs, FL', 'Bordeaux, France', 'Bossier City, LA', 'Boston Metro Area', 'Boulder, CO', 'Bozeman, MT', 'Branchburg, NJ', 'Brewer, ME', 'Bridgeport, CT', 'Brighton, UK', 'Brisbane, Australia', 'Bristol, TN', 'Bristol, UK', 'Brussels, Belgium', 'Bucharest, Romania', 'Budapest, HU', 'Budapest, Hungary', 'Buenos Aires, Argentina', 'Buffalo, NY', 'Burlington, MA', 'Burlington, VT', 'Bursa, Turkey', 'Busan, South Korea', 'Calhoun, GA', 'Canberra, Australia', 'Center Valley, PA', 'Chandigarh, India', 'Charleston, SC', 'Charleston, WV', 'Charlotte, NC', 'Charlottesville, VA', 'Chengdu, China', 'Chennai, India', 'Chevy Chase, MD', 'Chicago, IL', 'Chongqing, China', 'Cincinnati, OH', 'Cleveland, OH', 'Coffeyville, KS', 'College Station, TX', 'Colorado Springs, CO', 'Columbia, MO', 'Columbia, SC', 'Columbus, GA', 'Columbus, OH', 'Copenhagen, Denmark', 'Cork, Ireland', 'Corpus Christi, TX', 'Dallas/Ft. Worth, TX', 'Dalton, GA', 'Daytona Beach, FL', 'Denver, CO', 'Des Moines, IA', 'Detroit, MI', 'Dodge City, KS', 'Dreieich, Germany', 'Dubai, UAE', 'Dublin, IE', 'Dublin, Ireland', 'Duluth, MN', 'Durham, NC', 'Dusseldorf, Germany', 'East Stroudsburg, PA', 'Eau Claire, WI', 'El Paso, TX', 'Eugene, OR', 'Fayetteville, AR', 'Flexible / Remote', 'Florence, Italy', 'Fort Collins, CO', 'Fort Wayne, IN', 'Fort Worth, TX', 'Frankfurt, Germany', 'Fresno, CA', 'Ft. Myers, FL', 'Fukuoka, Japan', 'Galway, Ireland', 'Glasgow, SCT', 'Golden, CO', 'Grand Rapids, MI', 'Greenville, SC', 'Guangzhou, China', 'Guragon, India', 'Hamburg, Germany', 'Hamilton, Bermuda', 'Hamilton, NJ', 'Hangzhou, China', 'Hanoi, Vietnam', 'Hanover, NH', 'Harker Heights, TX', 'Harrisburg, PA', 'Hartford, CT', 'Helena, MT', 'Helsinki, Finland', 'Hermosillo, Mexico', 'Hingham, MA', 'Ho Chi Minh City, Vietnam', 'Hong Kong', 'Honolulu, HI', 'Houston, TX', 'Huntsville, AL', 'Hunt Valley, MD', 'Hyderabad, India', 'Indianapolis, IN', 'International', 'Istanbul, Turkey', 'Jackson, MS', 'Jacksonville, FL', 'Jakarta, Indonesia', 'Johannesburg, South Africa', 'Johnstown, PA', 'Joplin, MO', 'Kampala, UG', 'Kansas City, KS', 'Kansas City, MO', 'Kazan, Russia', 'Kiev, Ukraine', 'Kitchener, Canada', 'Knoxville, TN', 'Kyoto, Japan', 'Lafayette, LA', 'Lagos, Nigeria', 'Lancaster, PA', 'Landover, MD', 'Las Vegas, NV', 'Lausanne, CH', 'Lebanon, NH', 'Lexington, KY', 'Lille, France', 'Lilongwe, MW', 'Lima, OH', 'Lima, Peru', 'Lincoln, NE', 'Little Rock, AR', 'London, UK', 'Long Island, NY', 'Los Angeles, CA', 'Louisville, KY', 'Luxembourg City, Luxembourg', 'Lyon, France', 'Macau, China', 'Macon, GA', 'Madison, WI', 'Madrid, ES', 'Madrid, Spain', 'Malaga, Spain', 'Manchester, NH', 'Manhattan, NY', 'Manila, Philippines', 'Marseille, France', 'McAllen, TX', 'Medford, OR', 'Melbourne, AU', 'Melbourne, Australia', 'Memphis,TN', 'Mendoza, Argentina', 'Mexico City, Mexico', 'Miami, FL', 'Milan, Italy', 'Milton, DE', 'Milwaukee, WI', 'Minneapolis, MN', 'Mobile, AL', 'Monterrey, Mexico', 'Montgomery, AL', 'Montreal, Canada', 'Moscow, Russia', 'Mountain Home, AR', 'Mountain Side, NJ', 'Mt. Vernon, WA', 'Multiple', 'Mumbai, India', 'Munich, DE', 'Munich, Germany', 'Myrtle Beach, SC', 'Nagoya, Japan', 'Nairobi, Kenya', 'Nanjing, China', 'Naples, Italy', 'Nashua, NH', 'Nashville, TN', 'Netanya, Israel', 'Newark, DE', 'New Berlin, WI', 'Newcastle, Australia', 'New Delhi, India', 'New Haven, CT', 'New Orleans, LA', 'New York City Metro Area', 'Nogales, Mexico', 'Norwalk, CT', 'Norwich, VT', 'Novosibirsk, Russia', 'Odessa, Ukraine', 'Oklahoma City, OK', 'Olympia, WA', 'Omaha, NE', 'Orange County, CA', 'Orlando, FL', 'Osaka, Japan', 'Oslo, Norway', 'Ostrava, Czech Republic', 'Ottawa, Canada', 'Oxford, UK', 'Oxnard, CA', 'Padua, Italy', 'Palm Bay, FL', 'Palm Beach, FL', 'Palm Springs, CA', 'Panama City, FL', 'Paris, FR', 'Paris, France', 'Parkersburg, WV', 'Pasadena, CA', 'Pensacola, FL', 'Peoria, IL', 'Perth, Australia', 'Philadelphia, PA', 'Phoenix, AZ', 'Piscataway, NJ', 'Pittsburgh, PA', 'Plano, TX', 'Plattsburgh, NY', 'Portland, ME', 'Portland, OR', 'Porto Alegre, Brazil', 'Prague, Czech Republic', 'Princeton, NJ', 'Providence, RI', 'Provo, UT', 'Queens, NY', 'Quito, Ecuador', 'Ra\'anana, Israel', 'Raleigh, NC', 'Reading, UK', 'Regina, Canada', 'Reno, NV', 'Richmond, VA', 'Riga, Latvia', 'Rio de Janeiro, Brazil', 'Roanoke, VA', 'Rochester, NY', 'Rome, Italy', 'Sacramento Metro Area', 'Saint John, Canada', 'Saint Louis, MO', 'Salt Lake City, UT', 'San Antonio Metro Area', 'San Diego, CA', 'San Francisco Bay Area', 'San Jose, CA', 'Santa Barbara, CA', 'Santa Cruz, CA', 'Santiago, Chile', 'Sao Paolo, BR', 'Sao Paolo, Brazil', 'Sapporo, Japan', 'Savannah, GA', 'Scottsdale, AZ', 'Seattle, WA', 'Secaucus, NJ', 'Seoul, Korea', 'Seville, ES', 'Shanghai, China', 'Shenzhen, China', 'Short Hills, NJ', 'Shreveport, LA', 'Silicon Valley, CA', 'Singapore', 'Spokane, WA', 'Springfield, IL', 'Stockholm, Sweden', 'St. Petersburg, Russia', 'Sugar Valley, GA', 'Surabaya, Indonesia', 'Sydney, AU', 'Sydney, Australia', 'Syracuse, NY', 'Tahoe City, CA', 'Taipei, Taiwan', 'Taizhou, China', 'Tallahassee, FL', 'Tallinn, Estonia', 'Tampa, FL', 'Tel Aviv, Israel', 'Tijuana, Mexico', 'Tokyo, Japan', 'Toledo, OH', 'Topeka, KS', 'Toronto, CA', 'Toronto, Canada', 'Traverse City, MI', 'Tucson, AZ', 'Tulsa, OK', 'Valencia, Spain', 'Valletta, Malta', 'Vancouver, Canada', 'Venice, Italy', 'Vienna, Austria', 'Villahermosa, Mexico', 'Virginia Beach, VA', 'Warsaw, Poland', 'Washington DC Metro Area', 'Waterloo, Canada', 'Wellington, NZ', 'Westlake Village, CA', 'Westport, CT', 'Wilmington, DE', 'Winnipeg, Canada', 'Wuhan, China', 'Wuxi, China', 'Wyomissing, PA', 'Xi\'an, China', 'Zurich, Switzerland']
};

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _view = require("./view");

var _view2 = _interopRequireDefault(_view);

var _controller = require("./controller");

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var search = {
  controller: _controller2.default,
  view: _view2.default
};

exports.default = search;

},{"./controller":2,"./view":5}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _select = require('../select/select');

var _select2 = _interopRequireDefault(_select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expandedDescriptions = {};
var view = function view(ctrl) {
  return m('div.container-fluid', [m('div.row.row-nowrap', [m('form.controls', [m('div.column-header.controls-header', [m('h2', 'Search Criteria')]), m('div.column-sub-header', [m('h6', '* hold ctrl for multiple selections')]), m('div.form-group', [m('label', { for: 'companies' }, 'Select Companies'), m.component(_select2.default, {
    options: function options() {
      return ctrl.companies.sort();
    },
    className: 'form-control',
    change: function change(e) {
      ctrl.selectedCompanies($(e.target).val());
    },
    idName: 'companies',
    multiple: true
  })]), m('div.form-group', [m('label', { for: 'categories' }, 'Select Categories'), m.component(_select2.default, {
    options: function options() {
      return ctrl.categories.sort();
    },
    className: 'form-control',
    change: function change(e) {
      ctrl.selectedCategories($(e.target).val());
    },
    idName: 'categories',
    multiple: true
  })]), m('div.form-group', [m('label', { for: 'levels' }, 'Select Levels'), m.component(_select2.default, {
    options: function options() {
      return ctrl.levels.sort();
    },
    className: 'form-control',
    change: function change(e) {
      ctrl.selectedLevels($(e.target).val());
    },
    idName: 'levels',
    multiple: true
  })]), m('div.form-group', [m('label', { for: 'locations' }, 'Select Locations'), m.component(_select2.default, {
    options: function options() {
      return ctrl.locations.sort();
    },
    className: 'form-control',
    change: function change(e) {
      ctrl.selectedLocations($(e.target).val());
    },
    idName: 'locations',
    multiple: true
  })]), m('div.form-group', [m('div.checkbox', [m('input[type=checkbox]#flexible', { onclick: m.withAttr('checked', ctrl.flexible), checked: ctrl.flexible() }), m('label', { for: 'flexible' }, 'Include flexible location roles?')])]), m('div.btn.btn-primary#search-button', { onclick: function onclick() {
      ctrl.search();
    } }, 'Search')]), m('div.results', [m('div.column-header.results-header', [m('h2', 'Search Results'), ctrl.jobs().length ? m('div.pagination', [ctrl.page() > 1 ? m('div.btn.btn-primary', { onclick: function onclick() {
      ctrl.search(ctrl.page() - 1);
    } }, 'Previous Page') : '', 'Page ' + ctrl.page(), m('div.btn.btn-primary', { onclick: function onclick() {
      ctrl.search(ctrl.page() + 1);
    } }, 'Next Page')]) : '']), ctrl.jobs().map(function (job, index) {
    return m('div.job', [m('h3.name', [m('a', { href: job.link(), target: '_blank' }, job.name())]), m('div.company', [m('strong', 'Company: '), job.company().name]), job.levels() && job.levels().length ? m('div.levels', [m('strong', 'Levels: '), job.levels().map(function (item, index) {
      return m('span', item.name + (index < job.levels().length - 1 ? ', ' : ''));
    })]) : '', job.tags() && job.tags().length ? m('div.tags', [m('strong', 'Tags: '), job.tags().map(function (item, index) {
      return m('span', item.name + (index < job.tags().length - 1 ? ', ' : ''));
    })]) : '', job.locations() && job.locations().length ? m('div.locations', [m('strong', 'Locations: '), job.locations().map(function (item, index) {
      return m('span', item.name + (index < job.locations().length - 1 ? ', ' : ''));
    })]) : '', job.categories() && job.categories().length ? m('div.categories', [m('strong', 'Categories: '), job.categories().map(function (item, index) {
      return m('span', item.name + (index < job.categories().length - 1 ? ', ' : ''));
    })]) : '', m('div.description', {
      className: expandedDescriptions[index] ? 'expanded' : '',
      onclick: function onclick() {
        expandedDescriptions[index] = !expandedDescriptions[index];
      }
    }, m.trust(job.description()), [m('div.feather-bottom')])]);
  })])])]);
};

// search results
// sort order
// result list
// pagination
exports.default = view;

},{"../select/select":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var Select = {
  //controller
  controller: function controller(args, extras) {
    return {
      options: args.options,
      select: args.change,
      className: args.className,
      id: args.idName,
      multiple: args.multiple
    };
  },
  //view
  view: function view(ctrl) {
    var opts = {
      onchange: ctrl.select
    };

    if (ctrl.className) {
      opts.className = ctrl.className;
    }

    if (ctrl.id) {
      opts.id = ctrl.id;
    }

    if (ctrl.multiple) {
      opts.multiple = true;
    }

    return m("select", opts, ctrl.options().map(function (option) {
      return m("option", { value: m.trust(option) }, m.trust(option));
    }));
  }
};

exports.default = Select;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  apiKey: 'b828f9895de16b5a0de2347e854008ac48a8398d8365c898c0b109a4c71bd99b',
  apiUrl: 'https://api-v2.themuse.com'
};

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _config = require("../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Job = function Job(data) {
  if (!data) {
    data = {};
  }
  this.description = m.prop(data.description);
  this.name = m.prop(data.name);
  this.company = m.prop(data.company);
  this.levels = m.prop(data.levels);
  this.tags = m.prop(data.tags);
  this.locations = m.prop(data.locations);
  this.categories = m.prop(data.categories);
  this.publicationDate = m.prop(data.publicationDate);
  this.link = m.prop(data.link);
};

Job.search = function (options) {
  if (!options) {
    options = { page: 1 };
  }

  if (!options.page) {
    options.page = 1;
  }

  options.apiKey = _config2.default.apiKey;
  return m.request({ method: "GET", url: _config2.default.apiUrl + "/jobs?" + m.route.buildQueryString(options) }).then(function (data) {
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
};

exports.default = Job;

},{"../config":7}]},{},[1])


//# sourceMappingURL=app.js.map
