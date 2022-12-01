const button = document.querySelector('.fa-moon');
const root = document.querySelector(':root');
console.log(root);
let counter = true;


let change_color =()=>{

    let property_set = (property_name,color)=>{

       return  root.style.setProperty(property_name, color);

    }

if(counter == true){

    property_set('--background-color','#0f0f0f');
    property_set('--card-color','#1b1b1b');
    property_set('--color','white');
    property_set('--sider-bg','#242424');
    property_set('--icon-bg','#525252');
    property_set('--shadow-color','black');



    counter = false
}


else{
    property_set('--background-color','rgb(228, 228, 228)');
    property_set('--card-color','rgb(238, 238, 238)');
    property_set('--color','rgb(51, 51, 51)');
    property_set('--sider-bg','rgb(255, 255, 255)');
    property_set('--icon-bg','rgb(209, 209, 209)');
    property_set('--active','gray');
    
    counter =  true;
}


}