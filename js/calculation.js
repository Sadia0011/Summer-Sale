document.getElementById('btn-goHome').addEventListener('click',function(){
    window.location.replace('http://127.0.0.1:65409/index.html')
})

function clickedApply(){
    const couponInput=document.getElementById("coupon-input").value;
if(couponInput == 'SELL200'){
const discount=((total*20)/100);
document.getElementById("discount").innerText=discount;
const totalAfterDiscount=total-discount;
document.getElementById("total-after-discount").innerText=totalAfterDiscount;
}
else{
    alert("please enter the correct code")
}
}
let total=0;

function clickToBuy(data){

const selectedItems=document.getElementById("selected-items");

const nameList= data.childNodes[1].childNodes[3].childNodes[3].innerText;
const count=selectedItems.childElementCount;
const p=document.createElement("p");
p.innerHTML=`
${count+1}. ${nameList}`;
selectedItems.appendChild(p);

const priceList= data.childNodes[1].childNodes[3].childNodes[5].innerText;
const price=priceList.split(" ")[0];
const priceInNumber=parseFloat(price);

total +=priceInNumber;
// console.log(total);

document.getElementById("total-price").innerText=total;

document.getElementById("total-after-discount").innerText=total;

if(total>0){
    document.getElementById("btn-make-purchase").removeAttribute("disabled");
}

if(total >= 200){
    document.getElementById("btn-apply").removeAttribute("disabled");
}

}