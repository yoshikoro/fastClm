function doGet(e) {
  var html = HtmlService.createTemplateFromFile("appsLocal/src/aktpj/index").evaluate();
  return html;
  }

