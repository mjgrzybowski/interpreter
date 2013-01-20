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
    this.getHTML = function(){return HTML};

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

    this.createBodyTableElement = function(rows, cols){
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

    this.getCellHandle = function(tableObject, row, col){
        var cells = tableObject.getElementsByTagName("td");
        return cells[row*col];
    };

    this.createBodyImageElement = function(imageSrc, imageStyle, imageAlt){
        var image = document.createElement('image');
        image.src = imageSrc;
        if (imageStyle !== ""){
            image.style = imageStyle;
        }
        image.alt = imageAlt;
        return image;
    };

    this.createBodyLinkElement = function(linkHref){
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
    this.createBodyLabelElement = function(id, labelFor, content){
        var label = document.createElement('label');
        label.id = id;
        label.setAttribute("for", labelFor);
        if (content !== "") {
            label.textContent = content;
        }
        return label;
    };

    // <select id="" name="">"content"</label>
    this.createBodySelectElement = function(id, name){
        var select = document.createElement('select');
        select.id = id;
        select.setAttribute("name", name);
        return select;
    };

    // <option value="">"content"</option>
    this.createBodyOptionElement = function(value, content){
        var option = document.createElement('option');
        option.setAttribute("value", value);
        option.textContent = content;
        return option;
    };

    // <span id="">"content"</span>
    this.createBodySpanElement = function(id, content){
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

    // <link rel="" href="" type="" />
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
    };*/

    // <meta name="" content="" >
    this.createHeadMetaElement = function(name, content) {
        var meta = document.createElement('meta');
        meta.name = name;
        meta.content = content;
        return meta;
    };

    this.generate = function() {
        document.title = "FETE: Program and learn it";
        // HEAD
        // favicon
        Generator.getHTML().headElem.favicon = Generator.createHeadLinkElement("shortcut icon", "img/favicon.ico", "image/x-icon");
        //title
        //Generator.HTML.head.title = Generator.createTitleElement("FETE: Program and learn it");
        // TODO: Tytuł był wyszukiwany po id, trzeba to zmienic id="title" FETE: Program and learn it
        // head meta
        Generator.getHTML().headElem.metaDesc1 = Generator.createHeadMetaElement("description", "Application which anyone can use to learn programming languages.");
        Generator.getHTML().headElem.metaDesc2 = Generator.createHeadMetaElement("viewport", "width=device-width");

        // head css
        Generator.getHTML().headElem.css1 = Generator.createHeadLinkElement("stylesheet", "css/style.css", "text/css");

        // head scripts
        Generator.getHTML().headElem.modernizer = Generator.createHeadScriptElement("js/libs/modernizr-2.6.2.min.js");

        //BODY


     /*   <header>
            <table>
                <tr><td>
                    <img src="img/logo_FETE_en.png" style="padding: 10px;" alt="Application logo" /></td>
                    <td><a href="#" onclick="Msg.loadLocale(0);"><img src="img/pol_flag.gif" style="padding: 10px;" alt="Polish flag" /></a><br />
                        <a href="#" onclick="Msg.loadLocale(1);"><img src="img/eng_flag.gif" style="padding: 10px;" alt="English flag" /></a><br />
                        <a href="#" onclick="Msg.loadLocale(2);"><img src="img/ger_flag.gif" style="padding: 10px;" alt="German flag" /></a><br />
                        <a href="#" onclick="Msg.loadLocale(3);"><img src="img/esp_flag.gif" style="padding: 10px;" alt="Spanish flag" /></a><br />
                        <a href="#" onclick="Msg.loadLocale(4);"><img src="img/fr_flag.gif" style="padding: 10px;" alt="French flag" /></a><br />
                        <a href="#" onclick="Msg.loadLocale(5);"><img src="img/rus_flag.gif" style="padding: 10px;" alt="Russian flag" /></a><br />
                    </td></tr></table>
        </header>*/

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



        /*Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);
        Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);
        Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);
        Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);
        Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);
        Generator.getHTML().sub.tableInHeader.cols[1].appendChild(Generator.getHTML().sub.linkLocale0);*/




        /*Generator.getHTML().sub.linkLocale[0] = Generator.createBodyLinkElement("#");
        Generator.getHTML().sub.linkLocale[1] = Generator.createBodyLinkElement("#");
        Generator.getHTML().sub.linkLocale[2] = Generator.createBodyLinkElement("#");
        Generator.getHTML().sub.linkLocale[3] = Generator.createBodyLinkElement("#");
        Generator.getHTML().sub.linkLocale[4] = Generator.createBodyLinkElement("#");
        Generator.getHTML().sub.linkLocale[5] = Generator.createBodyLinkElement("#");*/

        Generator.getHTML().sub.linkLocale = [];
        for (var m = 0; m < 6; m++){
            Generator.getHTML().sub.linkLocale[m] = Generator.createBodyLinkElement("#");
            Generator.getHTML().sub.linkLocale[m].setAttribute("onclick", "Msg.loadLocale(" + m +");");
            Generator.getHTML().sub.linkLocale[m].appendChild(Generator.getHTML().sub.flagsImages[m]);

            Generator.getHTML().sub.tableInHeader.rows[0].childNodes[1].appendChild(Generator.getHTML().sub.linkLocale[m]);
            Generator.getHTML().sub.tableInHeader.rows[0].childNodes[1].appendChild(document.createElement('br'));
        }

        /*Generator.getHTML().sub.linkLocale0.setAttribute("onclick", "Msg.loadLocale(0);");
        Generator.getHTML().sub.linkLocale1.setAttribute("onclick", "Msg.loadLocale(1);");
        Generator.getHTML().sub.linkLocale2.setAttribute("onclick", "Msg.loadLocale(2);");
        Generator.getHTML().sub.linkLocale3.setAttribute("onclick", "Msg.loadLocale(3);");
        Generator.getHTML().sub.linkLocale4.setAttribute("onclick", "Msg.loadLocale(4);");
        Generator.getHTML().sub.linkLocale5.setAttribute("onclick", "Msg.loadLocale(5);");
        Generator.getHTML().sub.linkLocale6.setAttribute("onclick", "Msg.loadLocale(6);");*/

        /*<td>
            <img src="img/logo_FETE_en.png" style="padding: 10px;" alt="Application logo" /></td>
            <td><a href="#" onclick="Msg.loadLocale(0);"><img src="img/pol_flag.gif" style="padding: 10px;" alt="Polish flag" /></a><br />
            <a href="#" onclick="Msg.loadLocale(1);"><img src="img/eng_flag.gif" style="padding: 10px;" alt="English flag" /></a><br />
            <a href="#" onclick="Msg.loadLocale(2);"><img src="img/ger_flag.gif" style="padding: 10px;" alt="German flag" /></a><br />
            <a href="#" onclick="Msg.loadLocale(3);"><img src="img/esp_flag.gif" style="padding: 10px;" alt="Spanish flag" /></a><br />
            <a href="#" onclick="Msg.loadLocale(4);"><img src="img/fr_flag.gif" style="padding: 10px;" alt="French flag" /></a><br />
            <a href="#" onclick="Msg.loadLocale(5);"><img src="img/rus_flag.gif" style="padding: 10px;" alt="Russian flag" /></a><br />
        </td>*/


        // body divs and divButtons

        Generator.getHTML().bodyElem.divBtnStep = Generator.createBodyDivElement("step", "btn", "Zrób krok");
        Generator.getHTML().bodyElem.divBtnFlush = Generator.createBodyDivElement("flush", "btn", "Zacznij od nowa");
        Generator.getHTML().bodyElem.divBtnTranslate = Generator.createBodyDivElement("translate", "btn", "Przetłumacz");
        Generator.getHTML().bodyElem.divBtnRun = Generator.createBodyDivElement("run", "btn", "Uruchom");

        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice = Generator.createBodyDivElement("codeAreaLanguageChoice", "", "");
        Generator.getHTML().sub.labelForCodeAreaLanguageChoice = Generator.createBodyLabelElement("labelForCodeAreaLanguageChoice", "chooseCodeAreaLanguage", "Code Area Language Choice");
        Generator.getHTML().sub.selectChooseCodeAreaLanguage = Generator.createBodySelectElement("chooseCodeAreaLanguage", "language");
        // TODO: pr zmieniono na ps, sprawdzic zgodnosc
        Generator.getHTML().sub.optionChooseCodeAreaLanguage1 = Generator.createBodyOptionElement("ps","pseudo");
        Generator.getHTML().sub.optionChooseCodeAreaLanguage2 = Generator.createBodyOptionElement("js","javascript");
        Generator.getHTML().sub.optionChooseCodeAreaLanguage3 = Generator.createBodyOptionElement("cpp","cpp");
        Generator.getHTML().sub.optionChooseCodeAreaLanguage4 = Generator.createBodyOptionElement("java","java");

        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice = Generator.createBodyDivElement("executionAreaLanguageChoice", "", "");
        Generator.getHTML().sub.labelForExecutionAreaLanguageChoice = Generator.createBodyLabelElement("labelForExecutionAreaLanguageChoice", "chooseExecutionAreaLanguage", "Execution Area Language Choice");
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage = Generator.createBodySelectElement("chooseExecutionAreaLanguage", "language");
        // TODO: pr zmieniono na ps, sprawdzic zgodnosc
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage1 = Generator.createBodyOptionElement("ps","pseudo");
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage2 = Generator.createBodyOptionElement("js","javascript");
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage3 = Generator.createBodyOptionElement("cpp","cpp");
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage4 = Generator.createBodyOptionElement("java","java");

        Generator.getHTML().bodyElem.spanTiming = Generator.createBodySpanElement("timing", "Czas: 0.000 s");

        Generator.getHTML().bodyElem.divCodeContainer = Generator.createBodyDivElement("code-container", "", "");
        Generator.getHTML().sub.labelForCodeContainer = Generator.createBodyLabelElement("labelForCodeArea", "codeArea", "Code");
        Generator.getHTML().sub.textareaCodeArea = Generator.createBodyTextAreaElement("codeArea");
        Generator.getHTML().sub.divLineMarker = Generator.createBodyDivElement("execMarker", "lineMarker", "");
        Generator.getHTML().sub.divLineNumbers = Generator.createBodyDivElement("lineNumbers", "linesNumbers", "1");


        Generator.getHTML().bodyElem.divMemoryContainer = Generator.createBodyDivElement("memory-container", "", "");
        Generator.getHTML().sub.labelForMemoryContainer = Generator.createBodyLabelElement("labelForExecutionArea", "execArea", "Exec area");
        Generator.getHTML().sub.textareaExecArea = Generator.createBodyTextAreaElement("execArea");


        Generator.getHTML().bodyElem.scriptJQuery = Generator.createBodyScriptElement("js/libs/jquery-1.8.3.min.js");
        Generator.getHTML().bodyElem.scriptPlugins = Generator.createBodyScriptElement("js/plugins.js");
        Generator.getHTML().bodyElem.scriptMsg = Generator.createBodyScriptElement("js/static/Msg.js");
        Generator.getHTML().bodyElem.scriptCodeClass = Generator.createBodyScriptElement("js/static/Code.class.js");
        Generator.getHTML().bodyElem.scriptCommandsClass = Generator.createBodyScriptElement("js/static/Commands.class.js");
        Generator.getHTML().bodyElem.scriptLanguageClass = Generator.createBodyScriptElement("js/static/Language.class.js");
        Generator.getHTML().bodyElem.scriptOperatorClass = Generator.createBodyScriptElement("js/static/Operator.class.js");
        Generator.getHTML().bodyElem.scriptTreeDefinitionClass = Generator.createBodyScriptElement("js/static/TreeDefinition.class.js");

        Generator.getHTML().bodyElem.scriptAreaValidator = Generator.createBodyScriptElement("js/dynamic/AreaValidator.class.js");
        Generator.getHTML().bodyElem.scriptCompilerClass = Generator.createBodyScriptElement("js/dynamic/Compiler.class.js");
        Generator.getHTML().bodyElem.scriptInterpreterClass = Generator.createBodyScriptElement("js/dynamic/Interpreter.class.js");
        Generator.getHTML().bodyElem.scriptLexerClass = Generator.createBodyScriptElement("js/dynamic/Lexer.class.js");
        Generator.getHTML().bodyElem.scriptMemoryClass = Generator.createBodyScriptElement("js/dynamic/Memory.class.js");
        Generator.getHTML().bodyElem.scriptMethodsClass = Generator.createBodyScriptElement("js/dynamic/Methods.class.js");
        Generator.getHTML().bodyElem.scriptPreprocessorClass = Generator.createBodyScriptElement("js/dynamic/Preprocessor.class.js");
        Generator.getHTML().bodyElem.scriptTranslatorClass = Generator.createBodyScriptElement("js/dynamic/Translator.class.js");
        Generator.getHTML().bodyElem.scriptVirtualMachine = Generator.createBodyScriptElement("js/dynamic/VirtualMachine.js");
        Generator.getHTML().bodyElem.scriptInterpretation = Generator.createBodyScriptElement("js/dynamic/interpretation.js");
        Generator.getHTML().bodyElem.scriptLexing = Generator.createBodyScriptElement("js/dynamic/lexing.js");
        Generator.getHTML().bodyElem.scriptPreprocessing = Generator.createBodyScriptElement("js/dynamic/preprocessing.js");
        Generator.getHTML().bodyElem.scriptUI = Generator.createBodyScriptElement("js/dynamic/UI.js");


        Generator.appendToHTML();
    };

    this.appendToHTML = function(){

        for(var i in Generator.getHTML().headElem)
        {
            if (Generator.getHTML().headElem.hasOwnProperty(i)) {
                Generator.getHTML().head.appendChild(Generator.getHTML().headElem[i]);
            }
        }

        Generator.getHTML().bodyElem.header.appendChild(Generator.getHTML().sub.tableInHeader);


        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice.appendChild(Generator.getHTML().sub.labelForCodeAreaLanguageChoice);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseCodeAreaLanguage1);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseCodeAreaLanguage2);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseCodeAreaLanguage3);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseCodeAreaLanguage4);
        Generator.getHTML().sub.optionChooseCodeAreaLanguage1.selected = true;
        Generator.getHTML().bodyElem.divCodeAreaLanguageChoice.appendChild(Generator.getHTML().sub.selectChooseCodeAreaLanguage);
        Generator.getHTML().sub.selectChooseCodeAreaLanguage.setAttribute("onchange", "UI.chooseCodeLanguage(this.options[selectedIndex].text);");

        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice.appendChild(Generator.getHTML().sub.labelForExecutionAreaLanguageChoice);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseExecutionAreaLanguage1);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseExecutionAreaLanguage2);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseExecutionAreaLanguage3);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.appendChild(Generator.getHTML().sub.optionChooseExecutionAreaLanguage4);
        Generator.getHTML().sub.optionChooseExecutionAreaLanguage1.selected = true;
        Generator.getHTML().bodyElem.divExecutionAreaLanguageChoice.appendChild(Generator.getHTML().sub.selectChooseExecutionAreaLanguage);
        Generator.getHTML().sub.selectChooseExecutionAreaLanguage.setAttribute("onchange", "UI.chooseExecutionLanguage(this.options[selectedIndex].text);");

        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.labelForCodeContainer);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.textareaCodeArea);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.divLineMarker);
        Generator.getHTML().bodyElem.divCodeContainer.appendChild(Generator.getHTML().sub.divLineNumbers);

        Generator.getHTML().bodyElem.divMemoryContainer.appendChild(Generator.getHTML().sub.labelForMemoryContainer);
        Generator.getHTML().bodyElem.divMemoryContainer.appendChild(Generator.getHTML().sub.textareaExecArea);

        for(var j in Generator.getHTML().bodyElem)
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
if (!window.addEventListener) {
    document.write = "DOMContentLoaded not supported";
}

var Generator = new _Generator();
console.log(Generator);
addListener(document, "DOMContentLoaded", Generator.generate);





