// Escribe tu código aqui----
const element = document.getElementById("gallery");
const arrayImg = Array.from(element.getElementsByTagName("img")); //Toma el elemento html y lo regresa en un arreglo
console.log(arrayImg);

//funcion get and save
fGetSave = arrayImg => {
    // Se extrae URL y la descripción 
    arrayImg.forEach(item => {
        console.log(item);
    // Se crea objeto para guardar los valores extraidos
    
});
        let object = {
            'src': item.src,
            'text': item.alt
        }
        console.log(object);
    console.log(element.innerHTML = '');
    
    let figure = document.createElement('figure');
    let image = document.createElement('img');
    let figCaption = document.createElement('figcaption');
    
    image.src = 'src';
    console.log(image.src = 'src');
    figCaption.innerText = 'text';
    console.log(figCaption = 'text');
    
    figure.appendChild(image);
    figure.appendChild(figCaption);
    element.appendChild(figure);
};
fGetSave(arrayImg);

