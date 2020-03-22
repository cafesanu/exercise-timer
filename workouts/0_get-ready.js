const preWorkout = require('../groups/0_pre_workout/pre_workout.group')();
const postWorkout = require('../groups/6_post_workout/post_workout_0.group')();
const putAwayStuff = require('../groups/6_post_workout/exercises/post_workout__put_away_stuff.exercise')();

postWorkout.exercises = postWorkout.exercises.filter((exercise) => {
  return ![putAwayStuff.name].includes(exercise.name)
})

module.exports = () => [
 {
  "id": 1169743,
  "uuid": "c6b158ba-141e-4504-a0ff-5241e72febf3",
  "name": "Get Ready",
  "description": "",
  "icon_number": 0,
  "laps": 1,
  "sorting_id": 12,
  "total_calories": 223,
  "total_duration": 3210 + 420,
  "total_exercises": 28,
  "exercises": [
    {...preWorkout},
    {...postWorkout}
   ]
 }
]
