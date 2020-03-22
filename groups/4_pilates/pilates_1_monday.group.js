const birdDog = require('./exercises/pilates__bird_dog.exercise')();
const deadBug = require('./exercises/pilates__dead_bug.exercise')();
const planks = require('./exercises/pilates__planks.exercise')();
const stopGarmin = require('./exercises/pilates__stop_garmin.exercise')();
const supermanSwissBall = require('./exercises/pilates__superman_swiss_ball.exercise')();
const swissBallPlanks = require('./exercises/pilates__swiss_ball_planks.exercise')();
const squats = require('./exercises/pilates__squats.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Pilates",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 4,
  "workout_id": 177,
  "parent_id": 0,
  "laps": 1,
  "is_group": true,
  "is_parent_exercise": false,
  "sort_id": 74,
  "met": 0,
  "difficulty": 0,
  "reps": 0,
  "bell": 0,
  "metronome_bpm": 0,
  "exercises": [
    {...planks},
    {...birdDog},
    {...swissBallPlanks},
    {...squats},
    {...deadBug},
    {...supermanSwissBall},
    {...stopGarmin}
  ]
});
