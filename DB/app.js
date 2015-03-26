$(function(){

var currentText='';
var num1 = '';
var sym = '';
var Equ = '';
function cal(hi,hello,bitch){
    var pause = '';
    // console.log(num1);
    // console.log(currentText);
    // console.log(sym);
    hi = parseInt(hi);
    hello = parseInt(hello);
    switch(sym){ 
    	case 1:
	    	pause = hi+hello;
	    	break;
        case 2:
            pause = hi - hello;
            break;
        case 3:
            pause = hi*hello;
            break;
        case 4:
            pause = hi/hello;
            break;
        default:
	        return;
	        break;           
    }
    currentText = pause;
    num1 = '';
    console.log(currentText);
    return pause;
}
    
    $('#btn1').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		alert('fuck!!!');
       		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!=''&&Equ!='') {
            currentText = '';
            Equ = '';
         };*/
	    console.log(currentText);
	    currentText = currentText+'1';
        $('#message').text(currentText);
    });
    $('#btn2').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'2';
        $('#message').text(currentText);
    });
    $('#btn3').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'3';
        $('#message').text(currentText);
    });
    $('#btn4').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'4';
        $('#message').text(currentText);
    });
    $('#btn5').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'5';
        $('#message').text(currentText);
    });
    $('#btn6').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'6';
        $('#message').text(currentText);
    });
    $('#btn7').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'7';
        $('#message').text(currentText);
    });
    $('#btn8').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'8';
        $('#message').text(currentText);
    });
    $('#btn9').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
        /*if (currentText!='') {
            currentText = '';
        };*/
	    currentText = currentText+'9';
        $('#message').text(currentText);
    });
    $('#btn0').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
    	if (num1==''&&currentText=='') {
    	   // $('#message').text('0');
    	   return;
    	   
    	}else{
    		currentText = currentText+'0';
    	};
        
	    
        $('#message').text(currentText);
    });
    $('#btndot').on('click', function(){
    	if (Equ!=''&&num1!=''&&currentText!=''&&sym!='') {
    		sym = '';
    		num1 = '';
    		currentText = '';
    		Equ = '';
    	};
	    currentText = currentText+'.';
        $('#message').text(currentText);
    });
    $('#btnc').on('click', function(){
        currentText = ''
        $('#message').text('0');
    });
    
    $('#btnPlus').on('click',function(){
    	num1 = currentText;
    	currentText='';
    	sym = 1;
    });
    $('#btnMul').on('click', function(){
	    num1 = currentText;
	    currentText = '';
	    sym = 3;
    });
    $('#btnCut').on('click', function(){
	    num1 = currentText;
	    // console.log(num1);
	    currentText = '';
	    sym = 2;
    });
    $('#btnKit').on('click', function(){
	   num1 = currentText;
	   currentText = '';
	   sym = 4;
    });
    $('#btnEqual').on('click', function(){
    	Equ = '9';
	    $('#message').text(cal(num1,currentText,sym));
	    console.log(currentText);
    });
});