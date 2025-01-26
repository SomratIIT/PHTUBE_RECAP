console.log('Somrat')
//  fetch,load,show


//  Create load Categories
const loadCategories = () =>{
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(response => response.json())
   .then(data=>displayCategories(data.categories))
}
loadCategories();
// create display categories
const displayCategories = (categories) =>{

const categoryConatiner = document.getElementById('categories');
categories.forEach((item) => {
    console.log(item.category);
    // Create button for each item

    const button = document.createElement("button");
    button.classList= "btn";
    button.innerText=item.category;
    categoryConatiner.append(button);
});
}