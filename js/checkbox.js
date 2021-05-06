$(function(){
    $('input[class="women"]').click(function(){
        if( $(this).is(':checked')){
            $('.-men').show();
        }
        else{
            $('.-men').hide();
        }
    });
    $('input[class="men"]').click(function(){
        if( $(this).is(':checked')){
            $('.-women').show();
        }
        else{
            $('.-women').hide();
            
        }
    });
});