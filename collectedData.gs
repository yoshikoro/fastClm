function collectedClmData(item) {
  var id = PropertiesService.getScriptProperties().getProperty("spId");
  var lock = LockService.getScriptLock();
  try{
    lock.waitLock(5000);
    var sheetsArray = SpreadsheetApp.openById(id).getSheets();
    var serial = 0
    var user = Session.getActiveUser().getEmail();
    var item = ""
    var myDate = Utilities.formatDate(new Date(),'Asia/Tokyo',"yyyy/MM/dd'T'HH:mm");
    var sheetDate = Utilities.formatDate(new Date(),'Asia/Tokyo',"yyyyMM")
    for (var i in sheetsArray){
      if(sheetDate == sheetsArray[i].getName()){
        sheetsArray[i].appendRow([serial,user,item,myDate]);
      }
    }
    lock.releaseLock();
  }catch(e){
      Browser.msgBox(e);
  }
}

