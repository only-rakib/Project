function barBtnClick() {
  var x = screen.width; //Screen Width

  if (x >= 768) {
    $("#left_sidebar").toggleClass("d_show");
    $("#left_sidebar").toggleClass("overflow_control");
    $("#side_icon").toggleClass("fa-arrow-circle-left fa-arrow-circle-right");
    if ($("#left_sidebar").hasClass("d_show")) {
      //If showing leftbar
      $("#main_page").removeClass("col-md-8");
      $("#main_page").addClass("col-md-5");
    } else {
      $("#main_page").removeClass("col-md-5");
      $("#main_page").addClass("col-md-8");
    }
    $("#clsbtn").hide();
  } else {
    $("#clsbtn").show();
    $("#bar_btn").hide();
    $("#left_sidebar").toggleClass("d_show");
    $("#left_sidebar").toggleClass("overflow_control");
    $("#side_icon").toggleClass("fa-arrow-circle-down");
  }
}
/**Mobile view Close button click */
function closebtn() {
  $("#bar_btn").show();
  $("#left_sidebar").toggleClass("d_show");
  $("#left_sidebar").toggleClass("overflow_control");
  $("#side_icon").toggleClass("fa-arrow-circle-down");
}

if (screen.width < 768) {
  $("#left_sidebar").removeClass("d_show");
  $("#side_icon").removeClass("fa-arrow-circle-left fa-arrow-circle-right");
  $("#side_icon").addClass("fa-arrow-circle-down");
}

/**Change Leftside menu icons */
$(".list-group-item").on("click", function () {
  $(".icons", this).toggleClass("fa-chevron-right fa-chevron-down");
});


/**Show Json data */
data = `{"web-app": {
  "servlet": [   
    {
      "servlet-name": "cofaxCDS",
      "servlet-class": "org.cofax.cds.CDSServlet",
      "init-param": {
        "configGlossary:installationAt": "Philadelphia, PA",
        
        "dataStoreMaxConns": 100,
        "dataStoreConnUsageLimit": 100,
        "dataStoreLogLevel": "debug",
        "maxUrlLength": 500}},
    {
      "servlet-name": "cofaxEmail",
      "servlet-class": "org.cofax.cds.EmailServlet",
      "init-param": {
      "mailHost": "mail1",
      "mailHostOverride": "mail2"}},
    {
      "servlet-name": "cofaxAdmin",
      "servlet-class": "org.cofax.cds.AdminServlet"},
 
    {
      "servlet-name": "fileServlet",
      "servlet-class": "org.cofax.cds.FileServlet"},
    {
      "servlet-name": "cofaxTools",
      "servlet-class": "org.cofax.cms.CofaxToolsServlet",
      "init-param": {
        "templatePath": "toolstemplates/",
        "log": 1,
        "logLocation": "/usr/local/tomcat/logs/CofaxTools.log",
        "logMaxSize": "",
        "dataLog": 1,
        "dataLogLocation": "/usr/local/tomcat/logs/dataLog.log",
        "dataLogMaxSize": "",
        "removePageCache": "/content/admin/remove?cache=pages&id=",
        "removeTemplateCache": "/content/admin/remove?cache=templates&id=",
        "fileTransferFolder": "/usr/local/tomcat/webapps/content/fileTransferFolder",
        "lookInContext": 1,
        "adminGroupID": 4,
        "betaServer": true}}],
  "servlet-mapping": {
    "cofaxCDS": "/",
    "cofaxEmail": "/cofaxutil/aemail/*",
    "cofaxAdmin": "/admin/*",
    "fileServlet": "/static/*",
    "cofaxTools": "/tools/*"},
 
  "taglib": {
    "taglib-uri": "cofax.tld",
    "taglib-location": "/WEB-INF/tlds/cofax.tld"}}}`;

var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());
jsonViewer.showJSON(data, 1, 1);
//https://www.cssscript.com/minimal-json-data-formatter-jsonviewer/



/**Add css for margin left of the child list*/
var c = $(".list-group-root").find(".list-group").length;
var value=15;
var ss = ".list-group.list-group-root >";
for (i = 1; i <= c; i++) {
  ss += ".list-group >";
  value+=15;
  $("style").append(ss + ".list-group-item{padding-left:"+value.toString()+"px;}");

  console.log(ss + ".list-group-item");
}
