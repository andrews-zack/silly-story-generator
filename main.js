const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
let insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];
let insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];
let insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' celsius';
    newStory.replace('94 fahrenheit', temperature);
    newStory.replace('300 pounds', weight);
  }

  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  
  newStory = newStory.replaceAll(':insertX:', xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}