// check off specific todos by clicking
// $("li").click(function(){
//     $(this).toggleClass("completed");

// });

// click on x to delete todo
// $("span").click(function(){
//     // remove parent element since span is nested in li
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove(); 
//         // to preserve sequence use call back function
//     });
//     // bubble event: click on span inside li triggers li (parent event above)
//     event.stopPropagation();
// });

// you can only run 'on' (for future use) on elements that exists when this code is run the first time/ page is open for first time
$("ul").on("click","li",function(){
    $(this).toggleClass("completed");

});

$("ul").on("click","span",function(){
    // remove parent element since span is nested in li
    $(this).parent().fadeOut(500,function(){
        $(this).remove(); 
        // to preserve sequence use call back function
    });
    // bubble event: click on span inside li triggers li (parent event above)
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var todoText = $(this).val();
        // clear input box after enter his hit
        $(this).val("");
        // create a new li and add to ul
        // append method takes a string of html and adds it to elements
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> "+todoText+"</li>");
    
    }; 


});

$("#in").click(function(){
    $("input[type='text']").fadeToggle();
})