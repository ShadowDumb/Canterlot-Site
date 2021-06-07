/**
 *  自定义网站配置 
 */
const config = {
  title: "坎特洛特 - 交通枢纽",                 //write your website title
  subtitle: "上次更新：2021.06.07", //write your website subtitle
  logo_icon: "location arrow",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: false,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"图片",
      template:"https://derpibooru.org/search?q=$s"
    },
    {
      name:"资源",
      template:"https://cloudsdale.xyz/0:search?q=$s"
    },
    {
      name:"资讯",
      template:"https://www.equestriacn.com/?s=$s"
    },
    {
      name:"小说",
      template:"https://fimtale.com/topics?q=$s"
    }
  ],
  selling_ads: false,                  //Selling your domain or not.(turning on may be helpful for selling this domain by showing some ads.)
  sell_info:{
    domain:"example.com",
    price:500,                        //domain price
    mon_unit:"yen sign",              //monetary unit 
    contact:[                         //how to contact you
      {
        type:"envelope",               //contact type ("weixin","qq","telegram plane","envelope" or "phone")
        content:"info@example.com"
      }
    ]
  },
  lists: [                            //Url list
    {
      name:"资讯",
      icon:"bullhorn",
      list:[
        {
          url:"https://www.equestriacn.com/",
          name:"小马中国",
          desc:"EquestriaCN"
        },
        {
          url:"https://www.equestriadaily.com/",
          name:"*EquestriaDaily",
          desc:"小马国日报"
        },
        {
          url:"https://everypony.ru/",
          name:"EveryPony",
          desc:"俄罗斯小马新闻站"
        },
        {
          url:"https://leponeyblanc.fr/",
          name:"Le Poney Blanc",
          desc:"法国小马新闻站"
        }
      ]
    },
    {
      name:"社区",
      icon:"comments",
      list:[
        {
          url:"https://tieba.baidu.com/f?kw=%E5%B0%8F%E9%A9%AC%E5%AE%9D%E8%8E%89",
          name:"小马宝莉吧",
          desc:"百度小马宝莉贴吧"
        },
        {
          url:"https://tieba.baidu.com/f?kw=%E5%B0%8F%E9%A9%AC%E9%A9%B9%E4%B9%8B%E5%8F%8B%E8%B0%8A%E9%AD%94%E6%B3%95",
          name:"小马驹之友谊魔法吧",
          desc:"百度小马驹之友谊魔法贴吧"
        },
        {
          url:"https://mlpforums.com/",
          name:"*MLP Forums",
          desc:"目前最大的 Brony 论坛"
        },
        {
          url:"https://forums.equestriadaily.com/",
          name:"*EquestriaDaily Forums",
          desc:"小马国日报官方论坛"
        },
        {
          url:"https://boards.4channel.org/mlp/",
          name:"*4chan",
          desc:"综合型讨论区 4chan 开设的小马专板"
        },
        {
          url:"https://www.ponychan.net/",
          name:"Ponychan",
          desc:"类似于 4chan 的贴图版"
        },
        {
          url:"https://www.allspark.com/forums/forum/67-my-little-allsparkle/",
          name:"Allspark Forums",
          desc:"原变形金刚论坛，现在也是小马论坛"
        },
        {
          url:"http://rainbowdash.net/",
          name:"Rainbow Dash Network",
          desc:"云宝黛茜论坛"
        },
        {
          url:"https://www.reddit.com/r/mylittlepony",
          name:"*Reddit",
          desc:"Reddit 小马社区"
        },
        {
          url:"https://aminoapps.com/c/equestria/home/",
          name:"Amino",
          desc:"氨基社区小马俱乐部"
        }
      ]
    },
    {
      name:"视频",
      icon:"video",
      list:[
        {
          url:"https://bronystate.net/",
          name:"*BronyState",
          desc:"每周五周六有电影之夜"
        },
        {
          url:"https://derpy.tv/",
          name:"*DerpyTV",
          desc:"小呆 TV"
        },
        {
          url:"http://ponyvillelive.com/",
          name:"*PonyvilleLive",
          desc:"马镇直播"
        },
        {
          url:"https://pony.tube/",
          name:"*PonyTube",
          desc:"马迷们的油管"
        },
        {
          url:"https://cytu.be/r/Top10PonyVideos",
          name:"*Top 10 Pony Videos",
          desc:"十佳小马视频轮播"
        },
        {
          url:"http://knowyourmeme.com/memes/subcultures/my-little-pony-friendship-is-magic/videos",
          name:"*Know Your Meme",
          desc:"实时更新优质小马同人视频集"
        }
      ]
    },
    {
      name:"游戏",
      icon:"game",
      list:[
        {
          url:"https://pony.town/",
          name:"Pony Town",
          desc:"小马镇，像素风小马交流网站"
        },
        {
          url:"https://www.dolldivine.com/mlp-fim-pony-creator.php",
          name:"*Pony Creator",
          desc:"小马生成器"
        },
        {
          url:"https://www.dolldivine.com/my-little-pony-quiz.php",
          name:"*Which Pony Are You",
          desc:"小马性格判断"
        },
        {
          url:"https://software.little.my/",
          name:"My Little Software",
          desc:"小马程序汇总"
        },
        {
          url:"https://cloudsdale.xyz/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/",
          name:"小马游戏汇总",
          desc:"收录较知名的小马游戏"
        },
        {
          url:"http://arcade.equestriagaming.net/",
          name:"*Equestria Gaming Arcade",
          desc:"小马游戏在线玩"
        }
      ]
    },
    {
      name:"音乐",
      icon:"music",
      list:[
        {
          url:"https://ponyvillefm.com/",
          name:"*PonyvilleFM",
          desc:"马镇电台"
        },
        {
          url:"https://pony.fm/",
          name:"*Pony FM",
          desc:"小马音乐站，免费下载，无限上传！"
        },
        {
          url:"https://bronytunes.com/",
          name:"*BronyTunes",
          desc:"仿 Tunes 小马音乐站"
        },
        {
          url:"https://forestrainmedia.com/",
          name:"*Forest Rain",
          desc:"小马同人音乐站点，有实体专辑出售"
        },
        {
          url:"https://ponemusic.net/",
          name:"The Pony Music Archive",
          desc:"小马音乐档案馆"
        },
        {
          url:"http://soundcloud.com/dannyimusic",
          name:"*Daniel Ingram",
          desc:"Daniel Ingram 的音乐网"
        },
        {
          url:"https://cloudsdale.xyz/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/",
          name:"官方音乐打包汇总",
          desc:"也有一些同人作品"
        },
        {
          url:"https://radiobrony.fr/",
          name:"RadioBrony",
          desc:"Brony 法语广播电台"
        }
      ]
    },
    {
      name:"图片",
      icon:"picture",
      list:[
        {
          url:"https://www.derpibooru.org/",
          name:"*Derpibooru",
          desc:"呆站，目前最大的小马同人图站"
        },
        {
          url:"https://manebooru.art/",
          name:"Manebooru",
          desc:"建站不久，但存有上百万同人图"
        },
        {
          url:"https://mlpvector.club/",
          name:"MLP Vector",
          desc:"小马矢量俱乐部，所有角色/剧集矢量图"
        },
        {
          url:"https://www.deviantart.com/search?q=My%20Little%20Pony",
          name:"*DeviantArt",
          desc:"知名图站，优质模板/同人图/用户群"
        },
        {
          url:"https://www.pixiv.net/en/tags/My%20Little%20Pony",
          name:"*Pixiv",
          desc:"日本知名图站，优质小马同人图"
        },
        {
          url:"https://www.pinterest.com/search/pins/?q=My%20Little%20Pony",
          name:"*Pinterest",
          desc:"知名图站，优质小马同人图"
        },
        {
          url:"https://www.deviantart.com/mlp-fim/gallery/",
          name:"*MLP-FiM",
          desc:"综合性小马组"
        },
        {
          url:"https://www.deviantart.com/mlp-vectorclub/gallery/",
          name:"*MLP Vector Gallery",
          desc:"小马矢量图组"
        },
        {
          url:"https://thisponydoesnotexist.net/",
          name:"*This Pony Does Not Exist",
          desc:"AI 生成小马头像"
        },
        {
          url:"https://tieba.baidu.com/p/5210002028",
          name:"库可夫的 DA 图片搬运楼",
          desc:"打不开 DA 的话来这里看看也不错哦"
        },
        {
          url:"https://www.equestriacn.com/category/fanart/tupiantuijian/daily-pony-gallery",
          name:"每日小马图片推荐",
          desc:"每天都有新鲜出炉的好看小马图片"
        },
        {
          url:"https://www.deviantart.com/fyre-flye/",
          name:"*Lauren Faust",
          desc:"动画主创劳伦·浮士德"
        },
        {
          url:"https://www.deviantart.com/johnjoseco/",
          name:"*JohnJoseco",
          desc:"高产同人绘师"
        },
        {
          url:"https://www.deviantart.com/csimadmax",
          name:"*Madmax",
          desc:"Madmax 三格漫画是特色，梗非常多"
        },
        {
          url:"https://www.deviantart.com/pixelkitties",
          name:"*PixelKitties",
          desc:"PK 的图也具有丰富的细节和广泛的借鉴元素"
        },
        {
          url:"https://www.deviantart.com/egophiliac/",
          name:"*Egophiliac",
          desc:"Ego 最大的特色是塞拉斯蒂娅和露娜两公主"
        },
        {
          url:"https://www.deviantart.com/mrponiator/",
          name:"*Mr. Poniator",
          desc:"新番过后会发布Flash版里剧情、恶搞剧情"
        },
        {
          url:"https://www.deviantart.com/saturnspace/",
          name:"*Saturnspace",
          desc:"来看看博士和小呆"
        }
      ]
    },
    {
      name:"小说",
      icon:"book",
      list:[
        {
          url:"https://fimtale.com/",
          name:"FimTale",
          desc:"中文小马同人文站点"
        },
        {
          url:"https://www.fimfiction.net/",
          name:"FimFiction",
          desc:"目前最大最知名的小马同人文站点"
        },
        {
          url:"https://www.equestriadaily.com/2011/09/eqd-super-simple-archiver-test.html",
          name:"*EquestriaDaily Archiver",
          desc:"马国日报提供的同人文搜索过滤引擎"
        },
        {
          url:"http://mlpaudiobooks.net/",
          name:"MLP Audiobooks",
          desc:"小马有声书资源站"
        },
        {
          url:"https://www.ponyfictionarchive.net/",
          name:"Pony Fiction Archive",
          desc:"小说档案馆"
        },
        {
          url:"https://www.ministryofimage.net/",
          name:"Ministry of Image",
          desc:"印象部是俄罗斯高质量小马同人书籍印刷站"
        },
        {
          url:"http://book.fallout-equestria.com/",
          name:"Absolutely Everything",
          desc:"辐射小马国及同人书籍印刷站"
        },
        {
          url:"https://github.com/JockeTF/fimfarchive",
          name:"Fimfarchive",
          desc:"FimFiction 全站小说打包收录项目"
        },
        {
          url:"https://clopfic.com/",
          name:"Clopfiction",
          desc:"由 Cloppers 创作的 Clopfics，注意 NSFW"
        }
      ]
    },
    {
      name:"维基",
      icon:"info",
      list:[
        {
          url:"https://mlp.fandom.com/",
          name:"*MLP Fandom Wiki",
          desc:"目前最全的 MLP 百科，部分条目有简繁中文"
        },
        {
          url:"https://mlp.huijiwiki.com/",
          name:"MLP 中文维基",
          desc:"填坑中，不过主要条目都已全"
        },
        {
          url:"https://mlpfanart.fandom.com/",
          name:"*MLP Fan Art Wiki",
          desc:"介绍较为知名的同人作品"
        },
        {
          url:"https://falloutequestria.fandom.com/",
          name:"*Fallout: Equestria Wiki",
          desc:"《辐射：小马国》维基"
        },
        {
          url:"https://austraeoh.huijiwiki.com/",
          name:"《东往之驹》中文维基",
          desc:"Imploding Colon 长篇同人系列中文资料站"
        },
        {
          url:"http://www.mylittlewiki.org/",
          name:"My Little Wiki",
          desc:"G1 至 G4 玩具的详细介绍"
        }
      ]
    },
    {
      name:"资源",
      icon:"file archive",
      list:[
        {
          url:"http://yayponies.no/",
          name:"YayPonies",
          desc:"著名小马资源站，官方同人都有部分，其中官方特别全"
        },
        {
          url:"http://www.theponyarchive.com/",
          name:"*The Pony Archive",
          desc:"小马档案馆，存放各种同人作品，不乏被删除的珍贵资源"
        },
        {
          url:"https://dl.gdstudio.xyz/",
          name:"GD 资源站",
          desc:"可在线观看所有小马剧集"
        },
        {
          url:"https://h8cs-my.sharepoint.com/:f:/g/personal/od223_365a1_me/Era9nT62KgtIsn1qfaAKE-oBhelma5KGiTr4sPCO5E5Z-A",
          name:"六六的资源合辑",
          desc:"密码 Lp3TcG8S，由马迷“六六的哲学”制作的资源合辑"
        },
        {
          url:"https://cloudsdale.xyz/",
          name:"云中城",
          desc:"CloudsDale，存储了所有小马剧集和部分同人游戏"
        },
        {
          url:"http://manhua.dmzj.com/tags/search.shtml?s=%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC",
          name:"小马官漫",
          desc:"中文漫画"
        },
        {
          url:"https://needforponies.fr/",
          name:"*Need for Ponies",
          desc:"内有小马剧集/电影/视频/漫画/音乐"
        },
        {
          url:"http://mlp-france.com/",
          name:"*MLP France",
          desc:"内有小马剧集/电影/漫画，以及早期小马剧集"
        },
        {
          url:"http://www.newlunarrepublic.fr/",
          name:"*New Lunar Republic",
          desc:"新露娜共和国，内有小马剧集/电影/漫画"
        },
        {
          url:"http://www.mlpstream.org/",
          name:"MLP Stream",
          desc:"S1 至 S7 资源超清在线观看/下载"
        }
      ]
    }
  ]
}
const el = (tag, attrs, content) => `<${tag} ${attrs.join(" ")}>${content}</${tag}>`;

async function handleRequest(request) {
  const init = {
    headers: {
      'content-type': 'text/html;charset=UTF-8',
    },
  }
  return new Response(renderHTML(renderIndex(),config.selling_ads? renderSeller() :null), init);
}
addEventListener('fetch', event => {
  return event.respondWith(handleRequest(event.request))
})

/*通过分析链接 实时获取favicon
* @url 需要分析的Url地址
*/
function getFavicon(url){
  if(url.match(/https{0,1}:\/\//)){
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url.split('//')[1];
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=" + url;
  }else{
    //return "https://ui-avatars.com/api/?bold=true&size=36&background=0D8ABC&color=fff&rounded=true&name=" + url;
    return "https://www.google.cn/s2/favicons?sz=64&domain_url=http://" + url;
  } 
}

/** Render Functions
 *  渲染模块函数
 */

function renderIndex(){
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/ShadowDumb/Canterlot-Site/"','target="_blank"'],el('i',['class="github icon"'],"") + 'Canterlot-Site') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
  return renderHeader() + renderMain() + footer;
}

function renderHeader(){
  const item = (template,name) => el('a',['class="item"',`data-url="${template}"`],name);

  var nav = el('div',['class="ui large secondary inverted menu"'],el('div',['class="item"'],el('p',['id="hitokoto"'],'条条大路通罗马')))
  var title = el('h1',['class="ui inverted header"'],el('i',[`class="${config.logo_icon} icon"`],"") + el('div',['class="content"'],config.title + el('div',['class="sub header"'],config.subtitle)));
  var menu = el('div',['id="sengine"','class="ui bottom attached tabular inverted secondary menu"'],el('div',['class="header item"'],'&nbsp;') + config.search_engine.map((link,key) =>{
    if(key == 0){
      return el('a',['class="active item"',`data-url="${link.template}"`],link.name);
    }else{
      return item(link.template,link.name);
    }
  }).join(""))
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://derpibooru.org//favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h2',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui two stackable cards"'],item.list.map((link) =>{
      return card(link.url,link.name,link.desc);
    }).join(""));

    return el('div',['class="ui basic segment"'],divider + content);
  }).join("");

  return el('main',[],el('div',['class="ui container"'],main));
}

function renderSeller() {
  const item = (type,content) => el('div',['class="item"'],el('i',[`class="${type} icon"`],"") + el('div',['class="content"'],content));
  var title = el('h1',['class="ui yellow dividing header"'],el('i',['class="gem outline icon"'],"") + el('div',['class="content"'],config.sell_info.domain + ' 正在出售'));
  var action = el('div',['class="actions"'],el('div',['class="ui basic cancel inverted button"'],el('i',['class="reply icon"'],"") + '返回'));

  var contact = config.sell_info.contact.map((list) => {
    return item(list.type,list.content);
  }).join("");
  var column = el('div',['class="column"'],el('h3',['class="ui center aligned icon inverted header"'],el('i',['class="circular envelope open outline grey inverted icon"'],"") + '联系我') + el('div',['class="ui relaxed celled large list"'],contact));
  var price = el('div',['class="column"'],el('div',['class="ui large yellow statistic"'],el('div',['class="value"'],el('i',[`class="${config.sell_info.mon_unit} icon"`],"") + config.sell_info.price)));
  var content = el('div',['class="content"'],el('div',['class="ui basic segment"'],el('div',['class="ui two column stackable center aligned grid"'],el('div',['class="ui inverted vertical divider"'],'感兴趣？') + el('div',['class="middle aligned row"'],price + column))));

  return el('div',['id="seller"','class="ui basic modal"'],title + content + action);
}

function renderHTML(index,seller) {
  return `<!DOCTYPE html>
  <html lang="zh">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
      <link rel="shortcut icon" href="https://raw.githubusercontent.com/ShadowDumb/Canterlot-Site/master/favicon.png" type="image/x-icon">
      <link href="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.css" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/gh/sleepwood/cf-worker-dir@0.1.1/style.css" rel="stylesheet">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/semantic-ui-css@2.4.1/semantic.min.js"></script>
  </head>
  <body>
    ${index}
    ${config.selling_ads ? seller : ''}
    <script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
    <script>
      $('#sengine a').on('click', function (e) {
        $('#sengine a.active').toggleClass('active');
        $(e.target).toggleClass('active');
        $('#search-fav').attr('src',$(e.target).data('url').match(`+/https{0,1}:\/\/\S+\//+`)[0] + '/favicon.ico') ;
      });
      $('.search').on('click', function (e) {
          var url = $('#sengine a.active').data('url');
          url = url.replace(`+/\$s/+`,$('#searchinput').val());
          window.open(url);
      });
      /* 鼠标聚焦时，回车事件 */
      $("#searchinput").bind("keypress", function(){
          if (event.keyCode == 13){
          // 触发需要调用的方法
          $(".search").click();
          }
      });
      $('#menubtn').on('click', function (e) {
          $('#seller').modal('show');
      });
    </script>
  </body>
  </html>`
}
