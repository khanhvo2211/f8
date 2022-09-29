const Course = require("../models/Course");
class SiteController {
  index(req, res, next) {
    Course.find({})
      .then((course) => res.json(course))
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new SiteController();
