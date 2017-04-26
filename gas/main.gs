function doGet(e) {
  var html = HtmlService.createTemplateFromFile("htmlFiles/index").evaluate();
  return html;
  }

