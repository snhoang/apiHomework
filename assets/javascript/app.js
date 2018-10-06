var categories=["doge", "dance","mr robot", "star wars","snake", "porter robinson","edc","fixed gear", ];


   //button functions

    // function loadButtons(){
    //     $(".button-view").empty();
    //     for( var i =0; i < categories.length; i ++){
    //         var newButton = $("<button>");
    //         newButton.addClass("category btn btn-default");
    //         newButton.attr("data-name", categories[i]);
    //         newButton.text(categories[i]);
    //         $(".button-view").append(newButton);
    //     }
    // };

    // $("#add-category").on("click", function(event){
    //     e.preventDefault();
    //     var topic= $("#search-input").val().toLowerCase().trim();
    //     var queryURL = "";

    //     $.ajax({
    //         url:queryURL,
    //         method: "GET"
    //     }).then(function(response){
    //         if(response.data.length == 0){
    //             alert("No results found.");
    //         }
    //         else if(categories.indexOf(topic) != -1){
    //             alert("This topic already exists.")
    //         }
    //         else{
    //             categories.push(topic);
    //             loadButtons();
    //         }
    //     });
    // });

   function displayGIF(){
    //    var category = $(this).attr("data-name");
       var queryURL = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=Xh78ijfyRDmeQ9KYjKZqKOj0oQStEmRp";

       $.ajax({
           url: queryURL,
           method: "GET"
       }).then(function(response){
           console.log(response);
        //    $(".giphy-view").empty();
        //    for(var i = 0 ; i < response.data.lenght;i++){
        //        var gifDiv= $("<div>");
        //        gifDiv.addClas("gifDiv");
            

        //    }
       });
   };