
var f = ()=>{
    
    if (!window.jQuery) {
        var e = document.createElement('script');
        e.src = "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js";
        e.onload = function () {
           $.noConflict();
            console.log('jQuery ' + jQuery.fn.jquery + ' injected.');
        };
        document.head.appendChild(e);
    } 
    
       
    function offset(el) {
        var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    function urldecode (str) {
        //console.log('....'+decodeURIComponent((str + '').replace(/\+/g, '%20')));
      return decodeURIComponent((str + '').replace(/\+/g, '%20'));
    }
    
    function convertToPared(str_data){
        var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (SCRIPT_REGEX.test(str_data)) {
            str_data = str_data.replace(SCRIPT_REGEX, "");
        }
        return str_data;
    }
    
    function jsonpCallback(data){
        var parsed_data = urldecode(data);
        parsed_data = convertToPared(parsed_data);
        console.log('>>'+parsed_data);
        $('#cyber1296074019').html(parsed_data);
    }
    
    var Base64 = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function(e) {
            var t = "";
            var n, r, i, s, o, u, a;
            var f = 0;
            e = Base64._utf8_encode(e);
            while (f < e.length) {
                n = e.charCodeAt(f++);
                r = e.charCodeAt(f++);
                i = e.charCodeAt(f++);
                s = n >> 2;
                o = (n & 3) << 4 | r >> 4;
                u = (r & 15) << 2 | i >> 6;
                a = i & 63;
                if (isNaN(r)) {
                    u = a = 64
                } else if (isNaN(i)) {
                    a = 64
                }
                t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) +
                    this._keyStr.charAt(u) + this._keyStr.charAt(a)
            }
            return t
        },
        decode: function(e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = Base64._utf8_decode(t);
            return t
        },
        _utf8_encode: function(e) {
            e = e.replace(/\r\n/g, "\n");
            var t = "";
            for (var n = 0; n < e.length; n++) {
                var r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r)
                } else if (r > 127 && r < 2048) {
                    t += String.fromCharCode(r >> 6 | 192);
                    t += String.fromCharCode(r & 63 | 128)
                } else {
                    t += String.fromCharCode(r >> 12 | 224);
                    t += String.fromCharCode(r >> 6 & 63 | 128);
                    t += String.fromCharCode(r & 63 | 128)
                }
            }
            return t
        },
        _utf8_decode: function(e) {
            var t = "";
            var n = 0;
            var r = 0;
            var c1 = 0;
            var c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) <<
                        6 | c3 & 63);
                    n += 3;
                }
            }
            return t
        }
    }
    
    window.onload = function () {
      /* !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js')
        fbq('init', '395495918006656');
        fbq('track', 'PageView');*/

     var dt0 = new Date();
     var dt = formatDate(dt0)
    var time = dt0.getHours() + ":" + dt0.getMinutes() + ":" + dt0.getSeconds();
     var L = window.location;
     var Location = L.href;
     var U = navigator.userAgent;
    
     let c = document.cookie.split(";").reduce( (ac, cv, i) => Object.assign(ac, {[cv.split('=')[0]]: cv.split('=')[1]}), {});
    //var successful = document.execCommand('xvfb-run --server-args="-screen 0, 1024x768x24" /usr/bin/cutycapt --url=https://www.dqweek.com/ --out=/home/qtcyberads/public_html/backend/screenshots/img0.png --javascript=on --delay=2   --auto-load-images=on --js-can-open-windows=on --js-can-access-clipboard=on --plugins=on');
    //console.log(L.href);
    //console.log(L.ancestorOrigins[0]);
    var cookies = get_cookies_array();
    var gaid = "";
    for(var name in cookies) {
      //console.log( name + " : " + cookies[name] + "<br />" );
      gaid = cookies['_ga'];
    }
    var userLang = navigator.language || navigator.userLanguage;
    var browser_name = getBrowserName();
            console.log(browser_name)
            var ret = Location.replace('www.','');
            
            var link = ret.split("//");
            var linko = link[1].split(".");
            var linkURL = linko['0'];
            console.log(linkURL);
    var expdate = new Date();
    var visit;
    var timestamp = new Date().getUTCMilliseconds();
    
    expdate.setTime(expdate.getTime() +  (24 * 60 * 60 * 1000 * 365)); 
    
    var myCookie = GetCookie("visitors_uid");
    
        if (myCookie == null) {
            // do cookie doesn't exist stuff;
            SetCookie("visitors_uid", timestamp, expdate, "/", null, false)
        }
        
    
    
    if(!(visit = GetCookie("visit_cyberads"))) 
    visit = 0;
    visit++;
    SetCookie("visit_cyberads", visit, expdate, "/", null, false);
    var allbcookies = document.cookie;
    //console.log(allcookies);
    //document.write ("All Cookies : " + allcookies );
    
    // Get all the cookies pairs in an array
    cookiebarray = allbcookies.split(';');
    var myJSON = JSON.stringify(cookiebarray);
    var browsercookies;
    // Now take key value pair out of this array
  /* for(var i=0; i<cookiebarray.length; i++) {
       name = cookiebarray[i].split('=')[0];
       value = cookiebarray[i].split('=')[1];
       browsercookies = "Key is : " + name + " and Value is : " + value+"@@@";
       allbcookies.concat(allbcookies,name,value,"@@@");
       
    }*/
 
   // console.log(myJSON);
  
   var mySession = JSON.stringify(window.sessionStorage);
   var myLocalStorage = JSON.stringify(window.localStorage);
   var name = "N/A";
   var email = "N/A";
   var mobile_no = "N/A";
   var flag = "N/A";
   /*if (linkURL==='elections'){
      var URLDATA = 'http://206.196.111.101:8002/pixel_tracking_elections';
   }else{*/
    //var URLDATA = '//srvr1px.cyberads.io/pixel_tracking_'+linkURL;
   //}
   //console.log(mySession);
   
    if (linkURL==='elections' || 
        linkURL==='indiaresults' || 
        linkURL==='healthgurues' || 
        linkURL==='itslyrics' || 
        linkURL==='swiftcodeweb' || 
        linkURL==='talescart' || 
        linkURL==='breakingsamachar' || 
        linkURL==='publicvibe' || 
        linkURL==='kannada' || 
        linkURL==='ml' || 
        linkURL==='cinemakadha' || 
        linkURL==='thekarmanews' || 
        linkURL==='tv0' || 
        linkURL==='theprimetime' || 
        linkURL==='b4blaze' || 
        linkURL==='theweekendleader' || 
        linkURL==='marineinsight' || 
        linkURL==='buzzpaper' || 
        linkURL==='cricshots' || 
        linkURL==='rightrasta' || 
        linkURL==='epaper'  || 
        linkURL==='yashdodia' || 
        linkURL==='afkgaming' || 
        linkURL==='vijaykarnatakaepaper' || 
        linkURL==='greaterkashmir' || 
        linkURL==='freefirepcdownload' ||
        linkURL==='mxplayerforpcdownload' ||
        linkURL==='imoforpcappdownload' ||
        linkURL==='jiotvforpcapkfreedownd' ||
        linkURL==='freefireforpcfreedownload' ||
        linkURL==='jiotvforpcapkdownload' ||
        linkURL==='imoforpcapkdownload' ||
        linkURL==='business-plan-writers' ||
        linkURL==='law-of-attraction' ||
        linkURL==='blog-writing-job' ||
        linkURL==='webneel' ||
        linkURL==='dainikakela' ||
        linkURL==='cricketbolo' ||
        linkURL==='uberpanache' ||
        linkURL==='sportsdekh' ||
        linkURL==='latestgossipwu' ||
        linkURL==='bs' ||
        linkURL==='serialgossip'){
        if(linkURL==='business-plan-writers') { linkURL = 'business';}
            if(linkURL==='law-of-attraction') { linkURL ='law';}
            if(linkURL==='blog-writing-job') {linkURL = 'blog';}
            var URLDATA = '//srvr1px.cyberads.io/pixel_tracking_'+linkURL;
        }else{
            var URLDATA = '//srvr1px.cyberads.io/pixel_tracking';
        }
    var form_data='N/A';
    // jQuery.ajax({
    //     url: URLDATA+"/?pageurl="+Location+"&language="+userLang+"&browser_name="+browser_name+"&visitors_uid="+myCookie+"&visit_cyberads="+visit+"&date="+dt+"&time="+time+"&google_id="+gaid+"&allbcookies="+myJSON+"&name="+name+"&email="+email+"&mobile_no="+mobile_no+"&form_data="+form_data+"&flag="+flag,
    //     crossDomain: true, //set as a cross domain requests
    //     //withCredentials:false,
    //     type: 'get',
    //     dataType:"jsonp",
    //     jsonp: 'callback',
    //     jsonpCallback: 'jsonpCallback',
    //     success: function (data) {
    //         /*var res = JSON.parse(data['data']);
    //         if(res==1){
    //         e.preventDefault();
    //         redirectWindow.location;
    
    //         }*/
    //         //alert("Data " + data);
    //     },
    // });
    
    }
    
    // requestAnimationFrame(function updateTimeSpent(){
    //     var timeNow = performance.now();
        
    //     console.log("Seconds spent on page:", round(timeNow/1000))
    //     console.log("Milliseconds spent here:", round(timeNow))
        
    //     requestAnimationFrame(updateTimeSpent);
    // });
    // var performance = window.performance, round = Math.round;


    

    function formatDate(date) {
        var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
    
        return [year, month, day].join('-');
    }

    function get_cookies_array() {
        var cookies = { };
        if (document.cookie && document.cookie != '') {
            var split = document.cookie.split(';');
            for (var i = 0; i < split.length; i++) {
                var name_value = split[i].split("=");
                name_value[0] = name_value[0].replace(/^ /, '');
                cookies[decodeURIComponent(name_value[0])] = decodeURIComponent(name_value[1]);
            }
        }
        return cookies;
       
    }
    function jsonpCallback(data){
        var parsed_data = urldecode(data);
        parsed_data = convertToPared(parsed_data);
        console.log('>>'+parsed_data);
        
    }
    
    function getBrowserName() {
      var browserName = '';
      var userAgent = navigator.userAgent;
      (typeof InstallTrigger !== 'undefined') && (browserName = 'Firefox');
      ( /* @cc_on!@*/ false || !!document.documentMode) && (browserName = 'IE');
      (!!window.chrome && userAgent.match(/OPR/)) && (browserName = 'Opera');
      (!!window.chrome && userAgent.match(/Edge/)) && (browserName = 'Edge');
      (!!window.chrome && !userAgent.match(/(OPR|Edge)/)) && (browserName = 'Chrome');
    
      /**
       * Expected returns
       * Firefox, Opera, Edge, Chrome
       */
      return browserName;
    }
    
    function getCookieVal (offset) {
    var endstr = document.cookie.indexOf (";", offset);
    if (endstr == -1)
        endstr = document.cookie.length;
        return unescape(document.cookie.substring(offset, endstr));
    }
    function GetCookie (name) {
        var arg = name + "=";
        var alen = arg.length;
        var clen = document.cookie.length;
        var i = 0;
        while (i < clen) {
            var j = i + alen;
            if (document.cookie.substring(i, j) == arg){
                return getCookieVal (j);
            }
            
            i = document.cookie.indexOf(" ", i) + 1;
            if (i == 0) { 
                break;
            }
            
        }
        return null;
    }
    function SetCookie (name, value) {
        var argv = SetCookie.arguments;
        var argc = SetCookie.arguments.length;
        var expires = (2 < argc) ? argv[2] : null;
        var path = (3 < argc) ? argv[3] : null;
        var domain = (4 < argc) ? argv[4] : null;
        var secure = (5 < argc) ? argv[5] : false;
        document.cookie = name + "=" + escape (value) +
        ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
        ((path == null) ? "" : ("; path=" + path)) +
        ((domain == null) ? "" : ("; domain=" + domain)) +
        ((secure == true) ? "; secure" : "");
    }

};

   
f();
