_satellite.pushAsyncScript(function(event, target, $variables){
  function EmbedScript() {
var _Impulser = window.parent.document.createElement('script'); _Impulser.type = 'text/javascript';
_Impulser.async = true;
_Impulser.src = ('https:' == window.parent.document.location.protocol ? 'https://' : 'http://') + 'impulse.forkcdn.com/impulse3/config/impulse.js';
var _scripter = window.parent.document.getElementsByTagName('script')[0];
_scripter.parentNode.insertBefore(_Impulser, _scripter);
};
function inIframe () {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}
if(inIframe()) {
    window.parent.$ImpulseID = "IMPL-MEDIACORP-CHANNELNEWSASIA-RESP-GENERIC";
    EmbedScript();
} else {
    $ImpulseID = "IMPL-MEDIACORP-CHANNELNEWSASIA-RESP-GENERIC";
    EmbedScript();
}
});
