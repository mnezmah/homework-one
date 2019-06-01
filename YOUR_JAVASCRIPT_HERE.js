// Write your JS here
let hero = {
  name: 'SuperHero',
  heroic: true,
  inventory: [],
  health: 10,
  weapon: {
    type: 'Knife',
    damage: 2
  }
};

displayStats();
//prompt for hero name
let promptHero = prompt('Welcome to Super Hero game. please enter the name of your hero');
if (promptHero != null) {
  document.getElementById("name").innerHTML =
  "Hello " + promptHero + "! ";
}





//Rest function
function rest(hero) {

  if (hero.health == 10) {
    alert('Your health is at level 10 ')
  } else {
    hero.health = 10;
    return hero;
  }
 }
};

//Picking things function
function pickUpItem(hero, item) {
  hero.inventory.push(item);
  return hero;
};


//Equipping with weapon function
function equipWeapon(hero) {
  if(hero.inventory.length > 0) {
  hero.weapon = hero.inventory[0];
  return hero;
 }
};


//moving the hero
let Player = function(x, y){
this.x = x;
this.y = y;
const myHero = document.getElementById('myHero');
myHero.x
}

Player.prototype.handleInput = function(keyPress) {
  if(keyPress == 'left') {
    this.x -= 101;
  }
  if (keyPress == 'up') {
    this.y -= 83;
  }
  if(keyPress == 'down') {
    this.y += 83;
  }
};

const player = new Player(202, 400);

document.addEventListener('keyup', function(e) {
  const allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
});

// player.handleInput(allowedKeys[e.keyCode])


function displayStats() {
  //new elememts
  const stats = document.querySelector('#stats');
  console.log(stats)
  const name = document.createElement('h2');
  const health = document.createElement('h4');
  const weaponType = document.createElement('h4');
  const weaponDamage = document.createElement('h4');
//appending children
  stats.appendChild(name);
  stats.appendChild(health);
  stats.appendChild(weaponType);
  stats.appendChild(weaponDamage);

//asigning values to children
  name.innerHTML = `${hero.name}`;
  name.id = 'name';
  health.innerHTML = `Your health is at level: ${hero.health}`;
  weaponType.innerHTML = `Your weapon of choice is : ${hero.weapon.type}`;
  weaponDamage.innerHTML = `Level of your weapon damage is : ${hero.weapon.damage}`; 
}


