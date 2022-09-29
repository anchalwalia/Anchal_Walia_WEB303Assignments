// WEB303 Assignment 2
// Anchal Walia
//ID: 0799722

$(function(){

    let contentElement = $('#content');

    function loadContent(event) {
        

        let loadFrom = event.target.id + '.html';

        const xhr = new XMLHttpRequest();

        xhr.open('GET', loadFrom, true);

        xhr.onload = function(){
            
            contentElement.html(this.responseText);
            contentElement.fadeIn();
        }

        xhr.send();

    }
    $('#prospect').click((event)=>{
        contentElement.fadeOut(800, ()=> {
            loadContent(event);
        });
    });
    $('#convert').click((event)=>{
        contentElement.fadeOut(800, ()=> {
            loadContent(event);
        });
    });
    $('#retain').click((event)=>{
        contentElement.fadeOut(800, ()=> {
            loadContent(event);
        });
    });
    
});