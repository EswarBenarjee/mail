// Tab-Pane change function
function tabChange() {
    var tabs = $('.nav-tabs > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    next.tab('show');
}

$('.tab-pane').hover(function() {
    clearInterval(tabCycle);
}, function() {
    tabCycle = setInterval(tabChange, 5000);
});

// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000)
    
// Tab click event handler
$(function(){
    $('.nav-tabs a').click(function(e) {
        e.preventDefault();
        clearInterval(tabCycle);
        $(this).tab('show')
        tabCycle = setInterval(tabChange, 5000);
    });
});

// Mail Bodies
let mail_bodies = document.getElementsByClassName('mail-body');
for (let index = 0; index < mail_bodies.length; index++) {
    mail_body = mail_bodies[index];
    content = mail_body.innerHTML;
    short_content = "";
    for (let i = 0; i < 80; i++) {
        short_content += content[i];
    }
    short_content += ' ...';
    mail_body.innerHTML = short_content;
}

let mails = document.getElementsByClassName('mail');
for (let index = 0; index < mails.length; index++) {
    let mail = mails[index];
    mail.addEventListener('click', () => {
        mail.classList.toggle('active');
    });
}