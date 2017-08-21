// Initialize Firebase
var config = {
  apiKey: "AIzaSyChol5_duh9C5pq7T0vky680zlFIFSWPTU",
  authDomain: "billapp-3f115.firebaseapp.com",
  databaseURL: "https://billapp-3f115.firebaseio.com",
  projectId: "billapp-3f115",
  storageBucket: "billapp-3f115.appspot.com",
  messagingSenderId: "493797939066"
};
firebase.initializeApp(config);
var database = firebase.database();


function unnamedFunc() {
  /*console.log(sessionStorage.womensrights);
  console.log(sessionStorage.lgbtrights);
  console.log(sessionStorage.environment);
  console.log(sessionStorage.raceethnic)*/

  var theCoolList = [];
  var bills = "Bills";
  database.ref(bills).once('value').then(function(snapshot){
    var allTheBills = snapshot.val();
    for (var bill in allTheBills) {
      var billInfo = allTheBills[bill];
      var summary = billInfo["summary"];
      var status = billInfo["status"];
      var tag = billInfo["tag"]
    //  console.log(sessionStorage.womensrights);
      //console.log(billInfo["tag"]);


      if ((sessionStorage.womensrights == "true") && (billInfo["tag"] == "women's rights")) {
        showSomeBills(bill, summary, status, tag);
      /*  document.write(bill + "<br>");
        document.write("Summary: \t" + summary + "<br>");
        // document.write("Tag: \t" + tag + "<br>"+ "<br>"+ "<br>");*/

      } else if ((sessionStorage.lgbtrights == "true") && (billInfo["tag"] == "LGBT rights")) {
        showSomeBills(bill, summary, status, tag);
        /*document.write(bill + "<br>");
        document.write("Summary: \t" + summary + "<br>");
        document.write("Tag: \t" + tag + "<br>"+ "<br>"+ "<br>");*/

      } else if ((sessionStorage.environment == "true") && (billInfo["tag"] == "environment")) {
        showSomeBills(bill, summary, status, tag);
      /*
        document.write(bill + "<br>");
        document.write("Summary: \t" + summary + "<br>");
        document.write("Tag: \t" + tag + "<br>"+ "<br>"+ "<br>");*/

      } else if ((sessionStorage.raceethnic == "true") && (billInfo["tag"] == "race and ethnic relations")) {
        showSomeBills(bill, summary, status, tag);
      /*  document.write(bill + "<br>");
        document.write("Summary: \t" + summary + "<br>");
        document.write("Tag: \t" + tag + "<br>"+ "<br>"+ "<br>");*/

      }
    }
    //console.log(theCoolList);
  //  document.getElementById("showmethebills").innerHTML = theCoolList;

  });

}
function  showSomeBills(bill, summary, status, tag){
  var theWholeBill = document.createElement("div")
   var billName = document.createElement("h4");
   var billSummary = document.createElement("p");
   var billStatus = document.createElement("p");
   var billTag = document.createElement("p");
  var everyBillDiv = document.getElementById("allOfTheBillsDiv");


    billName.innerHTML = bill;
    billSummary.innerHTML = summary;
    billStatus.innerHTML = "Status: " + status;
    billTag.innerHTML = "Tag: " + tag;

    theWholeBill.appendChild(billName);
    theWholeBill.appendChild(billSummary);
    theWholeBill.appendChild(billStatus);
    theWholeBill.appendChild(billTag);

 document.getElementById("allOfTheBillsDiv").appendChild(theWholeBill);
}
 function displayFilteredBills() {
  if (sessionStorage.womensrights == true) {
    //console.log("checked");
  }
  if (sessionStorage.lgbtrights == true) {
    //console.log("checked");
  }
  if (sessionStorage.environment == true) {
    //console.log("checked");
  }
  if (sessionStorage.raceethnic == true) {
    //console.log("checked");
  }
}
