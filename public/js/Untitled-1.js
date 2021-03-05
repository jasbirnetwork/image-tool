
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
    
    var userLang = navigator.language || navigator.userLanguage;

    navigator.sayswho = (function(){
        var ua= navigator.userAgent, tem,
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge?)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera').replace('Edg ', 'Edge ');            
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    // requestAnimationFrame(function updateTimeSpent(){
    //     var timeNow = performance.now();
    //     console.log("Seconds spent on page:", round(timeNow/1000))
    //     console.log("Milliseconds spent here:", round(timeNow))
    //     requestAnimationFrame(updateTimeSpent);
    // });
    var performance = window.performance, round = Math.round;
       
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
      

    var dt0 = new Date();
    var dt = formatDate(dt0)
    var time = dt0.getHours() + ":" + dt0.getMinutes() + ":" + dt0.getSeconds();
    var L = window.location;
    var Location = L.href;
    var U = navigator.userAgent;

    var ret = Location.replace('www.','');
    var link = ret.split("//");
    var linko = link[1].split(".");
    var linkURL = linko['0'];

    console.log(linkURL);

    
    var name = "N/A";
    var email = "N/A";
    var mobile_no = "N/A";
    var flag = "N/A";
   
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
        //     url: URLDATA+"/?pageurl="+Location+"&language="+userLang+"&browser_name="+navigator.sayswho+"&visitors_uid="+myCookie+"&visit_cyberads="+visit+"&date="+dt+"&time="+time+"&google_id="+gaid+"&allbcookies="+myJSON+"&name="+name+"&email="+email+"&mobile_no="+mobile_no+"&form_data="+form_data+"&flag="+flag,
        //     crossDomain: true, //set as a cross domain requests
        //     //withCredentials:false,
        //     type: 'get',
        //     dataType:"jsonp",
        //     jsonp: 'callback',
        //     jsonpCallback: 'jsonpCallback',
        //     success: function (data) {
                
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

    function jsonpCallback(data){
        var parsed_data = urldecode(data);
        parsed_data = convertToPared(parsed_data);
        console.log('>>'+parsed_data);
        
    }
};
f();
