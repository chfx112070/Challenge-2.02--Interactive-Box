$(document).ready(function(){
    // Hide the box upon first loading the page
    $('#box').hide();

    // Toggle the box visibility alternatively with each button click
    $('#toggle-btn').click(function(){
        $('#box').toggle();
    });

    // When the box is clicked, animate its width
    $('#box').click(function(){
        $(this).animate({
            width: '+=50px' // Increase width by 50px
        }, 500); // Animation duration: 500 milliseconds
    });

    // When your name is clicked, change the background color of the box
    $('h2').click(function(){
        $('#box').css('background-color', '#ff9800');
    });

    // Reset the page to its default state
    $('#reset-btn').click(function(){
        $('#box').hide().css('background-color', '#00bcd4').width(200);
    });
});
