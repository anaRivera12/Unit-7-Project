$("img").hide();
let count = 0;
$(".answer2").click(function() {
    let second = $(".question2").val();
    let first = $(".question1").val();


    console.log(count);
    count = count + 1;
    $(".counter").text("You have taken this quiz " + count + " times.");
    if (first === "world" && second <= 15) {
        $(".statement").append("<p>" + "You chose to save the " + first + ", and it took you " + second + " seconds to decide so you must be the FLash (The hero we all need)." + "</p>");
        $(".img-1").show();
        $(".img-2").hide();
        $("img-3").hide();
        $(".img-4").hide();
        $(".img-5").hide();
        $(".img-6").hide();

    } else if (first === "friends" && second <= 15) {
        $(".statement").append("<p>" + "You chose to save your " + first + ", and it took you " + second + " seconds to decide so you must be Iris West Allen (Your friends are lucky to have you)" + "." + "</p>");
        $(".img-1").hide();
        $(".img-2").show();
        $(".img-3").hide();
        $(".img-4").hide();
        $(".img-5").hide();
        $(".img-6").hide();
    } else if (first === "yourself" && second <= 15) {
        $(".statement").append("<p>" + "You chose to save " + first + ", and it took you " + second + " seconds to decide so you must be Dr. Harrison Wells (Evil is powerless if the good are unafraid)" + "." + "</p>");
        $(".img-1").hide();
        $(".img-2").hide();
        $(".img-3").show();
        $(".img-4").hide();
        $(".img-5").hide();
        $(".img-6").hide();
    } else if (first === "world" && second > 15) {
        $(".statement").append("<p>" + "You chose to save the " + first + ", and it took you " + second + " seconds to decide so you must be a kid flash (We rise by lifting others)" + "." + "</p>");
        $(".img-1").hide();
        $(".img-2").hide();
        $(".img-3").hide();
        $(".img-4").show();
        $(".img-5").hide();
        $(".img-6").hide();
    } else if (first === "friends" && second > 15) {
        $(".statement").append("<p>" + "You chose to save your " + first + ", and it took you " + second + " seconds to decide so you must be a vibe (Sometimes the hardest thing and the right thing are the same)" + "." + "</p>");
        $(".img-1").hide();
        $(".img-2").hide();
        $(".img-3").hide();
        $(".img-4").hide();
        $(".img-5").show();
        $(".img-6").hide();
    } else if (first === "yourself" && second > 15) {
        $(".statement").append("<p>" + "You chose to save " + first + ", and it took you " + second + " seconds to decide so you must be a killer frost (Never be sorry for choosing yourself)" + "." + "</p>");
        $(".img-1").hide();
        $(".img-2").hide();
        $(".img-3").hide();
        $(".img-4").hide();
        $(".img-5").hide();
        $(".img-6").show();
    }


    console.log(first);
    console.log(second);


});