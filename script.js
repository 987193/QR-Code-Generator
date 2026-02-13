const qrText=document.getElementById('qr-text');
const Sizes=document.getElementById('sizes');
const generateBtn=document.getElementById('generateBtn');
const downloadBtn=document.getElementById('downloadBtn');

const qrContainer=document.querySelector('.qr-body');
let size=Sizes.value;
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    generateQRCode();
});
Sizes.addEventListener('change',(e)=>{
    size=e.target.value;
    generateQRCode();
})


downloadBtn.addEventListener('click',()=>{
    let img=document.querySelector('.qr-body img');
    if(img !== null){
        downloadBtn.setAttribute('href',img.getAttribute('src'));
    }
    else{
        // for downloading a blank rectangle
        downloadBtn.setAttribute('href',`${document.querySelector('canvas').toDataURL()}`) 
    }

})

function generateQRCode(){
    qrContainer.innerHTML=``;
    qrText.value=qrText.value.trim();
    if(qrText.value==='')return;
    new QRCode(qrContainer,{
        text:qrText.value,
        height:size,
        width:size,
        colorLight:'#fff',
        colorDark:"#000",
    })
}