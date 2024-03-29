s.Media.playerName = "cna_online_ooyalaplayer";

function omniInitMediaTracking(mediaName, mediaLength, playerName) {
    console.log("Media Opened and Played");
    _satellite.notify("Media Opened and Played" + mediaName + ":" + mediaLength);
    if(MediaInfo.mediatype.indexOf('Photo') > -1) {
          s.Media.playerName = "cna_online_photoviewer";
    }
    else if(MediaInfo.mediatype.indexOf('Podcast') > -1) {
          s.Media.playerName = "cna_online_podcastplayer";
    }
    else if(MediaInfo.mediatype.indexOf('Video') > -1) {
         window.dataLayer = window.dataLayer || [];
         window.dataLayer.push({
            'event': 'firstVideoView',
            'videotitle': mediaName
         });
    }
    s.Media.open(mediaName, mediaLength, playerName);
    s.Media.play(mediaName, 0);
}

function omniMediaTrackingStop(mediaName, mediaPosition) {
    s.Media.stop(mediaName, mediaPosition);
}

function omniMediaTrackingResume(mediaName, mediaPosition) {
    s.Media.play(mediaName, mediaPosition);
}

function omniMediaTrackingDone(mediaName, mediaPosition) {
    console.log("Media Closed");
    s.Media.stop(mediaName, mediaPosition);
    s.Media.close(mediaName);

}

s.Media.monitor = function(s, media) {
    s.Media.trackVars = "pageName,channel,prop23,prop29,prop35,prop73,eVar9,eVar35,eVar24,eVar57,prop57,eVar58,prop58,eVar59,prop59,eVar84,eVar85,evar89,eVar92,eVar98,eVar99,eVar100,events";
    s.Media.trackEvents = "event90,event91,event14";
    if ((media.event == "MILESTONE") && (media.eventFirstTime)) {
        if (media.milestone == 25) {
            if (_satellite.getVar('contentpublishdate-dl') != "NA") {
                s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
                if (s.prop23) s.eVar89 = 'D=c23';
            }
            s.eVar9 = "D=pageName";
            //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
            s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
            s.Media.contextDataMapping["a.contentType"] = s.eVar24;
            s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
            s.prop57 = _satellite.URL().split('://')[1];
            if (s.prop57) s.eVar57 = 'D=c57';
            if (typeof(MediaInfo) != undefined) {
                s.prop58 = MediaInfo.mediaseriestitle;
                if (s.prop58) s.eVar58 = 'D=c58';
            }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
            if (s.prop59) s.eVar59 = 'D=c59';
            s.prop73 = getCookie('UID');
            if (s.prop73) s.eVar35 = 'D=c73';
            if (typeof(lotauds) != "undefined")
                s.eVar84 = lotauds.Profile.pid;
            if (_satellite.readCookie('cX_P') != "undefined")
                s.eVar85 = _satellite.readCookie('cX_P');
            s.eVar92 = MediaInfo.referenceid;
            s.eVar98 = MediaInfo.mediatype;
            s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
            s.eVar100 = MediaInfo.masrefid;
            fireRequest = true;
        }
        if (media.milestone == 50) {
            if (_satellite.getVar('contentpublishdate-dl') != "NA") {
                s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
                if (s.prop23) s.eVar89 = 'D=c23';
            }
            s.eVar9 = "D=pageName";
            //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
            s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
            s.Media.contextDataMapping["a.contentType"] = s.eVar24;
            s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
            s.prop57 = _satellite.URL().split('://')[1];
            if (s.prop57) s.eVar57 = 'D=c57';
            if (typeof(MediaInfo) != undefined) {
                s.prop58 = MediaInfo.mediaseriestitle;
                if (s.prop58) s.eVar58 = 'D=c58';
            }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
            if (s.prop59) s.eVar59 = 'D=c59';
            s.prop73 = getCookie('UID');
            if (s.prop73) s.eVar35 = 'D=c73';
            if (typeof(lotauds) != "undefined")
                s.eVar84 = lotauds.Profile.pid;
            if (_satellite.readCookie('cX_P') != "undefined")
                s.eVar85 = _satellite.readCookie('cX_P');
            s.eVar92 = MediaInfo.referenceid;
            s.eVar98 = MediaInfo.mediatype;
            s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
            s.eVar100 = MediaInfo.masrefid;          
            fireRequest = true;
        }
        if (media.milestone == 75) {
            if (_satellite.getVar('contentpublishdate-dl') != "NA") {
                s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
                if (s.prop23) s.eVar89 = 'D=c23';
            }
            s.eVar9 = "D=pageName";
            //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
            s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
            s.Media.contextDataMapping["a.contentType"] = s.eVar24;
            s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
            s.prop57 = _satellite.URL().split('://')[1];
            if (s.prop57) s.eVar57 = 'D=c57';
            if (typeof(MediaInfo) != undefined) {
                s.prop58 = MediaInfo.mediaseriestitle;
                if (s.prop58) s.eVar58 = 'D=c58';
            }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
            if (s.prop59) s.eVar59 = 'D=c59';
            s.prop73 = getCookie('UID');
            if (s.prop73) s.eVar35 = 'D=c73';
            if (typeof(lotauds) != "undefined")
                s.eVar84 = lotauds.Profile.pid;
            if (_satellite.readCookie('cX_P') != "undefined")
                s.eVar85 = _satellite.readCookie('cX_P');
            s.eVar92 = MediaInfo.referenceid;
            s.eVar98 = MediaInfo.mediatype;
            s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
            s.eVar100 = MediaInfo.masrefid;          
            fireRequest = true;
        }
      
        if (media.milestone == 90) {
            if (_satellite.getVar('contentpublishdate-dl') != "NA") {
                s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
                if (s.prop23) s.eVar89 = 'D=c23';
            }
            s.eVar9 = "D=pageName";
            //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
            s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
            s.Media.contextDataMapping["a.contentType"] = s.eVar24;
            s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
            s.prop57 = _satellite.URL().split('://')[1];
            if (s.prop57) s.eVar57 = 'D=c57';
            if (typeof(MediaInfo) != undefined) {
                s.prop58 = MediaInfo.mediaseriestitle;
                if (s.prop58) s.eVar58 = 'D=c58';
            }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
            if (s.prop59) s.eVar59 = 'D=c59';
            s.prop73 = getCookie('UID');
            if (s.prop73) s.eVar35 = 'D=c73';
            if (typeof(lotauds) != "undefined")
                s.eVar84 = lotauds.Profile.pid;
            if (_satellite.readCookie('cX_P') != "undefined")
               s.eVar85 = _satellite.readCookie('cX_P');
            s.eVar92 = MediaInfo.referenceid;
            s.eVar98 = MediaInfo.mediatype;
            s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
            s.eVar100 = MediaInfo.masrefid;              
            fireRequest = true;
        }
        if (fireRequest) {
            fireRequest = false;
            sendRequest();
        }
    }
    if (media.event == "OPEN") {
      if( MediaInfo.mediacategory == 'Live') {
       s.Media.contextDataMapping["a.media.view"] = "event91:"+getCookie('UID')+"|LIVE TV,event14";
      }
      else {
      	s.Media.contextDataMapping["a.media.view"] = "event91:"+getCookie('UID')+"|"+s.prop7+",event14";
      }
        if (_satellite.getVar('contentpublishdate-dl') != "NA") {
            s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
            if (s.prop23) s.eVar89 = 'D=c23';
        }
        s.eVar9 = "D=pageName";
        //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
        s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
        s.Media.contextDataMapping["a.contentType"] = s.eVar24;
        s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
        s.prop57 = _satellite.URL().split('://')[1];
        if (s.prop57) s.eVar57 = 'D=c57';
        if (typeof(MediaInfo) != undefined) {
            s.prop58 = MediaInfo.mediaseriestitle;
            if (s.prop58) s.eVar58 = 'D=c58';
        }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
        if (s.prop59) s.eVar59 = 'D=c59';
        s.prop73 = getCookie('UID');
        if (s.prop73) s.eVar35 = 'D=c73';
        if (typeof(lotauds) != "undefined")
            s.eVar84 = lotauds.Profile.pid;
        if (_satellite.readCookie('cX_P') != "undefined")
            s.eVar85 = _satellite.readCookie('cX_P');
        s.eVar92 = MediaInfo.referenceid;
        s.eVar98 = MediaInfo.mediatype;
        s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
        s.eVar100 = MediaInfo.masrefid;      
        sendRequest();
                    try {
          var date = new Date();
          var meID = _satellite.readCookie('UID');
          var data = JSON.stringify({
               events: 1,
               site: 'CNA',
               mediatitle:  'cna_'+MediaInfo.mediatitle,
               mediaplayer: s.Media.playerName,
               eventdate: date.toISOString(),
               contenttype: s.eVar24,
               pagename: s.pageName,
               pageurl: s.prop57,
               seriesname: s.prop58,
               mediainfo: s.prop59,
               meid: meID
          })
          var xhttp = new XMLHttpRequest();
          xhttp.open("POST", "https://rt.mediacorp.sg/realtime/real-time-media", true);
          xhttp.setRequestHeader("Content-type", "application/json");
          xhttp.send(data);
        }catch(err) {
          console.log(err);
        }
        s.eVar24 = ""
        s.prop73 = ""
        s.eVar85 = ""
    }
    if (media.event == "CLOSE") {
        if (_satellite.getVar('contentpublishdate-dl') != "NA") {
            s.prop23 = _satellite.getVar('contentpublishdate-dl').substring(0, 4) + '-' + _satellite.getVar('contentpublishdate-dl').substring(4, 6) + '-' + _satellite.getVar('contentpublishdate-dl').substring(6, 8);
            if (s.prop23) s.eVar89 = 'D=c23';
        }
        s.eVar9 = "D=pageName";
        //s.eVar24 = "cna_Free_" + videoInfo.contentId + "_" +(videoInfo.cTitle == 'Live TV' ? 'Live' : videoInfo.cTitle == 'Videos' ?'Videos' : videoInfo.cTitle == 'Channel NewsAsia' ?'Videos': 'Shows');
        s.eVar24 = "cna_Free_" + MediaInfo.mediacategory + "_" +(MediaInfo.mediatype);
        s.Media.contextDataMapping["a.contentType"] = s.eVar24;
        s.prop29 = s.getPreviousValue(s.pageName, 'gpv_v9', '');
        s.prop57 = _satellite.URL().split('://')[1];
        if (s.prop57) s.eVar57 = 'D=c57';
        if (typeof(MediaInfo) != undefined) {
            s.prop58 = MediaInfo.mediaseriestitle;
            if (s.prop58) s.eVar58 = 'D=c58';
        }
            var videoType = MediaInfo.mediacategory == 'Live' ? 'LN' : 'CP';
            s.prop59 = "cna:"+MediaInfo.mediaid+":0:F:"+videoType+ ":NA:NA:NA:NA:NA:NA:NA:NA:NA";
        if (s.prop59) s.eVar59 = 'D=c59';
        s.prop73 = getCookie('UID');
        if (s.prop73) s.eVar35 = 'D=c73';
        if (typeof(lotauds) != "undefined")
            s.eVar84 = lotauds.Profile.pid;
        if (_satellite.readCookie('cX_P') != "undefined")
            s.eVar85 = _satellite.readCookie('cX_P');
         s.eVar92 = MediaInfo.referenceid;
         s.eVar98 = MediaInfo.mediatype;
         s.eVar99 = _satellite.getVar('doctype-dl') + '_' + _satellite.getVar('contentid-dl') + '_' + _satellite.getVar('contentname-dl');
         s.eVar100 = MediaInfo.masrefid;      
        sendRequest();
        s.eVar24 = ""
        s.prop73 = ""
        s.eVar85 = ""
    }

    function sendRequest() {
        s.Media.track(media.name);
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
