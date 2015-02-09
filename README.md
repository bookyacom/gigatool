# Gigatool API Wrapper
> Gigatool API Wrapper, [More about gigatool](http://www.gigatools.com/)

## Installation
```
npm install --save gigatool // not yet
```

## Usage

### Example
```javascript
var gigatool = require('gigatool')(API_KEY);

// get all events by country
gigatool.country('Malaysia')
  .then(function(events) {
    // return all events in Malaysia from today
    // read gigatools doc for more information
  });
```

### Options
#### API_KEY
Type: `String`  
api key that is provided by gigatool
