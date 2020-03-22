const avenoCream = require('./exercises/post_workout__aveno_cream.exercise')();
const brushTeethPlusHotWater = require('./exercises/post_workout__brush_teeth_plus_hot_water.exercise')();
const deodorant = require('./exercises/post_workout__deodorant.exercise')();
const dry = require('./exercises/post_workout__dry.exercise')();
const getReady = require('./exercises/post_workout__get_ready.exercise')();
const putAwayStuff = require('./exercises/post_workout__put_away_stuff.exercise')();
const scalpFoam = require('./exercises/post_workout__scalp_foam.exercise')();
const shower = require('./exercises/post_workout__shower.exercise')();
const shower2LastMinutes = require('./exercises/post_workout__shower_2_last_minutes.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Post Workout",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 6,
  "workout_id": 174,
  "parent_id": 0,
  "laps": 1,
  "is_group": true,
  "is_parent_exercise": false,
  "sort_id": 145,
  "met": 0,
  "difficulty": 0,
  "reps": 0,
  "bell": 0,
  "metronome_bpm": 0,
  "exercises": [
   {...putAwayStuff},
   {...brushTeethPlusHotWater},
   {...shower},
   {...shower2LastMinutes},
   {...dry},
   {...deodorant},
   {...avenoCream},
   {...scalpFoam},
   {...getReady}
  ]
});
