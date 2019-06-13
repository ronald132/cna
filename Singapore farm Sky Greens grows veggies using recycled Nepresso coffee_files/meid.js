
      "use strict";
      (function () {
        
        var UIDKey = 'UID';
        var SSOIDKey = 'sso_id';
        var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        
        var getCookie = function (name) {
          var cookieValue = '';
          var value = "; " + document.cookie;
          var parts = value.split("; " + name + "=");
          if (parts.length >= 2) {
            cookieValue = parts.pop().split(";").shift();
          }
          if(isSafari && name === UIDKey && window.localStorage) {
            var localStorageCookie = window.localStorage.getItem(name);
            if(localStorageCookie && localStorageCookie !== cookieValue) {
              cookieValue = localStorageCookie;
              createCookie(name, localStorageCookie);
            }
          }
          return cookieValue;
        };
        
        var createCookie = function (key, value, ext) {
          var d = new Date();
          var domain = location.host.substring(location.host.indexOf('.'));
          d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
          var expires = "expires=" + d.toUTCString();
          document.cookie = key + "=" + value + "; " + expires + "; domain=" + domain + "; path=/";
          if(ext) {
            document.cookie = key + "=" + value + "; " + expires +  "; path=/";
          }
          if(isSafari && key === UIDKey && window.localStorage) {
             var localStorageCookie = window.localStorage.getItem(key);
             if(localStorageCookie !== value){
              window.localStorage.setItem(key, value);
              window.localStorage.setItem(key + '-created-time', new Date().getTime());
             }
          }
        }
        
        var isValidUID = function (str) {
          return str && str.length >= 15 && !/[\s()'\[\]\<\>]/.test(str);
        }
      
        var firstPartyCookie = getCookie(UIDKey);
        var ssoid = getCookie(SSOIDKey);
        var thirdPartyCookie = '60b37d8f-e16d-4972-aa47-ad7d763d59f7';
        var newUUID = '638128a8-cf9b-40ba-902a-354114c37be4';
        var network = 'mediacorp';
      
        function syncThirdPartyMeID() {
          var callbackMethod = 'SuccessUID_callback_' + (new Date().getTime());
          window[callbackMethod] = function (meID) {
            createCookie(UIDKey, meID, true);
            delete window[callbackMethod];
          }
          var meID = getCookie(UIDKey) || firstPartyCookie;
          var script = document.createElement('script');
          var endpoint = 'https://uid.mediacorp.sg/api/scripts/meid_sync.js?SSOID=' + encodeURIComponent(ssoid) + '&MeID=' + encodeURIComponent(meID);
          endpoint = endpoint + '&meid_callback=' + callbackMethod;
          script.src = endpoint;
          document.head.appendChild(script); //or something of the likes
        }
        
        function syncMeIDSeg() {
          var callbackMethod = 'SuccessMeIDSeg_callback_' + (new Date().getTime());
          window[callbackMethod] = function (segments) {
            createCookie('MeID_Seg', (segments || []).join(','));
            createCookie('MeID_Seg_Synctime', new Date().getTime());
            createCookie('adtechTargetingKeys', (segments || []).join('--')); //for backward compatibility
            delete window[callbackMethod];
          }
          var meID = getCookie(UIDKey) || firstPartyCookie;
          var script = document.createElement('script');
          var endpoint = 'https://uid.mediacorp.sg/api/scripts/meid_seg.js?MeID=' + encodeURIComponent(meID);
          endpoint = endpoint + '&meid_callback=' + callbackMethod;
          script.src = endpoint;
          document.head.appendChild(script); //or something of the likes
        }
      
        if(isValidUID(ssoid) && ssoid === thirdPartyCookie) {
          createCookie(UIDKey, ssoid, true); //save SSOID cookie as 1p cookie
        } 
        else if(isValidUID(ssoid) && ssoid !== thirdPartyCookie) {
          createCookie(UIDKey, ssoid, true);
          syncThirdPartyMeID();
        } 
        else if(!firstPartyCookie) { //no first party cookie
          if(thirdPartyCookie) { //but has 3rd party cookie
            createCookie(UIDKey, thirdPartyCookie, true); //save 3p cookie as 1p cookie
          }
           else {  //also no 3rd party cookie
            createCookie(UIDKey, newUUID, true); //generate new 1p cookie and then sync with 3p
            syncThirdPartyMeID();
          }
        }
         else if(thirdPartyCookie && firstPartyCookie !== thirdPartyCookie) {
          createCookie(UIDKey, thirdPartyCookie, true);
        }
         else if(!thirdPartyCookie) {
          syncThirdPartyMeID();
        }
        var lastSync = getCookie('MeID_Seg_Synctime');
        if(!lastSync || (new Date().getTime() - Number(lastSync)) > 1000 * 60 * 5) {
          syncMeIDSeg();
        }
      })();
    