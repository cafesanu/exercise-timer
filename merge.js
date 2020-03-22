const fs = require('fs');
const path = require('path');

const workoutsDir = path.join(__dirname, 'workouts');

var workouts = fs.readdirSync(workoutsDir);

const allWorkouts = [];
let sortIndex = 1;

workouts.forEach(function (workout) {
  const workoutObj= require(`./workouts/${workout}`)()[0];

  sortIds(workoutObj);

  allWorkouts.push(workoutObj);
});

const allWorkoutsJsonStr = JSON.stringify(
  allWorkouts,
  null,
  2
);

fs.writeFileSync(
  path.resolve(__dirname, `./jsons/all.json`),
  `${allWorkoutsJsonStr}\n`
);

function sortIds(arrObj) {

  function sortIdsFn(arrObj) {
    if(arrObj.sort_id != null) {
      arrObj.sort_id = sortIndex++;
    }

    if(arrObj.exercises) {
      arrObj.exercises.forEach((exercise) => {

        sortIdsFn(exercise)
      });
    }
  }
  sortIdsFn(arrObj);
}
