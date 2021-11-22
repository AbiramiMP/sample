$(function() {  
    $( "#draggable" ).draggable();  
  }); 
$(function() {
    $("#firstname").blur(function(){
    let value=$("#firstname").val();
    if(value ===''){ $("#firstname").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#firstname").text("");
    }
})
});
$(function() {
    $("#password").blur(function(){
    let value=$("#password").val();
    if(value ===''){ $("#pwd").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#pwd").text("");
    }
})
}); 
$(function() {
    $("#blood").blur(function(){
    let value=$("#blood").val();
    if(value ===''){ $("#bg").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#bg").text("");
    }
})
});
$(function() {
    $("#email").blur(function(){
    let value=$("#email").val();
    if(value ===''){ $("#mail").text("* The field is required").css("color","red").css("font-weight","bold");}
    else{
        //$("#sname").val(value);
        $("#mail").text("");
    }
})
});
// $(function() {
//     $("#btn").blur(function(){
//     let value=$("#btn").val();
//     if(value ===''){ alert("Every field is required");}
//     else{
//         $(alert("Profile created successfully"));
//     }
// })
// });

    $(document).ready(function(){
        $('input').focus(function(){
            $(this).css('border','3px solid #23c0f5');
        })
      });
    
      $(document).ready(function(){
        $('input').blur(function(){
            $(this).css('border','none');
        })
      });

      $(document).ready(function () {
        $("#dob").blur(function () {
            var value = $("#dob").val();
            console.log(value);
            dob = new Date(value);
            console.log(dob);
      
            if (value === '') {
                $("#dob").focus();
            }
            else {
                var today = new Date();
                console.log(today);
                var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));
                //console.log(age);
                $("#age").val(age);
            }
        })
      });
      $(document).ready(function () {
        $("#email").blur(function(){
            var evalue = $("#email").val();
            console.log(evalue);
            var regex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            
            if(!regex.test(evalue)){
                $("#email").css('border','3px solid red');
        
            }
            else{
                $("#email").css('border','1px solid green');
            }
        })
        });
        function addressSame(){
            if(document.getElementById("same").checked){
                document.getElementById("secondaryaddress").value=
                document.getElementById("primaryaddress").value;
                document.getElementById("secondaryzip").value=
                document.getElementById("primaryzip").value;
        
            }else{
                document.getElementById("secondaryaddress").value="";
                document.getElementById("secondaryzip").value="";
            }
        }
        