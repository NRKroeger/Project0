
let ageTile= document.querySelector('#Yng');
let stateTile= document.querySelector('#Med');
let old= document.querySelector('#Old');
let reset= document.querySelector('Reset');//unused due to time and switch of api for ease

ageTile.addEventListener('click',popOutAge);

const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "live_MGEw6xYDDthUM7wjcap5RVBF5e64BG2WfQorS48IxDbxocvw7hJkOTBmUndKs8ZJ"

 fetch(url,{headers: {
      'x-api-key': api_key
    }})
 .then((response) => {
   return response.json();
 })
.then((data) => {
  let imagesData = data;
  imagesData.map(function(imageData) {
    
    let image = document.createElement('img');
    //use the url from the image object
    image.src = `${imageData.url}`;
        
    let gridCell = document.createElement('div');
    gridCell.classList.add('col');
    gridCell.classList.add('col-lg');
    gridCell.appendChild(image)
      
    document.getElementById('grid').appendChild(gridCell);
    
    });
})
.catch(function(error) {
   console.log(error);
});

//fix 
/*
fetch(url, {
    headers:{
        'x-api-key':apiKey
    }

})

.then((data) => {

    //filter to only include those with an `image` object
    data = data.filter(img => img.image?.url != null)

    storedBreeds = data;

    for (let i = 0; i < storedBreeds.length; i++) {
      const breed = storedBreeds[i];
      let option = document.createElement('option');

      //skip any breeds that don't have an image
      if (!breed.image) continue

      //use the current array index
      option.value = i;
      option.innerHTML = `${breed.name}`;
      document.getElementById('breed_selector').appendChild(option);

    }
    //show the first breed by default
    showBreedImage(0)
  })
  .catch(function(error) {
    console.log(error);
  });

function showBreedImage(index) {
  document.getElementById("breed_image").src = storedBreeds[index].image.url;

  document.getElementById("breed_json").textContent = storedBreeds[index].temperament


  document.getElementById("wiki_link").href = storedBreeds[index].wikipedia_url
  document.getElementById("wiki_link").innerHTML = storedBreeds[index].wikipedia_url
}
*/
