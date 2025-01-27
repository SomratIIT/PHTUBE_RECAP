console.log('Somrat')
//  fetch,load,show


//  Create load Categories
const loadCategories = () =>{
   fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
   .then(response => response.json())
   .then(data=>displayCategories(data.categories))
}
loadCategories();

/* Load Videos */
const loadVideos = () => {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data=>displayVideos(data.videos));
    }

/* Display Videos */
const displayVideos = (videos)=>{
    const videoContainer = document.getElementById('videos');
    videos.forEach((video)=>{
console.log(video);
const card = document.createElement('div');
card.classList="card card-compact"
card.innerHTML=
`
  <figure class="h-[200px]">
    <img
      src=${video.thumbnail}
      class="h-full w-full object-cover"/>
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
<img src=${video.authors[0].profile_picture} class="w-[50px] h-[50px] rounded-full object-cover" />
  </div>
  <div>
   <p>${video.title}</p>
  <div class="flex gap-1 items-center">
  <h2> ${video.authors[0].profile_name} </h2>
 
  <img src="https://img.icons8.com/?size=100&id=D9RtvkuOe31p&format=png&color=000000" class="w-5 h-5" />
  </div>
  <p>${video.others.views}</p>
  </div>
       
  </div>
`
videoContainer.append(card);
    })
}
// create display categories
const displayCategories = (categories) =>{

const categoryContainer = document.getElementById('categories');
categories.forEach((item) => {
    // console.log(item.category);
    // Create button for each item

    const button = document.createElement("button");
    button.classList= "btn";
    button.innerText=item.category;
    categoryContainer.append(button);
});
}




loadVideos();
