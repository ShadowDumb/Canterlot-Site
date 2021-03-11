/**
 *  自定义网站配置 
 */
const config = {
  title: "坎特洛特",                 //write your website title
  subtitle: "交通枢纽（施工中）", //write your website subtitle
  logo_icon: "sitemap",               //select your logo by semantic-ui icon (you can get more msg in:https://semantic-ui.com/elements/icon.html)
  hitokoto: false,                     //use hitokoto or not
  search:true,                        //enable search function
  search_engine:[                     //choose search engine which you use
    {
      name:"EqD",
      template:"https://cn.bing.com/search?q=site:equestriadaily.com%20$s"
    },
    {
      name:"EqCN",
      template:"https://www.equestriacn.com/?s=$s"
    },
    {
      name:"FF",
      template:"https://www.fimfiction.net/stories?q=$s"
    },
    {
      name:"FT",
      template:"https://fimtale.com/topics?q=$s"
    },
    {
      name:"维基",
      template:"https://mlp.fandom.com/wiki/Special:Search?scope=internal&navigationSearch=true&query=$s"
    },
    {
      name:"灰机",
      template:"https://mlp.huijiwiki.com/index.php?title=Special:Search&search=$s"
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
      name:"新闻",
      icon:"cloud",
      list:[
        {
          url:"https://www.equestriacn.com/",
          name:"EquestriaCN",
          desc:"小马中国"
        },
        {
          url:"https://www.equestriadaily.com/",
          name:"EquestriaDaily",
          desc:"马国日报"
        }
      ]
    },
    {
      name:"视频",
      icon:"cloud",
      list:[
        {
          url:"https://bronystate.net/",
          name:"BronyState",
          desc:"每周五周六有电影之夜"
        },
        {
          url:"https://derpy.tv/",
          name:"DerpyTV",
          desc:"小呆TV"
        },
        {
          url:"http://ponyvillelive.com/",
          name:"PonyvilleLive",
          desc:"马镇直播"
        },
        {
          url:"https://pony.tube/",
          name:"PonyTube",
          desc:"马迷们的油管"
        },
        {
          url:"https://cytu.be/r/Top10PonyVideos",
          name:"Top 10 Pony Videos",
          desc:"十佳小马视频轮播"
        },
        {
          url:"http://knowyourmeme.com/memes/subcultures/my-little-pony-friendship-is-magic/videos",
          name:"Know Your Meme",
          desc:"实时更新优质小马同人视频集"
        }
      ]
    },
    {
      name:"游戏",
      icon:"cloud",
      list:[
        {
          url:"https://pony.town/",
          name:"Pony Town",
          desc:"小马镇，像素风小马交流网站"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/Fallout%20Equestria%20Remains/",
          name:"辐射小马国：废土",
          desc:"辐射小马国同人Flash游戏"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/Twilight%20Escape/",
          name:"Twilight Escape",
          desc:"暮光逃脱，3D逃脱解密游戏"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/Ambient%20White/",
          name:"Ambient White",
          desc:"冬日传说，画质精美的3D游戏"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/Ashes%20of%20Equestria/",
          name:"Ashes of Equestria",
          desc:"辐射小马国同人3D游戏"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/0:/%E5%BD%A9%E8%99%B9%E5%B0%8F%E9%A9%AC/%E6%B8%B8%E6%88%8F%E6%96%87%E4%BB%B6/My%20Little%20Investigations/",
          name:"小马检事",
          desc:"侦探解密游戏"
        }
      ]
    },
    {
      name:"音乐",
      icon:"cloud",
      list:[
        {
          url:"https://ponyvillefm.com/",
          name:"PonyvilleFM",
          desc:"马镇电台"
        },
        {
          url:"https://pony.fm/",
          name:"Pony FM",
          desc:"小马音乐站，免费下载，无限上传！"
        },
        {
          url:"https://bronytunes.com/",
          name:"BronyTunes",
          desc:"仿Tunes小马音乐站"
        },
        {
          url:"https://forestrainmedia.com/",
          name:"Forest Rain",
          desc:"小马同人音乐站点，有实体专辑出售"
        },
        {
          url:"https://ponemusic.net/",
          name:"The Pony Music Archive",
          desc:"小马音乐档案馆"
        },
        {
          url:"http://soundcloud.com/dannyimusic",
          name:"Daniel Ingram",
          desc:"Daniel Ingram的音乐网，提供了两首未发布的歌曲"
        },
        {
          url:"https://radiobrony.fr/",
          name:"RadioBrony",
          desc:"Brony法语广播电台"
        }
      ]
    },
    {
      name:"图片",
      icon:"cloud",
      list:[
        {
          url:"https://www.derpibooru.org/",
          name:"Derpibooru",
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
          name:"DeviantArt",
          desc:"知名图站，优质模板/同人图/用户群"
        },
        {
          url:"https://www.pixiv.net/en/tags/My%20Little%20Pony",
          name:"Pixiv",
          desc:"日本知名图站，优质小马同人图"
        },
        {
          url:"https://www.pinterest.com/search/pins/?q=My%20Little%20Pony",
          name:"Pinterest",
          desc:"知名图站，优质小马同人图"
        },
        {
          url:"https://www.deviantart.com/mlp-fim/gallery/",
          name:"MLP-FiM",
          desc:"综合性小马组"
        },
        {
          url:"https://www.deviantart.com/mlp-vectorclub/gallery/",
          name:"MLP 矢量图组",
          desc:"小马矢量图组"
        },
        {
          url:"https://tieba.baidu.com/p/5210002028",
          name:"图片搬运楼",
          desc:"库可夫的DA图片搬运楼"
        }
      ]
    },
    {
      name:"小说",
      icon:"cloud",
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
          name:"EqD Archiver",
          desc:"马国日报提供的同人文搜索过滤引擎"
        },
        {
          url:"http://mlpaudiobooks.net/",
          name:"MLP Audiobooks",
          desc:"小马有声书资源站，可在线听，目前只有英/俄语资源"
        },
        {
          url:"https://www.ponyfictionarchive.net/",
          name:"Pony Fiction Archive",
          desc:"小说档案馆"
        },
        {
          url:"https://www.ministryofimage.net/",
          name:"Ministry of Image",
          desc:"印象部是俄罗斯质量超高的小马同人实体书印刷站"
        },
        {
          url:"http://book.fallout-equestria.com/",
          name:"Absolutely Everything",
          desc:"zemming组织的辐射小马国及同人实体书印刷站"
        }
      ]
    },
    {
      name:"维基",
      icon:"cloud",
      list:[
        {
          url:"https://mlp.huijiwiki.com/",
          name:"MLP中文维基",
          desc:"填坑中，不过主要条目都已全"
        },
        {
          url:"https://mlp.fandom.com/",
          name:"MLP英文维基",
          desc:"目前最全的MLP百科，部分条目有简繁中文版"
        },
        {
          url:"https://mlpfanart.fandom.com/",
          name:"MLP同人维基",
          desc:"介绍较为知名的同人作品"
        },
        {
          url:"https://austraeoh.huijiwiki.com/",
          name:"《东往之驹》中文维基",
          desc:"Imploding Colon的长篇同人系列资料站的中文版本"
        },
        {
          url:"http://www.mylittlewiki.org/",
          name:"MLP玩具维基",
          desc:"G1-G4玩具的详细介绍"
        }
      ]
    },
    {
      name:"资源",
      icon:"cloud",
      list:[
        {
          url:"http://yayponies.no/",
          name:"YayPonies",
          desc:"著名小马资源站，官方同人都有部分，其中官方特别全"
        },
        {
          url:"http://www.theponyarchive.com/",
          name:"The Pony Archive",
          desc:"小马档案馆，存放各种同人作品，不乏被删除的珍贵资源"
        },
        {
          url:"https://dl.gdstudio.xyz/",
          name:"GD资源站",
          desc:"可在线观看所有小马剧集"
        },
        {
          url:"https://h8cs-my.sharepoint.com/:f:/g/personal/od223_365a1_me/Era9nT62KgtIsn1qfaAKE-oBhelma5KGiTr4sPCO5E5Z-A",
          name:"六六的资源合辑",
          desc:"密码Lp3TcG8S，由马迷“六六的哲学”制作的资源合辑"
        },
        {
          url:"https://cloudsdale.shadowdumb.workers.dev/",
          name:"CloudsDale",
          desc:"存储了所有小马剧集和部分同人游戏"
        },
        {
          url:"https://needforponies.fr/",
          name:"Need for Ponies",
          desc:"内有小马剧集/电影/视频/漫画/音乐"
        },
        {
          url:"http://mlp-france.com/",
          name:"MLP France",
          desc:"内有小马剧集/电影/漫画，以及早期小马剧集"
        },
        {
          url:"http://www.newlunarrepublic.fr/",
          name:"New Lunar Republic",
          desc:"新露娜共和国，内有小马剧集/电影/漫画"
        },
        {
          url:"http://www.mlpstream.org/",
          name:"MLP Stream",
          desc:"S1-S7资源超清在线观看/下载"
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
  const footer = el('footer',[],el('div',['class="footer"'],'Powered by' + el('a',['class="ui label"','href="https://github.com/sleepwood/cf-worker-dir"','target="_blank"'],el('i',['class="github icon"'],"") + 'Cf-Worker-Dir') + ' &copy; Base on ' + el('a',['class="ui label"'],el('i',['class="balance scale icon"'],"") + 'MIT License')));
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
  var input = el('div',['class="ui left corner labeled right icon fluid large input"'],el('div',['class="ui left corner label"'],el('img',['id="search-fav"','class="left floated avatar ui image"','src="https://www.equestriadaily.com/favicon.ico"'],"")) + el('input',['id="searchinput"','type="search"','placeholder="搜索你想要知道的……"','autocomplete="off"'],"") + el('i',['class="inverted circular search link icon"'],""));
  return el('header',[],el('div',['id="head"','class="ui inverted vertical masthead center aligned segment"'],(config.hitokoto ? el('div',['id="nav"','class="ui container"'],nav) : "") + el('div',['id="title"','class="ui text container"'],title + (config.search ? input + menu :"") + `${config.selling_ads ? '<div><a id="menubtn" class="red ui icon inverted button"><i class="heart icon"></i> 喜欢此域名 </a></div>' : ''}`)))
}

function renderMain() {
  var main = config.lists.map((item) => {
    const card = (url,name,desc)=> el('a',['class="card"',`href=${url}`,'target="_blank"'],el('div',['class="content"'],el('img',['class="left floated avatar ui image"',`src=${getFavicon(url)}`],"") + el('div',['class="header"'],name) + el('div',['class="meta"'],desc)));
    const divider = el('h1',['class="ui horizontal divider header"'],el('i',[`class="${item.icon} icon"`],"")+item.name);

    var content = el('div',['class="ui one stackable cards"'],item.list.map((link) =>{
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
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>${config.title} - ${config.subtitle}</title>
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
