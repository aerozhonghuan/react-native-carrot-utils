## Getting started

`$ npm install react-native-carrot-utils --save`

## Usage
`javascript`
All you need is to import { DateUtil } from the react-native-carrot-utils module and then use the tag.
`Example import`
```
import { DateUtil } from 'react-native-carrot-utils';
```

```
...
  
  click(){
    //TODO:Call the func which you want
    let  t = DateUtil.getAfterDayDate(1);
    alert(`${t}`);
  }
  ...
  
```

## static Methods

| Method  | Params  | Description |
| :------------ |:---------------:| :---------------:|
| `static` formatTimestamp | `timestamp`:number;`fomatter`:string, Default format:YYYY-MM-DD HH:mm:ss |Format a timestamp in a fomatter |