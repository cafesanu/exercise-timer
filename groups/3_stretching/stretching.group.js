const startGarmin = require('./exercises/stretching__start_garmin.exercise')();
const hamstringStretch = require('./exercises/stretching__hamstring_stretch.exercise')();
const sciaticNerveGlide = require('./exercises/stretching__sciatic_nerve_glide.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Stretching",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 3,
  "workout_id": 206,
  "parent_id": 0,
  "laps": 1,
  "is_group": true,
  "is_parent_exercise": false,
  "sort_id": 37,
  "met": 0,
  "difficulty": 0,
  "reps": 0,
  "bell": 0,
  "metronome_bpm": 0,
  "exercises": [
    {...startGarmin},
    {...hamstringStretch},
    {...sciaticNerveGlide}
  ]
});
