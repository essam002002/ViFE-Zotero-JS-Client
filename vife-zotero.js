ViFEZotero = (function () {

    function retrieveZoteroBib(url, containerId) {
        var oReq = new XMLHttpRequest();
        oReq.onreadystatechange = function () { 
          if (oReq.readyState != 4 || oReq.status != 200)
            return;
           
          parseLib(JSON.parse(oReq.responseText), containerId);
          
        };
        oReq.open("GET", url);
        oReq.send();
    }
    
    function parseLib(lib, containerId) {
        var cont = document.getElementById(containerId);
        //remove Loader
        cont.innerHTML = "";
        
        var year = "";
        lib.forEach(function(item) {
            
            //check year
            var date = new Date(item.data.date);
            if(year != date.getFullYear()) {
                year = date.getFullYear();
                var count = getItemsPerYear(lib, year);
                var sep = createYearSeperator(year, count);
                cont.appendChild(sep);
            }
                
            var entry = parseItem(item);
            var div = document.createElement('div');
            div.setAttribute('class', 'zoteroItem');
            div.innerHTML = entry;
            cont.appendChild(div);
        });
    }
    
    function createYearSeperator(year, count) {
        var div = document.createElement('div');
        div.setAttribute('class', 'zoteroYearSep');
        div.innerHTML = '<i>' + year + '</i> <span class="zoteroYearCount">(' + count + ')';
        return div;
    }
    
    function getItemsPerYear(lib, year) {
        
        var count = 0;
        lib.forEach(function(item) {
            var date = new Date(item.data.date);
            if(year == date.getFullYear())
                count++;
        });
        
        return count;
    }
    
    function parseItem(item) {
        
        var returnString = "";
        
        var itemType = item.data.itemType;
        if(itemType == "note") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "book") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "bookSection") {
            returnString = returnString + parseAuthors(item);
            returnString = returnString + parseTitle(item);
            returnString = returnString + parseBookTitle(item);
            returnString = returnString + parsePublisher(item);
            returnString = returnString + parsePlace(item);
            returnString = returnString + parseDate(item);
            returnString = returnString + parsePages(item);
        }else if(itemType == "journalArticle") {
            returnString = returnString + parseAuthors(item);
            returnString = returnString + parseTitle(item);
            returnString = returnString + parseBookTitle(item);
            returnString = returnString + parsePublicationTitle(item);
            returnString = returnString + parseVolumeIssue(item);
            returnString = returnString + parseDate(item);
            returnString = returnString + parsePages(item);
        }else if(itemType == "magazineArticle") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "newspaperArticle") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "thesis") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "letter") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "manuscript") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "interview") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "film") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "artwork") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "webPage") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "report") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "bill") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "case") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "hearing") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "patent") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "statute") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "eMail") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "map") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "blogPost") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "instantMessage") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "forumPost") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "audioRecording") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "presentation") {
            returnString = returnString + parseAuthors(item);
            returnString = returnString + parseTitle(item);
            returnString = returnString + parseMeetingName(item);
            returnString = returnString + parsePlace(item);
            returnString = returnString + parseDate(item);
        }else if(itemType == "videoRecording") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "tvBroadcast") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "radioBroadcast") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "podcast") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "computerProgram") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "conferencePaper") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "document") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "encyclopediaArticle") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else if(itemType == "dictionaryArticle") {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }else {
            returnString = 'Item type "' + itemType + '" not supported, yet.';
        }    
        
        returnString = returnString + ' <a href="' + item.links.alternate.href + '" target="_blank">(Zotero&nbsp;<span class="zoteroExternalLink">&#8599;</span>)</a>';
        
        return returnString;
    }
    
    function parseTitle(item) {
        if(item.data.title)
            return "<b>" + item.data.title + ".</b>";
        
        return "";
    }
    
    function parseAuthors(item) {
    
        var ret = "";
        if(item.data.creators.length > 0) {
          
          var creators = [];
          
          for(var i = 0; i < item.data.creators.length; i++) {
            if(item.data.creators[i].creatorType = "author")
                creators.push(item.data.creators[i]);
            
          }

         for(var i = 0; i < creators.length; i++) {
            var creator = creators[i];
            
            if(i == 0)
                ;
            else if(i == item.data.creators.length - 1)
              ret = ret + " und ";
            else if(i > 0)
              ret = ret + ", ";
            
            if(i == 0)
                ret = ret + creator.lastName + ", " + creator.firstName;
            else
                ret = ret + creator.firstName + " " + creator.lastName;
          }
          
          ret = ret + ". ";
        }
        
        return ret;
    }
    
    function parseBookTitle(item) {
        if(item.data.bookTitle)
            return " In <i>" + item.data.bookTitle + ".</i>";
        
        return "";
    }
    
    function parsePages(item) {
        if(item.data.pages)
            return " Seiten " + item.data.pages + ".";
        
        return "";
    }
    
    function parsePublisher(item) {
        if(item.data.publisher)
            return " " + item.data.publisher + ",";
        
        return "";
    }
    
    function parsePublicationTitle(item) {
        if(item.data.publicationTitle)
            return " <i>" + item.data.publicationTitle + "</i>,";
        
        return "";
    }
    
    function parseVolumeIssue(item) {
        if(item.data.volume)
            return " " + item.data.volume + parseIssue(item) + ".";
        
        return "";
    }
    
    function parseIssue(item) {
        if(item.data.issue)
            return "(" + item.data.issue + ")";
        
        return "";
    }
    
    function parseMeetingName(item) {
        if(item.data.meetingName)
            return " Vorgetragen bei: " + item.data.meetingName + ".";
        
        return "";
    }
    
    function parsePlace(item) {
        if(item.data.place)
            return " " + item.data.place + ",";
        
        return "";
    }
    
    function parseDate(item) {
        if(item.data.date)
            // Todo: verschiedene Formate parsen
            return " " + item.data.date + ".";
        
        return "";
    }

    return {
        init: function (url, containerId) {
            retrieveZoteroBib(url, containerId);
        }
    };

})();
