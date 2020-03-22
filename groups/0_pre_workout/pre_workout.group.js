const bathroom = require('./exercises/pre_workout__bathroom.exercise')();
const breakfast = require('./exercises/pre_workout__breakfast.exercise')();
const makeTea = require('./exercises/pre_workout__make_tea.exercise')();
const meditate = require('./exercises/pre_workout__meditate.exercise')();
const playWnyc = require('./exercises/pre_workout__play_wnyc.exercise')();
const psylliumPlusVitamins = require('./exercises/pre_workout__psyllium_plus_vitamins.exercise')();
const putAwayDishes = require('./exercises/pre_workout__put_away_dishes.exercise')();
const sweepPlusCatLitter = require('./exercises/pre_workout__sweep_plus_cat_litter.exercise')();
const teaTime = require('./exercises/pre_workout__tea_time.exercise')();
const washHands = require('./exercises/pre_workout__wash_hands.exercise')();
const waterPlusRefill = require('./exercises/pre_workout__water_plus_refill.exercise')();
const weighIn = require('./exercises/pre_workout__weigh_in.exercise')();

module.exports = () => ({
  "id": 0,
  "name": "Pre Workout",
  "description": "",
  "reps_mode": false,
  "is_rest": false,
  "time": 1,
  "color": 0,
  "workout_id": 175,
  "parent_id": 0,
  "laps": 1,
  "is_group": true,
  "is_parent_exercise": false,
  "sort_id": 1,
  "met": 0,
  "difficulty": 0,
  "reps": 0,
  "bell": 0,
  "metronome_bpm": 0,
  "exercises": [
    {...bathroom},
    {...weighIn},
    {...waterPlusRefill},
    {...sweepPlusCatLitter},
    {...washHands},
    {...meditate},
    {...playWnyc},
    {...washHands},
    {...putAwayDishes},
    {...makeTea},
    {...psylliumPlusVitamins},
    {...breakfast},
    {...teaTime}
  ]
});
