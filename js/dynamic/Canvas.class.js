/**
 * Created with JetBrains WebStorm.
 * User: Kamil
 * Date: 26.01.13
 * Time: 09:29
 * To change this template use File | Settings | File Templates.
 */


var _CanvasDesign = function() {


    this.canvasDesignStart = function() {
        var canvas = document.getElementById('canvasDesign');
        var rectangleButtons = [[]];
        rectangleButtons[0] = [740, 100];
        rectangleButtons[1] = [740, 150];
        rectangleButtons[2] = [740, 200];
        rectangleButtons[3] = [740, 250];
        rectangleButtons[4] = [740, 300];

        // Make sure drawing in canvas is supported
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            Generator.getHTML().bodyElem.canvasDesign.width = 900;
            Generator.getHTML().bodyElem.canvasDesign.height = 800;


            ctx.beginPath();
            //frame
            ctx.moveTo(0, 0);
            ctx.lineTo(Generator.getHTML().bodyElem.canvasDesign.width, 0);
            ctx.lineTo(Generator.getHTML().bodyElem.canvasDesign.width, Generator.getHTML().bodyElem.canvasDesign.height);
            ctx.lineTo(0, Generator.getHTML().bodyElem.canvasDesign.height);
            ctx.lineTo(0, 0);

            ctx.moveTo(1, 50);
            ctx.lineTo(720, 50);
            ctx.lineTo(720, 799);
            ctx.lineTo(1, 799);
            ctx.lineTo(1, 50);

            var grd = [];

            for (var i = 0; i < 5; i++) {
                ctx.moveTo(rectangleButtons[i][0], rectangleButtons[i][1] - 15);
                ctx.lineTo(rectangleButtons[i][0] + 150, rectangleButtons[i][1]);
                ctx.lineTo(rectangleButtons[i][0] + 150, rectangleButtons[i][1] + 40);
                ctx.lineTo(rectangleButtons[i][0], rectangleButtons[i][1] + 25);
                ctx.lineTo(rectangleButtons[i][0], rectangleButtons[i][1] - 15);
                //Create gradient
                grd[i] = ctx.createLinearGradient(rectangleButtons[i][0], rectangleButtons[i][1], rectangleButtons[i][0] + 150, rectangleButtons[i][1] + 35);
                grd[i].addColorStop(0, "#999999");
                grd[i].addColorStop(1, "white");
                //Fill with gradient
                ctx.fillStyle = grd[i];
                ctx.fill();
            }

            //TEXT
            ctx.fillStyle = "black";
            ctx.font = "bold 30px Arial";
            ctx.fillText("FETE: From Elementary Elementary To Expert", 40, 35);
            ctx.font = "bold 18px Arial";
            ctx.fillText("Zrób krok", 775, 120);
            ctx.fillText("Zacznij od nowa", 747, 165);
            ctx.fillText("Przetłumacz kod", 744, 215);
            ctx.fillText("Uruchom", 775, 265);
            ctx.fillText("Drzewo", 782, 315);


//            ctx.moveTo(75, 25);
//            ctx.quadraticCurveTo(25, 25, 25, 62.5);
//            ctx.quadraticCurveTo(25, 100, 50, 100);
//            ctx.quadraticCurveTo(50, 120, 30, 125);
//            ctx.quadraticCurveTo(60, 120, 65, 100);
//            ctx.quadraticCurveTo(125, 100, 125, 62.5);
//            ctx.quadraticCurveTo(125, 25, 75, 25);

            ctx.stroke();
            /*** Constants ***/

            /*var max_sub_branch = 8;
             var max_sub_angle = 3 * Math.PI / 4;
             var max_size = 8;
             var branch_length = 50;
             
             this.makeBranch = function(start_x, start_y, length, angle, size) {
             
             
             //ctx.moveTo(25,25);
             //ctx.lineTo(105,25);
             //ctx.lineTo(25,105);
             //this.lineStyle ( size, 0x333333, 100 ) ;
             //canvas.drawLine(p1.x, p1.y, p2.x, p2.y, paint);lert (start_x+" "+start_y)
             ctx.moveTo(start_x, start_y);
             var end_x = start_x + length * Math.cos(angle);
             var end_y = start_y + length * Math.sin(angle);
             ctx.lineTo(end_x, end_y);
             //alert (end_x+" "+end_y)
             ctx.stroke();
             
             var sub_branch = Math.random(max_sub_branch - 1) + 2;
             var branch_length_dimin = .5 + Math.random() / 2;
             for (var i = 0; i < sub_branch; i++) {
             var newLength = length * branch_length_dimin;
             var newAngle = angle + Math.random() * max_sub_angle - max_sub_angle / 2;
             var newSize = size - 1;
             this.makeBranch(end_x, end_y, newLength, newAngle, newSize);
             
             
             makeBranch(200, 300, this.branch_length, -Math.PI / 2, this.max_size);
             }
             */
        } else {
            alert("Canvas is unsupported by Your browser. \n\
                   \nPlease update it or change it.");
        }
    };


    this.canvasTreeStart = function() {
        var canvas = document.getElementById('canvasTree');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            Generator.getHTML().bodyElem.canvasTree.width = 400;
            Generator.getHTML().bodyElem.canvasTree.height = 400;



        } else {
            alert("Canvas is unsupported by Your browser. \n\
                   \nPlease update it or change it.");
        }
    };
};

var CanvasDesign = new _CanvasDesign();
CanvasDesign.canvasDesignStart();