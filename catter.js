//change the limit to however many images to use
const url = `https://api.thecatapi.com/v1/images/search?limit=20`;
const api_key = "live_MGEw6xYDDthUM7wjcap5RVBF5e64BG2WfQorS48IxDbxocvw7hJkOTBmUndKs8ZJ"
let btnB =document.getElementById("Cool");
let tb=document.getElementById("txtbx");

btnB.addEventListener('click',cooCat)


async function cooCat(){
  let rand= 4*Math.random();//0-4

  let out;

  if(rand<1)
  out="I love Cats!";
  else if(rand<2)
  out="Cats are Cool!";
  else if(rand<3)
  out="I love to pet cats!";
  else
  out="Chinnie scritches!";
  tb.innerHTML=out;


}


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

