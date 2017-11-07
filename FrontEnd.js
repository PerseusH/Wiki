常见问题：

    你在昨天/本周学到了什么？

    编写代码的哪些方面能够使你兴奋或感兴趣？

    在制作一个Web应用或Web站点的过程中，你是如何考虑他的UI、安全性、高性能、SEO、可维护性以及技术因素的？

    谈谈你喜欢的开发环境。(例如操作系统，编辑器，浏览器，工具等等。)

    你最熟悉哪一套版本控制系统？

    你能描述一下当你制作一个网页的工作流程吗？

    你能描述一下渐进增强和优雅降级之间的不同吗?
      如果提到了特性检测，可以加分。

    请解释一下什么是“语义化的 HTML”。

    你如何对网站的文件和资源进行优化？
      期待的解决方案包括：
      文件合并
      文件最小化/文件压缩
      使用 CDN 托管
      缓存的使用
      其他

    为什么利用多个域名来提供网站资源会更有效？

    浏览器同一时间可以从一个域名下载多少资源？

    请说出三种减少页面加载时间的方法。（加载时间指感知的时间或者实际加载时间）

    如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？
      建议这个项目使用像 EditorConfig (http://editorconfig.org/) 之类的规范
      为了保持一致性，接受项目原有的风格
      直接使用 VIM 的 retab 命令

    你都使用哪些工具来测试代码的性能？
      Profiler, JSPerf, Dromaeo

    Long-Polling, Websockets, SSE(Server-Sent Event) 之间有什么区别？

    请谈一下你对网页标准和标准制定机构重要性的理解。

    什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？
      如果使用import方法对CSS进行导入,会导致某些页面在Windows 下的Internet Explorer出现一些奇怪的现象:以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效(Flash of Unstyled Content),简称为FOUC.原因大致为：
      1，使用import方法导入样式表。
      2，将样式表放在页面底部
      3，有几个样式表，放在html结构的不同位置。其实原理很清楚：当样式表晚于 结构性html 加载，当加载到此样式表时，页面将停止之前的渲染。此样式表被下载和解析后，将重新渲染页面，也就出现了短暂 的 花屏现象。解决方法：使用LINK标签将样式表放在文档HEAD中更多

    请尽可能完整得描述下从输入URL到整个网页加载完毕及显示在屏幕上的整个流程

HTML相关问题：

    doctype（文档类型）的作用是什么？

    浏览器标准模式和怪异模式之间的区别是什么？

    使用 XHTML 的局限有哪些？

    如果页面使用 'application/xhtml+xml' 会有什么问题吗？

    如果网页内容需要支持多语言，你会怎么做？

    在设计和开发多语言网站时，有哪些问题你必须要考虑？

    data-属性的作用是什么？

    如果把 HTML5 看作做一个开放平台，那它的构建模块有哪些？

    请描述一下 cookies，sessionStorage 和 localStorage 的区别？

    请描述一下 GET 和 POST 的区别?

CSS 相关问题：

    描述下 “reset” CSS 文件的作用和使用它的好处。

    解释下浮动和它的工作原理。

    列举不同的清除浮动的技巧，并指出它们各自适用的使用场景。

    解释下 CSS sprites，以及你要如何在页面或网站中使用它。

    你最喜欢的图片替换方法是什么，你如何选择使用。

    讨论CSS hacks，条件引用或者其他。

    如何为有功能限制的浏览器提供网页？

    你会使用哪些技术和处理方法？

    有哪些的隐藏内容的方法（如果同时还要保证屏幕阅读器可用呢？）

    你用过栅格系统吗？如果使用过，你最喜欢哪种？

    你用过媒体查询，或针对移动端的布局/CSS 吗？

    你熟悉 SVG 样式的书写吗？

    如何优化网页的打印样式？

    在书写高效 CSS 时会有哪些问题需要考虑？

    使用 CSS 预处理器的优缺点有哪些？(SASS，Compass，Stylus，LESS)

    描述下你曾经使用过的 CSS 预处理的优缺点。

    如果设计中使用了非标准的字体，你该如何去实现？

    Webfonts (字体服务例如：Google Webfonts，Typekit 等等。)

    解释下浏览器是如何判断元素是否匹配某个 CSS 选择器？

    解释一下你对盒模型的理解，以及如何在 CSS 中告诉浏览器使用不同的盒模型来渲染你的布局。

    请解释一下 * { box-sizing: border-box; } 的作用, 并且说明使用它有什么好处？

    请罗列出你所知道的 display 属性的全部值

    请解释一下 inline 和 inline-block 的区别？

    请解释一下 relative、fixed、absolute 和 static 元素的区别

    你目前在使用哪一套CSS框架，或者在产品线上使用过哪一套？(Bootstrap, PureCSS, Foundation 等等)

    如果有，请问是哪一套？如果可以，你如何改善CSS框架？

    请问你有使用过 CSS Flexbox 或者 Grid specs 吗？

    如果有，请问在性能和效率的方面你是怎么看的？

------------------------------CORE-----------------------------
      CSS:
          盒模型：
              在W3C标准中，如果设置一个元素的宽度和高度，指的是元素内容的宽度和高度，而在Quirks 模式下，IE的宽度和高度还包含了padding和border。
          设置行内元素的高宽：
              在Standards模式下，给<span>等行内元素设置wdith和height都不会生效，而在quirks模式下，则会生效。
          设置百分比的高度：
              在standards模式下，一个元素的高度是由其包含的内容来决定的，如果父元素没有设置百分比的高度，子元素设置一个百分比的高度是无效的用margin:0 auto设置水平居中：使用margin:0 auto在standards模式下可以使元素水平居中，但在quirks模式下却会失效。
          FF设置padding后,div会增加height和width，但IE不会，故需要用!important多设一个height和width 
          FF支持!important，IE则忽略，可用!important为FF特别设置样式
          div的垂直居中问题:
              vertical-align:middle;将行距增加到和整个DIV一样高line-height:200px; 然后插入文字，就垂直居中了。缺点是要控制内容不要换行 
          在mozilla firefox和IE中的BOX模型解释不一致导致相差2px解决方法： 
              div{margin:30px!important;margin:28px;} 
              注意这两个margin的顺序一定不能写反，!important这个属性IE不能识别，但别的浏览器可以识别。
              所以在IE下其实解释成这样：div{maring:30px;margin:28px} 
          CSS透明问题: 
              IE：filter:progid:DXImageTransform.Microsoft.Alpha(style=0,opacity=60)。 
              FF：opacity:0.6。 
              [注] 最好两个都写，并将opacity属性放在下面。
          ie7以下版本不支持圆角。解决方法：Jquery Corners
          cursor:hand|pointer(IE) & cursor:pointer(Others)
          font-size:small(IE: 16px, Others: 13px)。解决方法：指定字体大小。
          并排的多个元素（图片或者链接）的div和div之间的空格符和回车符在firefox中都会被忽略，而IE中却默认显示为空格（约3px）
          CSS双线凹凸边框：
              IE：border:2px outset;
              FF: -moz-border-top-colors: #d4d0c8 white;-moz-border-left-colors: #d4d0c8 white;-moz-border-right-colors:#404040 #808080;-moz-border-bottom-colors:#404040 #808080; 
          建议：页面采用标准XHTML标准编写，较少使用table，CSS定义尽量依照标准DOM，同时兼顾IE、Firefox、Opera等主流浏览器。很多情况下，FF和 Opera的CSS解释标准更贴近CSS标准，也更具有规范性。
          IE Bug:
              双边距Bug: 
                  设置为float的div在ie下设置的margin会加倍。这是一个ie6存在的bug。 
                  解决方案：在这个div里面加上display:inline; 
                      eg.  #IamFloat{ 
                              float:left; 
                              margin:5px;/*IE下margin为10px*/ 
                              display:inline;/*IE下这样margin为5px*/ 
                            } 
              伪类名称连字符Bug:
                  IE在处理伪类时，如果伪类的名称中带有连字符'-'，伪类名称后面就得跟一个空格，不然样式的定义就无效。而在FF中，加不加空格都可以正常处理。
                      eg.  p:first-letter {font-size:300%}
          overflow: hidden;//清楚内部浮动元素的影响

      CSS3:
          /* 使用CSS3可以开启硬件加速，将效果计算任务分配给GPU */
          /* IE9以及更早的版本不支持border-radius,box-shadow和text-shadow属性。*/
          .box {
            -moz- /* Firefox */
            -webkit- /* Safari 和 Chrome */
            无前缀 /* Opera 10.5+, 以及使用了IE-CSS3的IE浏览器 */

            border-radius: radius /* 圆角 */ JS: object.style.borderRadius="25px";
            box-shadow: x y [blur spread color inset]; /* 盒模型阴影 */ JS: object.style.boxShadow="10px 10px 20px #000";
            text-shadow: x y [blur color]; /* 文字阴影 */ JS: object.style.textShadow="10px 10px 20px #000";

            behavior: url(ie-css3.htc); /* 通知IE浏览器调用脚本文件ie-css3.htc作用于'box'类 ，使IE兼容CSS3效果，原理为VML(The Vector Markup Language矢量可标记语言)，可以理解为IE的矢量画笔工具*/
          }
          
          /* IE9以及更早的版本不支持@keyframe,animationm,transform和transition属性。*/
          2D或3D转换:
            transform: rotate[3d](angle)|matrix[3d](n,n,n,n,n,n)|translate[3d](x,y)|scale[3d](x,y); /* 。对元素进行旋转、缩放、移动或倾斜 */
                   JS: object.style.transform="rotate(7deg)";
          过渡效果:
            transition: property duration timing-function delay; 
                   JS: object.style.transition="width 2s";
            .span-hover{
              color: #FFFFFF;
              -moz-transform: scaleY(1) translateZ(0);
              -webkit-transform: scaleY(1) translateZ(0);
              -o-transform: scaleY(1) translateZ(0);
              transform: scaleY(1);
              -webkit-transition: all 150ms ease-out;
              -moz-transition: all 150ms ease-out;
              -o-transition: all 150ms ease-out;
              transition: all 150ms ease-out;
            }

          动画:
            .ani{
              width:480px;
              height:320px;
              margin:50px auto;
              overflow: hidden;
              box-shadow:0 0 5px rgba(0,0,0,1);
              background-size: cover;
              background-position: center;
              -webkit-animation-name: "loops";
              -webkit-animation-duration: 20s;
              -webkit-animation-iteration-count: infinite;
            }
            @-moz-keyframes "loops" /* Firefox */
            @-webkit-keyframes "loops" /* Safari 和 Chrome */
            @-o-keyframes "loops" /* Opera */ {
                0% {
                    background:url(http://d.hiphotos.baidu.com/image/w%3D400/sign=c01e6adca964034f0fcdc3069fc27980/e824b899a9014c08e5e38ca4087b02087af4f4d3.jpg) no-repeat;             
                }
                25% {
                    background:url(http://b.hiphotos.baidu.com/image/w%3D400/sign=edee1572e9f81a4c2632edc9e72b6029/30adcbef76094b364d72bceba1cc7cd98c109dd0.jpg) no-repeat;
                }
                50% {
                    background:url(http://b.hiphotos.baidu.com/image/w%3D400/sign=937dace2552c11dfded1be2353266255/d8f9d72a6059252d258e7605369b033b5bb5b912.jpg) no-repeat;
                }
                75% {
                    background:url(http://g.hiphotos.baidu.com/image/w%3D400/sign=7d37500b8544ebf86d71653fe9f9d736/0df431adcbef76095d61f0972cdda3cc7cd99e4b.jpg) no-repeat;
                }
                100% {
                    background:url(http://c.hiphotos.baidu.com/image/w%3D400/sign=cfb239ceb0fb43161a1f7b7a10a54642/3b87e950352ac65ce2e73f76f9f2b21192138ad1.jpg) no-repeat;
                }
            }
    响应式布局：
        viewport
            /* 在移动设备上设置原始大小显示和是否缩放 */
            <meta name="viewport" content="width=device-width; initial-scale=1.0">
        Bootstrap
        @Media query
            /* 在link中使用@media */
            <link rel="stylesheet" type="text/css" media="only screen and (max-width: 480px),only screen and (max-device-width: 480px)" href="link.css" rel="external nofollow" />
            /* 在样式表中内嵌@media */
            /* 当浏览器的可视区域小于650px */
            @media screen and (max-width: 650px) {
                 #header {height: auto;}
                 #searchform {position: absolute;top: 5px;right: 0;}
                 #content {width: auto; float: none; margin: 20px 0;}
                 #sidebar {width: 100%; float: none; margin: 0;}
             }

    LESS: /* 使用less.js解析 */
         .border-radius (@radius: 3px) { 
          border-radius: @radius; 
          -moz-border-radius: @radius; 
          -webkit-border-radius: @radius; 
         } 
         .button { 
          .border-radius(6px); 
         } 
         .button2 { 
          .border-radius(); 
         }

    函数式编程
------------------------------CORE-----------------------------
    函数截留
    自定义DOM事件
    页面宽高获取
    JS单例模式
    点击后退按钮页面不刷新
    mouseover&mouseout和mouseenter的区别
      mouseover&mouseout默认冒泡
      mouseenter&mouseleave不支持冒泡
    alert(1 && 2)
    CSS3中引发GPU硬件加速的方法
    IOS从哪个版本开始支持position: fixed
    jQuery怎样封装一个DOM对象
    jQuery运行过程
    jQuery中on, live, delegate, bind等方法的区别
    jQuery链式调用实现机制，最后指针指向哪里

    观察者模式的本质是事件队列的抽象

    函数在定义它的作用域中执行。
    js调试：debugger

    图片选择后预览：
      $("#file").on('change', function(){
          var files = this.files;
          if (files) {
              var reader = new FileReader();
              reader.onload = function() {
                  $('#img').attr('src', reader.result);
              }
              reader.readAsDataURL(files[0]);
          }
      })

    原生API
    document.createDocumentFragment()    //创建一个DOM片段
    document.createElement()   //创建一个具体的元素
    document.createTextNode()   //创建一个文本节点
    var div = document.createElement("div");
    target.appendChild(div);
    target.insertBefore(div, existingChild);
    target.removeChild(existingChild); //移出一个元素,返回被移出元素 
    target.replaceChild(existingChild); //替换
    document.getElementsByTagName()    //通过标签名称
    document.getElementsByName()     //通过元素的Name属性的值
    document.getElementById()        //通过元素Id，唯一性 

    冒泡机制--事件代理(委托)
    /*冒泡机制*/
    function click(e){
      var e = e || window.event;  
      var target = e.target || e.srcElement;
      if(target.tagName.toLowerCase() === ‘td’) {  
        alert(target.innerHTML);
      } 
    }

    AJAX原生代码，工作原理--comet(http长连接)--多人在线聊天室，服务器端推送
      var xmlHttp; 
      function createxmlHttpRequest() { 
        if (window.ActiveXObject) {//IE 
          xmlHttp = new ActiveXObject("Microsoft.XMLHTTP"); 
        } else if (window.XMLHttpRequest) {//others 
          xmlHttp = new XMLHttpRequest(); 
        } 
      }
      function doGet(url){ 
        // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码 
        createxmlHttpRequest(); 
        xmlHttp.open("GET",url); 
        xmlHttp.send(null); 
        xmlHttp.onreadystatechange = function() { 
          if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) { 
            alert('success'); 
          } else { 
            alert('fail'); 
          } 
        } 
      } 
      function doPost(url,data){ 
        // 注意在传参数值的时候最好使用encodeURI处理一下，以防出现乱码 
        createxmlHttpRequest(); 
        xmlHttp.open("POST",url); 
        xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); 
        xmlHttp.send(data); 
        xmlHttp.onreadystatechange = function() { 
          if ((xmlHttp.readyState == 4) && (xmlHttp.status == 200)) { 
            alert('success'); 
          } else { 
            alert('fail'); 
          } 
        } 
      } 

    原型链--继承

    什么是闭包，如何使用它，为什么要使用它？setInterval
      从外部访问一个函数的内部对象
      function Dog() {
          this.wow = function() {
             alert('Wow');
          }
          this.yelp = function() {
             this.wow();
          }
      }
      function MadDog() {
          this.yelp = function() {
              var self = this;          
              setInterval(function() {
                  self.wow();//闭包      
              }, 500);
          }
      }
      MadDog.prototype = new Dog();         
      //for test
      var dog = new Dog();
      dog.yelp();
      var madDog = new MadDog();
      madDog.yelp();

    描述一种 JavaScript 中实现 memoization(避免重复运算)的策略。
      把函数的每次执行结果都放入一个键值对(数组也可以，视情况而定)中，在接下来的执行中，在键值对中查找是否已经有相应执行过的值，如果有，直接返回该值，没有才 真正执行函数体的求值部分。

      数组去除重复元素算法
      var arr = [1,2,"1",2,"1",3,4,1,3,5];
      Array.prototype.distinct = function(){
          var memon = [];
          var memos = [];
          for(var i = 0; i < this.length;){
              if(typeof arr[i] === "number"){
                  if(memon[arr[i]]){
                      this.splice(i, 1);
                  } else {
                      memon[arr[i++]] = 1;
                  }
              } else {
                  if(memos[arr[i]]){
                      this.splice(i, 1);
                  } else {
                      memos[arr[i++]] = 1;
                  }
              }
              
          }
      }

    浏览器兼容性--jquery源码
      attachEvent(IE) & addEventListener(Others)
      attribute & property (自定义属性property在IE下可以用属性名直接访问，也可以用getAttribute()访问，其他浏览器只能用getAttribute())
      obj.style.cssText = 'color:red;'(IE) & obj.setAttribute('style','color:red')(Others)
      obj.className='styleClass';|obj.setAttribute('className','styleClass')(IE) & obj.className='styleClass';|obj.setAttribute('class|className','styleClass')(Others)
      obj.setAttribute('onclick','funcitonname();');(IE不支持，其他浏览器都支持)
      window.event(IE)
      event.srcElement(IE) & event.target(Others)
      event.x|y(IE) & event.pageX|pageY(Others)
      document.[domId](IE)
      window.ActiveXObject(IE) & window.XMLHttpRequest(Others)
      IE下可以打开模态窗口(showModalDialog)和非模态窗口(showModelessDialog)，其他浏览器不能。解决方法：直接用window.open(url, name, parameters)
      访问frame对象，window.frameId|frameName(IE) & window.frameName(Others)。解决方法：用window.document.getElementById(frameId)
      访问父结点，obj.parentElement|parentNode(IE) & obj.parentNode(Others)
      innerText|innerHTML|outerHTML(IE) & textContent|innerHTML(Others)
      table操作：在ie中不允许对table和tr的innerHTML赋值，不能使用appendChild增加一个tr。appendChild在往表里插入tr时FIREFOX支持，IE不支持 
                 解决办法：把行插入到TBODY中，不要直接插入到表（Jquery的append(html)方法使用的兼容方式）
      FireFox中类似 obj.style.height = imgObj.height 的语句无效，IE中有效。
                 解决方法：统一使用 obj.style.height = imgObj.height + 'px';     
      建立单选钮：
                 IE: 
                 var rdo =document.createElement('<input name="radiobtn" type="radio" value="checked" />');  
                 其他浏览器 
                 var rdo = document.createElement('input'); 
                 rdo.setAttribute('type','radio'); 
                 rdo.setAttribute('name','radiobtn'); 
                 rdo.setAttribute('value','checked'); 
                 解决办法： 
                 这一点区别和前面的都不一样。这次完全不同，所以找不到共同的办法来解决，那么只有IF-ELSE了 
                 万幸的是，IE可以识别出document的uniqueID属性，别的浏览器都不可以识别出这一属性。问题解决。

    Object.keys({"A":"a","B":"b"});//["A","B"]

    取url的锚点参数
    window.location.hash
    
    Math.floor(Math.random() * scope + start) /* 随机数 */

    document.cookie
    cookie设置，过期时间--优化(隔离静态资源http访问，设置子域名)
    手动设置缓存过期

    变量作用域--闭包--垃圾回收机制
      var ar = 'arg';
      function aa(){
        console.log(ar);//undefined
        var ar = 'x';
        console.log(ar);//x
      }
      aa();
      console.log(ar);//arg

    iframe跨域
    自定义UI组件
    copy一个数组:arr.slice(0, arr.length)

    localStorage更新机制
    localStorage.setItem("key","value");//以“key”为名称存储一个值“value”
    localStorage.getItem("key");//获取名称为“key”的值
    sessionStorage.setItem("key","value");//以“key”为名称存储一个值“value”
    sessionStorage.getItem("key");//获取名称为“key”的值
    localStorage生命周期是永久，这意味着除非用户显式在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。
    sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。

    "2"-1 --> 1
    "2"+1 --> "21"  
    1+"2" --> "12"  

    obj.attachEvent("onclick", func1);//for IE
    obj.attachEvent("onclick", func2);//for IE
    obj.attachEvent("onclick", func3);//for IE
    //func3->func2->func1

    obj.addEventListener("click", func1, false);//for others
    obj.addEventListener("click", func2, false);//for others
    obj.addEventListener("click", func3, false);//for others
    //func1->func2->func3

    obj.onclick = func;//or else
    obj["onclick"] = func;//or else

    <form id="form1" name="form1" method="post" action=""  onsubmit="return checkform(this)">
       <input type="radio" name="oo" value="radiobutton" />
       <input type="radio" name="oo" value="radiobutton" />
       <input type="submit" name="Submit" value="提交" />
    </form>
    $('#form1').submit(function(){return checkform(this)});

    instanceof 用于判断一个变量是否某个对象的实例，如 var a=new Array();alert(a instanceof Array); 会返回 true，同时 alert(a instanceof Object)也会返回 true;这是因为 Array 是 object 的子类。

    解释下 JavaScript 中 this 是如何工作的。
      指向调用者(当前上下文)，function的this在实例化后被实例对象替换

    你是如何测试JavaScript代码的？
      Jasmine

    AMD vs. CommonJS？
      AMD规范->Asynchronous Module Definition,即异步模块加载机制, requireJS，NodeJs，Dojo，JQuery
      CommonJS规范->native js api, Nodejs

    什么是哈希表？
      键值对数据结构，时间复杂度为O(1)

    解释下为什么接下来这段代码不是 IIFE(立即调用的函数表达式)：function foo(){ }();.
      function关键字默认表示function declaration，而不是function expression。function foo(){ }()会报缺少标识符的错误。

    要做哪些改动使它变成 IIFE?
      (function foo(){ }());//function expression
      (function foo(){ })();//function expression

    解释 “JavaScript 模块模式” 以及你在何时使用它。
      使用立即执行函数IIFE

    如果你的模块没有自己的命名空间会怎么样？
      代码污染

    == 和 === 有什么不同？
      ==转换类型，===不转换

    描述以下变量的区别：null，undefined 或 undeclared？该如何检测它们？
      null == undefined  true
      null === undefined  false
      typeof null object
      typeof undefined undefined  
      null != NaN !=  undefined
      typeof NaN number

    只有function可以形成作用域，其他方式(while, for, switch etc.)不能形成作用域。

    请解释变量声明提升(hoisting机制)。
      JavaScript引擎在执行的时候，会把所有变量的声明都提升到当前作用域的最前面。

    .call 和 .apply 的区别是什么？
      obj.call(o, arg0, arg1, arg2, ...);
      obj.apply(o, [arg0, arg1, arg2, ...]);

    functionName.caller and arguments.callee?
      var foo = function(){
          console.log("caller:");
          console.log(foo.caller);
          console.log("callee:");
          console.log(arguments.callee);
      }
      var f = function(){foo();}
      f();
      caller: function(){foo();}
      callee: function(){
                  console.log("caller");
                  console.log(foo.caller);console.log("callee");
                  console.log(arguments.callee);
              }

    请指出 JavaScript 宿主对象（host object）和原生对象（native object）的区别？
      原生对象(native object)(需要new)
        独立于宿主环境的 ECMAScript 实现提供的对象
        Object、Function、Array、String、Boolean、Number、Date、RegExp、Error、EvalError、RangeError、ReferenceError、SyntaxError、TypeError、URIError、ActiveXObject(服务器方面)、Enumerator(集合遍历类)

      宿主对象(host object)(BOM DOM & 自定义对象)
        BOM: Window, Navigator, Screen, History, Location
        DOM: Documewnt, body, Area, form, button, input, Frame, script, table etc.
        “宿主”是网页的运行环境，即“操作系统”和“浏览器”。所有非本地对象都是宿主对象（host object），即由 ECMAScript 实现的宿主环境提供的对象。
        所有的BOM和DOM对象都是宿主对象。因为其对于不同的“宿主”环境所展示的内容不同。其实说白了就是，ECMAScript官方未定义的对象都属于宿主对象，因为其未定义的对象大多数是自己通过ECMAScript程序创建的对象。TML DOM 是 W3C 标准（是 HTML 文档对

    请解释 Function.prototype.bind象模型的英文缩写，Document Object Model for HTML）。
 的作用？
      EcmaScript5给Function扩展了一个方法：bind
      作用：改变上下文的this，与call很相似，返回值是函数
      //使用bind是 返回改变上下文this后的函数
      var a = func.bind(obj, "bind", "");
      a();
      //使用call是 改变上下文this并执行函数
      var b = func.call(obj, "call", "");

    你如何从浏览器的 URL 中获取查询字符串参数。
      var arr = url.split("?")[1].split("&");
      for(var i = 0; i < arr.length; i++){
        var item = arr.split("=");
        if(item[0] == "name"){
          return item[1];
        }
      }

    请举出一个匿名函数的典型用例？
      回调函数

    指出下列代码的区别：
      function Person(){} //function declaration
      var person = Person(); //a Person() return type object
      var person = new Person(); //a Person object

    在什么时候你会使用 document.write()？
      大多数生成的广告代码依旧使用 document.write()，虽然这种用法会让人很不爽。

    请指出浏览器特性检测，特性推断和浏览器 UA 字符串嗅探的区别？
      function selfUserAgent(){   
        if(window.ActiveXObject){ //MSIE 6.0 or below   
            //判断是否是IE 7以上   
            if(document.documentElement && typeof document.documentElement.style.maxHeight != "undefined" ){   
               //判断是否是IE8+   
               if(typeof document.adoptNode != "undefined"){//Safari3 & FF & Opera & Chrome & IE8+   
                   return "IE8及以上";   
               }   
               return "IE7及以上";   
            }   
           return "MSIE 6.0 or below";   
       }else if(typeof window.opera != "undefined"){ //Opera 独占   
            return "Opera";   
       }else if(typeof window.netscape != "undefined"){ //mozilla 独占   
            if(typeof window.Iterator != "undefined"){   
                if(typeof document.styleSheetSets != "undefined"){//Firefox &Opera 9   
                    return "firefox 3及以上";   
                }   
                return "firefox 2";   
            }   
            return "Mozilla 1";   
       }else if(typeof window.pageXOffset != "undefined"){ //Mozilla & safari   
           try{   
               if(typeof external.AddSearchProvider != "undefined"){ //firefox & chrome   
                   return "chrome";   
                }   
            } catch (e) {   
                return "safari";   
            }   
        }else { //unknown   
            return "unknown";   
        }   
    }

    你使用过 JavaScript模板系统吗？
      Ext.js,D3.js

    如有使用过，请谈谈你都使用过哪些库，比如 Mustache.js，Handlebars 等等。
      Angular.js

    "attribute" 和 "property" 的区别是什么？
      IE6-7中无区别
      attribute是和dom相关的属性，在HTML代码中可见
      property是js对象键值对属性
      id和class既是attribute，也有对应的property，不管使用哪种方法都可以访问和修改
      elem.getAttribute('id');
      elem.setAttribute('id', 'testVal');
      elem.removeAttribute('id');
      elem.id = 'hello';
      elem.class = 'hello';
      console.log(radio.getAttribute('checked')); // checked
      console.log(radio.checked); // true

    为什么扩展javascript内置对象是个坏做法
      因为你不知道哪一天浏览器或javascript本身就会实现这个方法，而且和你扩展的实现有不一致的表现。到时候你的javascript代码可能已经在无数个页面中执行了数年，而浏览器的实现导致所有使用扩展原型的代码都崩溃了。

    请指出 document load 和 document ready 两个事件的区别。 
      Dom Ready是在dom加载完成后就可以直接对dom进行操作，比如一张图片只要<img>标签完成，不用等这个图片加载完成，就可以设置图片的宽高的属性或样式等； 
      Dom Load是在整个document文档（包括了加载图片等其他信息）加载完成后就可以直接对dom进行操作，比如一张图片要等这个图标加载完成之后才能设置图片的宽高的属性或样式等；  

    请解释一下JavaScript的同源策略。    
      在JavaScript中，有一个很重要的安全性限制，被称为“Same-Origin Policy”（同源策略）。这一策略对于JavaScript代码能够访问的页面内容做了很重要的限制，即JavaScript只能访问与包含它的文档在同一域下的内容。
      所谓同源是指，域名，协议，端口相同。 

    请解释 JSONP 的工作原理，以及它为什么不是真正的 AJAX。
      ajax的核心是通过XmlHttpRequest从服务器获得非本页数据，然后用javascript来操作DOM而更新页面，而jsonp的核心则是动态添加<script>标签来调用服务器提供的js脚本。

    如何实现这些代码：[1,2,3,4,5].duplicator(); //[1,2,3,4,5,1,2,3,4,5]
      Array.prototype.duplicator = function(){
          var len = this.length;
          for(var i = 0; i < len; i++){
              this.push(this[i]);
          }
      }

    什么是 "use strict"; ? 使用它的好处和坏处分别是什么？
      好处：
        // 限制函数中的arguments改变参数
        var run = function(fromWhom){
            arguments[0] = 'alien';//arguments[0]即fromWhom，use strict模式下无效
            alert(fromWhom);
        }
        run('zombie');//显示'alien'，use strict模式下显示'zombie'，
        // 检查对象中的重复键
        var o = {x:"123",x:"12"};
        eval("var c = 3;");alert(c);
        // 检查未声明变量
        c = 3;
        // 检查重复的参数
        function foo(x, x){};
        // 检查只读属性是否被修改
        var person = {};
        Object.defineProperty(person, "name", {
          writable: false,
          value: "Nick"
        });
        person.name = "";

      坏处：
        可能会使其他引入的脚本抛异常

    页面滚动至指定位置：
      $('html, body').animate({
          scrollTop: $(targetSelector).offset().top + 'px'
      }, time);

jQuery 相关问题：

    解释"chaining"。

    解释"deferreds"。

    你知道哪些针对 jQuery 的优化方法。

    请解释 .end() 的用途。

    你如何给一个事件处理函数命名空间，为什么要这样做？

    请说出你可以传递给 jQuery 方法的四种不同值。

    选择器（字符串），HTML（字符串），回调函数，HTML元素，对象，数组，元素数组，jQuery对象等。

    什么是效果队列？

    请指出 .get()，[]，eq() 的区别。

    请指出 $ 和 $.fn 的区别，或者说出 $.fn 的用途。

    请优化下列选择器：
      $(".foo div#bar:eq(0)")
      $(".foo").find("#bar").first()

代码相关的问题：

    modulo(12, 5) // 2
    问题：实现满足上述结果的modulo函数

    "i'm a lasagna hog".split("").reverse().join("");
    问题：上面的语句的返回值是什么？ 答案："goh angasal a m'i"

√   ( window.foo || ( window.foo = "bar" ) );
    问题：window.foo 的值是什么？ 答案："bar" 只有 window.foo 为假时的才是上面答案，否则就是它本身的值。

    var foo = "Hello"; (function() { var bar = " World"; alert(foo + bar); })(); alert(foo + bar);
    问题：上面两个 alert 的结果是什么 答案: "Hello World" 和 ReferenceError: bar is not defined

√   var foo = [];
    foo.push(1);
    foo.push(2);
    问题：foo.length 的值是什么？ 答案：2

    var v = "hello";
    (function(){
      console.log(v);
      var v = "world";
    })();
    问题：这段代码运行的结果是什么呢？答案是：undefined


Html5问题：


CSS3问题：