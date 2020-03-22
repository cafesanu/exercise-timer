const preWorkout = require('../groups/0_pre_workout/pre_workout_sunday.group')();
const postWorkout = require('../groups/6_post_workout/post_workout_7_sunday.group')();

module.exports = () => [
  {
    "id": 1167670,
    "uuid": "2e580bbf-c94f-4c22-a0ad-cd0404eae763",
    "name": "Sunday",
    "description": "",
    "icon_number": 0,
    "laps": 1,
    "sorting_id": 8,
    "total_calories": 536,
    "total_duration": 9218,
    "total_exercises": 67,
    "exercises": [
      {...preWorkout},
      {...postWorkout}
    ]
  }
];
