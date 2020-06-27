
//How can we update this code to use let and const instead of var?

function getCircleArea(radius) {
  const pi = Math.PI;
  const rSquared = Math.pow(radius, 2);

  return pi * rSquared;
}

function getCircleAreas(radiusArr) {
  const areasArr = [];

  for (let i = 0; i < radiusArr.length; i++) {
    const circleArea = getCircleArea(radiusArr[i]);
    areasArr.push(circleArea);
  }

  return areasArr;
}