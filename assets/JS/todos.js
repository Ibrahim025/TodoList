// check of specific todos by clicking
$(".todo-list").on("click", "li", function () {
    // // if li is gray
    // console.log($(this).css("color"));
    // if ($(this).css("color") === "rgb(128, 128, 128)") {
    //     // turn to black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"
    //     });
    // }
    // // else turn to grey
    // else {
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"
    //     });
    // }
    $(this).toggleClass("completed");

});

// click on X to delete todos
$(".todo-list").on("click", "span", function (e) {
    // alert("clicked on a span");
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

// input todos
$(".todo-input").keypress(function (event) {
    if (event.which === 13) {
        // grapping new todo from input
        var todoText = ($(this).val());
        $(this).val("");
        // create new li and add to ul
        $(".todo-list").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }

});

$(".fa-plus").click(function () {
    $(".todo-input").fadeToggle();
});