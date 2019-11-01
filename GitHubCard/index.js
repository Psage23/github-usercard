/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
const cards = document.querySelector('.cards');
axios.get('https://api.github.com/users/Psage23')
.then((response) => {
  const newCard = hubProfile(response.data);
  cards.appendChild(newCard);
})
.catch(error => {
  console.log("The data was not returned", error)
})

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
// const profileData = document.querySelector('data');

function hubProfile(data){
  const card = document.createElement('div');
  const pic = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const userName = document.createElement('p')
  const location = document.createElement('p');
  const proFile = document.createElement('p');
  const urlPage = document.createElement('a');
  const followerS = document.createElement('p');
  const followIng = document.createElement('p');
  const bio = document.createElement('p');


  //textContent
  pic.src = data.avatar_url;
  name.textContent = data.name;
  userName.textContent = data.login;
  location.textContent = data.location;
  urlPage.textContent = data.html_url;
  urlPage.setAttribute('href', data.html_url);
  proFile.textContent = 'Profile: ';
  followerS.textContent = `Followers: ${data.followers}`;
  followIng.textContent = `Following: ${data.following}`;
  bio.textContent = data.bio;

  //classList
  card.classList.add('card');
  cardInfo.classList.add('cardInfo');
  name.classList.add('name');
  userName.classList.add('username');

  //appendChild
  card.appendChild(pic);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(location);
  cardInfo.appendChild(proFile);
  cardInfo.appendChild(followerS);
  cardInfo.appendChild(followIng);
  cardInfo.appendChild(bio);
  proFile.appendChild(urlPage);

  return card;
}