/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 19.12.12
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */

var _Generator = function() {

    // Obiekt zawierający wszystkie elementy 
    this.HTML = {head: document.getElementsByTagName('head')[0], body: document.getElementsByTagName('body')[0]};
    this.getHTML = function(){return this.HTML};

    // <script src="" type="text/javascript"></script>
    this.createBodyScriptElement = function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.type = "text/javascript";
        return script;
    };

    this.createHeadScriptElement = function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.type = "text/javascript";
        return script;
    };

    // <div id="" class="">"content"</div>
    this.createBodyDivElement = function(id, klasa, content) {

        var div = document.createElement('div');
        if (id !== "") {
            div.id = id;
        }
        div.content = content;
        return div;
    };
    this.createBodyLabelElement = function(id, labelFor){
        var label = document.createElement('label');
        label.id = id;
        label.setAttribute("for", labelFor);
        return label;
    };

    this.createBodyTextAreaElement = function(id, content) {
        var textArea = document.createElement('textarea');
        textArea.id = id;
        textArea.content = content;
        return textArea;
    };


    this.createLanguageTable = function() {
    };

    this.createHeadLinkElement = function(rel, href, type) {
        var link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        link.type = type;
        return link;
    };

    this.createTitleElement = function(titleText) {
        var docTitle = document.createElement('title');
        docTitle = titleText;
        return docTitle;
    };

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
        Generator.HTML.head.favicon = Generator.createHeadLinkElement("shortcut icon", "img/favicon.ico", "image/x-icon");
        //title
        //Generator.HTML.head.title = Generator.createTitleElement("FETE: Program and learn it");
        // TODO: Tytuł był wyszukiwany po id, trzeba to zmienic id="title" FETE: Program and learn it
        // head meta
        Generator.HTML.head.metaDesc1 = Generator.createHeadMetaElement("description", "Application which anyone can use to learn programming languages.");
        Generator.HTML.head.metaDesc2 = Generator.createHeadMetaElement("viewport", "width=device-width");

        // head css
        Generator.HTML.head.css1 = Generator.createHeadLinkElement("stylesheet", "css/style.css", "text/css");

        // head scripts
        Generator.HTML.head.modernizer = Generator.createHeadScriptElement("js/libs/modernizr-2.6.2.min.js");

        //BODY

        // body divs and divButtons

        Generator.HTML.body.divBtnStep = Generator.createBodyDivElement("step", "btn");
        Generator.HTML.body.divBtnFlush = Generator.createBodyDivElement("flush", "btn");
        Generator.HTML.body.divBtnTranslate = Generator.createBodyDivElement("translate", "btn");
        Generator.HTML.body.divBtnRun = Generator.createBodyDivElement("run", "btn");

        Generator.HTML.body.divCodeAreaLanguageChoice = Generator.createBodyDivElement("codeAreaLanguageChoice", "");
        Generator.HTML.body.labelForCodeAreaLanguageChoice = Generator.createBodyLabelElement("labelForCodeAreaLanguageChoice", "chooseCodeAreaLanguage");
        //Generator.HTML.body.selectChooseCodeAreaLanguage




        Generator.HTML.body.divExecutionAreaLanguageChoice = Generator.createBodyDivElement("executionAreaLanguageChoice", "");

        Generator.HTML.body.divCodeContainer = Generator.createBodyDivElement("code-container", "");
        Generator.HTML.body.divMemoryContainer = Generator.createBodyDivElement("memory-container","");

        Generator.appendToHTML();
    };

    this.appendToHTML = function(){
        Generator.HTML.head.appendChild(Generator.HTML.head.favicon);
        //Generator.HTML.head.appendChild(Generator.HTML.head.title);
        Generator.HTML.head.appendChild(Generator.HTML.head.metaDesc1);
        Generator.HTML.head.appendChild(Generator.HTML.head.metaDesc2);
        Generator.HTML.head.appendChild(Generator.HTML.head.css1);
        Generator.HTML.head.appendChild(Generator.HTML.head.modernizer);

        Generator.HTML.body.appendChild(Generator.HTML.body.divBtnStep);
        Generator.HTML.body.divBtnStep.setAttribute("class", "btn");
        Generator.HTML.body.divBtnStep.textContent = "Zrób krok";
        Generator.HTML.body.appendChild(Generator.HTML.body.divBtnFlush);
        Generator.HTML.body.divBtnFlush.setAttribute("class", "btn");
        Generator.HTML.body.divBtnFlush.textContent = "Zacznij od nowa";
        Generator.HTML.body.appendChild(Generator.HTML.body.divBtnTranslate);
        Generator.HTML.body.divBtnTranslate.setAttribute("class", "btn");
        Generator.HTML.body.divBtnTranslate.textContent ="Przetłumacz";
        Generator.HTML.body.appendChild(Generator.HTML.body.divBtnRun);
        Generator.HTML.body.divBtnRun.setAttribute("class", "btn");
        Generator.HTML.body.divBtnRun.textContent = "Uruchom";

        Generator.HTML.body.appendChild(Generator.HTML.body.divCodeAreaLanguageChoice);
        Generator.HTML.body.divCodeAreaLanguageChoice.appendChild(Generator.HTML.body.labelForCodeAreaLanguageChoice);
        Generator.HTML.body.labelForCodeAreaLanguageChoice.textContent = "Code Area Language Choice";
        Generator.HTML.body.appendChild(Generator.HTML.body.divExecutionAreaLanguageChoice);
        Generator.HTML.body.appendChild(Generator.HTML.body.divCodeContainer);
        Generator.HTML.body.appendChild(Generator.HTML.body.divMemoryContainer);
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

