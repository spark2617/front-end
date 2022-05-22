
const imagens = document.querySelectorAll(".cartao img");
var urlImagens = [];
//var a=document.createElement("a")
var elementoPai = document.body;
var div =document.querySelectorAll("cartao")
var teste=document.getElementById("imagem-1")
imagens.forEach(function (_, contador){
    const url = prompt(`Adicione o url para a imagem ${contador + 1}`);
    urlImagens.push(url);
    
});

const divs = document.getElementsByClassName('cartao');


for(let i = 0;i<divs.length;i++){
  const div = divs[i];

  const a = document.createElement("a");
  a.href = `${urlImagens[i]}`;
  a.className = 'img-routes'
  a.id="nometeste"
  const imagem1 = document.getElementById(`imagem-${i+1}`);

  a.appendChild(imagem1)
/*
  const img = document.createElement('img');
  img.src = `imagem-${i + 1}`;
  img.alt = `imagem-${i + 1}`;
  img.className = `imagem-${i + 1}`;

  a.appendChild(img);
*/
  div.appendChild(a);
}
    



urlImagens.forEach(function(url, index) {
    const imagem = document.querySelector(`#imagem-${index +1}`);
    
    imagem.setAttribute("src", url)
        //Cria um novo nó do tipo 'div'
        

        //Adiciona o conteúdo do card ao novo nó do tipo 'div', atraves do innerHTML
        

})
console.log(a)
elementoPai.appendChild(a);
/*
for (let elemento of urlImagens){
    a.href=`${elemento}`

}

*/

/*
var s = "";
for (var i = 0, s = ""; i < 26; ++i)
for (var i2 = 0; i2 < 26; ++i2)
for (var i3 = 0; i3 < 26; ++i3)
s += "var " + String.fromCharCode(97+i) + String.fromCharCode(97+i2) + String.fromCharCode(97+i3) + " = " + (i*26*26+i2*26+i3)+";rn";
*/
/*
https://lh3.googleusercontent.com/proxy/AuchnK930DZkhQ6vMhr1iAHFwkE6a5lkRIH9tlxf1WLzpaZc4OSQvAJqL5sKMG9TAnriSBiAAOGjg9ivVvzzBTh09wdAjphM3K63uCY=w1200-h630-p-k-no-nu

https://th.bing.com/th/id/OIP.On-UragLbxUnq8kroITFXwHaHa?pid=ImgDet&w=600&h=600&rs=1

https://i.pinimg.com/originals/65/34/c3/6534c342eedf91c65a67049f0c88f26f.jpg
*/