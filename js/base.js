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

if(screen.width<768)
{
    $("#left_sidebar").removeClass("d_show");
    $("#side_icon").removeClass("fa-arrow-circle-left fa-arrow-circle-right");
    $("#side_icon").addClass("fa-arrow-circle-down");
}