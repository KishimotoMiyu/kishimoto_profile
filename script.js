

const top_btn = document.getElementsById('top');
top_btn.addEventListerner(click , scroll_top);

function scroll_top(){
    window.scroll({top:0,behavior:'smooth'});
}

スクロールされたら表示
window.addEventListener("scroll", scroll_event);

    function scroll_event() {
    if (window.scrollYOffset > '100px') {
    top_btn.style.opacity = "1";
    } else if (window.scrollYOffset < '100px') {
    top_btn.style.opacity = "0";
    }
}


