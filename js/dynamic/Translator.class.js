/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 08.12.12
 * Time: 16:48
 * To change this template use File | Settings | File Templates.
 */

// Obiekt, ktory odpowiada za tlumaczenie wprowadzonego kodu na kod innego jezyka
// Todo: zbudowac kompilator kodu


var _Translator = function() {

    var codeAfterTranslation = [];
    
    this.getCodeAfterTranslation = function(){
      return codeAfterTranslation;  
    };
    
    //TODO: translate function need to be implemented
    this.translate = function() {
        var fromLanguage = UI.getCodeLanguage();
        var toLanguage = UI.getExecLanguage();
        var code = new _Lexer().getLinesFromCode();
        
        
        
        codeAfterTranslation = ["Need to be implemented"];
        this.writeToExecArea(codeAfterTranslation);
    };

    this.writeToExecArea = function(codeAfterTranslationValue) {
        document.getElementById("execArea").value = codeAfterTranslationValue;
    };
};