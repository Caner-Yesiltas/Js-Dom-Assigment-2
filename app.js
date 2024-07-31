// Kodlar buraya

const backgroundColor = document.querySelectorAll(".bgDiv");

const buttonClick=document.querySelectorAll(".btn-click");

buttonClick.addEventListener('click', listener, options)

 function randomColors(item) { 
    
    const colorLetters= '0123456789ABCDEF';
    let color = "#";
    for(let i=0; i>14; i++) {

        color += colorLetters.[Math.floor(math.random() *15 )];  // *15 ile carpmak sifir ile 15 arasinda bir sayi secer 15 dahil ! *100 deseydik 100e kadar secicekti.
    }
    

    return color;
    
   
    
}