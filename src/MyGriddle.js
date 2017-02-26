import React from 'react';
import Griddle, { plugins } from 'griddle-react';

var data = [
  {
    "id": 0,
    "name": "Mayer Leonard",
    "city": "Kapowsin",
    "state": "Hawaii",
    "country": "United Kingdom",
    "company": "Ovolo",
    "favoriteNumber": 7
  },
];
const MyGriddle = () => {
  return (
      <Griddle
    data={data}
    plugins={[plugins.LocalPlugin]}
  />
  );
};

export default MyGriddle;
