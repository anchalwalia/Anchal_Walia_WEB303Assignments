$(function(){
    for(let i = 1; i <= 5; i++){
        $(`#a-label-${i}`).click((e)=>{
            const target = $(e.target);
            const nextP =  $(target[0].nextElementSibling);

            target.addClass('active');
            nextP.slideDown().addClass('active');

            $('.accord-label').each((index, element)=>{
                if(element != e.target){
                    $(element).removeClass("active");
                    $($(element)[0].nextElementSibling).slideUp();
                }
            });
        });
    }

    $('.tab-head').click((e) => {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass("active");

        $('.tab-panel').each((index, element) =>{
            if(e.target.id[9] == index+1){
                $(element).show().addClass('active');
            } else {
                $(element).hide().removeClass('active');
            }
        });
    });

    $('.tab2-head').click((e) => {
        $(e.target).addClass('active');
        $(e.target).siblings().removeClass("active");

        $('.tab2-panel').each((index, element) =>{
            if(e.target.id[10] == index+1){
                $(element).show().addClass('active');
            } else {
                $(element).hide().removeClass('active');
            }
        });
    });
});