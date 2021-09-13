/**
 * 
 * 
 * Milestone 1
 * Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
 * 
 * Milestone 2
 * Coloriamo le icone per tipo
 * 
 * Milestone 3
 * Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 * 
 * 
 */


const icons =  [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
        name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
        name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
        name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [ '#0000ff', '#ffa500', '#800080'];

const iconContainer = document.getElementById('ms_icons-container');
const types = getProperty(icons, 'type');
const select = document.getElementById('ms_select');

colorItems(icons, colors);
printToHTML(icons, iconContainer);
addOptions(types, select);

select.addEventListener('change',()=>{
    const selectedValue = select.value;
    
    const filteredIcons = filteredItems(icons, selectedValue);
    
    printToHTML(filteredIcons,iconContainer)
});


//   Milestone 1
//   Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

function printToHTML(array, container){

    container.innerHTML = '';

    array.forEach((element) => {
    
        const {name, prefix, type, family, color} = element;
        
        container.innerHTML += 
        `
        <div class="col-2 text-center ">
            <h1><i class='${family} ${prefix}${name}' style='color : ${color}'></i></h1>
            <h4>${name}</h4>
        </div>
        `
    });

};


/** 
 *  Milestone 2
 *  Coloriamo le icone per tipo
 */


/**
 * 
 */
function getProperty(array, property){

    const properties = [];
    array.forEach((element) => {
        if (!properties.includes(element[property])){
            properties.push(element[property]);
        }
    });

    return properties;

};



function colorItems(array, colors){
    const types = getProperty(array, 'type');

    const colorizedArray = array.map((element) => {

        const indexOfType = types.indexOf(element.type);

        if ( indexOfType !== -1 ){

            element.color = colors[indexOfType];

        }
        return element;
    })

    return colorizedArray;
}

/**
 * 
 *  Milestone 3
 *  Creiamo una select con i tipi di icone e usiamola per filtrare le icone
 *  [onChange]
 * 
 */

function addOptions(options, select){
    options.forEach((element) => {
        select.innerHTML += `<option value="${element}">${element}</option>`
    })
}

function filteredItems(array, filter){

    if (filter.trim().toLowerCase() === 'all'){
        return array
    }

    return array.filter((element) => element.type == filter);
    

    
}