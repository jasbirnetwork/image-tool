
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
    var referrer = document.referrer || false;

    if(referrer) {
        let referrer_filter = ref.split('/');
        if(window.location.origin == referrer_filter[0] + "//" + referrer_filter[2]) {
            referrer = false;
        }
    }

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

    // //TODO
    // navigator.connection.addEventListener('change', function() {
    //     // network change
    // });

    
    var performance = window.performance, round = Math.round;
    window.startTimeSpentSeconds = round(performance.now()/1000);
    window.timeSpentSeconds = 0;
    var timer;

    function updateTimeSpent(){
        timer = setTimeout(function() {
            window.timeSpentSeconds += 1;
            updateTimeSpent();
        },1000);
    }
    updateTimeSpent();


    document.addEventListener('visibilitychange', function() {
        if(document.visibilityState === "hidden") {
            
            clearTimeout(timer);
        } else {
            updateTimeSpent();
            console.log(window.startTimeSpentSeconds,  window.timeSpentSeconds)
        }
    });

    window.addEventListener('beforeunload', function (e) { 
        e.preventDefault(); 
        alert("lllllll")
        return undefined;
    }); 
    
    function urldecode (str) {
        return decodeURIComponent((str + '').replace(/\+/g, '%20'));
    }
    
    function convertToPared(str_data){
        var SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
        while (SCRIPT_REGEX.test(str_data)) {
            str_data = str_data.replace(SCRIPT_REGEX, "");
        }
        return str_data;
    }

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
        if($('#cyber1296074019').length > 0) {
            $('#cyber1296074019').html(parsed_data);
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
            //     url: URLDATA+"/?pageurl="+Location+"&language="+userLang+"&browser_name="+navigator.sayswho+"&date="+dt+"&time="+time+"&google_id="+gaid+"&allbcookies="+myJSON+"&name="+name+"&email="+email+"&mobile_no="+mobile_no+"&form_data="+form_data+"&flag="+flag,
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
};
f();
