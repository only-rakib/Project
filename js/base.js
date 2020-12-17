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
$("#accordion").on("hide.bs.collapse show.bs.collapse", (e) => {
  $(e.target).prev().find("i:last-child").toggleClass("fa-minus fa-plus");
  //https://codepen.io/tutsplus/pen/GPzbPX
});

$(".list-group-item").on("click", function () {
  $(".icons", this).toggleClass("fa-chevron-right fa-chevron-down");
});
//https://stackoverflow.com/questions/29063244/consistent-styling-for-nested-lists-with-bootstrap/33571268#33571268

data = `{
  "glossary": {
      "title": "example glossary",
      "GlossDiv": {
          "title": "S",
          "GlossList": {
              "GlossEntry": {
                  "ID": "SGML",
                  "SortAs": "SGML",
                  "GlossTerm": "Standard Generalized Markup Language",
                  "Acronym": "SGML",
                  "Abbrev": "ISO 8879:1986",
                  "GlossDef": {
                      "para": "A meta-markup language, used to create markup languages such as DocBook.",
                      "GlossSeeAlso": ["GML", "XML"]
                  },
                  "GlossSee": "markup"
              }
          }
      }
  }
}`;

var jsonViewer = new JSONViewer();
document.querySelector("#json").appendChild(jsonViewer.getContainer());
jsonViewer.showJSON(data, 1, 1);
//https://www.cssscript.com/minimal-json-data-formatter-jsonviewer/

var c = $(".list-group-root").find(".list-group").length;
var value=15;
var ss = ".list-group.list-group-root >";
for (i = 1; i <= c; i++) {
  ss += ".list-group >";
  value+=15;
  $("style").append(ss + ".list-group-item{padding-left:"+value.toString()+"px;}");

  console.log(ss + ".list-group-item");
}
