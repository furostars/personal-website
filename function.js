document.addEventListener("DOMContentLoaded", function(){
    var http = new XMLHttpRequest();
    
    //Florence Search Button

    var submitButton = document.getElementById("submitButton");
    //Event listener for the submit button click
    submitButton.addEventListener("click", function() {
        var searchTextbox = document.getElementById("searchTextbox");
        //Get the textbox's text and create a custom search url from it
        var searchTerm = searchTextbox.value;
        var urlString = "https://furostars.github.io/personal-website/" + searchTerm + ".html"; 
        window.open(urlString,"_self");


    });

    //I'm Feeling Lucky Button

    var submitButton = document.getElementById("submitButton2");
    //Event listener for the submit button click
    submitButton.addEventListener("click", function() {
        //Adds random string to url when clicked Im Feeling Lucky
        var myArray = ['about', 'images', 'contact', 'resume' ];
        var rand = Math.floor(Math.random() * myArray.length);

        var urlString = "https://furostars.github.io/personal-website/" + myArray[rand] + ".html"; 
        window.open(urlString,"_self");


    });



})

