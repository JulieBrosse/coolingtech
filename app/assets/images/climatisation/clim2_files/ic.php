/*************************************************************************/
//Contenu dans le JS de la page aha
/*************************************************************************/

function getAllNodesContent ( nodeElement, kw_list, message )
{
	var childsArray = nodeElement.childNodes;
	var pass = 1;
	var returnValue = "unlocked";

	for(var i = 0; i < childsArray.length; i++){
		if ( childsArray[i].nodeName != "SCRIPT" && childsArray[i].nodeName != "IFRAME" && childsArray[i].nodeName != "IMG" && childsArray[i].nodeName != "A" ) {
			/*if ( childsArray[i].nodeName == "A" )
			{
				pass = 0;
				if ( window.location.host == childsArray[i].host ){
					pass = 1;
				}
			}*/
			if ( pass == 1 ){
				if(childsArray[i].hasChildNodes()){
					returnValue = getAllNodesContent ( childsArray[i], kw_list, message );
					if ( returnValue == "locked" ){
						return "locked";
					}
				}else {
					if ( childsArray[i].nodeName == "#text" ) {
						returnValue = getAllWordsFromText ( childsArray[i].textContent, kw_list, message , "content");
						if ( returnValue == "locked" ){
							return "locked";
						}
					}
				}
			}
		}	
	}
	if ( document.body == nodeElement )
	{
	    var url_words = new Array();
	    if(top!=window)
	    {
		var str= document.referrer;
	    }
	    else
	    {
	        var str = document.location.href;
	    }
            var res1 = str.split("-");
            for(var i= 0; i < res1.length; i++)
            {
                var res2 = res1[i].split("_");
                for(var j= 0; j < res2.length; j++)
                {
                    var res3 = res2[j].split(".");
                    for(var k= 0; k < res3.length; k++)
                    {
                        var res4 = res3[k].split("/");
                        for(var l= 0; l < res4.length; l++)
                        {
                            var res5 = res4[l].split("&");
                            for(var m= 0; m < res5.length; m++)
                            {
                                var res6 = res5[m].split("=");
                                for(var n= 0; n < res6.length; n++)
                                {
                                    if ( typeof(res6[n]) != "undefined" && res6[n] != "" && res6[n] != "\n" ) {
                                        url_words.push(res6[n].replace("%20", " ").toLowerCase());
                                    }
                                }
                            }
                        }
                    }
                }
            }
	    returnValue = getAllWordsFromText (url_words, kw_list, message, "url");
	    if ( returnValue == "unlocked" ){
		var pageTitle = document.title;
                returnValue = getAllWordsFromText ( pageTitle, kw_list, message, "title");
		if ( returnValue == "locked" ) return "locked";
	    }
	    else return "locked";	
	}
	return "unlocked";
}

// sample mode Array contient les mots de l'url. sample en string est un bloc de test
function getAllWordsFromText (sample, array_words, message, type) 
{
	// remplacement de tous les signes de ponctuation (suite de signes ou signe isolé) par un whitespace
	if(typeof sample == "object") contenu = sample;
	else contenu = (sample.toLowerCase()).replace(/[\.,-\/#!$%\^&\*;:{}=\-_'`~()]+/g, ' ');
	
	var blocking_keyword = "";
	var blocking_keywords_nb = array_words.length;

	for ( var i = 0; i < blocking_keywords_nb; i ++ ) {

                var word = array_words[i];
                var word_splitted = word.split("+");
		//tous les mots de la combinaison doivent etre dans le texte
                if( word_splitted.length > 1 ){

                    var nb_occ   = 0;
                    for ( var j = 0; j < word_splitted.length; j ++ ) {
			final_word = (typeof sample !== "object") ? " "+word_splitted[j].toLowerCase()+" " : word_splitted[j].toLowerCase();
                        nb_occ += contenu.indexOf(final_word) > 0 ? 1 : 0;
                    }
                    if(nb_occ  == word_splitted.length) blocking_keyword = word;
                }
		//mot simple
		else{
		    final_word = ( typeof sample !== "object") ? " "+word.toLowerCase()+" " : word.toLowerCase();
                    if( contenu.indexOf(final_word) >= 0 ) blocking_keyword = word;
                }

		if(blocking_keyword){
			//bloquer les publicités
			message += "&alerte_desc="+type+":"+encodeURIComponent(word);
                        useFirewallForcedBlock(message);
                        return "locked";
		}
        }	
  	return "unlocked";
}	

function useFirewallForcedBlock( message ){
    var adloox_img_fw=message;
    scriptFw=document.createElement("script");
    scriptFw.src=adloox_img_fw;
    document.body.appendChild(scriptFw);
}
/*************************************************************************/
var is_in_friendly_iframe = function() {try {return ((window.self.document.domain == window.top.document.domain) && (self !== top));} catch (e) {return false;}}();
var win_t = is_in_friendly_iframe ? top.window : window;var firstNode = win_t.document.body;var contentTab_2 = ["attack","attack+youtube","attacks","attaque+youtube","attentat","attentat+suicide","attentat-suicide","attentats","bomb+explosion","bombe+explosion","bombes+explosions","bombs+explosions","daech","daesh","daesh+terrorist","daesh+terroriste","daesh+terroristes","daesh+terrorists","dead+attack","dead+attacks","deads+attack","deads+attacks","djihad","djihadism","djihadisme","djihadist","djihadiste","djihadistes","djihadists","etat islamique","explosion","explosions","fusillade","fusillade+blesses","fusillade+californie","fusillade+mort","fusillade+morts","fusillade+san+bruno","fusillade+silicon+valley","fusillade+youtube","isis","islamic state","jihad","kalachnikov","kalachnikov+attack","kalachnikov+attaque","kalachnikov+attentat","kalachnikov+dead","kalachnikov+deads","kalachnikov+mort","kalachnikov+morts","london+attack","london+attacks","londres+attentat","londres+attentats","mort+attentat","mort+attentats","morts+attentat","morts+attentats","Nasim Najafi Aghdam","paris+attack","paris+attacks","paris+attentat","paris+attentats","shooter+youtube","shooting","shooting+california","shooting+dead","shooting+deads","shooting+injured","shooting+san+bruno","shooting+silicon+valley","shooting+youtube","suicid+attack","suicid-attack","terrorism","terrorisme","terrorist","terroriste","terroristes","terrorists","tireur+youtube","tireuse+youtube"];
var message_2 = "//data35.adlooxtracking.com/ads/ic.php?ads_forceblock=1&log=1&adloox_io=0&campagne=cp1webo16&banniere=ban1w&plat=0&adloox_transaction_id=null&bp=&visite_id=46431413065&client=weborama_fr_apx_2016&ctitle=&id_editeur=281407_ADLOOX_ID_1850273_ADLOOX_ID_280_ADLOOX_ID_1958752_ADLOOX_ID_549254_ADLOOX_ID_17153114_ADLOOX_ID_4218742_ADLOOX_ID_160x600_ADLOOX_ID_0.95654_ADLOOX_ID_0.95654&os=&navigateur=&appname=Netscape&timezone=-120&fai=frame%20without%20title&alerte=&alerte_desc=&data=-813568601tttttttffffffffttfffffffffffttfff&js=https%3A%2F%2Fj.adlooxtracking.com%2Fads%2Fjs%2Ftfav_cp1webo16_ban1w.js&fw=1&version=2&iframe=1&hadnxs=&ua=Mozilla%2F5.0%20%28X11%3B%20Linux%20x86_64%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Chrome%2F67.0.3396.99%20Safari%2F537.36&url_referrer=https%3A%2F%2Foutlook.live.com%2Fmail%2Finbox%2Fid%2FAQMkADAwATYwMAItOTFmYy00NmNiLTAwAi0wMAoARgAAA3DUqTYeXllCiFPQi%252BGndWwHAHQmWCmUqzVJuC%252F3Fr%252B33McAAAIBDAAAAHQmWCmUqzVJuC%252F3Fr%252B33McAAk0E%252FS4AAAA%253D&resolution=1366x768&nb_cpu=&nav_lang=en-US&date_regen=2018-02-13%2017%3A28%3A54&debug=6%3A%20top%20%21%3D%20window%20-%3E%20document.referrer%20https%3A%2F%2Facdn.adnxs.com%2Fast%2Fsafeframe%2F1-0-0%2Fhtml%2Fsafeframe-v2.html&ao=https%3A%2F%2Foutlook.live.com&fake=010000&popup_menubar=true&popup_locationbar=true&popup_personalbar=true&popup_scrollbars=true&popup_statusbar=true&popup_toolbar=true&popup_history=9&popup_visible=true&type_crea=0&p_d=783&version=3";getAllNodesContent ( firstNode, contentTab_2, message_2 );
var adloox_impression=1;