let ici = document.querySelector('.ici');
let burgerMenu = document.querySelector('.burgerMenu');
let parla = document.querySelector('.parla');
ici.addEventListener('click', function () {
   burgerMenu.style.display = "block";
})
parla.addEventListener('click', function (){
   burgerMenu.style.display = "none";
})

let cities = ['Salem, MA',
  'Walnut Creek, CA',
  'Victoria, BC',
  'Centennial, CO',
  'Bournemouth, UK',
  'Vancouver, BC',
  'Montreal, QC',
  'Roseville, MN',
  'Rome, GA',
  'Peterborough, NH',
  'Oakland, CA',
  'Austin, TX',
  'Mystic, CT',
  'Saint Charles, MO',
  'Des Moines, IA',
  'Salt Lake City, UT',
  'Lander, WY',
  'Cote St Luc, QC',
  'Womelsdorf, PA',
  'Minneapolis, MN',
  'Highlands Ranch, CO',
  'San Francisco, CA',
  'Silver Spring, MD',
  'London, ON',
  'Pottstown, PA',
  'Phoenix, AZ',
  'Sacramento, CA',
  'Farmers Branch, TX',
  'Marina del Rey, CA',
  'Murray, UT',
  'Orlando, FL',
  'Paris, France',
  'Brookline, MA',
  'Los Angeles, CA',
  'San Rafael, CA',
  'San Luis Obispo, CA',
  'Atlanta, GA',
  'Tucson, AZ']; 


let paragraph = document.getElementById("element");
console.log(paragraph);
setTimeout(loop, 2500, 0);

function loop(next) {
  paragraph.innerHTML = cities[next];
  next = ( next + 1 >= cities.length) ? 0 : next + 1;
  setTimeout( loop,2500, next);
}