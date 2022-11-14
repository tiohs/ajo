export default class SiteController {
  static index(request, response) {
    response.render('index');
  }

  static about(request, response) {
    response.render('about');
  }

  static blog(request, response) {
    response.render('blog');
  }

  static contact(request, response) {
    response.render('contact');
  }

  static detail(request, response) {
    response.render('detail');
  }

  static premier(request, response) {
    response.render('premier');
  }

  static project(request, response) {
    response.render('project');
  }

  static voting(request, response) {
    response.render('votacao');
  }
}
