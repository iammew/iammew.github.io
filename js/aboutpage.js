$(document).ready(function() {
    // <li id="" data-weight="" class="col-3 col-sm-3 col-md-3 col-lg-1 __web-inspector-hide-shortcut__"><a rel="nofollow" href="" target="_blank"><svg class="icon" aria-hidden="true"><use xlink:href=""></use></svg><span></span></a></li>
    var tableTRTemplate = '<tr id="v-time_"><td class="version_time"><strong></strong></td><td class="version_content"></td></tr>'
    var versions = [
        {
            v_time: '2024.06.25',
            v_content: '增加<a class="version_user" data-user="jj">WJJ</a>和<a class="version_user" data-user="hulu">葫芦</a>版本'
        },
        {
            v_time: '2024.05.21',
            v_content: '添加了小红书到lover标签下，在关于本站展示页添加版本日志tab'
        },
        {
            v_time: '2024.05.07',
            v_content: '移除<a class="version_user" data-user="dewu">得物</a>版本内容，增加<a class="version_user" data-user="dewu">下线内容</a>'
        },
        {
            v_time: '2024.03.05',
            v_content: '添加情书'
        },
        {
            v_time: '2023.07.19',
            v_content: '增加<a class="version_user" data-user="dewu">得物</a>版本'
        },
        {
            v_time: '2022.07.11',
            v_content: '增加了更多书签'
        },
        {
            v_time: '2022.01.11',
            v_content: '<a class="version_user" data-user="">站点</a>上线'
        },
    ];
    
    versions.sort(function(a, b){
        return new Date(b.v_time).getTime() - new Date(a.v_time).getTime();
    });
    if(versions && versions.length>0){
        $.each(versions, function(){
            $('#markdown-table_version').append(tableTRTemplate.replace('id="v-time_','id="v-time_'+this.v_time).replace('strong>','strong>'+this.v_time).replace('version_content">', 'version_content">'+this.v_content));
        });
    }
    function getUrlParamForAboutPage(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); 
        var r = window.location.search.substr(1).match(reg); 
        if (r != null) return unescape(r[2]); return null; 
    }
    var userForAboutPage = getUrlParamForAboutPage("user") ? getUrlParamForAboutPage("user") : 'default';
    $('.version_user').on('click', function(){
        var userforjump = '';
        var dataUser = $(this).data().user;
        if(dataUser){
            userforjump = 'index.html?user='+$(this).data().user;
        }
        if(getUrlParamForAboutPage("user")){
                location.href = location.href.replace('index.html?user='+userForAboutPage, userforjump)
        } else {
            if(location.href.indexOf('index.html')>0){
                location.href = location.href.replace('index.html', userforjump)
            }else{
                location.href = location.href+userforjump;
            }
        }
    })
    
})