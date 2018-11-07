$(document).ready(function(){
    var snake = $(".snake");
    var snakeLeft = parseInt(snake.css("left"));
    var snakeTop =parseInt(snake.css("top"));
    console.log(snakeLeft );

	function keyBoard(){
		$(document).keydown(function(e){
            if (e.keyCode == 37 || e.keyCode ==65 ) {//按A想左
            left();
            } else if (e.keyCode == 33 || e.keyCode ==87) {//向上
            up();
            } else if (e.keyCode == 39 || e.keyCode ==68) { //向右
            right();
            } else if (e.keyCode == 40 || e.keyCode == 83) { //向下
            down();
            }else if (e.keyCode==32){//暂停
            game.fall();
            }
            console.log(snakeLeft,snakeTop)
		})
	}
	function right(){
		snakeLeft =snakeLeft+ 10;
        $(snake).css("left",snakeLeft +"px");
	}
	function left(){
		snakeLeft =snakeLeft - 10;
        $(snake).css("left",snakeLeft +"px");
	}
	function down(){
		snakeTop =snakeTop+ 10;
        $(snake).css("top",snakeTop +"px");
	}
	function up(){
		snakeTop =snakeTop - 10;
        $(snake).css("top",snakeTop +"px");
	}

keyBoard();
    

})
