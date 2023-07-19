$(document).ready(function() {
    var liTemplate = '<li id="" data-weight="" class="col-3 col-sm-3 col-md-3 col-lg-1 __web-inspector-hide-shortcut__"><a rel="nofollow" href="" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg><span></span></a></li>'
    var userJson = {
        dewu:{
            favorite: [
                {
                    id: 'rm-ps',
                    ahref: 'https://www.uupoop.com/#/old',
                    xlinkhref: '#icon-ps',
                    span: '在线PS(国内)',
                    weight: -1
                },{
                    id: 'rm-qqmail',
                    ahref: 'https://mail.qq.com/',
                    xlinkhref: '#icon-qqmail',
                    span: 'QQ邮箱',
                    weight: 9995
                },{
                    id: 'rm-alipay',
                    ahref: 'https://business.alipay.com/user/home',
                    xlinkhref: '#icon-alipay',
                    span: '支付宝商家中心',
                    weight: 9996
                },{
                    id: 'rm-zhihu',
                    ahref: 'https://www.zhihu.com/explore',
                    xlinkhref: '#icon-zhihu',
                    span: '知乎',
                    weight: 9997
                },{
                    id: 'rm-weibo',
                    ahref: 'https://www.weibo.com',
                    xlinkhref: '#icon-weibo',
                    span: '微博',
                    weight: 9998
                },{
                    id: 'rm-jinjiang',
                    ahref: 'https://www.jjwxc.net/fenzhan/yq/',
                    xlinkhref: '#icon-jinjiang',
                    span: '晋江文学城',
                    weight: 9999
                }
            ],
            dontlike: ['rm-lizhiweike','rm-chatgpt','rm-tieba','rm-github','rm-musicca','rm-huya','rm-douyu'],
            countdownForText: '自由',
            countdownEndTime: '2023-09-02 23:59:59',
        },
        admin:{
            favorite: [
                {
                    id: 'rm-outlook',
                    ahref: 'https://outlook.live.com/mail/',
                    xlinkhref: '#icon-outlook',
                    span: 'Outlook',
                    weight: 9997
                },{
                    id: 'rm-wangyimail',
                    ahref: 'https://mail.163.com/',
                    xlinkhref: '#icon-wangyi',
                    span: '网易邮箱',
                    weight: 9998
                },{
                    id: 'rm-qqmail',
                    ahref: 'https://mail.qq.com/',
                    xlinkhref: '#icon-qqmail',
                    span: 'QQ邮箱',
                    weight: 9999
                }
            ],
            dontlike: ['rm-kuaishou'],
            countdownForText: '软考',
            countdownEndTime: '2023-11-04 23:59:59',
        }
    };
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var user = getUrlParam("user") ? getUrlParam("user") : 'admin';
    var userJsonvValue = userJson[user];
    var userfavoriteList = userJsonvValue.favorite;
    var userdontlikeList = userJsonvValue.dontlike;
    if(userfavoriteList && userfavoriteList.length>0){
        $.each(userfavoriteList, function(){
            var rmfavoriteLi = $('#group_1').find('#'+this.id);
            if(rmfavoriteLi.length>0){
                rmfavoriteLi.remove();
            }
            if(this.weight>0){
                $('#js_li-remen').after(liTemplate.replace('li id="','li id="'+this.id).replace('href="','href="'+this.ahref).replace('data-weight="','data-weight="'+this.weight).replace('xlink:href="','xlink:href="'+this.xlinkhref).replace('<span>','<span>'+this.span));
            }else{
                $('#group_1').append(liTemplate.replace('li id="','li id="'+this.id).replace('href="','href="'+this.ahref).replace('data-weight="','data-weight="'+this.weight).replace('xlink:href="','xlink:href="'+this.xlinkhref).replace('<span>','<span>'+this.span));
            }
        });
    }
    if(userdontlikeList && userdontlikeList.length>0){
        $.each(userdontlikeList, function(){
            var rmdontlikeLi = $('#group_1').find('#'+this);
            if(rmdontlikeLi.length>0){
                rmdontlikeLi.remove();
            }
        });
    }
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
        var scrollTo = $(this).data().id.startsWith('group_') ? $('#'+$(this).data().id).offset().top : 0;
        $body.animate({scrollTop: scrollTo}, 500, "swing", function(){
            $('#showListType li').removeClass('active');
            activeLi.addClass('active');
        });
        return false;
    })
    $('body').click(function() {
        $('#showListType').removeClass('showListType');
    })
    $(document).scroll(function() {
        var scroH = $(window).scrollTop();
        var listLength = listHeightArr.length;
        var index = listLength-1;//原本的index
        while(listHeightArr[index] - scroH > 1 ) {
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

    // set countdown
    var countdownDay = parseInt((new Date(userJsonvValue.countdownEndTime).getTime() - now.getTime()) / (60*60*24*1000));
    if (countdownDay >= 0) {
        $('#js-countdown').html('距离' + userJsonvValue.countdownForText + '还剩 <a style="font-size:1.6em;font-weight:700">'+ countdownDay + '</a> 天');
    }
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
    
    //about page
    $(".js-popup").on("click", function(){
        var clickEleHeight = $(this).offset().top < $(window).height() ? 0 : $(this).offset().top;
        $body.animate({scrollTop: 0}, 0, "swing", function(){
            $(".pop").slideDown(500, "swing", function(){
                $("#nav-page").hide();
                $('body').css('background-color','white');
                $('.close').attr('data-height', clickEleHeight);
                $('.close').data().height = clickEleHeight;
                $(".close").css('position', 'fixed');
            });
        });
    })
    $(".close").on("click", function(){
        var dataHeight = $(this).data().height;
        $(this).removeAttr('style');
        $body.animate({scrollTop: 0}, 50, "swing", function(){
            $('body').css('background-color','');
            $("#nav-page").show();
            $(".pop").slideUp(500, "swing", function(){ 
                if(dataHeight){
                    $body.animate({scrollTop: dataHeight}, 500);
                }
            });
        });
    })
})
