const hipExtensions = require('./exercises/pilates__hip_extensions.exercise')();
const lateralPallofWalk = require('./exercises/pilates__lateral_pallof_walk.exercise')();
const pallofPress = require('./exercises/pilates__pallof_press.exercise')();
const standingChestPress = require('./exercises/pilates__standing_chest_press.exercise')();
const stopGarmin = require('./exercises/pilates__stop_garmin.exercise')();
const shoulderExtensions = require('./exercises/pilates__shoulder_extensions.exercise')();

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
    {...hipExtensions},
    {...lateralPallofWalk},
    {...pallofPress},
    {...standingChestPress},
    {...shoulderExtensions},
    {...stopGarmin}
  ]
});
