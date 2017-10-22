var inp=document.forms['cal'];
var input=inp.getElementsByTagName('input')
var cls_btn= document.getElementsByClassName("cls_btn")[0];
var result_btn=document.getElementsByClassName("result_btn")[0];

for(var i=0; i< input.length;i++){
    if(input[i].value != '=' && input[i].value !='clear'){
        input[i].onclick=function(){
            cal(this.value);
        }
    }
}

function calc(value){
    if(inp['result'].vallue==0){
        inp['result'].value='';
    }

    inp['result'].value +=value;

}