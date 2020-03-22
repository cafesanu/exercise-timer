const preWorkout = require('../groups/0_pre_workout/pre_workout_with_cat_change.group')();
const spinning = require('../groups/1_spinning/spinning_5_friday.group')();
const treadmill = require('../groups/2_treadmill/treadmill.group')();
const stretching = require('../groups/3_stretching/stretching.group')();
const pilates = require('../groups/4_pilates/pilates_5_friday.group')();
const healing = require('../groups/5_healing/healing.group')();
const postWorkout = require('../groups/6_post_workout/post_workout_0.group')();

module.exports = () => [
  {
    "id": 1167670,
    "uuid": "2e580bbf-c94f-4c22-a0ad-cd0404eae763",
    "name": "Friday",
    "description": "",
    "icon_number": 0,
    "laps": 1,
    "sorting_id": 8,
    "total_calories": 536,
    "total_duration": 9218,
    "total_exercises": 67,
    "exercises": [
      {...preWorkout},
      {...spinning},
      {...treadmill},
      {...stretching},
      {...pilates},
      {...healing},
      {...postWorkout}
    ]
  }
];
