function collectedClmData(item) {
  var id = PropertiesService.getScriptProperties().getProperty("spId");
  var lock = LockService.getScriptLock();
  try{
    lock.waitLock(5000);
    var sheetsArray = SpreadsheetApp.openById(id).getSheets();
    var serial = "=row()-1"
    var user = Session.getActiveUser().getEmail();
    var myDate = Utilities.formatDate(new Date(),'Asia/Tokyo',"yyyy/MM/dd'T'HH:mm");
    var sheetDate = Utilities.formatDate(new Date(),'Asia/Tokyo',"yyyyMM")
    for (var i in sheetsArray){
      if(sheetDate == sheetsArray[i].getName()){
        sheetsArray[i].appendRow([serial,user,item,myDate]);
        break;
      }
    }
    lock.releaseLock();
    var data = sheetsArray[0].getDataRange().getValues();
    var json = JSON.stringify(data);
  }catch(e){
      return e;
  }
 return json
}

function returnData(){
 var id = PropertiesService.getScriptProperties().getProperty("spId");
 return JSON.stringify(SpreadsheetApp.openById(id).getSheetByName("集計").getDataRange().getValues());

}


