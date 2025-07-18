$(document).ready(function() {
    var liTemplate = '<li id="" data-weight="" class="col-3 col-sm-3 col-md-3 col-lg-1 __web-inspector-hide-shortcut__"><a rel="nofollow" href="" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg><span></span></a></li>';
    var liTemplateForShoulu = '<li id="" data-weight="" class="shoulu-temp__list col-3 col-sm-3 col-md-3 col-lg-1 __web-inspector-hide-shortcut__"><a rel="nofollow" href="" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg><span></span></a></li>';
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
                },{
                    id: 'rm-bweather',
                    ahref: 'https://www.msn.cn/zh-cn/weather/forecast/in-浙江省,杭州市',
                    xlinkhref: '#icon-bing',
                    span: '必应天气',
                    weight:10000
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
        default:{
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
                },{
                    id: 'rm-bweather',
                    ahref: 'https://www.msn.cn/zh-cn/weather/forecast/',
                    xlinkhref: '#icon-bing',
                    span: '必应天气',
                    weight:10000
                },{
                    id: 'rm-mdevice',
                    ahref: 'https://windows365.microsoft.com/ent#/devices',
                    xlinkhref: '#icon-micro',
                    span: '微软设备',
                    weight:10001
                }
            ],
            dontlike: ['rm-kuaishou','rm-huya'],
            // countdownForText: '<a class="countdownForText" href="https://www.ruankao.org.cn/">软考</a>',
            // countdownEndTime: '2024-11-04 23:59:59'
            // ifram: 'https://zjkjxj.org.cn/zjrjks.jhtml'
        },
        dewu:{
            /* 
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
            */
            normalTextWithoutCountDown: '<a style="font-size:1.5em">本页面无限期下线中<br/>2024.05.07</a>',
            bg: ['img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png', 'img/bg_joker.png'],
            pArr: ['同学,你的身份证和复印件掉了','若是月亮还没来，路灯也可照窗台','庐州月光，梨花微凉'],
            class:'dewu',
            off: true
        },
        jj:{
            favorite: [
                {
                    id: 'rm-douyu',
                    ahref: 'https://www.douyu.com/',
                    xlinkhref: '#icon-douyu',
                    span: '斗鱼直播',
                    weight: 9999
                },{
                    id: 'rm-huya',
                    ahref: 'https://www.huya.com/',
                    xlinkhref: '#icon-huya',
                    span: '虎牙直播',
                    weight: 9998
                },{
                    id: 'rm-bweather',
                    ahref: 'https://www.msn.cn/zh-cn/weather/forecast/in-浙江省,杭州市',
                    xlinkhref: '#icon-bing',
                    span: '必应天气',
                    weight:10000
                }
            ],
            dontlike: ['rm-chatgpt','rm-douyin','rm-github','rm-musicca','rm-lizhi'],
            // countdownForText: '<a class="countdownForText" style="font-size:1.2em;font-weight:700;" href="https://love.mew.wang/Web/disguise_Baidu/">野猫停止爱你</a>',
            // countdownEndTime: '2100-08-01 23:59:59',
            // l2d: { 
            //     model: 'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json',
            //     position: 'right'
            // },
            normalTextWithoutCountDown: '<a style="font-size:1.5em">唐老鸭的滑翔机</a>',
            pArr: ['玉蟾取药添觞，木樨泛酒微光。岂有长时年少，一杯瑰味琦芳。','乌舟止忘川，鸿鹤赴仙班。春华一芳草，秋曜两青山。','月中有桂树，怒放一树浓。​鲲鹏以为马，竟折破苍穹。','疾风吹去芳草地，半两黄土半两金','山本无忧水无愁，年年风雪有尽头','最暖莫过屋中酒，乱语胡言吟然悠','莲花析水，日月轮空','秋风有尽时，明月无绝期','顺也行舟，逆也行舟','三三两两峰前过，独享春风星满楼','天不随我云绸绸，我何随天恨悠悠'],
            class:'jj'
        },
        hulu:{
            favorite: [
                {
                    id: 'rm-douyu',
                    ahref: 'https://www.douyu.com/',
                    xlinkhref: '#icon-douyu',
                    span: '斗鱼直播',
                    weight: 9999
                },{
                    id: 'rm-huya',
                    ahref: 'https://www.huya.com/',
                    xlinkhref: '#icon-huya',
                    span: '虎牙直播',
                    weight: 9998
                },{
                    id: 'rm-qqmail',
                    ahref: 'https://mail.qq.com/',
                    xlinkhref: '#icon-qqmail',
                    span: 'QQ邮箱',
                    weight: 9999
                },{
                    id: 'rm-bweather',
                    ahref: 'https://www.msn.cn/zh-cn/weather/forecast/',
                    xlinkhref: '#icon-bing',
                    span: '必应天气',
                    weight:10000
                }
            ],
            dontlike: ['rm-chatgpt','rm-github','rm-musicca','rm-lizhi'],
            // countdownForText: '2024.03.22 --- 2024.07.04（小辛小裴的<a class="countdownForText"></a>天）',
            // countdownStartTime: '2024-03-22 00:00:00',
            // countdownEndTime: '2024-07-04 00:00:00',
            // l2d: { 
            //     model: 'https://unpkg.com/live2d-widget-model-haruto@1.0.5/assets/haruto.model.json',
            //     position: 'right'
            // },
            pArr: ['有人说，地球是圆的，是因为上帝想让那些走散的人，能够重新相遇。'],
            class:'hulu'
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
                },{
                    id: 'rm-bweather',
                    ahref: 'https://www.msn.cn/zh-cn/weather/forecast/',
                    xlinkhref: '#icon-bing',
                    span: '必应天气',
                    weight:10000
                }
            ],
            dontlike: ['rm-kuaishou'],
            countdownForText: '<a class="countdownForText" href="https://www.ruankao.org.cn/">软考</a>',
            countdownEndTime: ['YYYY-05-24 23:59:59','YYYY-11-08 23:59:59'],
            // countdownStartTime: '2024-09-04 23:59:59',
            l2d: { 
                model: 'https://unpkg.com/live2d-widget-model-koharu@1.0.5/assets/koharu.model.json',
                position: 'left'
            },
            class: 'default'
            // ifram: 'https://zjkjxj.org.cn/zjrjks.jhtml'
        },
        4:{
            copy: 'mylover'
        },
    };
    function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var urlUser = getUrlParam("user") ? getUrlParam("user") : "default";
    // set default site use admin or default
    var user = "";
    if(urlUser=="default"){
        user = localStorage.getItem('default');
    }else{
        localStorage.setItem('default','default');
        user = getUrlParam("user");
    }
    if(!userJson[user]){
        localStorage.setItem('default','default');
        user = 'default';
    }
    var userJsonvValue = userJson[user];
    // site off
    if(userJsonvValue.off){
        $('.container').children().hide();
        $('.container').children(':first').show();
        $('#typeMenu').hide();
    }
    // user copy
    if(userJsonvValue.copy){
        userJsonvValue = userJson[userJsonvValue.copy];
    }
    var userfavoriteList = [];
    if(userJsonvValue.favorite){
        userfavoriteList = userJsonvValue.favorite.sort(function(a, b){
            return a.weight-b.weight;
        });
    }
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
    if(userJsonvValue.l2d && "undefined" != typeof L2Dwidget){
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
    
    var addManuallyURlInit = getaddManuallyURLMap();
    for(let [name,url] of addManuallyURlInit){
        $('#group_1-1').append(liTemplateForShoulu.replace('li id="','li id="rm_shoulu'+encodeURIComponent(name).replaceAll('%','_')).replace('href="','href="'+url).replace('data-weight="','data-weight="'+0).replace('xlink:href="','xlink:href="'+"#icon-mew").replace('<span>','<span>'+name));
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
    if(userJsonvValue.bg && userJsonvValue.class){
        $('#banner-bg').addClass(userJsonvValue.class);
    }

    // set class
    if(userJsonvValue.class && userJsonvValue.class != 'default'){
        $('.mode-switch__circle').addClass('lover');
        $('.mode-switch__toggle').on('click', function(e){
            e.stopPropagation();
            localStorage.setItem('default', 'admin');
            location.href = location.href.replace('index.html?user='+user, '')
        })
    } else if(getUrlParam("user")){
        $('.mode-switch__toggle').on('click', function(e){
            e.stopPropagation();
            localStorage.setItem('default', 'default');
            location.href = location.href.replace('index.html?user='+user, 'index.html?user=mylover')
        })
    } else {
        $('.mode-switch__toggle').on('click', function(e){
            e.stopPropagation();
            localStorage.setItem('default', 'default');
            if(location.href.indexOf('index.html')>0){
                location.href = location.href.replace('index.html', 'index.html?user=mylover')
            }else{
                location.href = location.href+'index.html?user=mylover';
            }
        })
    }
    // set countdown
    var countdownStartDay = 0;
    var countdownSumDay = 0;
    if(userJsonvValue.countdownStartTime){
        countdownStartDay = parseInt((new Date(userJsonvValue.countdownStartTime).getTime() - now.getTime()) / (60*60*24*1000));
    }
    var countdownEndDay = -1;
    if (typeof(userJsonvValue.countdownEndTime) == "string"){
        countdownEndDay = parseInt((new Date(userJsonvValue.countdownEndTime).getTime() - now.getTime()) / (60*60*24*1000));
    } else if(typeof(userJsonvValue.countdownEndTime) == "object") {
        $.each(userJsonvValue.countdownEndTime, function(index, value) {
            var datetempCurrentYear = parseInt((new Date(value.replace('YYYY', now.getFullYear())).getTime() - now.getTime()) / (60*60*24*1000));
            var datetempNextYear = parseInt((new Date(value.replace('YYYY', now.getFullYear()+1)).getTime() - now.getTime()) / (60*60*24*1000));
            if(countdownEndDay<0){
                countdownEndDay = datetempNextYear;
            }
            if(datetempCurrentYear>=0 && datetempCurrentYear<=countdownEndDay){
                countdownEndDay = datetempCurrentYear;
            }
            if(datetempCurrentYear<0 && datetempNextYear<=countdownEndDay){
                countdownEndDay = datetempNextYear;
            }
        });
    }
    if(userJsonvValue.countdownStartTime && userJsonvValue.countdownEndTime && typeof(userJsonvValue.countdownEndTime) == "string"){
        countdownSumDay = parseInt((new Date(userJsonvValue.countdownEndTime).getTime() - new Date(userJsonvValue.countdownStartTime).getTime()) / (60*60*24*1000));
    }
    if (countdownSumDay > 0){
        $('#js-countdown').html(userJsonvValue.countdownForText);
        $('#js-countdown a.countdownForText').html(countdownSumDay);
    } else if (countdownStartDay < 1 && countdownEndDay >= 0) {
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
    } else if(countdownStartDay < 0 && userJsonvValue.countdownForText){
        $('#js-countdown').html(userJsonvValue.countdownForText);
        $('#js-countdown a.countdownForText').html(0-countdownStartDay);
    }else if(userJsonvValue.normalTextWithoutCountDown){
        $('#js-countdown').html(userJsonvValue.normalTextWithoutCountDown);
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
        $('#live2d-widget').addClass('d-none');
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
                $('#live2d-widget').removeClass('d-none');
            });
        });
    })
    $('#js-markdown_version').hover(function(){
        $('#main-about').addClass('d-none');
        $('#main-version').removeClass('d-none');
    })
    $('#js-markdown_about').hover(function(){
        $('#main-about').removeClass('d-none');
        $('#main-version').addClass('d-none');
    })
    function isKeyExisted(newKey, oldMap) {
        if(newKey)
            return oldMap.has(newKey);
        return false;
    }
    function getaddManuallyURLMap() {
        var urlAddManuallyLocalStorage = localStorage.getItem("urlAddManually_" + (user == 'admin' ? 'default' : user));
        if(urlAddManuallyLocalStorage){
            var jsonObject = JSON.parse(urlAddManuallyLocalStorage);
            return new Map(Object.entries(jsonObject));
        } 
        return new Map();
    }
    function getValidUrl(url) {
        if(url) {
            if(url.toLowerCase().startsWith("https://") || url.toLowerCase().startsWith("http://")) {
                return url;
            }
            return "https://"+url;
        }
        return url;
    }
    $('.shoulu-temp').on('click', function(e){
        openShouluDialog(e);
    })
    function openShouluDialog(e){
        e.preventDefault();
        e.stopPropagation();
        var shouluDialog = dialog({
            title: '站点收录',
            content: '<div id="js-popup__context" class="popup-context">'+
                '<div class="sou-shoulu"><span>收录站点名称：</span>'+
                '<input id="js-shouluname__input" type="text"/></div>'+
                '<div class="sou-shoulu sou-shoulu__last"><span>收录站点链接：</span>'+
                '<input id="js-shoulu__input" type="text"/></div>'+
                '</div>',
            button: [
                {
                    value: '确认',
                    callback: function () {
                        var addManuallyName = $('#js-shouluname__input').val();
                        var addManuallyURL = getValidUrl($('#js-shoulu__input').val());
                        if(typeof addManuallyName == 'undefined'){
                            addManuallyName = $('#js-shouluNameTemp').val();
                            addManuallyURL = getValidUrl($('#js-shouluUrlTemp').val());
                            $('#group_1-1').find('#rm_shoulu'+ encodeURIComponent(addManuallyName).replaceAll('%','_') + " a").attr('href', addManuallyURL);
                            var addMauallyURLMap = getaddManuallyURLMap();
                            addMauallyURLMap.set(addManuallyName, addManuallyURL);
                            localStorage.setItem("urlAddManually_" + (user == 'admin' ? 'default' : user), JSON.stringify(Object.fromEntries(addMauallyURLMap)));
                            return true;
                        }
                        if(addManuallyName && addManuallyURL){
                            $('#js-shouluNameTemp').val(addManuallyName);
                            $('#js-shouluUrlTemp').val(addManuallyURL);
                            var addMauallyURLMap = getaddManuallyURLMap();
                            if(isKeyExisted(addManuallyName, addMauallyURLMap)){
                                this.title('该站点已存在，确认替换为');
                                this.content('<div>站点名称：<b>'+addManuallyName+ '</b><br/>站点链接：<b>'+addManuallyURL+'</b></div>');
                                return false;
                            } else {
                                $('#group_1-1').append(liTemplateForShoulu.replace('li id="','li id="rm_shoulu'+encodeURIComponent(addManuallyName).replaceAll('%','_')).replace('href="','href="'+addManuallyURL).replace('data-weight="','data-weight="'+0).replace('xlink:href="','xlink:href="'+"#icon-mew").replace('<span>','<span>'+addManuallyName));
                                $('#rm_shoulu'+encodeURIComponent(addManuallyName).replaceAll('%','_')).on({
                                    touchstart: function(e){
                                        shouluContextMenu($(this), e);
                                    },
                                    contextmenu: function(e){
                                        shouluContextMenu($(this), e);
                                    }
                                })
                            }
                            addMauallyURLMap.set(addManuallyName, addManuallyURL);
                            localStorage.setItem("urlAddManually_" + (user == 'admin' ? 'default' : user), JSON.stringify(Object.fromEntries(addMauallyURLMap)));
                        } else {
                            return false;
                        }
                    },
                    autofocus: true
                },
                {
                    value: '取消'
                }
            ],
            skin: 'background-dialog',
            fixed: true,
            zIndex: 10000,
            quickClose: false
        });
        shouluDialog.showModal();
    }
    function shouluContextMenu(thisEle, e){
        e.preventDefault();
        e.stopPropagation();
        var shouluId = thisEle.attr('id');
        var shouluName = thisEle.find('span').text();
        var shouluUrl = thisEle.find('a').attr('href');

        var d = dialog({
            id: 'api-show-dialog',
            quickClose: true,
            skin: 'shoulu-contextMenu',
            content: device.desktop()?'<div class="shoulu-contextMenu__div" id="js-shoulu__edit">编辑</div><div class="shoulu-contextMenu__div" id="js-shoulu__delete">删除</div>':
                    '<div class="shoulu-contextMenu__div" id="js-shoulu__jump">跳转</div><div class="shoulu-contextMenu__div" id="js-shoulu__edit">编辑</div><div class="shoulu-contextMenu__div" id="js-shoulu__delete">删除</div>'
        });
        if (device.desktop()) {
            d.show(e);
        } else {
            d.show(document.getElementById(shouluId).getElementsByTagName('svg')[0]);
        }
        $('#js-shoulu__jump').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            window.open(shouluUrl, '_blank');
        });
        $('#js-shoulu__edit').on('click', function(e){
            e.preventDefault();
            var shouluEditDialog = dialog({
                title: '编辑收录',
                content: '<div id="js-popup__context" class="popup-context">'+
                    '<div class="sou-shoulu"><span>收录站点名称：</span>'+
                    '<input id="js-shouluname__input" type="text" value="'+shouluName+'"/></div>'+
                    '<div class="sou-shoulu sou-shoulu__last"><span>收录站点链接：</span>'+
                    '<input id="js-shoulu__input" type="text" value="'+shouluUrl+'"/></div>'+
                    '</div>',
                button: [
                    {
                        value: '编辑',
                        callback: function () {
                            var addManuallyName = $('#js-shouluname__input').val();
                            var addManuallyURL = getValidUrl($('#js-shoulu__input').val());
                            if(typeof addManuallyName == 'undefined'){
                                addManuallyName = $('#js-shouluNameTemp').val();
                                addManuallyURL = getValidUrl($('#js-shouluUrlTemp').val());
                                var rmdontlikeLi = $('#group_1-1').find('#'+shouluId);
                                if(rmdontlikeLi.length>0){
                                    rmdontlikeLi.remove();
                                }
                                var addMauallyURLMap = getaddManuallyURLMap();
                                addMauallyURLMap.delete(shouluName);
                                addMauallyURLMap.set(addManuallyName, addManuallyURL);
                                localStorage.setItem("urlAddManually_" + (user == 'admin' ? 'default' : user), JSON.stringify(Object.fromEntries(addMauallyURLMap)));
                                $('#group_1-1').append(liTemplateForShoulu.replace('li id="','li id="rm_shoulu'+encodeURIComponent(addManuallyName).replaceAll('%','_')).replace('href="','href="'+addManuallyURL).replace('data-weight="','data-weight="'+0).replace('xlink:href="','xlink:href="'+"#icon-mew").replace('<span>','<span>'+addManuallyName));
                                $('#rm_shoulu'+encodeURIComponent(addManuallyName).replaceAll('%','_')).on({
                                    touchstart: function(e){
                                        shouluContextMenu($(this), e);
                                    },
                                    contextmenu: function(e){
                                        shouluContextMenu($(this), e);
                                    }
                                })
                                return true;
                            }
                            if(addManuallyName && addManuallyURL){
                                $('#js-shouluNameTemp').val(addManuallyName);
                                $('#js-shouluUrlTemp').val(addManuallyURL);
                                var addMauallyURLMap = getaddManuallyURLMap();
                                if(isKeyExisted(shouluName, addMauallyURLMap)||isKeyExisted(addManuallyName, addMauallyURLMap)){
                                    this.title('是否编辑为');
                                    this.content('<div>站点名称：<b>'+addManuallyName+ '</b><br/>站点链接：<b>'+addManuallyURL+'</b></div>');
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        },
                        autofocus: true
                    },
                    {
                        value: '取消'
                    }
                ],
                skin: 'background-dialog',
                fixed: true,
                zIndex: 10000,
                quickClose: false
            });
            shouluEditDialog.showModal();
            d.close().remove();
        });
        $('#js-shoulu__delete').on('click', function(e){
            e.preventDefault();
            var shouluDeleteDialog = dialog({
                title: '删除收录',
                content: '<div id="js-popup__context" class="popup-context">'+
                    '<div class="sou-shoulu"><span>收录站点名称：</span>'+
                    '<input id="js-shouluname__input" type="text" disabled value="'+shouluName+'"/></div>'+
                    '<div class="sou-shoulu sou-shoulu__last"><span>收录站点链接：</span>'+
                    '<input id="js-shoulu__input" type="text" disabled value="'+shouluUrl+'"/></div>'+
                    '</div>',
                button: [
                    {
                        value: '删除',
                        callback: function () {
                            var addManuallyName = $('#js-shouluname__input').val();
                            var addManuallyURL = getValidUrl($('#js-shoulu__input').val());
                            if(typeof addManuallyName == 'undefined'){
                                addManuallyName = $('#js-shouluNameTemp').val();
                                addManuallyURL = getValidUrl($('#js-shouluUrlTemp').val());
                                var rmdontlikeLi = $('#group_1-1').find('#rm_shoulu'+ encodeURIComponent(addManuallyName).replaceAll('%','_'))
                                if(rmdontlikeLi.length>0){
                                    rmdontlikeLi.remove();
                                }
                                var addMauallyURLMap = getaddManuallyURLMap();
                                addMauallyURLMap.delete(addManuallyName);
                                if (addMauallyURLMap.size > 0) {
                                    localStorage.setItem("urlAddManually_" + (user == 'admin' ? 'default' : user), JSON.stringify(Object.fromEntries(addMauallyURLMap)));
                                } else {
                                    localStorage.removeItem("urlAddManually_" + (user == 'admin' ? 'default' : user));
                                }
                                return true;
                            }
                            if(addManuallyName && addManuallyURL){
                                $('#js-shouluNameTemp').val(addManuallyName);
                                $('#js-shouluUrlTemp').val(addManuallyURL);
                                var addMauallyURLMap = getaddManuallyURLMap();
                                if(isKeyExisted(addManuallyName, addMauallyURLMap)){
                                    this.title('是否删除');
                                    this.content('<div>站点名称：<b>'+addManuallyName+ '</b><br/>站点链接：<b>'+addManuallyURL+'</b></div>');
                                    return false;
                                }
                            } else {
                                return false;
                            }
                        },
                        autofocus: true
                    },
                    {
                        value: '取消'
                    }
                ],
                skin: 'background-dialog',
                fixed: true,
                zIndex: 10000,
                quickClose: false
            });
            shouluDeleteDialog.showModal();
            d.close().remove();
        });
        return d.destroyed;
    }
    $('.shoulu-temp__list').on({
        touchstart: function(e){
            shouluContextMenu($(this), e);
        },
        contextmenu: function(e){
            shouluContextMenu($(this), e);
        }
    })
})
