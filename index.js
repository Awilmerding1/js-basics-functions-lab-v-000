// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  let blocks = distance > 42 ? distance - 42 : 42 - distance;
  return blocks
}

function distanceFromHqInFeet (distance) {
  let blocks = distanceFromHqInBlocks(distance);
  let feet = blocks*264;
  return feet;
}

function distanceTravelledInFeet(distance) {
  
}
