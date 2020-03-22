const eStim = require('./exercises/healing_e_stim.exercise')();
const inversionTable = require('./exercises/healing_inversion_table.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Healing",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 5,
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
    {...inversionTable},
    {...eStim}
  ]
});
