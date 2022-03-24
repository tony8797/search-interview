import {
  blue,
  lightBlue,
  orange,
  green,
} from '@mui/material/colors';

const courseTypeMap = {
  online: {
    title: '線上課程',
    color: blue[500],
  },
  offline: {
    title: '真人直播',
    color: green[500],
  },
  program: {
    title: '增能學程',
    color: lightBlue[500],
  },
  goodjob: {
    title: '就業養成',
    color: orange[500],
  },
};

const courseTypeList = [
  { name: '線上課程', value: 'online' },
  { name: '真人直播', value: 'offline' },
  { name: '增能學程', value: 'program' },
  { name: '就業養成', value: 'goodjob' },
];

const courseTimeList = [
  {
    name: '0小時-4小時',
    value: '4hours',
  },
  {
    name: '4小時-1日',
    value: '1days',
  },
  {
    name: '１日-3日',
    value: '3days',
  },
  {
    name: '3日-1週',
    value: '1week',
  },
];

const courseTimeCheckFuncList = {
  '4hours': (time) => (time >= 0 && time <= 14400),
  '1days': (time) => (time > 14400 && time <= 86400),
  '3days': (time) => (time > 86400 && time <= 86400 * 3),
  '1week': (time) => (time > 86400 * 3 && time <= 86400 * 7),
};

export default {
  courseTypeMap,
  courseTypeList,
  courseTimeList,
  courseTimeCheckFuncList,
};
