const next = require('./exercises/treadmill__next.exercise')();
const startGarmin = require('./exercises/treadmill__start_garmin.exercise')();
const stopGarmin = require('./exercises/treadmill__stop_garmin.exercise')();

module.exports = (numMinutes = 15) => {
  const walkTreadmill = require('./exercises/treadmill__walk_treadmill.exercise')(numMinutes);

  return {
    "id": 0,
    "name": "Treadmill",
    "description": "",
    "reps_mode": false,
    "is_rest": false,
    "time": 1,
    "color": 2,
    "workout_id": 205,
    "parent_id": 0,
    "laps": 1,
    "is_group": true,
    "is_parent_exercise": false,
    "sort_id": 139,
    "met": 0,
    "difficulty": 0,
    "reps": 0,
    "bell": 0,
    "metronome_bpm": 0,
    "exercises": [
     {...next},
     {...startGarmin},
     {...walkTreadmill},
     {...stopGarmin}
    ]
  }
};
