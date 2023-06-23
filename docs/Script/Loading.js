
$(window).on("load", function () {
   setTimeout(myfunction, 600);
});
function myfunction() {
   $(".loader-wrapper").fadeOut("slow");
}
