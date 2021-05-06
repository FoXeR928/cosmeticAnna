$(function(){
    $('.form__button').click(function(evt){
        evt.preventDefault();
        var name=$('input[name="name"]').val();
        var number=$('input[name="number"]').val();
        var about=$('textarea[name="about"]').val();
        if (name.length>0 && number.length>0 && about.length>0){
            $('.dialog-conteiner').show()
            $('.dialog-askbutton').click(function(){
                $('.dialog-conteiner').hide()
            })
        } 
    });
});