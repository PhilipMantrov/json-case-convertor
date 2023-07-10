# JsonCaseConvertorTS
## Convert any json object key name and values case

It's TS fork of original lib `JsonCaseConvertor` [https://github.com/MIRTAHAALI/json-case-convertor]

JsonCaseConvertorTS can handle literraly any json object for case convertion. 
## Features

- Supported cases: Pascal, Camel, Snake, Kebab, Upper, Lower, Constant, Dot, Path, Sentence, Title
- Support array objects
- Support objects within objects
- Support object values case convertion
- Support object keys case convertion
- One line code implementation

## Installation

```npm
npm install json-case-convertor-ts
```

## Usage

Import:

```javascript
import { snakeCaseKeys, snakeCaseValues } from 'json-case-converter-ts';
```

Convert only object KEYS Names:

```typescript
const jsonData = { 
	"firstName": "John", 
	"lastName": "Wick", 
	"car": "Ford Mustang",
	"car2": null,
	"prize": 2000,
	"other" : ['sample1', 'sample2'],
	"other2" : {
		"location": "America",
		"longitude1": 23.4,
		"latitude1" : 23.11
	}
}
snakeCaseKeys(jsonData); //Convert all the keys of object to snake case
```

Output:

```typescript
{
  first_name: 'John',
  last_name: 'Wick',
  car: 'Ford Mustang',
  car_2: null,
  prize: 2000,
  other: [ 'sample1', 'sample2' ],
  other_2: { location: 'America', longitude_1: 23.4, latitude_1: 23.11 }
}
```

Convert only object values:

```typescript
snakeCaseValues(jsonData) //Convert all the values of object to snake case
```

Output:

```typescript
{
  firstName: 'john',
  lastName: 'wick',
  car: 'ford_mustang',
  car2: null,
  prize: 2000,
  other: [ 'sample_1', 'sample_2' ],
  other2: { location: 'america', longitude1: 23.4, latitude1: 23.11 }
}
```

Convert only object keys and values:

```typescript
snakeCaseAll(jsonData) //Convert all the values and keys of object to snake case
```
Output:

```typescript
{
  first_name: 'john',
  last_name: 'wick',
  car: 'ford_mustang',
  car_2: null,
  prize: 2000,
  other: [ 'sample_1', 'sample_2' ],
  other_2: { location: 'america', longitude_1: 23.4, latitude_1: 23.11 }
}
```


## License

ISC
