let right1=Math.floor(Math.random() * 8)*80;
let top1=Math.floor(Math.random() * 8)*10;
let div=document.querySelector('div');
let arr=["pink","purpule","green","blue","aqua","coral","cornflowerblue","cyan"];
function change(){
    console.log("h");""
     right1=Math.floor(Math.random() * 8)*80;
 top1=Math.floor(Math.random() * 8)*10;

    div.style.right=`${right1}px`;
    div.style.top=`${top1}px`;
    div.style.width=`${right1}px`;
    div.style.height=`${top}px`;
    div.style.backgroundColor=arr[Math.floor(Math.random() * 8)-1];
}


setInterval(change, 2000);