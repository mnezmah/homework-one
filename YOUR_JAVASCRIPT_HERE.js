// Write your JS here
let hero = {
  name: '',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: '',
    damage: 2
  }
};

//prompt for hero name
let promptHero = prompt('Welcome to Super Hero game. please enter the name of your hero');
if (promptHero != null) {
  document.getElementById("name").innerHTML =
  "Hello " + promptHero + "! ";
}

//Images array
let images = [
  {
    name: 'dagger',
    src: './img/dagger.png',
    id: 'dagger'
  },
  {
    name: 'inn',
    src: './img/inn.svg',
    id: 'inn'
  },
  {
    name: 'bag',
    src: './img/bag.svg',
    id: 'bag'
  },
]

images.forEach(image => {
  const imageContainer = document.getElementById('imageContainer');
  const imageItem = document.createElement('img');
  imageContainer.appendChild(imageItem);
  imageItem.alt = image.name;
  imageItem.src = image.src;
  imageItem.id = image.id;
  imageItem.style.bottom = `${getRandomInt(0, 30)}rem`;
  imageItem.style.left = `${getRandomInt(0, 30)}rem`;
})


//Rest function
function rest(someHero) {
  someHero = { health: NaN}

  if (someHero.health === 10) {
    alert('Your health is at level 10 ')
  } else {
    return someHero.health = 10;
  }
  const inn = document.getElementById('inn');
  inn.onclick = function(){
    return hero.health = 10}
};


//Picking things function
function pickUpItem(someHero, someWeapon) {
  someHero = {}
  someHero.inventory = []
  someWeapon = {}
  const dagger = document.getElementById('dagger');
  dagger.onclick = someHero.inventory.push({
    type: 'dagger',
    damage: 2
  })
};


//Equipping with weapon function
function equipWeapon(someHero) {
  someHero = {}
  someHero.inventory = []
  const bag = document.getElementById('bag')
  bag.onclick = someHero.inventory.unshift(
    {
      type: 'bag',
    }
  )
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

//carving the hero





function displayStats() {
  const stats = document.getElementById('stats');
  const name = stats.appendChild('h2');
  const health = stats.appendChild('h4');
  const weaponType = stats.appendChild('h4');
  const weaponDamage = stats.appendChild('h4');
  name.innerHTML = `${hero.name}`;
  health.innerHTML = `Your health is at level: ${hero.health}`;
  weaponType.innerHTML = `Your weapon of choice is : ${hero.health}`;
  weaponDamage.innerHTML = `Level of your weapon daage is : ${hero.health}`; 
}
displayStats();
