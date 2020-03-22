const backStretch = require('./exercises/spinning__back_stretch.exercise')();
const bridge = require('./exercises/spinning__bridge.exercise')();
const calfStretch = require('./exercises/spinning__chin_tuck_calf_stretch.exercise')();
const catCow = require('./exercises/spinning__cat_cow.exercise')();
const chinTuck = require('./exercises/spinning__chin_tuck.exercise')();
const getReady = require('./exercises/spinning__get_ready.exercise')();
const startGarmin = require('./exercises/spinning__start_garmin.exercise')();
const stopGarmin = require('./exercises/spinning__stop_garmin.exercise')();
const warmUp = require('./exercises/spinning__warm_up.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Spinning Saturday",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 1,
  "workout_id": 182,
  "parent_id": 0,
  "laps": 1,
  "is_group": true,
  "is_parent_exercise": false,
  "sort_id": 8880,
  "met": 0,
  "difficulty": 0,
  "reps": 0,
  "bell": 0,
  "metronome_bpm": 0,
  "exercises": [
    {...getReady},
    {...startGarmin},
    {...warmUp},
    {...chinTuck},
    {...calfStretch},
    {...backStretch},
    {...catCow},
    {...bridge},
    {...stopGarmin}
  ]
});
