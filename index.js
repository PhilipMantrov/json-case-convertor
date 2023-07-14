"use strict";
// License Type: ISC
// Original Author: Mir Taha Ali
// Fork Author: Philip Mantrov
exports.__esModule = true;
var lodash_1 = require("lodash");
var caseCondition = function (origKey, keyCase) {
    var newKey = null;
    switch (keyCase) {
        case "pascal":
            newKey = lodash_1["default"].startCase(lodash_1["default"].camelCase(origKey)).replace(/ /g, "");
            break;
        case "camel":
            newKey = lodash_1["default"].camelCase(origKey);
            break;
        case "kebab":
            newKey = lodash_1["default"].kebabCase(origKey);
            break;
        case "snake":
            newKey = lodash_1["default"].snakeCase(origKey);
            break;
        case "upper":
            newKey = lodash_1["default"].toUpper(origKey);
            break;
        case "constant":
            newKey = lodash_1["default"].upperCase(origKey).replace(/ /g, "_");
            break;
        case "dot":
            newKey = lodash_1["default"].lowerCase(origKey).replace(/ /g, ".");
            break;
        case "path":
            newKey = lodash_1["default"].lowerCase(origKey).replace(/ /g, "/");
            break;
        case "lower":
            newKey = lodash_1["default"].toLower(origKey);
            break;
        case "sentence":
            newKey = lodash_1["default"].upperFirst(lodash_1["default"].lowerCase(origKey));
            break;
        case "title":
            newKey = lodash_1["default"].startCase(lodash_1["default"].camelCase(origKey));
            break;
    }
    return newKey;
};
function keyConvertor(obj, keyCase) {
    if (typeof obj !== "object" && obj !== null) {
        return obj;
    }
    var objectToSend, origKey, newKey, value;
    if (obj instanceof Array) {
        return obj.map(function (value) {
            if (typeof value === "object") {
                value = keyConvertor(value, keyCase);
            }
            return value;
        });
    }
    else {
        objectToSend = {};
        for (origKey in obj) {
            if (obj.hasOwnProperty(origKey)) {
                newKey = caseCondition(origKey, keyCase);
                value = obj[origKey];
                if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
                    value = keyConvertor(value, keyCase);
                }
                objectToSend[newKey] = value;
            }
        }
    }
    return objectToSend;
}
function allConvertor(obj, keyCase) {
    if (typeof obj !== "object" && obj !== null) {
        return obj;
    }
    var objectToSend, origKey, newKey, value;
    if (obj instanceof Array) {
        return obj.map(function (value) {
            if (typeof value === "object") {
                value = allConvertor(value, keyCase);
            }
            if (typeof value === "string") {
                value = caseCondition(value, keyCase);
            }
            return value;
        });
    }
    else {
        objectToSend = {};
        for (origKey in obj) {
            if (obj.hasOwnProperty(origKey)) {
                newKey = caseCondition(origKey, keyCase);
                value = obj[origKey];
                if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
                    value = allConvertor(value, keyCase);
                }
                else {
                    if (typeof value === "string")
                        value = caseCondition(value, keyCase);
                }
                objectToSend[newKey] = value;
            }
        }
    }
    return objectToSend;
}
function valueConvertor(obj, keyCase) {
    if (typeof obj !== "object" && obj !== null) {
        if (typeof obj !== "string")
            return caseCondition(obj, keyCase);
        else
            return obj;
    }
    var objectToSend, origKey, value;
    if (obj instanceof Array) {
        return obj.map(function (value) {
            if (typeof value === "object") {
                value = valueConvertor(value, keyCase);
            }
            if (typeof value === "string") {
                value = caseCondition(value, keyCase);
            }
            return value;
        });
    }
    else {
        objectToSend = {};
        for (origKey in obj) {
            if (obj.hasOwnProperty(origKey)) {
                value = obj[origKey];
                if (value instanceof Array || (value !== null && value !== undefined && value.constructor === Object)) {
                    value = valueConvertor(value, keyCase);
                }
                else {
                    if (typeof value === "string")
                        value = caseCondition(value, keyCase);
                }
                objectToSend[origKey] = value;
            }
        }
    }
    return objectToSend;
}
//-----------------------------------------------
function pascalCaseKeys(obj) {
    return keyConvertor(obj, "pascal");
}
exports.pascalCaseKeys = pascalCaseKeys;
function camelCaseKeys(obj) {
    return keyConvertor(obj, "camel");
}
exports.camelCaseKeys = camelCaseKeys;
function snakeCaseKeys(obj) {
    return keyConvertor(obj, "snake");
}
exports.snakeCaseKeys = snakeCaseKeys;
function kebabCaseKeys(obj) {
    return keyConvertor(obj, "kebab");
}
exports.kebabCaseKeys = kebabCaseKeys;
function upperCaseKeys(obj) {
    return keyConvertor(obj, "upper");
}
exports.upperCaseKeys = upperCaseKeys;
function lowerCaseKeys(obj) {
    return keyConvertor(obj, "lower");
}
exports.lowerCaseKeys = lowerCaseKeys;
function constantCaseKeys(obj) {
    return keyConvertor(obj, "constant");
}
exports.constantCaseKeys = constantCaseKeys;
function dotCaseKeys(obj) {
    return keyConvertor(obj, "dot");
}
exports.dotCaseKeys = dotCaseKeys;
function pathCaseKeys(obj) {
    return keyConvertor(obj, "path");
}
exports.pathCaseKeys = pathCaseKeys;
function sentenceCaseKeys(obj) {
    return keyConvertor(obj, "sentence");
}
exports.sentenceCaseKeys = sentenceCaseKeys;
function titleCaseKeys(obj) {
    return keyConvertor(obj, "title");
}
exports.titleCaseKeys = titleCaseKeys;
function pascalCaseValues(obj) {
    return valueConvertor(obj, "pascal");
}
exports.pascalCaseValues = pascalCaseValues;
function camelCaseValues(obj) {
    return valueConvertor(obj, "camel");
}
exports.camelCaseValues = camelCaseValues;
function snakeCaseValues(obj) {
    return valueConvertor(obj, "snake");
}
exports.snakeCaseValues = snakeCaseValues;
function kebabCaseValues(obj) {
    return valueConvertor(obj, "kebab");
}
exports.kebabCaseValues = kebabCaseValues;
function upperCaseValues(obj) {
    return valueConvertor(obj, "upper");
}
exports.upperCaseValues = upperCaseValues;
function lowerCaseValues(obj) {
    return valueConvertor(obj, "lower");
}
exports.lowerCaseValues = lowerCaseValues;
function constantCaseValues(obj) {
    return valueConvertor(obj, "constant");
}
exports.constantCaseValues = constantCaseValues;
function dotCaseValues(obj) {
    return valueConvertor(obj, "dot");
}
exports.dotCaseValues = dotCaseValues;
function pathCaseValues(obj) {
    return valueConvertor(obj, "path");
}
exports.pathCaseValues = pathCaseValues;
function sentenceCaseValues(obj) {
    return valueConvertor(obj, "sentence");
}
exports.sentenceCaseValues = sentenceCaseValues;
function titleCaseValues(obj) {
    return valueConvertor(obj, "title");
}
exports.titleCaseValues = titleCaseValues;
function pascalCaseAll(obj) {
    return allConvertor(obj, "pascal");
}
exports.pascalCaseAll = pascalCaseAll;
function camelCaseAll(obj) {
    return allConvertor(obj, "camel");
}
exports.camelCaseAll = camelCaseAll;
function snakeCaseAll(obj) {
    return allConvertor(obj, "snake");
}
exports.snakeCaseAll = snakeCaseAll;
function kebabCaseAll(obj) {
    return allConvertor(obj, "kebab");
}
exports.kebabCaseAll = kebabCaseAll;
function upperCaseAll(obj) {
    return allConvertor(obj, "upper");
}
exports.upperCaseAll = upperCaseAll;
function lowerCaseAll(obj) {
    return allConvertor(obj, "lower");
}
exports.lowerCaseAll = lowerCaseAll;
function constantCaseAll(obj) {
    return allConvertor(obj, "constant");
}
exports.constantCaseAll = constantCaseAll;
function dotCaseAll(obj) {
    return allConvertor(obj, "dot");
}
exports.dotCaseAll = dotCaseAll;
function pathCaseAll(obj) {
    return allConvertor(obj, "path");
}
exports.pathCaseAll = pathCaseAll;
function sentenceCaseAll(obj) {
    return allConvertor(obj, "sentence");
}
exports.sentenceCaseAll = sentenceCaseAll;
function titleCaseAll(obj) {
    return allConvertor(obj, "title");
}
exports.titleCaseAll = titleCaseAll;
