/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 19.12.12
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */

var _Generator = function() {

    // Obiekt zawierający wszystkie elementy 
    var HTML = {head: document.getElementsByTagName('head')[0], body: document.getElementsByTagName('body')[0], headElem: {}, bodyElem: {}, sub: {}};
    this.getHTML = function() {
        return HTML;
    };

    // <!--  -->
    this.createHTMLComment = function(data) {
        return document.createComment(data);
    };

    // <script src="" type="text/javascript"></script>
    this.createBodyScriptElement = function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.type = "text/javascript";
        return script;
    };

    // <script src="" type="text/javascript"></script>
    this.createHeadScriptElement = function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.type = "text/javascript";
        return script;
    };

    // <header></header>
    this.createBodyHeaderElement = function() {
        var header = document.createElement('header');
        return header;
    };

    // <table><tbody><tr><td></td></tr></tbody></table>
    // insert into cell:    cell.innerHTML="...";
    // removing cell: row.deleteCell(0);
    this.createBodyTableElement = function(rows, cols) {
        var table = document.createElement('table');
        for (var i = 0; i < rows; i++)
        {
            table.insertRow(i);
            for (var j = 0; j < cols; j++)
            {
                table.rows[i].insertCell(j);
            }
        }
        return table;
    };

    /*    this.getCellHandle = function(tableObject, row, col){
     var cells = tableObject.getElementsByTagName("td");
     return cells[row*col];
     };*/

    // <img src="" style="" alt="">
    this.createBodyImageElement = function(imageSrc, imageStyle, imageAlt) {
        var image = document.createElement('img');
        image.src = imageSrc;
        if (imageStyle !== "") {
            image.style = imageStyle;
        }
        image.alt = imageAlt;
        return image;
    };

    // <a href=""></a>
    this.createBodyLinkElement = function(linkHref) {
        var aLink = document.createElement("a");
        aLink.href = linkHref;
        return aLink;
    };


    // <div id="" class="">"content"</div>
    this.createBodyDivElement = function(id, klasa, content) {
        var div = document.createElement('div');
        if (id !== "") {
            div.id = id;
        }
        if (klasa !== "") {
            div.setAttribute("class", klasa);
        }

        if (content !== "") {
            div.textContent = content;
        }
        return div;
    };

    // <label id="" for="">"content"</label>
    this.createBodyLabelElement = function(id, labelFor, content) {
        var label = document.createElement('label');
        label.id = id;
        label.setAttribute("for", labelFor);
        if (content !== "") {
            label.textContent = content;
        }
        return label;
    };

    // <select id="" name="">"content"</label>
    this.createBodySelectElement = function(id, name) {
        var select = document.createElement('select');
        select.id = id;
        select.setAttribute("name", name);
        return select;
    };

    // <option value="">"content"</option>
    this.createBodyOptionElement = function(value, content) {
        var option = document.createElement('option');
        option.setAttribute("value", value);
        option.textContent = content;
        return option;
    };

    // <span id="">"content"</span>
    this.createBodySpanElement = function(id, content) {
        var span = document.createElement('span');
        span.id = id;
        span.textContent = content;
        return span;
    };

    // <textarea id=""></textarea>
    this.createBodyTextAreaElement = function(id) {
        var textArea = document.createElement('textarea');
        textArea.id = id;
        return textArea;
    };

    /*
     this.createLanguageTable = function() {
     };*/

    // <link rel="" href="" type="">
    this.createHeadLinkElement = function(rel, href, type) {
        var link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        link.type = type;
        return link;
    };

    /*    // <title>"titleText"</title>
     this.createTitleElement = function(titleText) {
     var docTitle = document.createElement('title');
     docTitle = titleText;
     return docTitle;
     };       // change to document.title = "";
     */

    // <meta name="" content="">
    this.createHeadMetaElement = function(name, content) {
        var meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        return meta;
    };

    this.generate = function() {

// nice html/js tester http://jsfiddle.net/
// nice html/js tester http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_option_selected
// HEAD
//title
        document.title = "FETE: Program and learn it";
        // favicon
        Generator.getHTML().headElem.faviconComment = Generator.createHTMLComment("http://www.rw-designer.com/online_icon_maker.php");
        Generator.getHTML().headElem.favicon = Generator.createHeadLinkElement("shortcut icon", "img/favicon.ico", "image/x-icon");

        Generator.getHTML().headElem.htaccessComment = Generator.createHTMLComment("Use the .htaccess and remove these lines to avoid edge case issues.\nMore info: h5bp.com/i/378);");
        Generator.getHTML().headElem.ifIEComment = Generator.createHTMLComment("\[if IE]><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><[if IE]");
        Generator.getHTML().headElem.ifChromeComment = Generator.createHTMLComment("\[if Chrome]><meta http-equiv=\"X-UA-Compatible\" content=\"chrome=1\"><[if Chrome]");


        //Generator.HTML.head.title = Generator.createTitleElement("FETE: Program and learn it");
        // TODO: Tytuł był wyszukiwany po id, trzeba to zmienic id="title" FETE: Program and learn it
        // head meta
        Generator.getHTML().headElem.metaDesc1 = Generator.createHeadMetaElement("description", "Application which anyone can use to learn programming languages.");
        Generator.getHTML().headElem.viewportComment = Generator.createHTMLComment("Mobile viewport optimized: h5bp.com/viewport");
        Generator.getHTML().headElem.metaDesc2 = Generator.createHeadMetaElement("viewport", "width=device-width");
        Generator.getHTML().headElem.rootDirComment = Generator.createHTMLComment("Place favicon.ico and apple-touch-icon.png in the root directory: mathiasbynens.be/notes/touch-icons");


// head css
        //Generator.getHTML().headElem.css1 = Generator.createHeadLinkElement("stylesheet", "css/style.css", "text/css");
        // head less
        //LESS important: when using with chrome must add to your shortcut: -allow-file-access-from-files
        //Best CSS to LESS generator: http://leafo.net/lessphp/lessify/
        Generator.getHTML().headElem.less1 = Generator.createHeadLinkElement("stylesheet/less", "less/styleLess.less", "text/css");

        Generator.getHTML().headElem.rootDirComment = Generator.createHTMLComment("\More ideas for your <head> here: h5bp.com/d/head-Tips");

// head scripts
        Generator.getHTML().headElem.modernizrComment = Generator.createHTMLComment("\All JavaScript at the bottom, except this Modernizr build.\nModernizr enables HTML5 elements & feature detects for optimal performance.\nCreate your own custom Modernizr build: www.modernizr.com/download/");
        Generator.getHTML().headElem.modernizer = Generator.createHeadScriptElement("js/libs/modernizr-2.6.2.min.js");

//BODY
        Generator.getHTML().bodyElem.promptComment = Generator.createHTMLComment("\Prompt IE 6 users to install Chrome Frame. Remove this if you support IE 6.\nchromium.org/developers/how-tos/chrome-frame-getting-started");
        Generator.getHTML().bodyElem.chromeframeComment = Generator.createHTMLComment("\[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href=\"http://browsehappy.com/\">Upgrade to a different browser</a> or <a href=\"http://www.google.com/chromeframe/?redirect=true\">install Google Chrome Frame</a> to experience this site.</p><![endif]");

        Generator.getHTML().bodyElem.header = Generator.createBodyHeaderElement();
        Generator.getHTML().sub.tableInHeader = Generator.createBodyTableElement(1, 2);
        Generator.getHTML().sub.imageLogo = Generator.createBodyImageElement("img/logo_FETE_en.png", "padding: 10px;", "Application logo");
        Generator.getHTML().sub.tableInHeader.rows[0].childNodes[0].appendChild(Generator.getHTML().sub.imageLogo);
        Generator.getHTML().sub.flagsImages = [];
        Generator.getHTML().sub.flagsImages[0] = Generator.createBodyImageElement("img/pol_flag.gif", "padding: 10px;", "Polish flag");
        Generator.getHTML().sub.flagsImages[1] = Generator.createBodyImageElement("img/eng_flag.gif", "padding: 10px;", "English flag");
        Generator.getHTML().sub.flagsImages[2] = Generator.createBodyImageElement("img/ger_flag.gif", "padding: 10px;", "German flag");
        Generator.getHTML().sub.flagsImages[3] = Generator.createBodyImageElement("img/esp_flag.gif", "padding: 10px;", "Spanish flag");
        Generator.getHTML().sub.flagsImages[4] = Generator.createBodyImageElement("img/fr_flag.gif", "padding: 10px;", "French flag");
        Generator.getHTML().sub.flagsImages[5] = Generator.createBodyImageElement("img/rus_flag.gif", "padding: 10px;", "Russian flag");


        Generator.getHTML().sub.linkLocale = [];
        for (var m = 0; m < 6; m++) {
            Generator.getHTML().sub.linkLocale[m] = Generator.createBodyLinkElement("#");
            Generator.getHTML().sub.linkLocale[m].setAttribute("onclick", "Msg.loadLocale(" + m + ");");
            Generator.getHTML().sub.linkLocale[m].appendChild(Generator.getHTML().sub.flagsImages[m]);

            Generator.getHTML().sub.tableInHeader.rows[0].childNodes[1].appendChild(Generator.getHTML().sub.linkLocale[m]);
            Generator.getHTML().sub.tableInHeader.rows[0].childNodes[1].appendChild(document.createElement('br'));
        }

// body divs and divButtons

        Generator.getHTML().bodyElem.divBtnStep = Generator.createBodyDivElement("step", "btn", "Zrób krok");
        Generator.getHTML().bodyElem.divBtnFlush = Generator.createBodyDivElement("flush", "btn", "Zacznij od nowa");
        Generator.getHTML().bodyElem.divBtnTranslate = Generator.createBodyDivElement("translate", "btn", "Przetłumacz");
        Generator.getHTML().bodyElem.divBtnRun = Generator.createBodyDivElement("run", "btn", "Uruchom");

        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice = Generator.createBodyDivElement("codeAreaLanguageChoice", "", "");
        Generator.getHTML().sub.labelForCodeAreaLanguageChoice = Generator.createBodyLabelElement("labelForCodeAreaLanguageChoice", "chooseCodeAreaLanguage", "Code Area Language Choice");
        Generator.getHTML().sub.selectChooseCodeAreaLanguage = Generator.createBodySelectElement("chooseCodeAreaLanguage", "language");
        // TODO: pr zmieniono na ps, sprawdzic zgodnosc
        Generator.getHTML().sub.optionChooseCodeAreaLanguage = [];





        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice = Generator.createBodyDivElement("executionAreaLanguageChoice", "", "");
        Generator.getHTML().sub.labelForExecutionAreaLanguageChoice = Generator.createBodyLabelElement("labelForExecutionAreaLanguageChoice", "chooseExecutionAreaLanguage", "Execution Area Language Choice");
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage = Generator.createBodySelectElement("chooseExecutionAreaLanguage", "language");
        // TODO: pr zmieniono na ps, sprawdzic zgodnosc
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage = [];


        Generator.getHTML().bodyElem.spanTiming = Generator.createBodySpanElement("timing", "Czas: 0.000 s");

        Generator.getHTML().bodyElem.divCodeContainer = Generator.createBodyDivElement("code-container", "", "");
        Generator.getHTML().sub.labelForCodeContainer = Generator.createBodyLabelElement("labelForCodeArea", "codeArea", "Code");
        Generator.getHTML().sub.textareaCodeArea = Generator.createBodyTextAreaElement("codeArea");
        Generator.getHTML().sub.textareaCodeArea.setAttribute("onchange", "Parser.areaValidate('codeArea');");
        Generator.getHTML().sub.divLineMarker = Generator.createBodyDivElement("execMarker", "lineMarker", "");
        Generator.getHTML().sub.divLineNumbers = Generator.createBodyDivElement("lineNumbers", "linesNumbers", "1");


        Generator.getHTML().bodyElem.divMemoryContainer = Generator.createBodyDivElement("memory-container", "", "");
        Generator.getHTML().sub.labelForMemoryContainer = Generator.createBodyLabelElement("labelForExecutionArea", "execArea", "Exec area");
        Generator.getHTML().sub.textareaExecArea = Generator.createBodyTextAreaElement("execArea");
        Generator.getHTML().sub.textareaExecArea.setAttribute("onchange", "Parser.areaValidate('execArea');");

//SCRIPTS
        Generator.getHTML().bodyElem.scriptJQuery = Generator.createBodyScriptElement("js/libs/jquery-1.8.3.min.js");
        //LESS important: when using with chrome must add to your shortcut: -allow-file-access-from-files
        //Best CSS to LESS generator: http://leafo.net/lessphp/lessify/
        //Less source: https://raw.github.com/cloudhead/less.js/master/dist/less-1.3.3.min.js
        Generator.getHTML().bodyElem.scriptLess_1_3_3 = Generator.createBodyScriptElement("js/libs/less-1.3.3.min.js");
        Generator.getHTML().bodyElem.scriptPlugins = Generator.createBodyScriptElement("js/plugins.js");
        Generator.getHTML().bodyElem.scriptMsg = Generator.createBodyScriptElement("js/static/Msg.js");
        Generator.getHTML().bodyElem.scriptCodeClass = Generator.createBodyScriptElement("js/static/Code.class.js");
        Generator.getHTML().bodyElem.scriptLanguageClass = Generator.createBodyScriptElement("js/static/Language.class.js");
        Generator.getHTML().bodyElem.scriptOperatorClass = Generator.createBodyScriptElement("js/static/Operator.class.js");
        Generator.getHTML().bodyElem.scriptTreeDefinitionClass = Generator.createBodyScriptElement("js/static/TreeDefinition.class.js");

        Generator.getHTML().bodyElem.scriptParser = Generator.createBodyScriptElement("js/dynamic/Parser.class.js");
        Generator.getHTML().bodyElem.scriptLexerClass = Generator.createBodyScriptElement("js/dynamic/Lexer.class.js");
        Generator.getHTML().bodyElem.scriptUI = Generator.createBodyScriptElement("js/dynamic/UI.js");
        Generator.getHTML().bodyElem.scriptCompilerClass = Generator.createBodyScriptElement("js/dynamic/Compiler.class.js");
        Generator.getHTML().bodyElem.scriptInterpreterClass = Generator.createBodyScriptElement("js/dynamic/Interpreter.class.js");
        Generator.getHTML().bodyElem.scriptMemoryClass = Generator.createBodyScriptElement("js/dynamic/Memory.class.js");
        Generator.getHTML().bodyElem.scriptPreprocessorClass = Generator.createBodyScriptElement("js/dynamic/Preprocessor.class.js");
        Generator.getHTML().bodyElem.scriptTranslatorClass = Generator.createBodyScriptElement("js/dynamic/Translator.class.js");
        Generator.getHTML().bodyElem.scriptVirtualMachine = Generator.createBodyScriptElement("js/dynamic/VirtualMachine.js");

        Generator.appendToHTML();

    };

    this.loadLanguages = function(languagesList){

        languagesList.map(function(l,i){Generator.getHTML().sub.optionChooseCodeAreaLanguage[i] = Generator.createBodyOptionElement(i, l.name);});

        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice.appendChild(Generator.getHTML().sub.labelForCodeAreaLanguageChoice);
        for (var i = 0; i < 4; i++) {
            Generator.getHTML().sub.selectChooseCodeAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseCodeAreaLanguage[i]);
        }
        Generator.getHTML().sub.optionChooseCodeAreaLanguage[0].selected = true;  //nice HTML 5 implementation
        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice.appendChild(Generator.getHTML().sub.selectChooseCodeAreaLanguage);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.setAttribute("onchange", "UI.chooseCodeLanguage(aviableLanguages[selectedIndex]);");
        languagesList.map(function(l,i){Generator.getHTML().sub.optionChooseExecutionAreaLanguage[i] = Generator.createBodyOptionElement(i, l.name);});

        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice.appendChild(Generator.getHTML().sub.labelForExecutionAreaLanguageChoice);
        for (var i = 0; i < 4; i++) {
            Generator.getHTML().sub.selectChooseExecutionAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseExecutionAreaLanguage[i]);
        }
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage[0].selected = true;  //nice HTML 5 implementation
        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice.appendChild(Generator.getHTML().sub.selectChooseExecutionAreaLanguage);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.setAttribute("onchange", "UI.chooseExecutionLanguage(aviableLanguages[selectedIndex]);");

    }

    this.appendToHTML = function() {

        for (var i in Generator.getHTML().headElem)
        {
            if (Generator.getHTML().headElem.hasOwnProperty(i)) {
                Generator.getHTML().head.appendChild(Generator.getHTML().headElem[i]);
            }
        }

        Generator.getHTML().bodyElem.header.appendChild(Generator.getHTML().sub.tableInHeader);


        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.labelForCodeContainer);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.textareaCodeArea);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.divLineMarker);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.divLineNumbers);

        Generator.getHTML().bodyElem.divMemoryContainer.appendChild(Generator.getHTML().sub.labelForMemoryContainer);
        Generator.getHTML().bodyElem.divMemoryContainer.appendChild(Generator.getHTML().sub.textareaExecArea);

        for (var j in Generator.getHTML().bodyElem)
        {
            if (Generator.getHTML().bodyElem.hasOwnProperty(j)) {

                Generator.getHTML().body.appendChild(Generator.getHTML().bodyElem[j]);
            }
        }

    };
};

function addListener(obj, eventName, listener) {
    if (obj.addEventListener) {
        obj.addEventListener(eventName, listener, false);
    } else {
        obj.attachEvent("on" + eventName, listener);
    }
}
;
if (!window.addEventListener) {
    document.write = "DOMContentLoaded not supported";
}

var Generator = new _Generator();

Generator.afterGeneration = function(){

}

addListener(document, "DOMContentLoaded", Generator.generate);





