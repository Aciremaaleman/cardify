// Escribe tu código aqui----
// Mandas a llamar 
const element = document.getElementById("gallery");
const array = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo

//Función que crea y agrega a DOM
let createElements = (img, alt, element) => {
  let imgArray=Array.from(img);
  let altArray=Array.from(alt);
  console.log(img[0], alt[0]);
 document.body.removeChild(element);
  for(let i=0; i<img.length; i++){
      let figure = document.createElement('figure');
      let img =document.createElement('img');
      img.setAttribute('src', imgArray[i]);
      figure.appendChild(img);
      let figcaption =document.createElement('figcaption');
      figcaption.innerHTML= altArray[i];
      figure.appendChild(figcaption);
      document.body.appendChild(figure);
      // console.log(element);
    }
return element;
}
//funcion get and save src y alt
let fGetSaveSrc = (array, element) => {
  let $arraySrc=[];
  let $arrayAlt=[];
  array.forEach(element => {
    $arraySrc.push(element.getAttribute("src"));//Extrae el valor de cada uno de los atributos src
    $arrayAlt.push(element.getAttribute("alt"));//Extrae el valor de cada uno de los atributos src
  });
  console.log($arraySrc);
  console.log($arrayAlt);
createElements($arraySrc, $arrayAlt, element);
 return ($arraySrc);
}
// Función  que borra el contenedor
let fDelete = element => {
  element.innerHTML = '';
  return element;
}
fGetSaveSrc(array, element);
fDelete(element);








// // Escribe tu código aqui----
// const element = document.getElementById("gallery");
// const arrayImg = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo
// console.log(arrayImg);

// //funcion get and save
// fGetSave = arrayImg => {
//     // Se extrae URL y la descripción 
//     arrayImg.forEach(item => {
//         console.log(item);
//     // Se crea objeto para guardar los valores extraidos
    
// });
//         let object = {
//             'src': item.src,
//             'text': item.alt
//         }
//         console.log(object);
//     console.log(element.innerHTML = '');
    
//     let figure = document.createElement('figure');
//     let image = document.createElement('img');
//     let figCaption = document.createElement('figcaption');
    
//     image.src = 'src';
//     console.log(image.src = 'src');
//     figCaption.innerText = 'text';
//     console.log(figCaption = 'text');
    
//     figure.appendChild(image);
//     figure.appendChild(figCaption);
//     element.appendChild(figure);
// };
// fGetSave(arrayImg);

