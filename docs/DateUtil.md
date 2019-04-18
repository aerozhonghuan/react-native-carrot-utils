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
| `static` formatTimestamp | `timestamp:number`,`fomatter:string` | Format a timestamp in a fomatter,Default format:YYYY-MM-DD HH:mm:ss  |
| `static` getTimestamp | `dateString: string`,`fomatter:string` | Time string conversion timestamp |
| `static` getCurrentTimestamp | - | Get the current timestamp |
| `static` getBeforeDayDate | `dayNum:number` | Format a timestamp in a fomatter,Default format:YYYY-MM-DD HH:mm:ss  |
| `static` getAfterDayDate | `dayNum:number` | Get the date after n days  |
| `static` getCurrentMonthFirst | - | Get the date of the first day of the current month  |
| `static` getCurrentMonthLast | - | Get the date of the last day of the current month  |