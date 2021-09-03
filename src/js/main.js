//here will by JavaScript code ...
$(".more").toggle(function(){
    $(this).text("less..").siblings(".complete").show();    
}, function(){
    $(this).text("read more..").siblings(".complete").hide();    
});