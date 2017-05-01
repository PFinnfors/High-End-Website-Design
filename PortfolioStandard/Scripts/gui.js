//When document has loaded
$(document).ready(function () {
    //Auto hide info1, info2 and infoHead2 on page load
    $("#info1").toggle();
    $("#info2").toggle();
    $("#infoHead2").toggle();

    //Display logic for expandable text
    $("#infoHead1").click(function () {
        $("#info1").toggle(800, "swing");
        $("#infoHead2").toggle(1400, "swing");
        $("#info2").hide();
    });

    $("#infoHead2").click(function () {
        $("#info2").toggle(800, "swing");
    });

    //Fades and hides Eye icon
    $("#eyeIcon").delay("slow").fadeOut(2000);


    // SCROLL TO-TOP BUTTON
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        $(body).scrollTop();
        //document.body.scrollTop = 0; // For Chrome, Safari and Opera 
        //document.documentElement.scrollTop = 0; // For IE and Firefox
    }
});