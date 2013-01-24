/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 27.11.12
 * Time: 20:36
 * To change this template use File | Settings | File Templates.
 */

//

/**
* @param codeParameter
* @param treeParameter
*/

function lexing( codeParameter , treeParameter) {

    var code = codeParameter;
    var tree = treeParameter.getTree();
    var lexingResult = [];
    var branch, i;
    for ( branch in tree )
    {
        i = branch;
        lexingResult = code.split( tree[ i ] );
    }
    //console.log(tree);


    return lexingResult;
}
