$(document).on("click", ".submit_button", function(){
    $.ajax({
        type : "POST",
        url : "../apis/events/certificate.php",
        data : {
            id: localStorage.loginid,
            password: localStorage.password,
            winner: $("#winners").val().toString(),
            runner: $("#runners").val().toString()
        },
        success: function(data){
           alert(JSON.parse(data).message);
           window.location.assign("./admin_panel.html")
        },
        error: function(data){
            alert("failed to process request.");
        }
    });
});