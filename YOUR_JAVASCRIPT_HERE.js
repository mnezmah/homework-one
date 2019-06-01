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


let promptHero = prompt('Welcome to Super Hero game. please enter the name of your hero');
if (promptHero != null) {
  document.getElementById("name").innerHTML =
  "Hello " + promptHero + "! ";
}

//functions
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
