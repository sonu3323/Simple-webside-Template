$(document).ready(function () {
   
    $("#section-4").hide()
    //Gallery HIdden code
    $('#button-3').click(function(){
    

        $('#section-4').fadeToggle('slow');
    }).css({"padding":"5px","color":"green","margin-bottom":"40px"})

    console.log("hey i using jquery")

    // Footer
    $('#footer').click(function(){

        $(this).css({"background-image": "linear-gradient(to top, #a3bded 0%, #6991c7 100%)"}).classToogle("")
    })

    $("#twitter").mouseenter(function(){

        $("#footer").css({"background-image":"linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)","cursor":"pointer"})
    })


    $("#facebook").mouseenter(function(){

        $("#footer").css({"background-image":"linear-gradient(to top, #ff0844 0%, #ffb199 100%)"})
    })

    $("#instagram").mouseenter(function(){

        $("#footer").css({"background-image":"linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)"})
    })
    $("#whatsapp").mouseenter(function(){

        $("#footer").css({"background-image":"linear-gradient(to top, #e8198b 0%, #c7eafd 100%)"})
    })


});





