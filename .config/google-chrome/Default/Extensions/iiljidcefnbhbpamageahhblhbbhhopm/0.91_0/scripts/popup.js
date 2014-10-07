/*
	Copyright 2012
	Mike Chambers
	mikechambers@gmail.com

	http://www.mikechambers.com
*/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global $, document, chrome, window, localStorage, setTimeout, unescape, escape */

(function () {

    "use strict";
    
    var accountName;
    var background;
    var openInPopout;
    
    function onOptionsClick(e) {
        chrome.tabs.create({"url": "options.html"});
    }
    
    function onCloseClick(e) {
        background.updateData();
        //todo: window.close();
    }
    
    function setErrorMessage(msg) {
        if (msg) {
            //need this slight delay, or else the html wont be displayed
            $("#errorContainer").show().html(msg);
        } else {
            $("#errorContainer").hide();
        }
    }
    
    function sortCategories(streams) {
        var gameHash = {};
    
        var len = streams.length;
        
        var i;
        for (i = 0; i < len; i++) {
            var stream = streams[i];
            var channel = stream.channel;
            var game = stream.game;
            
            if (!game) {
                game = stream.category;
            }
            
            if (!gameHash[game]) {
                gameHash[game] = [];
            }
            
            gameHash[game].push(stream);
        }
        
        var sortable = [];
        var key;
        for (key in gameHash) {
            if (gameHash.hasOwnProperty(key)) {
                sortable.push([key, gameHash[key]]);
            }
        }
        
        sortable.sort(
            function (_a, _b) {
                var a = _a[0].toUpperCase();
                var b = _b[0].toUpperCase();
                
                if (a > b) {
                    return 1;
                }
                
                if (a < b) {
                    return -1;
                }
                
                return 0;
            }
        );
        
        return sortable;
    }
    
    function openURLInNewTab(url) {
        if (!url) {
            console.log("Error : url undefined.");
            return;
        }
             
        if (openInPopout) {
            url += "/popout";
            
            chrome.windows.create(
                {
                    url: url,
                    focused: true,
                    type: "popup"
                }
            );
        } else {
            chrome.tabs.create({"url": url});
        }

        window.close();
    }
    
    function onChannelClick(e) {
        e.preventDefault();
        
        var url = unescape($(e.target).attr("data-url"));
        openURLInNewTab(url);
    }
    
    function onGameTitleClick(e) {
        e.preventDefault();
        
        var url = unescape($(e.target).attr("data-url"));
        
        url = "http://www.twitch.tv/directory/game/" + encodeURIComponent(url);
        openURLInNewTab(url);
    }
    
    function updateView() {
        var streams = background.getStreams();

        var len = (streams) ? streams.length : 0;
        
        $(".streamDiv").unbind("click");
        $("#streamList").empty();
        
        if (!len) {
            $("#noStreamsDiv").show();
            return;
        } else {
            $("#noStreamsDiv").hide();
        }
  
        var sortedStreams = sortCategories(streams);
        var sortLen = sortedStreams.length;
        var html = "";
        
        var k;
        var category;
        var categoryName;

        for (k = 0; k < sortLen; k++) {
            category = sortedStreams[k];
            categoryName = category[0];
            
            html += "<div class='streamSectionTitle' data-url='" + encodeURIComponent(categoryName) + "'>" + categoryName + "</div>";
            
            var gameStreams = category[1];

            var gLen = gameStreams.length;
            var i;
            for (i = 0; i < gLen; i++) {
                var stream = gameStreams[i];
                
                var channel = stream.channel;
                var login = channel.name;
                
                html += "<div class='streamDiv' data-url='" + escape(channel.url) + "'>" +
                        login +
                        "<span class='channelCount'>" + stream.viewers + "</span></a></div>";
            }
            
            html += "<div>&nbsp;</div>";
        }

        $("#streamList").append(html);
        
        //$(".channelLink").bind("click", onChannelClick);
        $(".streamDiv").bind("click", onChannelClick);
        
        $(".streamSectionTitle").bind("click", onGameTitleClick);
        
    }
    

    function onRefreshUp() {
        document.getElementById("closeAnchor").classList.remove("refreshImgDown");
    }
    
    function onRefreshDown() {
        document.getElementById("closeAnchor").classList.add("refreshImgDown");
    }

    
    $(document).ready(function () {
    
        $("#streamList").empty();
        $("#noStreamsDiv").hide();
        $("#errorContainer").hide();
        $("#optionsErrorDiv").hide();
        $("#closeAnchor").bind("click", onCloseClick);
        $("#optionsAnchor").bind("click", onOptionsClick);
        
   
        $("#closeAnchor").bind("mousedown", onRefreshDown);
        $("#closeAnchor").bind("mouseup mouseout", onRefreshUp);
  
        accountName = localStorage.accountName;
        openInPopout = (localStorage.openInPopout === "true");
        background = chrome.extension.getBackgroundPage();
    
        background.setPopup(window);
        
        var error = background.getErrorMessage();
        setErrorMessage(error);
    
        if (!accountName) {
            $("#optionsErrorDiv").show();
            return;
        }
        
        updateView();
        
        //this is required so we can get the mouse cursor to change on hover
        
        //hack to work around chrome extension bug that gives focus to the closeAnchor
        setTimeout(function () {
            $("#closeAnchor").blur();
        }, 100);
    });

    window.setErrorMessage = setErrorMessage;
    window.updateView = updateView;
    
}());