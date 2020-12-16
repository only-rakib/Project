function barBtnClick() {
  var x = screen.width; //Screen Width
  if(x>=768)
  {
    $("#left_sidebar").toggleClass("d_show");
    $("#left_sidebar").toggleClass("overflow_control");
    if ($("#left_sidebar").hasClass("d_show")) {
      //If showing leftbar
      $("#main_page").removeClass("col-md-9");
      $("#main_page").addClass("col-md-6");
      
    } else {
      $("#main_page").removeClass("col-md-6");
      $("#main_page").addClass("col-md-9");
    }
  }
  
}
