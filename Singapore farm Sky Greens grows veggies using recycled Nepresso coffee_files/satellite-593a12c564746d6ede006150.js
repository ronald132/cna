  var viewPortWidth = document.getElementsByTagName('html')[0].clientWidth
if (viewPortWidth < 768) {
  deviceType = "mobile";
} else if (viewPortWidth >= 768 && viewPortWidth <= 970) {
  deviceType = "tablet";
} else {
  deviceType = "desktop";
}
function loadPreBid() {
var totalTags  = $('.advertisement__container').length;
  for( var i = 0; i < totalTags; i++ ){
    try{
      var a = $('.advertisement__container')[i];
      var elementValue = a.getAttribute('id');
      var jsonObj = $.parseJSON($('#' + elementValue + '').parent().attr('data-js-options'));
      if (elementValue.indexOf(deviceType) > -1 || elementValue.indexOf('all-platforms') > -1) {
         loadBid(getSlotName(jsonObj), jsonObj.sizes, elementValue);
         //requestBid();
      }
    }
    catch(err){
      console.log("ErrParse" + err.message);
    }
  }
  
}

setTimeout(function() {
  loadPreBid();
}, 500);
$.fn.isOnScreen = function () {
  var win = $(window);

  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || ( viewport.bottom + 150) < bounds.top || viewport.top > bounds.bottom));

};


window.adArray = [];

function getViewport() {
  var viewPortWidth;
  var viewPortHeight;
  // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
  if (typeof window.innerWidth !== 'undefined') {
    viewPortWidth = window.innerWidth;
    viewPortHeight = window.innerHeight;
  } else if (typeof document.documentElement !== 'undefined' && typeof document.documentElement.clientWidth !== 'undefined' && document.documentElement.clientWidth !== 0) {
    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    viewPortWidth = document.documentElement.clientWidth;
    viewPortHeight = document.documentElement.clientHeight;
  } else {
    // older versions of IE
    viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
    viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;
  }
  return {w: viewPortWidth, h: viewPortHeight};
}


function getGoogleAdSizes() {
  var self = this;
  if (self.getViewport().w < 768) {
    return "mobile";
  } else if (self.getViewport().w >= 768 && self.getViewport().w <= 970) {
    return "tablet";
  } else {
    return "desktop";
  }
}


var el;
var ad;
var advertisementId = '';
var adSizeMapping;
var adInitialized = false;
var wasSticked = 0;
var stickyInterval;
var rootElement;
var header;
var headerHeight = 0;
var nextContentDiv;




/**
 * concat the slot information from the options to a valid slotName for DFP
 */
function getSlotName(optionsAd) {
  options2 = optionsAd;
  var slotName = '';
  // set networkCode
  slotName = options2.networkCode;

  // set Channel
  slotName += '/' + options2.adChannel;

  // set Section
  if (window.adSection) {
    slotName += '/' + window.adSection || options2.adSection;
  } else {
    slotName += '/' + options2.adSection;
  }

  // set Unit
  slotName += '/' + options2.adUnit;

  return slotName;
}

var w = window.innerWidth;
window.fn_pageskin = "false";
if ((w >= 1460) || (w >= 375 && w < 728)) {
  window.fn_pageskin = "true";
  window.console.log("Inskin OK");
}


window.CNATAXO1 = [];
window.CNATAXO2 = [];
window.CNANER = [];
window.CNASK = [];
var metas = document.getElementsByTagName('meta');
for (var i = 0; i < metas.length; i++) {
  if (metas[i].getAttribute("content") == "MCNewsArticle") {
    console.log("getCxenseKeywords");
    for (var i = 0; i < metas.length; i++) {
      if (metas[i].getAttribute("name") == "cXenseParse:mdc-taxo") {
        var taxo = metas[i].getAttribute("content");
        var taxoArr = taxo.split(" >> ");
        if (CNATAXO1.indexOf('"' + taxoArr[0] + '"') < 0) {
          CNATAXO1.push('"' + taxoArr[0] + '"');
        }
        if (taxoArr.length > 1) {//console.log("--inside--");
          if (CNATAXO2.indexOf('"' + taxoArr[1] + '"') < 0) {
            var t1 = taxoArr[1].replace(" ++", "").replace(" --", "");
            ;
            CNATAXO2.push('"' + t1 + '"');
          }
        }
      }
      if (metas[i].getAttribute("name") == "cXenseParse:mdc-ner") {
        CNANER.push('"' + metas[i].getAttribute("content") + '"');
      }
      if (metas[i].getAttribute("name") == "cXenseParse:mdc-sk") {
        CNASK.push('"' + metas[i].getAttribute("content") + '"');
      }
    }
  }
}

function getCNAContext() {

  console.log("getCNAContext");
  var metas = document.getElementsByTagName('meta');
  var taxoArray1 = new Array();
  var taxoArray2 = new Array();
  var nerArray = new Array();
  var skArray = new Array();
  for (var i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") == "cXenseParse:mdc-taxo") {
      var taxo = metas[i].getAttribute("content");
      var taxoArr = taxo.split(" >> ");
      if (taxoArray1.indexOf('"' + taxoArr[0] + '"') < 0) {
//taxoArray1.push('"' + taxoArr[0] + '"');
        taxoArray1.push(taxoArr[0]);
      }
      if (taxoArr.length > 1) {//console.log("--inside2--");
        if (taxoArray2.indexOf('"' + taxoArr[1] + '"') < 0) {
          var t1 = taxoArr[1].replace(" ++", "").replace(" --", "");
// taxoArray2 .push('"'+taxoArr[1]+'"');
          taxoArray2.push(t1);
        }
      }
    }
    if (metas[i].getAttribute("name") == "cXenseParse:mdc-ner") {
//nerArray.push('"' + metas[i].getAttribute("content") + '"');
      nerArray.push(metas[i].getAttribute("content"));
    }
    if (metas[i].getAttribute("name") == "cXenseParse:mdc-sk") {
//skArray.push('"' + metas[i].getAttribute("content") + '"');
      skArray.push(metas[i].getAttribute("content"));
    }
  }
  if (!taxoArray1 == "") {
    console.log("CNATAXO1: [" + taxoArray1 + "]");
    googletag.pubads().setTargeting("CNATAXO1", [taxoArray1]);
  }
  if (!taxoArray2 == "") {
    console.log("CNATAXO2: [" + taxoArray2 + "]");
    googletag.pubads().setTargeting("CNATAXO2", [taxoArray2]);
  }
  if (!nerArray == "") {
    console.log("CNANER: [" + nerArray + "]");
    googletag.pubads().setTargeting("CNANER", [nerArray]);
  }
  if (!skArray == "") {
    console.log("CNASK: [" + skArray + "]");
    googletag.pubads().setTargeting("CNASK", [skArray]);
  }
}

function setGPTKeywords() {
  console.log("News Header Items");
  var kwords = new Array();
  var pageType = "detail page", category = "", sub = "", sid = "", stitle = "";
  var metas = document.getElementsByTagName('meta');
  for (i = 0; i < metas.length; i++) {
    if (metas[i].getAttribute("name") == "cXenseParse:mdc-keywords") {
//kwords = metas[i].getAttribute("content");
      kwords.push(metas[i].getAttribute("content"));
    }
    if (metas[i].getAttribute("property") == "og:title") {
      stitle = metas[i].getAttribute("content");
    }
    if (metas[i].getAttribute("property") == "og:url") {
      url = metas[i].getAttribute("content");
      var urlArr = url.split("/");
      for (j = 0; j < urlArr.length; j++) {
        if (urlArr[j] == "news") {
          category = urlArr[j + 1];
          if (category == "business") {
            var sub = urlArr[j + 2];
          }
          break;
        }
      }
    }
    if (metas[i].getAttribute("name") == "cXenseParse:recs:articleid") {
      sid = metas[i].getAttribute("content");
    }
  }
  if (sub != "") {
    console.log('["' + pageType + '","' + category + '","' + sub + '","' + kwords + '","' + sid + '","' + stitle + '"]');
    return googletag.pubads().setTargeting("CNAKW", [pageType, category, sub, kwords, sid, stitle]);
  } else {
    console.log('["' + pageType + '","' + category + '","' + kwords + '","' + sid + '","' + stitle + '"]');
    return googletag.pubads().setTargeting("CNAKW", [pageType, category, kwords, sid, stitle]);
  }
}

var isPaused = false;
var ads = [];
var trggeredAds = [];
var slots = {};
//var deviceType = getGoogleAdSizes();
/*var viewPortWidth = document.getElementsByTagName('html')[0].clientWidth
if (viewPortWidth < 768) {
  deviceType = "mobile";
} else if (viewPortWidth >= 768 && viewPortWidth <= 970) {
  deviceType = "tablet";
} else {
  deviceType = "desktop";
}*/

function dynamicTargeting() {
  var targetingKeysCookie = _satellite.readCookie('adtechTargetingKeys') || '';
  var targetingKeys = targetingKeysCookie.split('--');
  googletag.pubads().setTargeting('meid_seg', targetingKeys.join(','));
}

function intervalManager(flag, animate, time) {
   if(flag)
     intervalID =  setInterval(animate, time);
   else
     clearInterval(intervalID);
}

var animate = function () {
  if (!isPaused) {
    var containerLength = $('.advertisement__container').length;
    for (var i = 0; i < containerLength; i++) {
      isPaused = true;
      var elementValue = $('.advertisement__container')[i].getAttribute('id');
      if (ads.indexOf(elementValue) > -1) {
        continue;
      }

      if (typeof googletag != "undefined" && elementValue.indexOf(deviceType) > -1 && $('#' + elementValue + '').isOnScreen()) {
        var jsonObj = $.parseJSON($('#' + elementValue + '').parent().attr('data-js-options'))
//var fid = new ClientJS().getFingerprint();
        var fid = "NA", videoexists = "false";
        /*if (typeof(Storage) !== "undefined") {
           fid = localStorage.getItem("fid");
        }*/

        if (typeof(Fingerprint) != "undefined") {
          //fid = new Fingerprint().get();
        }

        if ($("meta[name='article:video']").attr('content') != undefined) {
          videoexists = $("meta[name='article:video']").attr('content');
        }

//var refreshInterval =  setInterval(function() {
//  if(typeof getGoogleAdSizes != "undefined" && typeof googletag != "undefined") {
        // clearInterval(refreshInterval);

        /*if (elementValue.indexOf('sticky') > -1) {
          createStickyAd(elementValue, jsonObj);
        }*/

//var deviceType = getGoogleAdSizes();

        /* window.dfpLotameKey = "lotameid";
         window.dfpLotame = "";
         if (typeof(lotauds) != 'undefined') {
           for (var cci = 0; cci < lotauds.Profile.Audiences.Audience.length; cci++) {
             if (cci > 0) dfpLotame += ",";
             window.dfpLotame += lotauds.Profile.Audiences.Audience[cci].abbr;
           }
         }*/

        /*if($(this).parent().attr('class').indexOf('c-advertisement--rectangle-float') > -1 ) {
          if(deviceType.indexOf('mobile') > -1)
                  $(this).parent().attr('style','width:100%');
          else
              $(this).parent().attr('style','float:right;margin-left:30px;width:300px');


        }*/

        /*pbjs.requestBids({
      bidsBackHandler: function() {
        pbjs.setTargetingForGPTAsync();
        //googletag.pubads().refresh();
      }
    });*/

        if (elementValue.indexOf(deviceType) > -1 || elementValue.indexOf('all-platforms') > -1) {
          _satellite.notify('Element in View:' + elementValue + '-Device Type:' + deviceType);

          if ($('#' + elementValue + '').length > 0 && $('#' + elementValue + '').children().length < 1) {
            window.googletag.cmd.push(function () {
              googletag.pubads().setTargeting("article:video", videoexists + '');
              googletag.pubads().setTargeting(window.dfpLotameKey, [window.dfpLotame]); // insert this line of script to existing googletag push function.
              if(typeof(lotauds) != "undefined") {
              googletag.pubads().setTargeting("UID", lotauds.Profile.pid);
              }
              if(window.location.host.indexOf("elasticbeanstalk.com") > -1) {
                googletag.pubads().setTargeting('beta', 'true');
              }
              googletag.pubads().setTargeting("inskin_yes", window.fn_pageskin);
              googletag.pubads().setTargeting('c_id', [mcDataLayer.contentid]);
              googletag.pubads().collapseEmptyDivs(); 
              //googletag.pubads().setTargeting('f_id', fid+'');
              googletag.pubads().setTargeting('meid', _satellite.readCookie('UID'));
              dynamicTargeting();
              setGPTKeywords();
              getCNAContext();
              if (elementValue.indexOf('out_of_page') > -1) {
                //window.adArray[window.adArray.length]  = window.googletag.defineOutOfPageSlot(jsonObj.networkCode+'/'+jsonObj.adChannel+'/'+jsonObj.adSection+'/'+jsonObj.adUnit, jsonObj.sizes, elementValue ).addService(window.googletag.pubads());
                window.adArray[window.adArray.length] = window.googletag.defineOutOfPageSlot(getSlotName(jsonObj), elementValue).addService(window.googletag.pubads());

                googletag.enableServices();
                window.googletag.display(elementValue);
                ads.push(elementValue);
              }
              else {
                if (elementValue.indexOf(jsonObj.adUnit) > -1) {
                  //window.adArray[window.adArray.length]  = window.googletag.defineSlot(jsonObj.networkCode+'/'+jsonObj.adChannel+'/'+jsonObj.adSection+'/'+jsonObj.adUnit, jsonObj.sizes, elementValue ).addService(window.googletag.pubads());
                  
                    if(elementValue.startsWith('ad-desktop-tablet-leaderboard1-sticky-') && pbjs.getAdserverTargetingForAdUnitCodeStr('ad-desktop-tablet-leaderboard1-sticky') != "") {
                      slots[elementValue] = window.googletag.defineSlot(getSlotName(jsonObj), jsonObj.sizes, elementValue).addService(window.googletag.pubads());                    
                      intervalManager(false);
                      var lbpbid = pbjs.getAdserverTargetingForAdUnitCode('ad-desktop-tablet-leaderboard1-sticky');
                      for(var i = 0;i < Object.keys(lbpbid).length; i++){
                          slots[elementValue].setTargeting(Object.keys(lbpbid)[i],Object.values(lbpbid)[i]).setCollapseEmptyDiv(true);
                      }
                    }
                      else {
                        window.adArray[window.adArray.length] = window.googletag.defineSlot(getSlotName(jsonObj), jsonObj.sizes, elementValue).addService(window.googletag.pubads()).setCollapseEmptyDiv(true);
                        intervalManager(false);
                        pbjs.setTargetingForGPTAsync(elementValue);
                      }
                  //googletag.pubads().enableSingleRequest();
                  //googletag.pubads().enableAsyncRendering() 
                  
                  window.googletag.enableServices();
                  window.googletag.display(elementValue);
                  trggeredAds.push(ads[ads.length-1]);
                  ads.push(elementValue);
                  intervalManager(true, animate, 100);
                   
                  /*setTimeout(function() {
                      window.googletag.enableServices();
                      window.googletag.display(elementValue);
                      ads.push(elementValue);
                  }, 300);*/
                  
                  //alert('Test');
                  //intervalManager(true, animate, 100);
                  

                }
              }
            });
          }
        }

      }
    }
    isPaused = false;
  }
};
setTimeout(function() {
  intervalManager(true, animate, 100);
}, 800);
