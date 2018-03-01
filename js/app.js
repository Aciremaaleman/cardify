// Escribe tu código aqui----
const element = document.getElementById("gallery");
const arrayImg = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo
// console.log(arrayImg);

//funcion get and save
fGetSave = arrayImg => {
    // Se extrae URL y la descripción 
    arrayImg.forEach(element => {
        console.log(element);

        let object = {
            'src': element.src,
            'text': element.alt
        }
        console.log(object);

        console.log(arrayImg.innerHTML = '');

        // let figure = document.createElement('figure');
        // let image = document.createElement('img');
        // let figCaption = document.createElement('figcaption');
    
        // figure.src = object['src'];
        // image.innerText = object['text'];
    
        // element.appendChild(figure);
        // figure.appendChild(image);
        // figure.appendChild(figCaption);

    })

};
fGetSave(arrayImg);

