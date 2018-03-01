// Escribe tu código aqui----
const element = document.getElementById("gallery");
const arrayImg = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo

//funcion get and save
fGetSave = arrayImg => {
    // let description;
    // let source;
    let objeto = {
        'src' : arrayImg.src,
        'text' : arrayImg.alt
    };
    console.log(objeto);
    // Se extrae URL y la descripción 
    for (let key in arrayImg) {
        // console.log(description);
        let description = arrayImg[key].alt;
        // console.log(source);
        let source = arrayImg[key].src;
        //Se guarda la descripcion y la url
        // objeto['src']=source;
        // objeto['text']=description;

        let container = document.createElement('figure');
        let image = document.createElement('img');
        let figCaption = document.createElement('figcaption');
        
            // const obj = {
        //     src:source,
        //     text:description
        // }
        // // console.log(obj);
        image.innerText = objeto.src;
        figCaption.innerText = objeto.text;
        
        element.appendChild(container);
        container.appendChild(image);
        container.appendChild(figCaption);
    } 
    
    //funcion crear y agregar

    // console.log(container);
    // console.log(image);
    console.log(figCaption);

    // for (let p in objeto) {
    //     console.log(objeto[p].alt);
        
        // console.log(objeto[p]);
        // image.src = objeto[p];
    // }






    //   fCreateAdd(objeto);
    // fDelete(arrayImg);

    // return objeto;
    
};
// fGetSave(arrayImg);



// funcion delete
// fDelete = arrayImg => {

// };

// function create and Add
// fCreateAdd = objeto => {
//     console.log(objeto);
// };



// getImg = element => {
//     // console.log(element); 
    
// }
// getImg(element);

// createElements = 

//  // Eliminar elementos del html
//  element.innerHTML = '';

//  //Pintamos los nuevos elementos
//  let container = document.createElement('figure');
//  let image = document.createElement('img');
//  let figCaption = document.createElement('figcaption');

//  image.src = 'source';
//  figCaption.innerText = 'description';

//  //  document.body.appendChild(container);
//  element.appendChild(container);
//  container.appendChild(../+image);
//  container.appendChild(figCaption);
// //  for (i in )
// //  container[i].appendChild(../+image);
