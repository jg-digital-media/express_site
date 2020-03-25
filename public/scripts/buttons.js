/* function buttonState(){
    $("input").each(function(){
        //$('#name_btn').attr('disabled', 'disabled');
        
        if($(this).val() != "" ) {
            $('#name_btn').attr('disabled', 'disabled');
        } else {
            $('#name_btn').attr('disabled', '');

        }
    })
}

$(function(){
    //$('#name_btn').attr('disabled', 'disabled');
    
    $("input").change(buttonState);
})
 */

/* $("#name_input").change(function(){   
    $("#name_input").attr('disabled', !this.checked)
}); */

//toggle on basis of empty text
$(document).ready(function() {
    
    $('#name_btn').prop('disabled', true);

    $('#name_input').keyup(function() {
       if($(this).val() != '') {
          $('#name_btn').prop('disabled', false);
       } else {
        $('#name_btn').prop('disabled', true);
       }
    });
});