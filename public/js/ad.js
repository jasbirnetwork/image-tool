
var init = ()=>{
    
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

    function geolocation() {
        navigator.permissions.query({ name: 'geolocation' }).then(function(position) {
            if(position.state == "granted") {
                navigator.geolocation.getCurrentPosition(function(position) {
                    window.latitude = position.coords.latitude;
                    window.longitude = position.coords.longitude;
                    window.geolocation = position.state ? position.state : false;
                });
            } else {
                window.geolocation = position.state ? position.state : false;
            }
        });
    }

    function logResults(json){
        console.log(json);
        // var parsed_data = urldecode(data);
        // parsed_data = convertToPared(parsed_data);
        // console.log('>>'+parsed_data);
        // $('#cyber1296074019').html(parsed_data);
    }

    if(referrer) {
        let referrer_filter = ref.split('/');
        if(window.location.origin == referrer_filter[0] + "//" + referrer_filter[2]) {
            referrer = false;
        }
    }
    
    window.visitDate = new Date().toUTCString();
    window.timeSpent = new Date().toUTCString();
    var timer;

    function updateTimeSpent(){
        timer = setTimeout(function() {
            window.timeSpent = new Date().toUTCString();
            updateTimeSpent();
        },1000);
    }
    updateTimeSpent();

    document.addEventListener('visibilitychange', function() {
        if(document.visibilityState === "hidden") {
            clearTimeout(timer);
        } else {
            updateTimeSpent();
            console.log(window.visitDate,  window.timeSpent)
        }
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
    
    // function jsonCallback(json){
    //     console.log(json)
    //     // var parsed_data = urldecode(data);
    //     // parsed_data = convertToPared(parsed_data);
    //     // if($('#cyber1296074019').length > 0) {
    //     //     $('#cyber1296074019').html(parsed_data);
    //     // }
    // }

    window.onload = function () {

        var L = window.location;
        var Location = L.href;

        var ret = Location.replace('www.','');
        var link = ret.split("//");
        var linko = link[1].split(".");
        var linkURL = linko['0'];
    
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

            window.serializer = function serializer(){

                let description = document.querySelector('meta[name="description"]')
                geolocation()
                return  {
                    "browser_lang": userLang,
                    "doc_lang": document.documentElement.lang, 
                    "referrer": referrer,
                    "visitDate": window.visitDate,
                    "timeSpent": window.timeSpent,
                    "pageurl": Location,
                    "origin": L.origin,
                    "title": document.title,
                    // "description": description ? description.content : '',
                    // "latitude" :  window.latitude,
                    // "longitude" :  window.longitude,
                    // "geolocation" :  window.geolocation
                }
            }
            URLDATA = "http://127.0.0.1:8000/tracker/v1/pixel_tracking"+"/?pageurl="+Location

            jQuery.ajax({
                url: URLDATA,
                dataType:"jsonp",
                crossDomain: true,
                data: window.serializer(),
                jsonpCallback: "jsonCallback",
                jsonp: "callback",
                success: function (data) {
                    alert(data)
                },
                error: function(xhr, status, error) {
                    
                    console.log(error);
                }
            });

            function jsonCallback(data){
                console.log(data)
                // var parsed_data = urldecode(data);
                // parsed_data = convertToPared(parsed_data);
                // console.log('>>'+parsed_data);
                
            }
        
    }
};
init();
