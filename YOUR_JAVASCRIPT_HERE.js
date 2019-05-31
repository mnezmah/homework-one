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
}


//functions
function rest({}) {
  if (hero.health === 10) {
    alert('Your health is at level 10 ')
  } else {
    return {}.health = 10;
  }
  const inn = document.getElementById('inn');
inn.onclick = hero.health = 10
};

function pickUpItem({}, {}) {
  const dagger = document.getElementById('dagger');
dagger.onclick = hero.inventory.push({
  type: 'dagger',
  damage: 2
})
};

function equipWeapon() {
  const bag = document.getElementById('bag')
  bag.onclick = hero.inventory.unshift(
    {
      type: 'bag',
    }
  )
  };



