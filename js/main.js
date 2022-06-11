$(document).ready(function() {
    $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    var listHeightArr = [];
    $('#showListType li').each(function(){
        listHeightArr.push($('#'+$(this).data().id).offset().top);
    })
    $('#typeMenu').click(function(e){
        e.stopPropagation();
        $('#showListType').toggleClass('showListType');
    })
    $('#showListType li').click(function(e) {
        e.stopPropagation();
        var activeLi = $(this);
        $body.animate({scrollTop: $('#'+$(this).data().id).offset().top}, 500, "linear", function(){
            $('#showListType li').removeClass('active');
            activeLi.addClass('active');
        });
        return false;
    })
    $('body').click(function() {
        $('#showListType').removeClass('showListType');
    })
    $(document).scroll(function() {
        var scroH = $(document).scrollTop();
        var listLength = listHeightArr.length;
        var index = listLength-1;//原本的index
        while(listHeightArr[index] > scroH) {
            listHeightArr[index + 1] = listHeightArr[index];
            index--;
        }
        listHeightArr[++index] = scroH;
        listHeightArr.splice(index, 1);
        $('#showListType li').removeClass('active');
        if(index > 0){
            $('#showListType li').eq(index-1).addClass('active');
        } else {
            $('#showListType li').eq(index).addClass('active');
        }
    })
    
    // set background image
    var now = new Date();
    var bgArr = ['img/bg0.jpg', 'img/bg1.jpg', 'img/bg2.jpg', 'img/bg0.jpg', 'img/bg1.jpg', 'img/bg2.jpg', 'img/bg0.jpg'];
    $('#banner-bg').attr('src', bgArr[now.getDay()]);

    // set words
    var pArr = ['到了熟透的年龄，即使在群众的怀抱中，你都可能觉得寂寞无比。', 
        '只要活在世上，就免不了会遇上分离。', 
        '当你在凝视网页的时候，网页也在凝视着你。', 
        '不以物喜，不以己悲。', 
        '断剑重铸之日，骑士归来之时。', 
        '希望能成为有趣的人。', 
        '给时光以生命，给岁月以文明。', 
        '你好，请多指教。', 
        '你所热爱的，就是你的生活。',  
        'Stay Hungry, Stay Foolish.'
    ];
    $('#js-lg').text(pArr[Math.floor((Math.random()*pArr.length))]);
})
