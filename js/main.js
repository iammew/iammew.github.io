$(document).ready(function() {
    var liTemplate = '<li id="" data-weight="" class="col-3 col-sm-3 col-md-3 col-lg-1 __web-inspector-hide-shortcut__"><a rel="nofollow" href="" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg><span></span></a></li>'
    var userJson = {
        mylover:{
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
                    id: 'rm-zhihu',
                    ahref: 'https://www.zhihu.com/explore',
                    xlinkhref: '#icon-zhihu',
                    span: '知乎',
                    weight: 9996
                },{
                    id: 'rm-weibo',
                    ahref: 'https://www.weibo.com',
                    xlinkhref: '#icon-weibo',
                    span: '微博',
                    weight: 9997
                },{
                    id: 'rm-jinjiang',
                    ahref: 'https://www.jjwxc.net/fenzhan/yq/',
                    xlinkhref: '#icon-jinjiang',
                    span: '晋江文学城',
                    weight: 9998
                },{
                    id: 'rm-redbook',
                    ahref: 'https://www.xiaohongshu.com/',
                    xlinkhref: '#icon-redbook',
                    span: '小红书',
                    weight: 9999
                }
            ],
            dontlike: ['rm-chatgpt','rm-tieba','rm-github','rm-musicca','rm-huya','rm-douyu'],
            countdownForText: '<a class="countdownForText" style="font-size:1.2em;font-weight:700;" href="https://love.mew.wang/Web/disguise_Baidu/">野猫停止爱你</a>',
            countdownEndTime: '2100-08-01 23:59:59',
            l2d: { 
                model: 'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json',
                position: 'right'
            },
            class:'lover'
        },
        admin:{
            favorite: [
                {
                    id: 'rm-lizhi',
                    ahref: 'https://m.lizhiweike.com/channel2/1413360',
                    xlinkhref: '#icon-learn',
                    span: '荔枝微课',
                    weight: -1
                },{
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
            countdownForText: '<a class="countdownForText" href="https://www.ruankao.org.cn/">软考</a>',
            countdownEndTime: '2024-11-04 23:59:59'
            // ifram: 'https://zjkjxj.org.cn/zjrjks.jhtml'
        },
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
                    id: 'rm-zhihu',
                    ahref: 'https://www.zhihu.com/explore',
                    xlinkhref: '#icon-zhihu',
                    span: '知乎',
                    weight: 9996
                },{
                    id: 'rm-weibo',
                    ahref: 'https://www.weibo.com',
                    xlinkhref: '#icon-weibo',
                    span: '微博',
                    weight: 9997
                },{
                    id: 'rm-jinjiang',
                    ahref: 'https://www.jjwxc.net/fenzhan/yq/',
                    xlinkhref: '#icon-jinjiang',
                    span: '晋江文学城',
                    weight: 9998
                },{
                    id: 'rm-redbook',
                    ahref: 'https://www.xiaohongshu.com/',
                    xlinkhref: '#icon-redbook',
                    span: '小红书',
                    weight: 9999
                }
            ],
            dontlike: ['rm-chatgpt','rm-tieba','rm-github','rm-musicca','rm-huya','rm-douyu'],
            // countdownForText: '<a class="countdownForText" style="font-size:1.2em;font-weight:700;" href="https://love.mew.wang/Web/disguise_Baidu/">野猫停止爱你</a>',
            // countdownEndTime: '2100-08-01 23:59:59',
            // l2d: { 
            //    model: 'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json',
            //    position: 'right'
            // },
            bg: ['img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png'],
            pArr: ['同学,你的身份证和复印件掉了','若是月亮还没来，路灯也可照窗台','庐州月光，梨花微凉'],
            class:'dewu'
        },
        default:{
            favorite: [
                {
                    id: 'rm-lizhi',
                    ahref: 'https://m.lizhiweike.com/channel2/1413360',
                    xlinkhref: '#icon-learn',
                    span: '荔枝微课',
                    weight: -1
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
                },{
                    id: 'rm-redbook',
                    ahref: 'https://www.xiaohongshu.com/',
                    xlinkhref: '#icon-redbook',
                    span: '小红书',
                    weight: 10000
                }
            ],
            dontlike: ['rm-kuaishou'],
            countdownForText: '<a class="countdownForText" href="https://www.ruankao.org.cn/">软考</a>',
            countdownEndTime: '2024-11-04 23:59:59',
            // countdownStartTime: '2024-09-04 23:59:59',
            l2d: { 
                model: 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
                position: 'left'
            }
            // ifram: 'https://zjkjxj.org.cn/zjrjks.jhtml'
        }
    };
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var user = getUrlParam("user") ? getUrlParam("user") : 'default';
    if(user == 'dewu'){
        $('.container').children().hide();
        $('.container').children(':first').show();
        $('#js-countdown').html('<a style="font-size:1.5em">本页面无限期下线中<br>2024.05.07');
        $('#typeMenu').hide();
    }
    $('.main-version__down').on('click', function(){
        if(getUrlParam("user")){
                location.href = location.href.replace('index.html?user='+user, 'index.html?user=dewu')
        } else {
            if(location.href.indexOf('index.html')>0){
                location.href = location.href.replace('index.html', 'index.html?user=dewu')
            }else{
                location.href = location.href+'index.html?user=dewu';
            }
        }
    })
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
    if(userJsonvValue.l2d){
        L2Dwidget
        .on('*', (name) => {
          // console.log('%c EVENT ' + '%c -> ' + name, 'background: #222; color: yellow', 'background: #fff; color: #000')
        })
        .init({
            dialog: {
            // 开启对话框
                enable: true,
                script: {
                    //每20s，显示一言（调用一言Api返回的句子）
                    //'every idle 20s': '$hitokoto$',
                    //触摸到class='star'对象
                    'hover .star': '星星在天上而你在我心里 (*/ω＼*)',
                    //触摸到身体
                    'tap body': '静静地想你',
                    //触摸到头部
                    'tap face': '嘻'
                },
                "mobile":{"show":true}
            },
            "model":{"jsonPath":userJsonvValue.l2d.model},
            "display": {"position": userJsonvValue.l2d.position}
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
    if(userJsonvValue.bg){
        bgArr = userJsonvValue.bg;
    }
    $('#banner-bg').attr('src', bgArr[now.getDay()]);

    // set class
    if(userJsonvValue.class){
        $('.mode-switch__circle').addClass(userJsonvValue.class);
        $('.mode-switch__toggle').on('click', function(e){
            location.href = location.href.replace('index.html?user='+user, '')
        })
    } else if(getUrlParam("user")){
        $('.mode-switch__toggle').on('click', function(e){
            location.href = location.href.replace('index.html?user='+user, 'index.html?user=mylover')
        })
    } else {
        $('.mode-switch__toggle').on('click', function(e){
            if(location.href.indexOf('index.html')>0){
                location.href = location.href.replace('index.html', 'index.html?user=mylover')
            }else{
                location.href = location.href+'index.html?user=mylover';
            }
        })
    }
    // set countdown
    var countdownStartDay = 0;
    if(userJsonvValue.countdownStartTime){
        countdownStartDay = parseInt((new Date(userJsonvValue.countdownStartTime).getTime() - now.getTime()) / (60*60*24*1000));
    }
    var countdownEndDay = parseInt((new Date(userJsonvValue.countdownEndTime).getTime() - now.getTime()) / (60*60*24*1000));
    if (countdownStartDay < 1 && countdownEndDay > 0) {
        $('#js-countdown').html('距离' + userJsonvValue.countdownForText + '还剩 <a style="font-size:1.6em;font-weight:700">'+ countdownEndDay + '</a> 天');

        if(userJsonvValue.ifram){
            $('#noticeBtn').show();
            $('#noticeBtn').css('top', parseInt($('#noticeBtn').css('top'))+46+'px');
            $('#noticeBtn').on('click', function(e){
                e.stopPropagation();
                $('#notice').toggle();
            })
            $('#notice').hide();
            $.get(userJsonvValue.ifram, function(data){
                var datamodify = data.replaceAll('src="/','src1="/');
                $('#notice').append($(datamodify).find('.exam-notice .list')).append($(datamodify).find('.exam-date .swiper-wrapper'));
                $('#notice .swiper-wrapper').css('padding-left','46px');
                $('#notice .swiper-slide').css('margin-bottom','46px');
                var is7daysnews = parseInt((now.getTime() - (new Date($('#notice .list ul').find('li:first-child').find('span').html()).getTime())) / (60*60*24*1000))<8;
                var is2023second = false;
                $.each($('#notice').find('.swiper-wrapper').find('.lot-top'), function(index, value) {
                    if($(value).html().split('2023年下半年').length > 1){
                        $(value).css('font-weight', '700');
                        $(value).nextAll().css('font-weight', '700');
                        is2023second = true;
                    }else{
                        $(value).css('font-weight', '300');
                        $(value).nextAll().css('font-weight', '300');
                    }
                })
                if(is7daysnews || is2023second){
                    $('#notice').show();
                }
            });
        }
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
    if(userJsonvValue.pArr){
        pArr = userJsonvValue.pArr;
    }
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
    $('#js-markdown_version').on("click", function(){
        $('#main-about').addClass('d-none');
        $('#main-version').removeClass('d-none');
    })
    $('#js-markdown_about').on("click", function(){
        $('#main-about').removeClass('d-none');
        $('#main-version').addClass('d-none');
    })
})
