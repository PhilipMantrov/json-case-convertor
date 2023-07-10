// License Type: ISC
// Original Author: Mir Taha Ali
// Fork Author: Philip Mantrov

import _ from 'lodash';

const caseCondition = (origKey, keyCase): string => {
  let newKey = null;
  switch (keyCase){
    case `pascal`:
      newKey = _.startCase(_.camelCase(origKey)).replace(/ /g, ``);
      break;
    case `camel`:
      newKey = _.camelCase(origKey)
      break;
    case `kebab`:
      newKey = _.kebabCase(origKey)
      break;
    case `snake`:
      newKey = _.snakeCase(origKey)
      break;
    case `upper`:
      newKey = _.toUpper(origKey)
      break;
    case`constant`:
      newKey = _.upperCase(origKey).replace(/ /g, `_`)
      break;
    case `dot`:
      newKey = _.lowerCase(origKey).replace(/ /g, `.`)
      break;
    case `path`:
      newKey = _.lowerCase(origKey).replace(/ /g, `/`)
      break;
    case `lower`:
      newKey = _.toLower(origKey)
      break;
    case `sentence`:
      newKey = _.upperFirst(_.lowerCase(origKey));
      break;
    case `title`:
      newKey = _.startCase(_.camelCase(origKey));
      break;
  }
  return newKey;
}

function keyConvertor(obj, keyCase): any {
  if (typeof obj !== `object` && obj !== null) {
    return obj;
  }
  let objectToSend, origKey, newKey, value
  if (obj instanceof Array) {
    return obj.map(function (value) {
      if (typeof value === `object`) {
        value = keyConvertor(value, keyCase)
      }
      return value
    })
  } else {
    objectToSend = {}
    for (origKey in obj) {
      if (obj.hasOwnProperty(origKey)) {
        newKey = caseCondition(origKey, keyCase);
        value = obj[origKey]
        if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
          value = keyConvertor(value, keyCase)
        }
        objectToSend[newKey] = value
      }
    }
  }
  return objectToSend
}

function allConvertor(obj, keyCase): any {
  if (typeof obj !== `object` && obj !== null) {
    return obj;
  }
  let objectToSend, origKey, newKey, value
  if (obj instanceof Array) {
    return obj.map(function (value) {
      if (typeof value === `object`) {
        value = allConvertor(value, keyCase)
      }
      if (typeof value === `string`)
      {
        value = caseCondition(value, keyCase);
      }
      return value
    })
  } else {
    objectToSend = {}
    for (origKey in obj) {
      if (obj.hasOwnProperty(origKey)) {
        newKey = caseCondition(origKey, keyCase);
        value = obj[origKey]
        if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
          value = allConvertor(value, keyCase)
        }
        else {
          if (typeof value === `string`)
            value = caseCondition(value, keyCase);
        }
        objectToSend[newKey] = value
      }
    }
  }
  return objectToSend
}

function valueConvertor(obj, keyCase): any {
  if (typeof obj !== `object` && obj !== null) {
    if (typeof obj !== `string`)
      return caseCondition(obj, keyCase );
    else return obj;
  }
  let objectToSend, origKey, value
  if (obj instanceof Array) {
    return obj.map(function (value) {
      if (typeof value === `object`) {
        value = valueConvertor(value, keyCase)
      }
      if (typeof value === `string`)
      {
        value = caseCondition(value, keyCase);
      }
      return value
    })
  } else {
    objectToSend = {}
    for (origKey in obj) {
      if (obj.hasOwnProperty(origKey)) {
        value = obj[origKey]
        if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
          value = valueConvertor(value, keyCase)
        }
        else {
          if (typeof value === `string`)
            value = caseCondition(value, keyCase);
        }
        objectToSend[origKey] = value
      }
    }
  }
  return objectToSend
}
//-----------------------------------------------
export function pascalCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `pascal`)
}
export function camelCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `camel`)
}
export function snakeCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `snake`)
}
export function kebabCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `kebab`)
}
export function upperCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `upper`)
}
export function lowerCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `lower`)
}
export function constantCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `constant`)
}
export function dotCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `dot`)
}
export function pathCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `path`)
}
export function sentenceCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `sentence`)
}
export function titleCaseKeys<T>(obj: any): T {
  return keyConvertor(obj, `title`)
}
export function pascalCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `pascal`)
}
export function camelCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `camel`)
}
export function snakeCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `snake`)
}
export function kebabCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `kebab`)
}
export function upperCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `upper`)
}
export function lowerCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `lower`)
}
export function constantCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `constant`)
}
export function dotCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `dot`)
}
export function pathCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `path`)
}
export function sentenceCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `sentence`)
}
export function titleCaseValues<T>(obj: any): T {
  return valueConvertor(obj, `title`)
}
export function pascalCaseAll<T>(obj: any): T {
  return allConvertor(obj, `pascal`)
}
export function camelCaseAll<T>(obj: any): T {
  return allConvertor(obj, `camel`)
}
export function snakeCaseAll<T>(obj: any): T {
  return allConvertor(obj, `snake`)
}
export function kebabCaseAll<T>(obj: any): T {
  return allConvertor(obj, `kebab`)
}
export function upperCaseAll<T>(obj: any): T {
  return allConvertor(obj, `upper`)
}
export function lowerCaseAll<T>(obj: any): T {
  return allConvertor(obj, `lower`)
}
export function constantCaseAll<T>(obj: any): T {
  return allConvertor(obj, `constant`)
}
export function dotCaseAll<T>(obj: any): T {
  return allConvertor(obj, `dot`)
}
export function pathCaseAll<T>(obj: any): T {
  return allConvertor(obj, `path`)
}
export function sentenceCaseAll<T>(obj: any): T {
  return allConvertor(obj, `sentence`)
}
export function titleCaseAll<T>(obj: any): T {
  return allConvertor(obj, `title`)
}
