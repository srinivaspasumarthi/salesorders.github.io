(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js":
/*!******************************************************!*\
  !*** ./node_modules/ngx-pipes/fesm2015/ngx-pipes.js ***!
  \******************************************************/
/*! exports provided: AorAnPipe, BOOLEAN_PIPES, BytesPipe, CamelizePipe, CeilPipe, ChunkPipe, DATE_PIPES, DegreesPipe, DiffObjPipe, DiffPipe, EveryPipe, FilterByImpurePipe, FilterByPipe, FlattenPipe, FloorPipe, GroupByImpurePipe, GroupByPipe, InitialPipe, IntersectionPipe, InvertByPipe, InvertPipe, IsArrayPipe, IsDefinedPipe, IsEqualToPipe, IsFunctionPipe, IsGreaterEqualThanPipe, IsGreaterThanPipe, IsIdenticalToPipe, IsLessEqualThanPipe, IsLessThanPipe, IsNotEqualToPipe, IsNotIdenticalToPipe, IsNullPipe, IsNumberPipe, IsObjectPipe, IsStringPipe, IsUndefinedPipe, KeysPipe, LatinisePipe, LeftPadPipe, LeftTrimPipe, LinesPipe, MATH_PIPES, MakePluralStringPipe, MatchPipe, MaxPipe, MinPipe, NgArrayPipesModule, NgBooleanPipesModule, NgDatePipesModule, NgMathPipesModule, NgObjectPipesModule, NgPipesModule, NgStringPipesModule, OmitPipe, OrderByImpurePipe, OrderByPipe, PairsPipe, PercentagePipe, PickPipe, PluckPipe, PowerPipe, RangePipe, RepeatPipe, ReversePipe, RightPadPipe, RightTrimPipe, RoundPipe, STRING_PIPES, SamplePipe, ScanPipe, ShortenPipe, ShufflePipe, SlugifyPipe, SomePipe, SqrtPipe, StripTagsPipe, SumPipe, TailPipe, TestPipe, TimeAgoPipe, TrimPipe, TrurthifyPipe, UcFirstPipe, UcWordsPipe, UnderscorePipe, UnionPipe, UniquePipe, ValuesPipe, WithoutPipe, WrapPipe, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AorAnPipe", function() { return AorAnPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOLEAN_PIPES", function() { return BOOLEAN_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BytesPipe", function() { return BytesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelizePipe", function() { return CamelizePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeilPipe", function() { return CeilPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChunkPipe", function() { return ChunkPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATE_PIPES", function() { return DATE_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DegreesPipe", function() { return DegreesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffObjPipe", function() { return DiffObjPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiffPipe", function() { return DiffPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveryPipe", function() { return EveryPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByImpurePipe", function() { return FilterByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlattenPipe", function() { return FlattenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByImpurePipe", function() { return GroupByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitialPipe", function() { return InitialPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntersectionPipe", function() { return IntersectionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertByPipe", function() { return InvertByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvertPipe", function() { return InvertPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsArrayPipe", function() { return IsArrayPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsDefinedPipe", function() { return IsDefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsEqualToPipe", function() { return IsEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsFunctionPipe", function() { return IsFunctionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterEqualThanPipe", function() { return IsGreaterEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsGreaterThanPipe", function() { return IsGreaterThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsIdenticalToPipe", function() { return IsIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessEqualThanPipe", function() { return IsLessEqualThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsLessThanPipe", function() { return IsLessThanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotEqualToPipe", function() { return IsNotEqualToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNotIdenticalToPipe", function() { return IsNotIdenticalToPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNullPipe", function() { return IsNullPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsNumberPipe", function() { return IsNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsObjectPipe", function() { return IsObjectPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsStringPipe", function() { return IsStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsUndefinedPipe", function() { return IsUndefinedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeysPipe", function() { return KeysPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatinisePipe", function() { return LatinisePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftPadPipe", function() { return LeftPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftTrimPipe", function() { return LeftTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesPipe", function() { return LinesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATH_PIPES", function() { return MATH_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePluralStringPipe", function() { return MakePluralStringPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchPipe", function() { return MatchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaxPipe", function() { return MaxPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinPipe", function() { return MinPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgArrayPipesModule", function() { return NgArrayPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBooleanPipesModule", function() { return NgBooleanPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgDatePipesModule", function() { return NgDatePipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgMathPipesModule", function() { return NgMathPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgObjectPipesModule", function() { return NgObjectPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgPipesModule", function() { return NgPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgStringPipesModule", function() { return NgStringPipesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OmitPipe", function() { return OmitPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByImpurePipe", function() { return OrderByImpurePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairsPipe", function() { return PairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PercentagePipe", function() { return PercentagePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PickPipe", function() { return PickPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PluckPipe", function() { return PluckPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerPipe", function() { return PowerPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RangePipe", function() { return RangePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepeatPipe", function() { return RepeatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReversePipe", function() { return ReversePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightPadPipe", function() { return RightPadPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightTrimPipe", function() { return RightTrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundPipe", function() { return RoundPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRING_PIPES", function() { return STRING_PIPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SamplePipe", function() { return SamplePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPipe", function() { return ScanPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortenPipe", function() { return ShortenPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShufflePipe", function() { return ShufflePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlugifyPipe", function() { return SlugifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SomePipe", function() { return SomePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SqrtPipe", function() { return SqrtPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripTagsPipe", function() { return StripTagsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumPipe", function() { return SumPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TailPipe", function() { return TailPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPipe", function() { return TestPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeAgoPipe", function() { return TimeAgoPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrimPipe", function() { return TrimPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrurthifyPipe", function() { return TrurthifyPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcFirstPipe", function() { return UcFirstPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UcWordsPipe", function() { return UcWordsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderscorePipe", function() { return UnderscorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnionPipe", function() { return UnionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniquePipe", function() { return UniquePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuesPipe", function() { return ValuesPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithoutPipe", function() { return WithoutPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapPipe", function() { return WrapPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return FromPairsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return RadiansPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DiffPipe = class DiffPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((d, c) => d.filter((e) => !~c.indexOf(e)), input);
    }
};
DiffPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'diff' })
], DiffPipe);

let InitialPipe = class InitialPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(0, input.length - num) : input;
    }
};
InitialPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'initial' })
], InitialPipe);

let FlattenPipe = class FlattenPipe {
    transform(input, shallow = false) {
        if (!Array.isArray(input)) {
            return input;
        }
        return shallow ? [].concat.apply([], input) : this.flatten(input);
    }
    flatten(array) {
        return array.reduce((arr, elm) => {
            if (Array.isArray(elm)) {
                return arr.concat(this.flatten(elm));
            }
            return arr.concat(elm);
        }, []);
    }
};
FlattenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'flatten' })
], FlattenPipe);

let IntersectionPipe = class IntersectionPipe {
    transform(input, ...args) {
        if (!Array.isArray(input)) {
            return input;
        }
        // tslint:disable-next-line no-bitwise
        return args.reduce((n, c) => n.filter((e) => !!~c.indexOf(e)), input);
    }
};
IntersectionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'intersection' })
], IntersectionPipe);

function isUndefined(value) {
    return typeof value === 'undefined';
}
function isFunction(value) {
    return typeof value === 'function';
}
function isNumber(value) {
    return typeof value === 'number';
}
function isString(value) {
    return typeof value === 'string';
}
function isBoolean(value) {
    return typeof value === 'boolean';
}
function isObject(value) {
    return value !== null && typeof value === 'object';
}
function isNumberFinite(value) {
    return isNumber(value) && isFinite(value);
}
function isVowel(letter) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.indexOf(letter) !== -1;
}
function ucFirst(text) {
    const [part, ...split] = text.split(/\s/g);
    const ucd = part
        .toLowerCase()
        .split(/(?=['|-])/g)
        .map((word) => word.indexOf('-') + word.indexOf("'") > -2
        ? word.slice(0, 2).toUpperCase() + word.slice(2)
        : word.slice(0, 1).toUpperCase() + word.slice(1))
        .join('');
    return [ucd, ...split].join(' ');
}
function applyPrecision(num, precision) {
    if (precision <= 0) {
        return Math.round(num);
    }
    const tho = Math.pow(10, precision);
    return Math.round(num * tho) / tho;
}
function extractDeepPropertyByMapKey(obj, map) {
    const keys = map.split('.');
    const head = keys.shift();
    return keys.reduce((prop, key) => {
        return !isUndefined(prop) && !isUndefined(prop[key]) ? prop[key] : undefined;
    }, obj[head || '']);
}
function extractDeepPropertyByParentMapKey(obj, map) {
    const keys = map.split('.');
    const tail = keys.pop();
    const props = extractDeepPropertyByMapKey(obj, keys.join('.'));
    return { props, tail };
}
function getKeysTwoObjects(obj, other) {
    return [...Object.keys(obj), ...Object.keys(other)].filter((key, index, array) => array.indexOf(key) === index);
}
function isDeepEqual(obj, other) {
    if (!isObject(obj) || !isObject(other)) {
        return obj === other;
    }
    return getKeysTwoObjects(obj, other).every((key) => {
        if (!isObject(obj[key]) && !isObject(other[key])) {
            return obj[key] === other[key];
        }
        if (!isObject(obj[key]) || !isObject(other[key])) {
            return false;
        }
        return isDeepEqual(obj[key], other[key]);
    });
}

let ReversePipe = class ReversePipe {
    transform(input) {
        if (isString(input)) {
            return input
                .split('')
                .reverse()
                .join('');
        }
        return Array.isArray(input) ? input.slice().reverse() : input;
    }
};
ReversePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'reverse' })
], ReversePipe);

let TailPipe = class TailPipe {
    transform(input, num = 0) {
        return Array.isArray(input) ? input.slice(num) : input;
    }
};
TailPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'tail' })
], TailPipe);

let TrurthifyPipe = class TrurthifyPipe {
    transform(input) {
        return Array.isArray(input) ? input.filter(e => !!e) : input;
    }
};
TrurthifyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'truthify' })
], TrurthifyPipe);

let UnionPipe = class UnionPipe {
    transform(input, args = []) {
        if (!Array.isArray(input) || !Array.isArray(args)) {
            return input;
        }
        return args.reduce((newArr, currArr) => {
            return newArr.concat(currArr.reduce((noDupArr, curr) => {
                // tslint:disable-next-line:no-bitwise
                return !~noDupArr.indexOf(curr) && !~newArr.indexOf(curr) ? noDupArr.concat([curr]) : noDupArr;
            }, []));
        }, input);
    }
};
UnionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'union' })
], UnionPipe);

let UniquePipe = class UniquePipe {
    transform(input, propertyName) {
        const uniques = [];
        return Array.isArray(input)
            ? isUndefined(propertyName)
                ? input.filter((e, i) => input.indexOf(e) === i)
                : input.filter((e, i) => {
                    let value = extractDeepPropertyByMapKey(e, propertyName);
                    value = isObject(value) ? JSON.stringify(value) : value;
                    if (isUndefined(value) || uniques[value]) {
                        return false;
                    }
                    uniques[value] = true;
                    return true;
                })
            : input;
    }
};
UniquePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'unique' })
], UniquePipe);

let WithoutPipe = class WithoutPipe {
    transform(input, args = []) {
        return Array.isArray(input)
            ? // tslint:disable-next-line:no-bitwise
                input.filter(e => !~args.indexOf(e))
            : input;
    }
};
WithoutPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'without' })
], WithoutPipe);

let PluckPipe = class PluckPipe {
    transform(input, map) {
        if (Array.isArray(input)) {
            return input.map(e => extractDeepPropertyByMapKey(e, map));
        }
        return isObject(input) ? extractDeepPropertyByMapKey(input, map) : input;
    }
};
PluckPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'pluck', pure: false })
], PluckPipe);

let ShufflePipe = class ShufflePipe {
    // Using a version of the Fisher-Yates shuffle algorithm
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        const shuffled = [...input];
        const n = input.length - 1;
        for (let i = 0; i < n; ++i) {
            const j = Math.floor(Math.random() * (n - i + 1)) + i;
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};
ShufflePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'shuffle' })
], ShufflePipe);

let EveryPipe = class EveryPipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.every(predicate) : false;
    }
};
EveryPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'every' })
], EveryPipe);

let SomePipe = class SomePipe {
    transform(input, predicate) {
        return Array.isArray(input) ? input.some(predicate) : input;
    }
};
SomePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'some' })
], SomePipe);

let SamplePipe = class SamplePipe {
    transform(input, len = 1) {
        if (!Array.isArray(input)) {
            return input;
        }
        let sample = [];
        const tmp = [...input];
        const l = len < tmp.length ? len : tmp.length;
        for (let i = 0; i < l; ++i) {
            sample = sample.concat(tmp.splice(Math.floor(Math.random() * tmp.length), 1));
        }
        return sample;
    }
};
SamplePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sample' })
], SamplePipe);

let GroupByPipe = class GroupByPipe {
    transform(input, discriminator = [], delimiter = '|') {
        if (!Array.isArray(input)) {
            return input;
        }
        return this.groupBy(input, discriminator, delimiter);
    }
    groupBy(list, discriminator, delimiter) {
        return list.reduce((acc, payload) => {
            const key = this.extractKeyByDiscriminator(discriminator, payload, delimiter);
            acc[key] = Array.isArray(acc[key]) ? acc[key].concat([payload]) : [payload];
            return acc;
        }, {});
    }
    extractKeyByDiscriminator(discriminator, payload, delimiter) {
        if (isFunction(discriminator)) {
            return discriminator(payload);
        }
        if (Array.isArray(discriminator)) {
            return discriminator.map(k => extractDeepPropertyByMapKey(payload, k)).join(delimiter);
        }
        return extractDeepPropertyByMapKey(payload, discriminator);
    }
};
GroupByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'groupBy' })
], GroupByPipe);

// tslint:disable no-bitwise
let FilterByPipe = class FilterByPipe {
    transform(input, props, search = '', strict = false) {
        if (!Array.isArray(input) ||
            (!Array.isArray(search) && !isString(search) && !isNumberFinite(search) && !isBoolean(search))) {
            return input;
        }
        const terms = String(search)
            .toLowerCase()
            .split(',');
        return input.filter(obj => {
            return props.some(prop => {
                return terms.some(term => {
                    const value = extractDeepPropertyByMapKey(obj, prop);
                    /* tslint:disable */
                    const { props, tail } = extractDeepPropertyByParentMapKey(obj, prop);
                    if (isUndefined(value) && !isUndefined(props) && Array.isArray(props)) {
                        return props.some(parent => {
                            const str = String(parent[tail]).toLowerCase();
                            return strict ? str === term : !!~str.indexOf(term);
                        });
                    }
                    if (isUndefined(value)) {
                        return false;
                    }
                    const strValue = String(value).toLowerCase();
                    return strict ? term === strValue : !!~strValue.indexOf(term);
                });
            });
        });
    }
};
FilterByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'filterBy' })
], FilterByPipe);

var OrderByPipe_1;
let OrderByPipe = OrderByPipe_1 = class OrderByPipe {
    transform(input, config) {
        if (!Array.isArray(input)) {
            return input;
        }
        const out = [...input];
        // sort by multiple properties
        if (Array.isArray(config)) {
            return out.sort((a, b) => {
                const l = config.length;
                for (let i = 0; i < l; ++i) {
                    const [prop, asc] = OrderByPipe_1.extractFromConfig(config[i]);
                    const pos = OrderByPipe_1.orderCompare(prop, asc, a, b);
                    if (pos !== 0) {
                        return pos;
                    }
                }
                return 0;
            });
        }
        // sort by a single property value
        if (isString(config)) {
            const [prop, asc, sign] = OrderByPipe_1.extractFromConfig(config);
            if (config.length === 1) {
                // tslint:disable-next-line:switch-default
                switch (sign) {
                    case '+':
                        return out.sort(OrderByPipe_1.simpleSort.bind(this));
                    case '-':
                        return out.sort(OrderByPipe_1.simpleSort.bind(this)).reverse();
                }
            }
            return out.sort(OrderByPipe_1.orderCompare.bind(this, prop, asc));
        }
        // default sort by value
        return out.sort(OrderByPipe_1.simpleSort.bind(this));
    }
    static simpleSort(a, b) {
        return isString(a) && isString(b) ? a.toLowerCase().localeCompare(b.toLowerCase()) : a - b;
    }
    static orderCompare(prop, asc, a, b) {
        const first = extractDeepPropertyByMapKey(a, prop);
        const second = extractDeepPropertyByMapKey(b, prop);
        if (first === second) {
            return 0;
        }
        if (isUndefined(first) || first === '') {
            return 1;
        }
        if (isUndefined(second) || second === '') {
            return -1;
        }
        if (isString(first) && isString(second)) {
            const pos = first.toLowerCase().localeCompare(second.toLowerCase());
            return asc ? pos : -pos;
        }
        return asc ? first - second : second - first;
    }
    static extractFromConfig(config) {
        const sign = config.substr(0, 1);
        const prop = config.replace(/^[-+]/, '');
        const asc = sign !== '-';
        return [prop, asc, sign];
    }
};
OrderByPipe = OrderByPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderBy' })
], OrderByPipe);

// tslint:disable use-pipe-transform-interface
let GroupByImpurePipe = class GroupByImpurePipe extends GroupByPipe {
};
GroupByImpurePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'groupByImpure', pure: false })
], GroupByImpurePipe);

// tslint:disable use-pipe-transform-interface
let FilterByImpurePipe = class FilterByImpurePipe extends FilterByPipe {
};
FilterByImpurePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'filterByImpure', pure: false })
], FilterByImpurePipe);

// tslint:disable use-pipe-transform-interface
let OrderByImpurePipe = class OrderByImpurePipe extends OrderByPipe {
};
OrderByImpurePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'orderByImpure', pure: false })
], OrderByImpurePipe);

let RangePipe = class RangePipe {
    transform(start = 1, count = 0, step = 1) {
        return Array(count)
            .fill('')
            .map((v, i) => step * i + start);
    }
};
RangePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'range' })
], RangePipe);

let ChunkPipe = class ChunkPipe {
    transform(input, size = 1) {
        if (isString(input)) {
            return this.chunk(input
                .split(''), size);
        }
        return Array.isArray(input) ? this.chunk(input, size) : input;
    }
    chunk(input, size) {
        return Array(Math.ceil(input.length / size))
            .fill([])
            .map((_, index) => index * size)
            .map(begin => input.slice(begin, begin + size));
    }
};
ChunkPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'chunk' })
], ChunkPipe);

let FromPairsPipe = class FromPairsPipe {
    transform(input) {
        if (!Array.isArray(input)) {
            return input;
        }
        return input.reduce((obj, arr) => {
            if (!Array.isArray(arr)) {
                return obj;
            }
            const [prop, val] = arr;
            obj[prop] = val;
            return obj;
        }, {});
    }
};
FromPairsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'fromPairs' })
], FromPairsPipe);

const ARRAY_PIPES = [
    DiffPipe,
    FlattenPipe,
    InitialPipe,
    IntersectionPipe,
    ReversePipe,
    TailPipe,
    TrurthifyPipe,
    UnionPipe,
    UniquePipe,
    WithoutPipe,
    PluckPipe,
    ShufflePipe,
    EveryPipe,
    SomePipe,
    SamplePipe,
    GroupByPipe,
    GroupByImpurePipe,
    FilterByPipe,
    FilterByImpurePipe,
    OrderByPipe,
    OrderByImpurePipe,
    RangePipe,
    ChunkPipe,
    FromPairsPipe
];
let NgArrayPipesModule = class NgArrayPipesModule {
};
NgArrayPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: ARRAY_PIPES,
        imports: [],
        exports: ARRAY_PIPES,
    })
], NgArrayPipesModule);

let KeysPipe = class KeysPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj);
    }
};
KeysPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'keys' })
], KeysPipe);

let ValuesPipe = class ValuesPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).map(k => obj[k]);
    }
};
ValuesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'values' })
], ValuesPipe);

let PairsPipe = class PairsPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.entries(obj);
    }
};
PairsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'pairs' })
], PairsPipe);

let PickPipe = class PickPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return args.reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {});
    }
};
PickPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'pick' })
], PickPipe);

let OmitPipe = class OmitPipe {
    transform(obj, ...args) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return (Object.keys(obj)
            // tslint:disable-next-line:no-bitwise
            .filter(k => !~args.indexOf(k))
            .reduce((o, k) => {
            return Object.assign(o, { [k]: obj[k] });
        }, {}));
    }
};
OmitPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'omit' })
], OmitPipe);

let InvertPipe = class InvertPipe {
    transform(obj) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            return Object.assign(o, { [obj[k]]: k });
        }, {});
    }
};
InvertPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'invert' })
], InvertPipe);

let InvertByPipe = class InvertByPipe {
    transform(obj, cb) {
        if (Array.isArray(obj) || !isObject(obj)) {
            return obj;
        }
        return Object.keys(obj).reduce((o, k) => {
            const key = cb ? cb(obj[k]) : obj[k];
            return Array.isArray(o[key]) ? (o[key].push(k), o) : Object.assign(o, { [key]: [k] });
        }, {});
    }
};
InvertByPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'invertBy' })
], InvertByPipe);

let DiffObjPipe = class DiffObjPipe {
    transform(obj, original = {}) {
        if (Array.isArray(obj) || Array.isArray(original) || !isObject(obj) || !isObject(original)) {
            return {};
        }
        return getKeysTwoObjects(obj, original).reduce((diff, key) => {
            if (!isDeepEqual(original[key], obj[key])) {
                diff[key] = obj[key];
            }
            return diff;
        }, {});
    }
};
DiffObjPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'diffObj' })
], DiffObjPipe);

const OBJECT_PIPES = [KeysPipe, ValuesPipe, PairsPipe, PickPipe, InvertPipe, InvertByPipe, OmitPipe, DiffObjPipe];
let NgObjectPipesModule = class NgObjectPipesModule {
};
NgObjectPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: OBJECT_PIPES,
        imports: [],
        exports: OBJECT_PIPES,
    })
], NgObjectPipesModule);

let AorAnPipe = 
/**
 * Takes a string and returns the string prepended by 'a' or 'an'.
 * Uses both naive and holdout-list approaches.
 * @constructor
 * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
 */
class AorAnPipe {
    constructor() {
        this.irregularMap = {
            herb: 'an',
            honor: 'an',
            honorable: 'an',
            hour: 'an',
            mba: 'an',
            msc: 'an',
            'm.sc.': 'an',
            unicorn: 'a',
        };
    }
    transform(stringEntity) {
        if (!stringEntity || stringEntity === '') {
            return '';
        }
        else {
            const firstWord = stringEntity.trim().split(' ')[0];
            if (this.irregularMap[firstWord.toLocaleLowerCase()]) {
                return `${this.irregularMap[firstWord.toLocaleLowerCase()]} ${stringEntity}`;
            }
            else {
                return isVowel(stringEntity[0]) ? `an ${stringEntity}` : `a ${stringEntity}`;
            }
        }
    }
};
AorAnPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'aOrAn',
    })
    /**
     * Takes a string and returns the string prepended by 'a' or 'an'.
     * Uses both naive and holdout-list approaches.
     * @constructor
     * @param {string} stringEntity - Entity to prepend 'a' or 'an' to.
     */
], AorAnPipe);

let UcWordsPipe = class UcWordsPipe {
    transform(text) {
        if (isString(text)) {
            return text
                .split(' ')
                .map((sub) => ucFirst(sub))
                .join(' ');
        }
        return text;
    }
};
UcWordsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ucwords' })
], UcWordsPipe);

let LeftTrimPipe = class LeftTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+`), '') : text;
    }
};
LeftTrimPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ltrim' })
], LeftTrimPipe);

let RepeatPipe = class RepeatPipe {
    transform(str, n = 1, separator = '') {
        if (n <= 0) {
            throw new RangeError();
        }
        return n === 1 ? str : this.repeat(str, n - 1, separator);
    }
    repeat(str, n, separator) {
        return isString(str) ? (n === 0 ? str : str + separator + this.repeat(str, n - 1, separator)) : str;
    }
};
RepeatPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'repeat' })
], RepeatPipe);

let RightTrimPipe = class RightTrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`[${chars}]+$`), '') : text;
    }
};
RightTrimPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'rtrim' })
], RightTrimPipe);

let ScanPipe = class ScanPipe {
    transform(text, args = []) {
        return isString(text)
            ? text.replace(/\{(\d+)}/g, (match, index) => (!isUndefined(args[index]) ? args[index] : match))
            : text;
    }
};
ScanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'scan' })
], ScanPipe);

let ShortenPipe = class ShortenPipe {
    transform(text, length = 0, suffix = '', wordBreak = true) {
        if (!isString(text)) {
            return text;
        }
        if (text.length > length) {
            if (wordBreak) {
                return text.slice(0, length) + suffix;
            }
            // tslint:disable-next-line:no-bitwise
            if (!!~text.indexOf(' ', length)) {
                return text.slice(0, text.indexOf(' ', length)) + suffix;
            }
        }
        return text;
    }
};
ShortenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'shorten' })
], ShortenPipe);

let StripTagsPipe = class StripTagsPipe {
    transform(text, ...allowedTags) {
        return allowedTags.length > 0
            ? text.replace(new RegExp(`<(?!\/?(${allowedTags.join('|')})\s*\/?)[^>]+>`, 'g'), '')
            : text.replace(/<(?:.|\s)*?>/g, '');
    }
};
StripTagsPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'stripTags' })
], StripTagsPipe);

let TrimPipe = class TrimPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(new RegExp(`^[${chars}]+|[${chars}]+$`, 'g'), '') : text;
    }
};
TrimPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'trim' })
], TrimPipe);

let UcFirstPipe = class UcFirstPipe {
    transform(text) {
        return isString(text) ? ucFirst(text) : text;
    }
};
UcFirstPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ucfirst' })
], UcFirstPipe);

let SlugifyPipe = class SlugifyPipe {
    transform(str) {
        return isString(str)
            ? str
                .toLowerCase()
                .trim()
                .replace(/[^\w\-]+/g, ' ')
                .replace(/\s+/g, '-')
            : str;
    }
};
SlugifyPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'slugify' })
], SlugifyPipe);

let CamelizePipe = class CamelizePipe {
    transform(text, chars = '\\s') {
        if (!isString(text)) {
            return text;
        }
        return text
            .toLowerCase()
            .split(/[-_\s]/g)
            .filter((v) => !!v)
            .map((word, key) => {
            return !key ? word : word.slice(0, 1).toUpperCase() + word.slice(1);
        })
            .join('');
    }
};
CamelizePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'camelize' })
], CamelizePipe);

let LatinisePipe = class LatinisePipe {
    constructor() {
        // Source: http://semplicewebsites.com/removing-accents-javascript
        // tslint:disable-next-line whitespace max-line-length object-literal-key-quotes
        this.latinMap = {
            'Á': 'A',
            'Ă': 'A',
            'Ắ': 'A',
            'Ặ': 'A',
            'Ằ': 'A',
            'Ẳ': 'A',
            'Ẵ': 'A',
            'Ǎ': 'A',
            'Â': 'A',
            'Ấ': 'A',
            'Ậ': 'A',
            'Ầ': 'A',
            'Ẩ': 'A',
            'Ẫ': 'A',
            'Ä': 'A',
            'Ǟ': 'A',
            'Ȧ': 'A',
            'Ǡ': 'A',
            'Ạ': 'A',
            'Ȁ': 'A',
            'À': 'A',
            'Ả': 'A',
            'Ȃ': 'A',
            'Ā': 'A',
            'Ą': 'A',
            'Å': 'A',
            'Ǻ': 'A',
            'Ḁ': 'A',
            'Ⱥ': 'A',
            'Ã': 'A',
            'Ꜳ': 'AA',
            'Æ': 'AE',
            'Ǽ': 'AE',
            'Ǣ': 'AE',
            'Ꜵ': 'AO',
            'Ꜷ': 'AU',
            'Ꜹ': 'AV',
            'Ꜻ': 'AV',
            'Ꜽ': 'AY',
            'Ḃ': 'B',
            'Ḅ': 'B',
            'Ɓ': 'B',
            'Ḇ': 'B',
            'Ƀ': 'B',
            'Ƃ': 'B',
            'Ć': 'C',
            'Č': 'C',
            'Ç': 'C',
            'Ḉ': 'C',
            'Ĉ': 'C',
            'Ċ': 'C',
            'Ƈ': 'C',
            'Ȼ': 'C',
            'Ď': 'D',
            'Ḑ': 'D',
            'Ḓ': 'D',
            'Ḋ': 'D',
            'Ḍ': 'D',
            'Ɗ': 'D',
            'Ḏ': 'D',
            'ǲ': 'D',
            'ǅ': 'D',
            'Đ': 'D',
            'Ƌ': 'D',
            'Ǳ': 'DZ',
            'Ǆ': 'DZ',
            'É': 'E',
            'Ĕ': 'E',
            'Ě': 'E',
            'Ȩ': 'E',
            'Ḝ': 'E',
            'Ê': 'E',
            'Ế': 'E',
            'Ệ': 'E',
            'Ề': 'E',
            'Ể': 'E',
            'Ễ': 'E',
            'Ḙ': 'E',
            'Ë': 'E',
            'Ė': 'E',
            'Ẹ': 'E',
            'Ȅ': 'E',
            'È': 'E',
            'Ẻ': 'E',
            'Ȇ': 'E',
            'Ē': 'E',
            'Ḗ': 'E',
            'Ḕ': 'E',
            'Ę': 'E',
            'Ɇ': 'E',
            'Ẽ': 'E',
            'Ḛ': 'E',
            'Ꝫ': 'ET',
            'Ḟ': 'F',
            'Ƒ': 'F',
            'Ǵ': 'G',
            'Ğ': 'G',
            'Ǧ': 'G',
            'Ģ': 'G',
            'Ĝ': 'G',
            'Ġ': 'G',
            'Ɠ': 'G',
            'Ḡ': 'G',
            'Ǥ': 'G',
            'Ḫ': 'H',
            'Ȟ': 'H',
            'Ḩ': 'H',
            'Ĥ': 'H',
            'Ⱨ': 'H',
            'Ḧ': 'H',
            'Ḣ': 'H',
            'Ḥ': 'H',
            'Ħ': 'H',
            'Í': 'I',
            'Ĭ': 'I',
            'Ǐ': 'I',
            'Î': 'I',
            'Ï': 'I',
            'Ḯ': 'I',
            'İ': 'I',
            'Ị': 'I',
            'Ȉ': 'I',
            'Ì': 'I',
            'Ỉ': 'I',
            'Ȋ': 'I',
            'Ī': 'I',
            'Į': 'I',
            'Ɨ': 'I',
            'Ĩ': 'I',
            'Ḭ': 'I',
            'Ꝺ': 'D',
            'Ꝼ': 'F',
            'Ᵹ': 'G',
            'Ꞃ': 'R',
            'Ꞅ': 'S',
            'Ꞇ': 'T',
            'Ꝭ': 'IS',
            'Ĵ': 'J',
            'Ɉ': 'J',
            'Ḱ': 'K',
            'Ǩ': 'K',
            'Ķ': 'K',
            'Ⱪ': 'K',
            'Ꝃ': 'K',
            'Ḳ': 'K',
            'Ƙ': 'K',
            'Ḵ': 'K',
            'Ꝁ': 'K',
            'Ꝅ': 'K',
            'Ĺ': 'L',
            'Ƚ': 'L',
            'Ľ': 'L',
            'Ļ': 'L',
            'Ḽ': 'L',
            'Ḷ': 'L',
            'Ḹ': 'L',
            'Ⱡ': 'L',
            'Ꝉ': 'L',
            'Ḻ': 'L',
            'Ŀ': 'L',
            'Ɫ': 'L',
            'ǈ': 'L',
            'Ł': 'L',
            'Ǉ': 'LJ',
            'Ḿ': 'M',
            'Ṁ': 'M',
            'Ṃ': 'M',
            'Ɱ': 'M',
            'Ń': 'N',
            'Ň': 'N',
            'Ņ': 'N',
            'Ṋ': 'N',
            'Ṅ': 'N',
            'Ṇ': 'N',
            'Ǹ': 'N',
            'Ɲ': 'N',
            'Ṉ': 'N',
            'Ƞ': 'N',
            'ǋ': 'N',
            'Ñ': 'N',
            'Ǌ': 'NJ',
            'Ó': 'O',
            'Ŏ': 'O',
            'Ǒ': 'O',
            'Ô': 'O',
            'Ố': 'O',
            'Ộ': 'O',
            'Ồ': 'O',
            'Ổ': 'O',
            'Ỗ': 'O',
            'Ö': 'O',
            'Ȫ': 'O',
            'Ȯ': 'O',
            'Ȱ': 'O',
            'Ọ': 'O',
            'Ő': 'O',
            'Ȍ': 'O',
            'Ò': 'O',
            'Ỏ': 'O',
            'Ơ': 'O',
            'Ớ': 'O',
            'Ợ': 'O',
            'Ờ': 'O',
            'Ở': 'O',
            'Ỡ': 'O',
            'Ȏ': 'O',
            'Ꝋ': 'O',
            'Ꝍ': 'O',
            'Ō': 'O',
            'Ṓ': 'O',
            'Ṑ': 'O',
            'Ɵ': 'O',
            'Ǫ': 'O',
            'Ǭ': 'O',
            'Ø': 'O',
            'Ǿ': 'O',
            'Õ': 'O',
            'Ṍ': 'O',
            'Ṏ': 'O',
            'Ȭ': 'O',
            'Ƣ': 'OI',
            'Ꝏ': 'OO',
            'Ɛ': 'E',
            'Ɔ': 'O',
            'Ȣ': 'OU',
            'Ṕ': 'P',
            'Ṗ': 'P',
            'Ꝓ': 'P',
            'Ƥ': 'P',
            'Ꝕ': 'P',
            'Ᵽ': 'P',
            'Ꝑ': 'P',
            'Ꝙ': 'Q',
            'Ꝗ': 'Q',
            'Ŕ': 'R',
            'Ř': 'R',
            'Ŗ': 'R',
            'Ṙ': 'R',
            'Ṛ': 'R',
            'Ṝ': 'R',
            'Ȑ': 'R',
            'Ȓ': 'R',
            'Ṟ': 'R',
            'Ɍ': 'R',
            'Ɽ': 'R',
            'Ꜿ': 'C',
            'Ǝ': 'E',
            'Ś': 'S',
            'Ṥ': 'S',
            'Š': 'S',
            'Ṧ': 'S',
            'Ş': 'S',
            'Ŝ': 'S',
            'Ș': 'S',
            'Ṡ': 'S',
            'Ṣ': 'S',
            'Ṩ': 'S',
            'ẞ': 'SS',
            'Ť': 'T',
            'Ţ': 'T',
            'Ṱ': 'T',
            'Ț': 'T',
            'Ⱦ': 'T',
            'Ṫ': 'T',
            'Ṭ': 'T',
            'Ƭ': 'T',
            'Ṯ': 'T',
            'Ʈ': 'T',
            'Ŧ': 'T',
            'Ɐ': 'A',
            'Ꞁ': 'L',
            'Ɯ': 'M',
            'Ʌ': 'V',
            'Ꜩ': 'TZ',
            'Ú': 'U',
            'Ŭ': 'U',
            'Ǔ': 'U',
            'Û': 'U',
            'Ṷ': 'U',
            'Ü': 'U',
            'Ǘ': 'U',
            'Ǚ': 'U',
            'Ǜ': 'U',
            'Ǖ': 'U',
            'Ṳ': 'U',
            'Ụ': 'U',
            'Ű': 'U',
            'Ȕ': 'U',
            'Ù': 'U',
            'Ủ': 'U',
            'Ư': 'U',
            'Ứ': 'U',
            'Ự': 'U',
            'Ừ': 'U',
            'Ử': 'U',
            'Ữ': 'U',
            'Ȗ': 'U',
            'Ū': 'U',
            'Ṻ': 'U',
            'Ų': 'U',
            'Ů': 'U',
            'Ũ': 'U',
            'Ṹ': 'U',
            'Ṵ': 'U',
            'Ꝟ': 'V',
            'Ṿ': 'V',
            'Ʋ': 'V',
            'Ṽ': 'V',
            'Ꝡ': 'VY',
            'Ẃ': 'W',
            'Ŵ': 'W',
            'Ẅ': 'W',
            'Ẇ': 'W',
            'Ẉ': 'W',
            'Ẁ': 'W',
            'Ⱳ': 'W',
            'Ẍ': 'X',
            'Ẋ': 'X',
            'Ý': 'Y',
            'Ŷ': 'Y',
            'Ÿ': 'Y',
            'Ẏ': 'Y',
            'Ỵ': 'Y',
            'Ỳ': 'Y',
            'Ƴ': 'Y',
            'Ỷ': 'Y',
            'Ỿ': 'Y',
            'Ȳ': 'Y',
            'Ɏ': 'Y',
            'Ỹ': 'Y',
            'Ź': 'Z',
            'Ž': 'Z',
            'Ẑ': 'Z',
            'Ⱬ': 'Z',
            'Ż': 'Z',
            'Ẓ': 'Z',
            'Ȥ': 'Z',
            'Ẕ': 'Z',
            'Ƶ': 'Z',
            'Ĳ': 'IJ',
            'Œ': 'OE',
            'ᴀ': 'A',
            'ᴁ': 'AE',
            'ʙ': 'B',
            'ᴃ': 'B',
            'ᴄ': 'C',
            'ᴅ': 'D',
            'ᴇ': 'E',
            'ꜰ': 'F',
            'ɢ': 'G',
            'ʛ': 'G',
            'ʜ': 'H',
            'ɪ': 'I',
            'ʁ': 'R',
            'ᴊ': 'J',
            'ᴋ': 'K',
            'ʟ': 'L',
            'ᴌ': 'L',
            'ᴍ': 'M',
            'ɴ': 'N',
            'ᴏ': 'O',
            'ɶ': 'OE',
            'ᴐ': 'O',
            'ᴕ': 'OU',
            'ᴘ': 'P',
            'ʀ': 'R',
            'ᴎ': 'N',
            'ᴙ': 'R',
            'ꜱ': 'S',
            'ᴛ': 'T',
            'ⱻ': 'E',
            'ᴚ': 'R',
            'ᴜ': 'U',
            'ᴠ': 'V',
            'ᴡ': 'W',
            'ʏ': 'Y',
            'ᴢ': 'Z',
            'á': 'a',
            'ă': 'a',
            'ắ': 'a',
            'ặ': 'a',
            'ằ': 'a',
            'ẳ': 'a',
            'ẵ': 'a',
            'ǎ': 'a',
            'â': 'a',
            'ấ': 'a',
            'ậ': 'a',
            'ầ': 'a',
            'ẩ': 'a',
            'ẫ': 'a',
            'ä': 'a',
            'ǟ': 'a',
            'ȧ': 'a',
            'ǡ': 'a',
            'ạ': 'a',
            'ȁ': 'a',
            'à': 'a',
            'ả': 'a',
            'ȃ': 'a',
            'ā': 'a',
            'ą': 'a',
            'ᶏ': 'a',
            'ẚ': 'a',
            'å': 'a',
            'ǻ': 'a',
            'ḁ': 'a',
            'ⱥ': 'a',
            'ã': 'a',
            'ꜳ': 'aa',
            'æ': 'ae',
            'ǽ': 'ae',
            'ǣ': 'ae',
            'ꜵ': 'ao',
            'ꜷ': 'au',
            'ꜹ': 'av',
            'ꜻ': 'av',
            'ꜽ': 'ay',
            'ḃ': 'b',
            'ḅ': 'b',
            'ɓ': 'b',
            'ḇ': 'b',
            'ᵬ': 'b',
            'ᶀ': 'b',
            'ƀ': 'b',
            'ƃ': 'b',
            'ɵ': 'o',
            'ć': 'c',
            'č': 'c',
            'ç': 'c',
            'ḉ': 'c',
            'ĉ': 'c',
            'ɕ': 'c',
            'ċ': 'c',
            'ƈ': 'c',
            'ȼ': 'c',
            'ď': 'd',
            'ḑ': 'd',
            'ḓ': 'd',
            'ȡ': 'd',
            'ḋ': 'd',
            'ḍ': 'd',
            'ɗ': 'd',
            'ᶑ': 'd',
            'ḏ': 'd',
            'ᵭ': 'd',
            'ᶁ': 'd',
            'đ': 'd',
            'ɖ': 'd',
            'ƌ': 'd',
            'ı': 'i',
            'ȷ': 'j',
            'ɟ': 'j',
            'ʄ': 'j',
            'ǳ': 'dz',
            'ǆ': 'dz',
            'é': 'e',
            'ĕ': 'e',
            'ě': 'e',
            'ȩ': 'e',
            'ḝ': 'e',
            'ê': 'e',
            'ế': 'e',
            'ệ': 'e',
            'ề': 'e',
            'ể': 'e',
            'ễ': 'e',
            'ḙ': 'e',
            'ë': 'e',
            'ė': 'e',
            'ẹ': 'e',
            'ȅ': 'e',
            'è': 'e',
            'ẻ': 'e',
            'ȇ': 'e',
            'ē': 'e',
            'ḗ': 'e',
            'ḕ': 'e',
            'ⱸ': 'e',
            'ę': 'e',
            'ᶒ': 'e',
            'ɇ': 'e',
            'ẽ': 'e',
            'ḛ': 'e',
            'ꝫ': 'et',
            'ḟ': 'f',
            'ƒ': 'f',
            'ᵮ': 'f',
            'ᶂ': 'f',
            'ǵ': 'g',
            'ğ': 'g',
            'ǧ': 'g',
            'ģ': 'g',
            'ĝ': 'g',
            'ġ': 'g',
            'ɠ': 'g',
            'ḡ': 'g',
            'ᶃ': 'g',
            'ǥ': 'g',
            'ḫ': 'h',
            'ȟ': 'h',
            'ḩ': 'h',
            'ĥ': 'h',
            'ⱨ': 'h',
            'ḧ': 'h',
            'ḣ': 'h',
            'ḥ': 'h',
            'ɦ': 'h',
            'ẖ': 'h',
            'ħ': 'h',
            'ƕ': 'hv',
            'í': 'i',
            'ĭ': 'i',
            'ǐ': 'i',
            'î': 'i',
            'ï': 'i',
            'ḯ': 'i',
            'ị': 'i',
            'ȉ': 'i',
            'ì': 'i',
            'ỉ': 'i',
            'ȋ': 'i',
            'ī': 'i',
            'į': 'i',
            'ᶖ': 'i',
            'ɨ': 'i',
            'ĩ': 'i',
            'ḭ': 'i',
            'ꝺ': 'd',
            'ꝼ': 'f',
            'ᵹ': 'g',
            'ꞃ': 'r',
            'ꞅ': 's',
            'ꞇ': 't',
            'ꝭ': 'is',
            'ǰ': 'j',
            'ĵ': 'j',
            'ʝ': 'j',
            'ɉ': 'j',
            'ḱ': 'k',
            'ǩ': 'k',
            'ķ': 'k',
            'ⱪ': 'k',
            'ꝃ': 'k',
            'ḳ': 'k',
            'ƙ': 'k',
            'ḵ': 'k',
            'ᶄ': 'k',
            'ꝁ': 'k',
            'ꝅ': 'k',
            'ĺ': 'l',
            'ƚ': 'l',
            'ɬ': 'l',
            'ľ': 'l',
            'ļ': 'l',
            'ḽ': 'l',
            'ȴ': 'l',
            'ḷ': 'l',
            'ḹ': 'l',
            'ⱡ': 'l',
            'ꝉ': 'l',
            'ḻ': 'l',
            'ŀ': 'l',
            'ɫ': 'l',
            'ᶅ': 'l',
            'ɭ': 'l',
            'ł': 'l',
            'ǉ': 'lj',
            'ſ': 's',
            'ẜ': 's',
            'ẛ': 's',
            'ẝ': 's',
            'ḿ': 'm',
            'ṁ': 'm',
            'ṃ': 'm',
            'ɱ': 'm',
            'ᵯ': 'm',
            'ᶆ': 'm',
            'ń': 'n',
            'ň': 'n',
            'ņ': 'n',
            'ṋ': 'n',
            'ȵ': 'n',
            'ṅ': 'n',
            'ṇ': 'n',
            'ǹ': 'n',
            'ɲ': 'n',
            'ṉ': 'n',
            'ƞ': 'n',
            'ᵰ': 'n',
            'ᶇ': 'n',
            'ɳ': 'n',
            'ñ': 'n',
            'ǌ': 'nj',
            'ó': 'o',
            'ŏ': 'o',
            'ǒ': 'o',
            'ô': 'o',
            'ố': 'o',
            'ộ': 'o',
            'ồ': 'o',
            'ổ': 'o',
            'ỗ': 'o',
            'ö': 'o',
            'ȫ': 'o',
            'ȯ': 'o',
            'ȱ': 'o',
            'ọ': 'o',
            'ő': 'o',
            'ȍ': 'o',
            'ò': 'o',
            'ỏ': 'o',
            'ơ': 'o',
            'ớ': 'o',
            'ợ': 'o',
            'ờ': 'o',
            'ở': 'o',
            'ỡ': 'o',
            'ȏ': 'o',
            'ꝋ': 'o',
            'ꝍ': 'o',
            'ⱺ': 'o',
            'ō': 'o',
            'ṓ': 'o',
            'ṑ': 'o',
            'ǫ': 'o',
            'ǭ': 'o',
            'ø': 'o',
            'ǿ': 'o',
            'õ': 'o',
            'ṍ': 'o',
            'ṏ': 'o',
            'ȭ': 'o',
            'ƣ': 'oi',
            'ꝏ': 'oo',
            'ɛ': 'e',
            'ᶓ': 'e',
            'ɔ': 'o',
            'ᶗ': 'o',
            'ȣ': 'ou',
            'ṕ': 'p',
            'ṗ': 'p',
            'ꝓ': 'p',
            'ƥ': 'p',
            'ᵱ': 'p',
            'ᶈ': 'p',
            'ꝕ': 'p',
            'ᵽ': 'p',
            'ꝑ': 'p',
            'ꝙ': 'q',
            'ʠ': 'q',
            'ɋ': 'q',
            'ꝗ': 'q',
            'ŕ': 'r',
            'ř': 'r',
            'ŗ': 'r',
            'ṙ': 'r',
            'ṛ': 'r',
            'ṝ': 'r',
            'ȑ': 'r',
            'ɾ': 'r',
            'ᵳ': 'r',
            'ȓ': 'r',
            'ṟ': 'r',
            'ɼ': 'r',
            'ᵲ': 'r',
            'ᶉ': 'r',
            'ɍ': 'r',
            'ɽ': 'r',
            'ↄ': 'c',
            'ꜿ': 'c',
            'ɘ': 'e',
            'ɿ': 'r',
            'ś': 's',
            'ṥ': 's',
            'š': 's',
            'ṧ': 's',
            'ş': 's',
            'ŝ': 's',
            'ș': 's',
            'ṡ': 's',
            'ṣ': 's',
            'ṩ': 's',
            'ʂ': 's',
            'ᵴ': 's',
            'ᶊ': 's',
            'ȿ': 's',
            'ɡ': 'g',
            'ß': 'ss',
            'ᴑ': 'o',
            'ᴓ': 'o',
            'ᴝ': 'u',
            'ť': 't',
            'ţ': 't',
            'ṱ': 't',
            'ț': 't',
            'ȶ': 't',
            'ẗ': 't',
            'ⱦ': 't',
            'ṫ': 't',
            'ṭ': 't',
            'ƭ': 't',
            'ṯ': 't',
            'ᵵ': 't',
            'ƫ': 't',
            'ʈ': 't',
            'ŧ': 't',
            'ᵺ': 'th',
            'ɐ': 'a',
            'ᴂ': 'ae',
            'ǝ': 'e',
            'ᵷ': 'g',
            'ɥ': 'h',
            'ʮ': 'h',
            'ʯ': 'h',
            'ᴉ': 'i',
            'ʞ': 'k',
            'ꞁ': 'l',
            'ɯ': 'm',
            'ɰ': 'm',
            'ᴔ': 'oe',
            'ɹ': 'r',
            'ɻ': 'r',
            'ɺ': 'r',
            'ⱹ': 'r',
            'ʇ': 't',
            'ʌ': 'v',
            'ʍ': 'w',
            'ʎ': 'y',
            'ꜩ': 'tz',
            'ú': 'u',
            'ŭ': 'u',
            'ǔ': 'u',
            'û': 'u',
            'ṷ': 'u',
            'ü': 'u',
            'ǘ': 'u',
            'ǚ': 'u',
            'ǜ': 'u',
            'ǖ': 'u',
            'ṳ': 'u',
            'ụ': 'u',
            'ű': 'u',
            'ȕ': 'u',
            'ù': 'u',
            'ủ': 'u',
            'ư': 'u',
            'ứ': 'u',
            'ự': 'u',
            'ừ': 'u',
            'ử': 'u',
            'ữ': 'u',
            'ȗ': 'u',
            'ū': 'u',
            'ṻ': 'u',
            'ų': 'u',
            'ᶙ': 'u',
            'ů': 'u',
            'ũ': 'u',
            'ṹ': 'u',
            'ṵ': 'u',
            'ᵫ': 'ue',
            'ꝸ': 'um',
            'ⱴ': 'v',
            'ꝟ': 'v',
            'ṿ': 'v',
            'ʋ': 'v',
            'ᶌ': 'v',
            'ⱱ': 'v',
            'ṽ': 'v',
            'ꝡ': 'vy',
            'ẃ': 'w',
            'ŵ': 'w',
            'ẅ': 'w',
            'ẇ': 'w',
            'ẉ': 'w',
            'ẁ': 'w',
            'ⱳ': 'w',
            'ẘ': 'w',
            'ẍ': 'x',
            'ẋ': 'x',
            'ᶍ': 'x',
            'ý': 'y',
            'ŷ': 'y',
            'ÿ': 'y',
            'ẏ': 'y',
            'ỵ': 'y',
            'ỳ': 'y',
            'ƴ': 'y',
            'ỷ': 'y',
            'ỿ': 'y',
            'ȳ': 'y',
            'ẙ': 'y',
            'ɏ': 'y',
            'ỹ': 'y',
            'ź': 'z',
            'ž': 'z',
            'ẑ': 'z',
            'ʑ': 'z',
            'ⱬ': 'z',
            'ż': 'z',
            'ẓ': 'z',
            'ȥ': 'z',
            'ẕ': 'z',
            'ᵶ': 'z',
            'ᶎ': 'z',
            'ʐ': 'z',
            'ƶ': 'z',
            'ɀ': 'z',
            'ﬀ': 'ff',
            'ﬃ': 'ffi',
            'ﬄ': 'ffl',
            'ﬁ': 'fi',
            'ﬂ': 'fl',
            'ĳ': 'ij',
            'œ': 'oe',
            'ﬆ': 'st',
            'ₐ': 'a',
            'ₑ': 'e',
            'ᵢ': 'i',
            'ⱼ': 'j',
            'ₒ': 'o',
            'ᵣ': 'r',
            'ᵤ': 'u',
            'ᵥ': 'v',
            'ₓ': 'x',
        };
    }
    transform(text, chars = '\\s') {
        return isString(text)
            ? text.replace(/[^A-Za-z0-9]/g, (key) => {
                return this.latinMap[key] || key;
            })
            : text;
    }
};
LatinisePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'latinise' })
], LatinisePipe);

let LinesPipe = class LinesPipe {
    transform(text, chars = '\\s') {
        return isString(text) ? text.replace(/\r\n/g, '\n').split('\n') : text;
    }
};
LinesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'lines' })
], LinesPipe);

let UnderscorePipe = class UnderscorePipe {
    transform(text, chars = '\\s') {
        return isString(text)
            ? text
                .trim()
                .replace(/\s+/g, '')
                .replace(/[A-Z]/g, (c, k) => {
                return k ? `_${c.toLowerCase()}` : c.toLowerCase();
            })
            : text;
    }
};
UnderscorePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'underscore' })
], UnderscorePipe);

let MatchPipe = class MatchPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return text.match(new RegExp(pattern, flags));
    }
};
MatchPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'match' })
], MatchPipe);

let TestPipe = class TestPipe {
    transform(text, pattern, flags) {
        if (!isString(text)) {
            return text;
        }
        return new RegExp(pattern, flags).test(text);
    }
};
TestPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'test' })
], TestPipe);

let LeftPadPipe = class LeftPadPipe {
    transform(str, length, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = padCharacter + str;
        }
        return str;
    }
};
LeftPadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'lpad' })
], LeftPadPipe);

let RightPadPipe = class RightPadPipe {
    transform(str, length = 1, padCharacter = ' ') {
        if (!isString(str) || str.length >= length) {
            return str;
        }
        while (str.length < length) {
            str = str + padCharacter;
        }
        return str;
    }
};
RightPadPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'rpad' })
], RightPadPipe);

let MakePluralStringPipe = 
/**
 * Takes a singular entity string and pluralizes it.
 * Uses both naive and holdout-list approaches.
 * If several words appear in the string, only the last word is pluralized -- this
 * means that if "your story" was passed in, "your stories" would be passed out.
 *
 * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
 *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
 * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
 *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
 *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
 */
class MakePluralStringPipe {
    constructor() {
        this.irregularMap = {
            addendum: 'addenda',
            alga: 'algae',
            alumna: 'alumnae',
            alumnus: 'alumni',
            analysis: 'analyses',
            antenna: 'antennae',
            appendix: 'appendices',
            aquarium: 'aquaria',
            arch: 'arches',
            axe: 'axes',
            axis: 'axes',
            bacillus: 'bacilli',
            bacterium: 'bacteria',
            basis: 'bases',
            batch: 'batches',
            beach: 'beaches',
            beau: 'beaux',
            bison: 'bison',
            brush: 'brushes',
            buffalo: 'buffaloes',
            bureau: 'bureaus',
            bus: 'busses',
            cactus: 'cacti',
            calf: 'calves',
            chateau: 'chateaux',
            cherry: 'cherries',
            child: 'children',
            church: 'churches',
            circus: 'circuses',
            cod: 'cod',
            corps: 'corps',
            corpus: 'corpora',
            crisis: 'crises',
            criterion: 'criteria',
            curriculum: 'curricula',
            datum: 'data',
            deer: 'deer',
            diagnosis: 'diagnoses',
            die: 'dice',
            domino: 'dominoes',
            dwarf: 'dwarves',
            echo: 'echoes',
            elf: 'elves',
            ellipsis: 'ellipses',
            embargo: 'embargoes',
            emphasis: 'emphases',
            erratum: 'errata',
            fax: 'faxes',
            fireman: 'firemen',
            fish: 'fish',
            flush: 'flushes',
            focus: 'foci',
            foot: 'feet',
            formula: 'formulas',
            fungus: 'fungi',
            genus: 'genera',
            goose: 'geese',
            grafito: 'grafiti',
            half: 'halves',
            hero: 'heroes',
            hoax: 'hoaxes',
            hoof: 'hooves',
            hypothesis: 'hypotheses',
            index: 'indices',
            kiss: 'kisses',
            knife: 'knives',
            leaf: 'leaves',
            life: 'lives',
            loaf: 'loaves',
            louse: 'lice',
            man: 'men',
            mango: 'mangoes',
            matrix: 'matrices',
            means: 'means',
            medium: 'media',
            memorandum: 'memoranda',
            millennium: 'milennia',
            moose: 'moose',
            mosquito: 'mosquitoes',
            motto: 'mottoes',
            mouse: 'mice',
            nebula: 'nebulae',
            neurosis: 'neuroses',
            nucleus: 'nuclei',
            oasis: 'oases',
            octopus: 'octopodes',
            ovum: 'ova',
            ox: 'oxen',
            paralysis: 'paralyses',
            parenthesis: 'parentheses',
            person: 'people',
            phenomenon: 'phenomena',
            plateau: 'plateaux',
            potato: 'potatoes',
            quiz: 'quizzes',
            radius: 'radii',
            reflex: 'reflexes',
            'runner-up': 'runners-up',
            scampo: 'scampi',
            scarf: 'scarves',
            scissors: 'scissors',
            scratch: 'scratches',
            self: 'selves',
            series: 'series',
            sheaf: 'sheaves',
            sheep: 'sheep',
            shelf: 'shelves',
            'son-in-law': 'sons-in-law',
            species: 'species',
            splash: 'splashes',
            stimulus: 'stimuli',
            stitch: 'stitches',
            stratum: 'strata',
            syllabus: 'syllabi',
            symposium: 'symposia',
            synopsis: 'synopses',
            synthesis: 'syntheses',
            tableau: 'tableaux',
            tax: 'taxes',
            that: 'those',
            thesis: 'theses',
            thief: 'thieves',
            this: 'these',
            tomato: 'tomatoes',
            tooth: 'teeth',
            tornado: 'tornadoes',
            torpedo: 'torpedoes',
            vertebra: 'vertebrae',
            veto: 'vetoes',
            vita: 'vitae',
            volcano: 'volcanoes',
            waltz: 'waltzes',
            wash: 'washes',
            watch: 'watches',
            wharf: 'wharves',
            wife: 'wives',
            wolf: 'wolves',
            woman: 'women',
            zero: 'zeroes',
        };
    }
    transform(singularEntity, quantity = 0) {
        if (!singularEntity || singularEntity === '') {
            return '';
        }
        if (quantity === 1) {
            return singularEntity;
        }
        else {
            const lastWord = singularEntity.trim().split(' ')[singularEntity.trim().split(' ').length - 1];
            if (this.irregularMap[lastWord.toLocaleLowerCase()]) {
                if (lastWord[0] === lastWord[0].toLocaleUpperCase()) {
                    return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()].replace(this.irregularMap[lastWord.toLocaleLowerCase()][0], this.irregularMap[lastWord.toLocaleLowerCase()][0].toLocaleUpperCase()));
                }
                return singularEntity.replace(lastWord, this.irregularMap[lastWord.toLocaleLowerCase()]);
            }
            else if (lastWord[lastWord.length - 1] === 'y') {
                // Naive approach:
                // consonant+y = word - 'y' +'ies'
                // vowel+y = word + 's'
                return isVowel(lastWord[lastWord.length - 2])
                    ? singularEntity + 's'
                    : singularEntity.replace(lastWord, lastWord.slice(0, -1) + 'ies');
            }
            else if (lastWord[lastWord.length - 1] === 's') {
                return singularEntity + 'es';
            }
            else {
                return singularEntity + 's';
            }
        }
    }
};
MakePluralStringPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'makePluralString',
    })
    /**
     * Takes a singular entity string and pluralizes it.
     * Uses both naive and holdout-list approaches.
     * If several words appear in the string, only the last word is pluralized -- this
     * means that if "your story" was passed in, "your stories" would be passed out.
     *
     * @param {string} singularEntity - Entity to pluralize. Pass as a singular ('story' or 'house').
     *          NOTE: The last word is examined. So you can pass in e.g. 'my story'.
     * @param {number} [quantity=0] quantity - How many of the entity are there? If left blank, this will
     *          pluralize the string (e.g. 'story' -> 'stories', 'house' -> 'houses'). If given a value,
     *          this will pluralize appropriately (e.g. ('story', 1) -> 'story', ('story', 2) -> 'stories').
     */
], MakePluralStringPipe);

let WrapPipe = class WrapPipe {
    transform(str, prefix = '', suffix = '') {
        if (!isString(str)) {
            return str;
        }
        return (!!prefix && isString(prefix) ? prefix : '') + str + (!!suffix && isString(suffix) ? suffix : '');
    }
};
WrapPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'wrap' })
], WrapPipe);

const STRING_PIPES = [
    AorAnPipe,
    LeftTrimPipe,
    RepeatPipe,
    RightTrimPipe,
    ScanPipe,
    ShortenPipe,
    StripTagsPipe,
    TrimPipe,
    UcFirstPipe,
    UcWordsPipe,
    SlugifyPipe,
    CamelizePipe,
    LatinisePipe,
    LinesPipe,
    UnderscorePipe,
    MatchPipe,
    TestPipe,
    LeftPadPipe,
    RightPadPipe,
    MakePluralStringPipe,
    WrapPipe,
];
let NgStringPipesModule = class NgStringPipesModule {
};
NgStringPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: STRING_PIPES,
        imports: [],
        exports: STRING_PIPES,
    })
], NgStringPipesModule);

let MaxPipe = class MaxPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.max(...arr) : arr;
    }
};
MaxPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'max' })
], MaxPipe);

let MinPipe = class MinPipe {
    transform(arr) {
        return Array.isArray(arr) ? Math.min(...arr) : arr;
    }
};
MinPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'min' })
], MinPipe);

let PercentagePipe = class PercentagePipe {
    transform(num, total = 100, floor = false) {
        if (isNaN(num)) {
            return num;
        }
        const percent = (num * 100) / total;
        return floor ? Math.floor(percent) : percent;
    }
};
PercentagePipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'percentage' })
], PercentagePipe);

let SumPipe = class SumPipe {
    transform(arr) {
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr, 0) : arr;
    }
};
SumPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sum' })
], SumPipe);

let FloorPipe = class FloorPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.floor(num);
        }
        const tho = Math.pow(10, precision);
        return Math.floor(num * tho) / tho;
    }
};
FloorPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'floor' })
], FloorPipe);

let RoundPipe = class RoundPipe {
    transform(num, precision = 0) {
        return applyPrecision(num, precision);
    }
};
RoundPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'round' })
], RoundPipe);

let SqrtPipe = class SqrtPipe {
    transform(num) {
        return !isNaN(num) ? Math.sqrt(num) : num;
    }
};
SqrtPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sqrt' })
], SqrtPipe);

let PowerPipe = class PowerPipe {
    transform(num, power = 2) {
        return !isNaN(num) ? Math.pow(num, power) : num;
    }
};
PowerPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'pow' })
], PowerPipe);

let CeilPipe = class CeilPipe {
    transform(num, precision = 0) {
        if (precision <= 0) {
            return Math.ceil(num);
        }
        const tho = Math.pow(10, precision);
        return Math.ceil(num * tho) / tho;
    }
};
CeilPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'ceil' })
], CeilPipe);

let DegreesPipe = class DegreesPipe {
    transform(radians) {
        if (!isNumberFinite(radians)) {
            return NaN;
        }
        return (radians * 180) / Math.PI;
    }
};
DegreesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'degrees' })
], DegreesPipe);

let BytesPipe = class BytesPipe {
    constructor() {
        this.dictionary = [
            { max: 1024, type: 'B' },
            { max: 1048576, type: 'KB' },
            { max: 1073741824, type: 'MB' },
            { max: 1.0995116e12, type: 'GB' },
        ];
    }
    transform(value, precision) {
        if (!isNumberFinite(value)) {
            return NaN;
        }
        const format = this.dictionary.find(d => value < d.max) || this.dictionary[this.dictionary.length - 1];
        const calc = value / (format.max / 1024);
        const num = isUndefined(precision) ? calc : applyPrecision(calc, precision);
        return `${num} ${format.type}`;
    }
};
BytesPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'bytes' })
], BytesPipe);

let RadiansPipe = class RadiansPipe {
    transform(degrees) {
        if (!isNumberFinite(degrees)) {
            return NaN;
        }
        return (degrees * Math.PI) / 180;
    }
};
RadiansPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'radians' })
], RadiansPipe);

const MATH_PIPES = [
    MaxPipe,
    MinPipe,
    PercentagePipe,
    SumPipe,
    FloorPipe,
    RoundPipe,
    SqrtPipe,
    PowerPipe,
    CeilPipe,
    DegreesPipe,
    BytesPipe,
    RadiansPipe,
];
let NgMathPipesModule = class NgMathPipesModule {
};
NgMathPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: MATH_PIPES,
        imports: [],
        exports: MATH_PIPES,
    })
], NgMathPipesModule);

let IsDefinedPipe = class IsDefinedPipe {
    transform(input) {
        return !isUndefined(input);
    }
};
IsDefinedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isDefined' })
], IsDefinedPipe);

let IsNullPipe = class IsNullPipe {
    transform(input) {
        return input === null;
    }
};
IsNullPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isNull' })
], IsNullPipe);

let IsUndefinedPipe = class IsUndefinedPipe {
    transform(input) {
        return isUndefined(input);
    }
};
IsUndefinedPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isUndefined' })
], IsUndefinedPipe);

let IsStringPipe = class IsStringPipe {
    transform(input) {
        return isString(input);
    }
};
IsStringPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isString' })
], IsStringPipe);

let IsFunctionPipe = class IsFunctionPipe {
    transform(input) {
        return isFunction(input);
    }
};
IsFunctionPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isFunction' })
], IsFunctionPipe);

let IsNumberPipe = class IsNumberPipe {
    transform(input) {
        return isNumber(input);
    }
};
IsNumberPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isNumber' })
], IsNumberPipe);

let IsArrayPipe = class IsArrayPipe {
    transform(input) {
        return Array.isArray(input);
    }
};
IsArrayPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isArray' })
], IsArrayPipe);

let IsObjectPipe = class IsObjectPipe {
    transform(input) {
        return isObject(input);
    }
};
IsObjectPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isObject' })
], IsObjectPipe);

let IsGreaterEqualThanPipe = class IsGreaterEqualThanPipe {
    transform(input, other) {
        return input >= other;
    }
};
IsGreaterEqualThanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isGreaterEqualThan' })
], IsGreaterEqualThanPipe);

let IsGreaterThanPipe = class IsGreaterThanPipe {
    transform(input, other) {
        return input > other;
    }
};
IsGreaterThanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isGreaterThan' })
], IsGreaterThanPipe);

let IsLessEqualThanPipe = class IsLessEqualThanPipe {
    transform(input, other) {
        return input <= other;
    }
};
IsLessEqualThanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isLessEqualThan' })
], IsLessEqualThanPipe);

let IsEqualToPipe = class IsEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input == other;
    }
};
IsEqualToPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isEqualTo' })
], IsEqualToPipe);

let IsNotEqualToPipe = class IsNotEqualToPipe {
    transform(input, other) {
        // tslint:disable-next-line:triple-equals
        return input != other;
    }
};
IsNotEqualToPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isNotEqualTo' })
], IsNotEqualToPipe);

let IsIdenticalToPipe = class IsIdenticalToPipe {
    transform(input, other) {
        return input === other;
    }
};
IsIdenticalToPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isIdenticalTo' })
], IsIdenticalToPipe);

let IsNotIdenticalToPipe = class IsNotIdenticalToPipe {
    transform(input, other) {
        return input !== other;
    }
};
IsNotIdenticalToPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isNotIdenticalTo' })
], IsNotIdenticalToPipe);

let IsLessThanPipe = class IsLessThanPipe {
    transform(input, other) {
        return input < other;
    }
};
IsLessThanPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'isLessThan' })
], IsLessThanPipe);

const BOOLEAN_PIPES = [
    IsDefinedPipe,
    IsNullPipe,
    IsUndefinedPipe,
    IsStringPipe,
    IsFunctionPipe,
    IsNumberPipe,
    IsArrayPipe,
    IsObjectPipe,
    IsGreaterEqualThanPipe,
    IsGreaterThanPipe,
    IsLessEqualThanPipe,
    IsLessEqualThanPipe,
    IsEqualToPipe,
    IsNotEqualToPipe,
    IsIdenticalToPipe,
    IsNotIdenticalToPipe,
    IsLessThanPipe,
];
let NgBooleanPipesModule = class NgBooleanPipesModule {
};
NgBooleanPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: BOOLEAN_PIPES,
        imports: [],
        exports: BOOLEAN_PIPES,
    })
], NgBooleanPipesModule);

var TimeAgoPipe_1;
let TimeAgoPipe = TimeAgoPipe_1 = class TimeAgoPipe {
    /**
     * @param inputDate: Date | Moment - not included as TypeScript interface,
     * in order to keep `ngx-pipes` "pure" from dependencies!
     */
    transform(inputDate) {
        if (!inputDate || (!inputDate.getTime && !inputDate.toDate)) {
            return 'Invalid date';
        }
        const past = inputDate.toDate ? inputDate.toDate() : inputDate.getTime();
        const now = +new Date();
        if (past > now) {
            return 'in the future';
        }
        for (let i = 0, l = TimeAgoPipe_1.MAPPER.length, ms = now - past, div = TimeAgoPipe_1.YEAR_MS; i < l; ++i) {
            const elm = TimeAgoPipe_1.MAPPER[i];
            const unit = Math.floor(ms / (div /= elm.div));
            if (unit >= 1) {
                return unit === 1 ? elm.single : `${unit} ${elm.many} ago`;
            }
        }
        return 'just now';
    }
};
TimeAgoPipe.YEAR_MS = 1000 * 60 * 60 * 24 * 7 * 4 * 12;
TimeAgoPipe.MAPPER = [
    { single: 'last year', many: 'years', div: 1 },
    { single: 'last month', many: 'months', div: 12 },
    { single: 'last week', many: 'weeks', div: 4 },
    { single: 'yesterday', many: 'days', div: 7 },
    { single: 'an hour ago', many: 'hours', div: 24 },
    { single: 'just now', many: 'minutes', div: 60 },
];
TimeAgoPipe = TimeAgoPipe_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'timeAgo' })
], TimeAgoPipe);

const DATE_PIPES = [TimeAgoPipe];
let NgDatePipesModule = class NgDatePipesModule {
};
NgDatePipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: DATE_PIPES,
        imports: [],
        exports: DATE_PIPES,
    })
], NgDatePipesModule);

let NgPipesModule = class NgPipesModule {
};
NgPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            NgArrayPipesModule,
            NgStringPipesModule,
            NgMathPipesModule,
            NgBooleanPipesModule,
            NgObjectPipesModule,
            NgDatePipesModule,
        ],
    })
], NgPipesModule);


//# sourceMappingURL=ngx-pipes.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\" style=\"background-color: #e3f2fd;\">\n    <a routerLink=\"/dashboard/header\" class=\"btn btn-info\" (click)=\"loadComponent();\">Create Order</a>\n    <a routerLink=\"/dashboard/view\" class=\"btn btn-info nav_button\" >View Orders</a>\n    <button class=\"btn btn-danger buttons\" (click)=\"logout()\">logout</button>\n</nav>\n<div class=\"row\">\n    <div class=\"col logsinput\">\n        Logged in as: {{username}}\n    </div>\n</div>\n<!--<div class=\"container \">\n    <div class=\"row\">\n        <div class=\"col colspan=9\">\n        </div>\n        <div class=\"col\">\n            <button class=\"btn btn-danger buttons\" (click)=\"logout()\">logout</button>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <p>\n                Dashboard page for: {{username}}\n            </p>\n            \n        </div>\n    </div>\n</div>\n\n<a routerLink=\"/dashboard/header\" class=\"btn btn-info\">Header</a> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2 class=\"bg-secondary text-center text-white mt-3\">Enter order header details</h2>\n            <form action=\"\" [formGroup]=\"fmdetails\">\n                <table class=\"table table-bordered m-4\" width=\"350\">\n                    <tr>\n                        <td> <label>Customer Name:</label> </td>\n                        <td>\n                            <input type=\"text\" place-holder=\"Enter customer name\" formControlName=\"cust_name\" required>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Order Number:</label> </td>\n                        <td>\n                            <input type=\"text\" formControlName=\"order_number\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Address:</label> </td>\n                        <td>\n                            <input type=\"text\"\n                                [ngClass]=\"{'is-invalid': formdata.cust_address.touched && formdata.cust_address.invalid}\"\n                                formControlName=\"cust_address\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Payment Type:</label> </td>\n                        <td>\n                            <select formControlName=\"payment_type\">\n                                <option disabled selected value=\"none\">--choose a value--</option>\n                                <option value=\"cash\">Cash</option>\n                                <option value=\"card\">Card</option>\n                            </select>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Type:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"is-valid\"\n                                [ngClass]=\"{'is-invalid': (formdata.cust_type.dirty || formdata.cust_type.touched) && formdata.cust_type.invalid }\"\n                                formControlName=\"cust_type\" required>\n                            <div class=\"invalid-feedback\" *ngIf=\"formdata.cust_type.invalid\">\n                                custtype is required.\n                            </div>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> {{this.fmdetails.value | json}} </td>\n                        <td>\n                            <div>\n                                <a class=\"btn btn-info\"\n                                    (click)=\"submitheader();\">Save->Lines Component</a>\n                                <a routerLink=\"/dashboard/header\" class=\"btn btn-danger\"\n                                    (click)=\"clearform();\">Clear</a>\n                            </div>\n                        </td>\n                    </tr>\n                </table>\n                <div class=\"alert alert-success\" *ngIf=\"headerSaved\">\n                    Header is saved. Proceed to lines component.\n                </div>\n            </form>\n        </div>\n    </div>\n</div>\n<!--\n\n<div class=\"container jumbotron\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2 class=\"bg-secondary text-center text-white mt-3\">Enter order header details</h2>\n           <form class=\"container\" >\n                <table class=\"table table-bordered m-4\" width=\"350\">\n                    <tr>\n                        <td> <label>Customer Name:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custName\" place-holder=\"Enter customer name\"\n                                [(ngModel)]=\" headerObj.cust_name \" [readonly]=\"headerReadonly\"> {{ headerObj.cust_name}}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Order Number:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"orderNumber\" place-holder=\"Enter Order Number\"\n                                [(ngModel)]=\"max_order_number\" readonly>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Address:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custAddress\" place-holder=\"Enter customer address\"\n                                [(ngModel)]=\"headerObj.cust_address\" [readonly]=\"headerReadonly\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Payment Type:</label> </td>\n                        <td >\n                          <input type=\"text\" class=\"form-control\" name=\"paymentType\" place-holder=\"Enter payment type\"\n                                [(ngModel)]=\"headerObj.payment_type\" [readonly]=\"headerReadonly\"> \n\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Type:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custType\" place-holder=\"Enter customer type\"\n                                [(ngModel)]=\"headerObj.cust_type\" [readonly]=\"headerReadonly\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Order Total:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"orderTotal\" \n                                [(ngModel)]=\"headerObj.order_total\" disabled>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> {{headerObj | json}}  </td>\n                        <td>\n                            <a routerLink=\"/dashboard/header/lines\"  class=\"btn btn-info\"  (click)=\"saveHeaderData();\">Save->Lines Component</a>\n                            <!-- [queryParams]=\"headerObj\" -->\n                           \n                    <!--      </td>\n                    </tr>\n                </table>\n                <div class=\"alert alert-success\" *ngIf=\"headerSaved\">Header is saved. Proceed to lines component.</div>\n            </form>\n        </div>\n    </div>\n</div>\n-->\n<!--<form action=\"\" class=\"container\" [formGroup]=\"headerForm\">\n\n    <div class=\"jumbotron\">\n            <div class=\"row container\">\n                    <div class=\"col  p-3 bg-primary\">\n                        <h1 class=\"text-left\">Header Information</h1>\n                    </div>\n                </div>\n                <div class=\"row mt-5\">\n    \n                </div>\n        <div class=\"row\">\n            <div class=\"col\">\n                Customer Name: <input formControlName=\"custName\" type=\"text\"  placeholder=\"Enter Customer name\" [(ngModel)]=\"objHeader.custName\">\n            </div>\n            <div class=\"col\">\n                Customer Address: <input formControlName=\"custAddress\" type=\"text\" [(ngModel)]=\"objHeader.custAddress\">\n            </div>\n        </div>\n        <div class=\"row mt-3\">\n                <div class=\"col\">\n                    Payment type:  <input formControlName=\"paymentType\" type=\"text\" [(ngModel)]=\"objHeader.paymentType\">\n                </div>\n                <div class=\"col\">\n                    Customer Type: <input formControlName=\"custType\" [(ngModel)]=\"objHeader.custType\">\n                </div>\n        </div>\n        <div class=\"row mt-3\">\n            <div class=\"col\">\n                Order Total: <input type=\"text\" formControlName=\"orderTotal\" [(ngModel)]=\"objHeader.orderTotal\">\n            </div>\n            <div class=\"col mt-3\">\n                    {{objHeader | json }}\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col mt-5\">\n                <input type=\"button\" value=\"Lines\" name=\"Lines\" class=\"btn btn-success\" (click)=\"headerData();\">\n                <a routersLink=\"lines\" class=\"btn btn-info\">Lines</a>\n            </div>\n    \n        </div>\n    \n    </div>\n   \n \n    </form>\n    <app-lines [mydata]=\"data\" (passData)=\"addData($event)\"></app-lines> \n<div class=\"col mt-5\">\n    <input type=\"button\" value=\"Lines\" name=\"Lines\" class=\"btn btn-success\" (click)=\"headerData();\">\n</div>\n<a routerLink=\"/dashboard/header/lines\" class=\"btn btn-info\">Save->Lines Component</a>\n<router-outlet  (passData)='addDataToLines($event)'></router-outlet>-->\n<router-outlet></router-outlet>\n<!--<router-outlet [headerObj]='headerObj'></router-outlet>-->\n<!-- <a routerLink=\"/dashboard/header/lines\" class=\"btn btn-info\">Save->Lines Component</a> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lines/lines.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lines/lines.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>lines works!</p>\n\n<div class=\"container \">\n    <div class=\"row\">\n        <div class=\"col\">\n<!--\n            <form action=\"\" *ngIf=\"formShow\">\n                <table>\n                    <tr>\n                        <td>Cust Id</td>\n                        <td><input type=\"text\" name=\"id\" [(ngModel)]=\"formData.id\"></td>\n                        <td>Cust Name</td>\n                        <td><input type=\"text\" name=\"custName\" [(ngModel)]=\"formData.custName\"></td>\n                        <td>Cust Address</td>\n                        <td><input type=\"text\" name=\"custAddress\" [(ngModel)]=\"formData.custAddress\"></td>\n                    </tr>\n                    <tr>\n                        <td>Payment Type</td>\n                        <td><input type=\"text\" name=\"paymentType\" [(ngModel)]=\"formData.paymentType\"></td>\n                        <td>Cust Type</td>\n                        <td><input type=\"text\" name=\"custType\" [(ngModel)]=\"formData.custType\"></td>\n                        <td>Order Total</td>\n                        <td><input type=\"text\" name=\"orderTotal\" [(ngModel)]=\"formData.orderTotal\"></td>\n                        <td><button class=\"btn btn-success\" (click)=\"addData();\">Save</button></td>\n                    </tr>\n                </table>\n            </form>\n            <table class=\"table table-bordered table-hover mt-3\">\n                <tr>\n                    <th>\n                        <button (click)=\"displayform();\">\n                            Add Orders\n                        </button>\n                    </th>\n                    <th colspan=\"3\">\n\n                    </th>\n                </tr>\n                <tr>\n                    <th>Cust id </th>\n                    <th> Cust Name</th>\n                    <th>custAddress </th>\n                    <th>paymentType </th>\n                    <th>custType </th>\n                    <th>orderTotal </th>\n                </tr>\n                <tr *ngFor=\"let row of data\">\n                    <td>{{ row.id}}</td>\n                    <td>{{row.custName}}</td>\n                    <td>{{row.custAddress}}</td>\n                    <td>{{row.paymentType}}</td>\n                    <td>{{row.custType}}</td>\n                    <td>{{row.orderTotal}}</td>\n                </tr>\n            </table> -->\n            <!--Below is my key line details -->\n            <table class=\"table table-striped table-bordered table-hover mt-3\" width=\"350\">\n                    <tr>\n                    <th>\n                        <button class=\"btn btn-info\" (click)=\"addLines();\">\n                            Add Lines\n                        </button>\n                    </th>\n                    <th colspan=\"5\">\n\n                    </th>\n                </tr>\n                <tr>\n                    <th> Line Num </th>\n                    <th> Item Name</th>\n                    <th> Quantity </th>\n                    <th> Warehouse </th>\n                    <th>Order Number </th>\n                </tr>\n                <tbody>\n                <tr *ngFor=\"let row of LineData\" >\n                    <td><input type=\"text\" name=\"linenum\" [(ngModel)]=\"row.linenum\" disabled></td>\n                    <td><input type=\"text\" name=\"itemname\" [(ngModel)]=\"row.itemname\" required> </td>\n                    <td><input type=\"text\" name=\"quantity\" [(ngModel)]=\"row.quantity\" required> </td>\n                    <td><input type=\"text\" name=\"warehouse\" [(ngModel)]=\"row.warehouse\"> </td>\n                    <td><input type=\"text\" name=\"ordernumber\" [(ngModel)]=\"row.ordernumber\" disabled></td>\n                    \n                </tr> \n                </tbody>\n               <!-- <tr *ngFor=\"let row of LineData\" >\n                    <td><input type=\"text\" name=\"linenum\"  value=\"{{row.linenum}}\" disabled></td>\n                    <td><input type=\"text\" name=\"itemname\"  value=\"{{row.itemname}}\" > </td>\n                    <td><input type=\"text\" name=\"quantity\" value=\"{{row.quantity}}\" > </td>\n                    <td><input type=\"text\" name=\"warehouse\" value=\"{{row.warehouse}}\" > </td>\n                    <td><input type=\"text\" name=\"custname\" value=\"{{row.custname}}\" ></td>\n                    <td><input type=\"text\" name=\"ordernumber\" value=\"{{row.ordernumber}}\"  disabled></td>                    \n                </tr> -->\n                <tr>\n                    <th>\n                        <a routerLink=\"/dashboard\"  class=\"btn btn-primary\"  (click)=\"saveLines();\">Save</a>\n                            \n                       <!-- <button class=\"btn btn-primary\" (click)=\"saveLines();\"> save </button> -->\n                    </th>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orderedit/orderedit.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orderedit/orderedit.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container jumbotron\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h2 class=\"bg-secondary text-center text-white mt-3\">Update order details</h2>\n           <form class=\"container\" >\n                <table class=\"table table-bordered m-4\" width=\"350\">\n                    <tr>\n                        <td> <label>Customer Name:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custName\" place-holder=\"Enter customer name\"\n                                [(ngModel)]=\"headerObj.cust_name\" [readonly]=\"headerReadonly\"> {{ headerObj.cust_name}}\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Order Number:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"orderNumber\" place-holder=\"Enter Order Number\"\n                                [(ngModel)]=\"headerObj.order_number\" readonly>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Address:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custAddress\" place-holder=\"Enter customer address\"\n                                [(ngModel)]=\"headerObj.cust_address\" [readonly]=\"headerReadonly\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Payment Type:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"paymentType\" place-holder=\"Enter payment type\"\n                                [(ngModel)]=\"headerObj.payment_type\" [readonly]=\"headerReadonly\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Customer Type:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"custType\" place-holder=\"Enter customer type\"\n                                [(ngModel)]=\"headerObj.cust_type\" [readonly]=\"headerReadonly\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> <label>Order Total:</label> </td>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" name=\"orderTotal\" \n                                [(ngModel)]=\"headerObj.order_total\" disabled>\n                        </td>\n                    </tr>\n                    <tr>\n                        <td> {{headerObj | json}}  </td>\n                        <td>\n                            <a  class=\"btn btn-info\"  (click)=\"updateHeaderData();\">Update</a>\n                            <a routerLink=\"/dashboard/view\" class=\"btn btn-danger\" >Cancel</a>\n                            <!--<button class=\"btn btn-danger\" (click)=\"backToView();\"> Cancel </button>\n                             [queryParams]=\"headerObj\" -->\n                           \n                        </td>\n                    </tr>\n                </table>\n                <div class=\"alert alert-success\" *ngIf=\"headerSaved\">Header is saved. Proceed to lines component.</div>\n            </form>\n        </div>\n    </div>\n</div>\n\n<div class=\"container \">\n    <div class=\"row\">\n        <div class=\"col\">\n            <table class=\"table table-striped table-bordered table-hover mt-3\" width=\"350\">\n                <tr>\n                    <th> Line Num </th>\n                    <th> Item Name</th>\n                    <th> Quantity </th>\n                    <th> Warehouse </th>\n                    <th>Order Number </th>\n                </tr>\n                <tbody>\n                <tr *ngFor=\"let row of lineobjects\" >\n                    <td><input type=\"text\" name=\"linenum\" [(ngModel)]=\"row.line_number\" disabled></td>\n                    <td><input type=\"text\" name=\"itemname\" [(ngModel)]=\"row.item_name\" [readonly]=\"lineReadonly\"> </td>\n                    <td><input type=\"text\" name=\"quantity\" [(ngModel)]=\"row.quantity\" [readonly]=\"lineReadonly\"> </td>\n                    <td><input type=\"text\" name=\"warehouse\" [(ngModel)]=\"row.warehouse\" [readonly]=\"lineReadonly\"> </td>\n                    <td><input type=\"text\" name=\"ordernumber\" [(ngModel)]=\"row.order_number\" disabled></td>\n                    <td> <a class=\"btn btn-primary\"  (click)=\"updateLine(row);\">Save</a></td>      \n                </tr> \n                </tbody>\n               <tr>\n                    <th>\n                        <a routerLink=\"/dashboard/view\" class=\"btn btn-danger\" >Cancel</a>\n                     </th>\n                </tr>\n            </table>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/orderview/orderview.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/orderview/orderview.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>orderview works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/view/view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mt-3\">\n        <input type=\"text\" placeholder=\"search data\" name=\"search\" [(ngModel)]=\"search\" />\n      <div class=\"row\">\n        <small>Search on Order Number, Customer, Item</small>\n      </div>\n  </div>\n    <table class=\"table table-striped table-bordered mt-4\" >\n      <thead>\n          <tr>\n            <th>Order Number</th>\n            <th>Customer</th>\n            <th>Line Number</th>\n            <th>Item</th>\n            <th>Line Quantity</th>\n            <th>Order Total</th>\n            <th>Actions</th>\n          </tr>\n      </thead>\n      <tbody>\n         <!--<tr *ngFor=\"let header of headers | slice: 0: 9\"> -->\n       <tr  *ngFor=\"let header of headers | filterBy: ['order_number' , 'cust_name' , 'item_name'] : search | slice: 0: 7 \">\n          <td >{{ header.order_number }}</td>\n          <td >{{ header.cust_name }}</td>\n          <td >{{ header.line_number }}</td>\n          <td >{{ header.item_name }}</td>\n          <td >{{ header.quantity }}</td>\n          <td >{{ header.order_otal }}</td>\n          <td> \n            <!--<a routerLink=\"/dashboard/orderdetail/{{header.order_number}}\" class=\"btn btn-info\">view</a> -->\n            <a routerLink=\"/dashboard/orderedit/{{header.order_number}}\" class=\"btn btn-success\">edit</a>\n            <button class=\"btn btn-danger\" (click)=\"deleteOrder(header);\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".buttons {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n.nav_button {\n  vertical-align: middle;\n  position: relative;\n  height: 45px;\n  line-height: 50px;\n  width: 140px;\n  margin: auto;\n}\n\n.logsinput {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0Q6XFxBbmd1bGFyXFxyZWdpc0hlYWRlckxpbmVzX3Byb2ovc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQyxTQUFBO0VBQ0EsV0FBQTtBQ0NMOztBRENDO0VBRUcsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0M7RUFDRyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbnMge1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgdG9wOjEwcHg7XHJcbiAgICAgcmlnaHQ6MTBweDtcclxuIH1cclxuIC5uYXZfYnV0dG9ue1xyXG4gICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuIH1cclxuIC5sb2dzaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiBibHVlXHJcbiAgfSIsIi5idXR0b25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ubmF2X2J1dHRvbiB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgd2lkdGg6IDE0MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5sb2dzaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogYmx1ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-localstorage */ "./node_modules/ngx-localstorage/fesm2015/ngx-localstorage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DashboardComponent = class DashboardComponent {
    constructor(local, router) {
        this.local = local;
        this.router = router;
        console.log('Constructor called');
    }
    ngOnInit() {
        console.log('Dashboard init');
        this.username = this.local.get('username');
        if (this.username == null || this.username === undefined || this.username === '') {
            this.router.navigate(['/']);
        }
        console.log('Dashboard init completed');
    }
    loadComponent() {
        this.router.navigate(['/dashboard/header']);
    }
    logout() {
        this.local.remove('username');
        this.local.remove('password');
        this.router.navigate(['/']);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: ngx_localstorage__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm2015/ngx-pipes.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _lines_lines_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lines/lines.component */ "./src/app/lines/lines.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view/view.component */ "./src/app/view/view.component.ts");
/* harmony import */ var _orderview_orderview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../orderview/orderview.component */ "./src/app/orderview/orderview.component.ts");
/* harmony import */ var _orderedit_orderedit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../orderedit/orderedit.component */ "./src/app/orderedit/orderedit.component.ts");
/* harmony import */ var _logincheck_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../logincheck.service */ "./src/app/logincheck.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _linedata_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../linedata.service */ "./src/app/linedata.service.ts");
















const routing = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        children: [{
                path: 'header',
                component: _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                children: [{
                        path: 'lines',
                        component: _lines_lines_component__WEBPACK_IMPORTED_MODULE_7__["LinesComponent"]
                    }]
            },
            {
                path: 'view',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"]
            },
            {
                path: 'orderdetail/:id',
                component: _orderview_orderview_component__WEBPACK_IMPORTED_MODULE_10__["OrderviewComponent"]
            },
            {
                path: 'orderedit/:id',
                component: _orderedit_orderedit_component__WEBPACK_IMPORTED_MODULE_11__["OrdereditComponent"],
                canActivate: [_logincheck_service__WEBPACK_IMPORTED_MODULE_12__["LogincheckService"]],
                resolve: {
                    orderdata: _data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"],
                    linedata: _linedata_service__WEBPACK_IMPORTED_MODULE_14__["LinedataService"]
                }
            }
        ]
    },
];
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _lines_lines_component__WEBPACK_IMPORTED_MODULE_7__["LinesComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"], _orderview_orderview_component__WEBPACK_IMPORTED_MODULE_10__["OrderviewComponent"], _orderedit_orderedit_component__WEBPACK_IMPORTED_MODULE_11__["OrdereditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_5__["NgPipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routing)
        ],
        providers: [_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"], _linedata_service__WEBPACK_IMPORTED_MODULE_14__["LinedataService"]]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HeaderComponent = class HeaderComponent {
    constructor(fb, router, dataservice) {
        this.fb = fb;
        this.router = router;
        this.dataservice = dataservice;
        this.headerSaved = false;
        console.log('In constructor');
        // this.fmdetails  = this.fb.group({
        //   cust_name : [''],
        //   cust_type :  ['', Validators.required],
        //   order_number :  [{value: '', disabled: true}, Validators.required],
        //   cust_address :  ['', Validators.required],
        //   payment_type : ['', Validators.required]
        // });
        // console.log(this.fmdetails.value);
    }
    ngOnInit() {
        console.log('in header onInit');
        this.fmdetails = this.fb.group({
            cust_name: [''],
            cust_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            order_number: [{ value: '', disabled: true }, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cust_address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        console.log(this.fmdetails.value);
        this.dataservice.maxOrderNumber().subscribe((success) => {
            console.log(success);
            this.max_order_number = success.data[0].max_order_number + 1;
            this.fmdetails.patchValue({
                order_number: this.max_order_number
            });
            /*  this.fmdetails.setValue({cust_name: null,
                 cust_type: 'Important' ,
                 order_number: this.max_order_number ,
                 cust_address: null,
                 payment_type: null
                }); */
            console.log(this.fmdetails.controls);
            console.log(this.fmdetails.value);
        }, (error) => {
            console.log(error);
        });
    }
    get formdata() { return this.fmdetails.controls; }
    submitheader() {
        console.log(this.fmdetails.controls);
        if (this.fmdetails.invalid) {
            alert('Please enter all details');
            this.router.navigate(['/dashboard/header']);
            return;
        }
        console.log(this.fmdetails.controls);
        console.log(this.fmdetails.value);
        this.headerData = this.fmdetails.value;
        this.headerData.order_number = this.fmdetails.get('order_number').value;
        console.log(this.headerData);
        this.dataservice.header(this.headerData).subscribe((success) => {
            console.log(success);
            this.fmdetails.disable();
            this.changeMessageHeader();
            this.headerSaved = true;
            this.router.navigate(['/dashboard/header/lines']);
            console.log('header submission success');
        }, (error) => {
            console.log(error);
            alert('Failed to save header. Check log');
        });
        console.log('header submitted');
    }
    clearform() {
        console.log('clear form');
        this.fmdetails.reset();
        this.fmdetails.enable();
        //this.fmdetails.controls[order_number].disable({onlySelf: true});
        this.fmdetails.get('order_number').disable();
        this.ngOnInit();
        console.log(this.headerData);
        this.headerSaved = false;
    }
    changeMessageHeader() {
        console.log('Calling change message');
        console.log(this.headerData.order_number);
        this.dataservice.changeMessage(this.headerData.order_number);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
    })
], HeaderComponent);

/*import { Component, OnInit, ViewEncapsulation ,  Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

interface HeaderContent {
   header_id ?: any;
   order_number: any;
   cust_name: any;
   cust_address: any;
   payment_type: any;
   cust_type: any;
   order_total ?: any ;
 }

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent implements OnInit {

  headerReadonly = false ;
  public  max_order_number;
  headerSaved = false ;
  public headerObj: HeaderContent = {
    header_id : this.max_order_number ,
    order_number: this.max_order_number ,
    cust_name: null ,
    cust_address: null ,
    payment_type: null ,
    cust_type: null ,
    order_total: null
  };
  @Output() passData = new EventEmitter();

  data = [
   ];


  ngOnInit() {
    console.log('in header onInit');
    console.log(this.data);
    this.dataservice.maxOrderNumber().subscribe
    (
     (success) => {
      console.log(success);
      console.log(success.data[0].max_order_number);
      this.max_order_number = success.data[0].max_order_number + 1 ;
      console.log(this.max_order_number);
     },
     (error) => {
       console.log(error);
     } );

  }
  constructor(private dataservice: DataService , private router: Router) {
   /* this.dataservice.maxOrderNumber().subscribe
    (
     (success) => {
      console.log(success);
      console.log(success.data[0].max_order_number);
      this.max_order_number = success.data[0].max_order_number + 1 ;
      console.log(this.max_order_number);
     },
     (error) => {
       console.log(error);
     } );

    this.headerObj = {
      header_id : this.max_order_number ,
      order_number: this.max_order_number ,
      cust_name: null ,
      cust_address: null ,
      payment_type: null ,
      cust_type: null ,
      order_total: null
    };*/
/* }

 public saveHeaderData() {
   this.headerReadonly = true;
   this.headerObj.order_number = this.max_order_number;
   this.headerObj.header_id = this.max_order_number;
   this.data.push(this.headerObj);
   console.log(this.headerObj);
   console.log('Header Data is Submitted');
   this.passData.emit(this.headerObj); //emitt headerObj data to other components.
   this.dataservice.header(this.headerObj).subscribe
   (
    (success) => {
     console.log(success);
     this.headerSaved = true ;
    },
    (error) => {
      console.log(error);
      this.headerReadonly = false;
      alert('Failed to save header. Check log');
    } );
   this.changeMessageHeader();
 //  this.dataservice.currentMessage.subscribe(message => this.headerObj.order_number = message);
 // console.log(this.headerObj.order_number);
 }
 changeMessageHeader() {
   console.log('Calling change message');
   console.log(this.headerObj.order_number);
   this.dataservice.changeMessage(this.headerObj.order_number);

 }

}
*/ 


/***/ }),

/***/ "./src/app/linedata.service.ts":
/*!*************************************!*\
  !*** ./src/app/linedata.service.ts ***!
  \*************************************/
/*! exports provided: LinedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinedataService", function() { return LinedataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



let LinedataService = class LinedataService {
    constructor(dataservice) {
        this.dataservice = dataservice;
    }
    resolve(route, state) {
        console.log(this.dataservice.getLines(route.params.id));
        return this.dataservice.getLines(route.params.id);
    }
};
LinedataService.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
LinedataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LinedataService);



/***/ }),

/***/ "./src/app/lines/lines.component.scss":
/*!********************************************!*\
  !*** ./src/app/lines/lines.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tr {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXMvRDpcXEFuZ3VsYXJcXHJlZ2lzSGVhZGVyTGluZXNfcHJvai9zcmNcXGFwcFxcbGluZXNcXGxpbmVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9saW5lcy9saW5lcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDRTtFQUNFLGFBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2xpbmVzL2xpbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB9XHJcbiAgdGgsIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfSIsIi50ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/lines/lines.component.ts":
/*!******************************************!*\
  !*** ./src/app/lines/lines.component.ts ***!
  \******************************************/
/*! exports provided: LinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinesComponent", function() { return LinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



let LinesComponent = class LinesComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.passData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.LineData = [
        //   { linenum: 1, itemname: 'Camera', quantity: 3, warehouse: 'W1', custname: 'Samanta', ordernumber: 121},
        //   { linenum: 2, itemname: 'Bike', quantity: 1, warehouse: 'W3', custname: 'Raj', ordernumber: 121},
        //   { linenum: 3, itemname: 'Pens', quantity: 20, warehouse: 'W2', custname: 'Shannu', ordernumber: 121}
        ];
        this.LineFormData = null;
        this.formData = {
            id: null,
            custName: null,
            custAddress: null,
            paymentType: null,
            custType: null,
            orderTotal: null
        };
        this.formShow = false;
        console.log('In lines constructor');
        console.log(this.data);
    }
    ngOnInit() {
        console.log('in lines onInit');
        console.log(this.mydata);
        this.data = this.mydata;
        this.dataService.currentMessage.subscribe(message => this.localordernumber = message);
        console.log('latest order number' + this.localordernumber);
        // this.data.currentMessage.subscribe(message => this.localordernumber = message);
        // console.log(this.localordernumber);
    }
    displayform() {
        this.formShow = true;
        var countRec = this.data.length;
        this.formData.id = countRec + 1;
    }
    addDataToLines(data) {
        console.log('Data passed to lines');
        console.log(data);
    }
    addData() {
        //this.data.push(this.formData) ;
        this.passData.emit(this.formData); //Passing formdata(Latest rec) to parent component.
        // console.log("Emitting done");
        // this.data = this.mydata;
        // console.log(this.mydata);
        var countRec = this.data.length;
        var nextId = countRec + 1;
        //Creating next rec with empty fields.
        this.formData = {
            id: nextId,
            custName: null,
            custAddress: null,
            paymentType: null,
            custType: null,
            orderTotal: null
        };
    }
    addLines() {
        console.log('In add lines');
        var countRec = this.LineData.length;
        var nextId = countRec + 1;
        this.LineFormData = {
            linenum: nextId,
            itemname: null,
            quantity: null,
            warehouse: null,
            custname: null,
            ordernumber: this.localordernumber
        };
        this.LineData.push(this.LineFormData);
        console.log(this.LineData);
    }
    saveLines() {
        console.log(this.LineData);
        if (this.LineData.length == 0) {
            alert('Please add lines.');
            return;
        }
        this.dataService.linesInsert(this.LineData).subscribe((success) => {
            console.log(success);
            alert('Order is created');
        }, (error) => {
            console.log(error);
            alert('Order creation failed. Please check log files');
        });
    }
};
LinesComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], LinesComponent.prototype, "mydata", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], LinesComponent.prototype, "passData", void 0);
LinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lines',
        template: __webpack_require__(/*! raw-loader!./lines.component.html */ "./node_modules/raw-loader/index.js!./src/app/lines/lines.component.html"),
        styles: [__webpack_require__(/*! ./lines.component.scss */ "./src/app/lines/lines.component.scss")]
    })
], LinesComponent);



/***/ }),

/***/ "./src/app/orderedit/orderedit.component.scss":
/*!****************************************************!*\
  !*** ./src/app/orderedit/orderedit.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZWRpdC9vcmRlcmVkaXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/orderedit/orderedit.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderedit/orderedit.component.ts ***!
  \**************************************************/
/*! exports provided: OrdereditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdereditComponent", function() { return OrdereditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _linedata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../linedata.service */ "./src/app/linedata.service.ts");





let OrdereditComponent = class OrdereditComponent {
    constructor(route, dataservice, linedataservice) {
        this.route = route;
        this.dataservice = dataservice;
        this.linedataservice = linedataservice;
        this.headerReadonly = false;
        this.lineReadonly = false;
        this.headerSaved = false;
        console.log(this.route.snapshot.params.id);
        console.log(this.route.snapshot.params);
        this.localid = this.route.snapshot.params.id;
        console.log(this.route.data);
        this.route.data.subscribe((success) => {
            console.log(success.orderdata.data[0]);
            this.headerObj = success.orderdata.data[0];
        });
        this.route.data.subscribe((success) => {
            console.log(success);
            console.log(success.linedata.data);
            this.lineobjects = success.linedata.data;
        });
        // this.route.data.map(data => data.orderdata.json()).subscribe((res) => {
        // console.log(res);
        // });
        /* this.dataservice.getHeader(this.localid).subscribe(
           (success) => {
             console.log(success);
             console.log(success.data);
             this.headerObj = success.data ;
           },
           (error) => {
             console.log(error);
          }
         );*/
    }
    ngOnInit() {
    }
    updateHeaderData() {
        console.log('In update header data');
        this.headerReadonly = true;
        console.log(this.headerObj);
        this.dataservice.updateHeader(this.headerObj).subscribe((success) => {
            console.log(success);
            this.headerSaved = true;
        }, (error) => {
            console.log(error);
        });
    }
    updateLine(row) {
        console.log('In updateLine');
        console.dir(row);
        this.dataservice.updateLine(row).subscribe((success) => {
            console.log(success);
        }, (error) => {
            console.log(error);
        });
    }
    updateLines() {
        this.lineReadonly = true;
        console.log('In update lines');
        console.log(this.lineobjects);
        this.dataservice.updateLines(this.lineobjects).subscribe((success) => {
            console.log(success);
        }, (error) => {
            console.log(error);
        });
    }
};
OrdereditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _linedata_service__WEBPACK_IMPORTED_MODULE_4__["LinedataService"] }
];
OrdereditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderedit',
        template: __webpack_require__(/*! raw-loader!./orderedit.component.html */ "./node_modules/raw-loader/index.js!./src/app/orderedit/orderedit.component.html"),
        styles: [__webpack_require__(/*! ./orderedit.component.scss */ "./src/app/orderedit/orderedit.component.scss")]
    })
], OrdereditComponent);



/***/ }),

/***/ "./src/app/orderview/orderview.component.scss":
/*!****************************************************!*\
  !*** ./src/app/orderview/orderview.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVydmlldy9vcmRlcnZpZXcuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/orderview/orderview.component.ts":
/*!**************************************************!*\
  !*** ./src/app/orderview/orderview.component.ts ***!
  \**************************************************/
/*! exports provided: OrderviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderviewComponent", function() { return OrderviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OrderviewComponent = class OrderviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
OrderviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderview',
        template: __webpack_require__(/*! raw-loader!./orderview.component.html */ "./node_modules/raw-loader/index.js!./src/app/orderview/orderview.component.html"),
        styles: [__webpack_require__(/*! ./orderview.component.scss */ "./src/app/orderview/orderview.component.scss")]
    })
], OrderviewComponent);



/***/ }),

/***/ "./src/app/view/view.component.scss":
/*!******************************************!*\
  !*** ./src/app/view/view.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tr {\n  border: 1px solid;\n  border-collapse: collapse;\n}\n\nth, td {\n  padding: 15px;\n  border: 1px solid;\n}\n\nthead {\n  background-color: #9da5a5;\n}\n\ninput[type=text] {\n  width: 25%;\n  height: 40px;\n  background-color: #fdfafa;\n  background-repeat: no-repeat;\n  padding-left: 13px;\n  border: 2px solid #4b4e46;\n  border-radius: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy9EOlxcQW5ndWxhclxccmVnaXNIZWFkZXJMaW5lc19wcm9qL3NyY1xcYXBwXFx2aWV3XFx2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNFSjs7QURBRTtFQUNFLHlCQUFBO0FDR0o7O0FEREU7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBRUEsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3ZpZXcvdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ciB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgfVxyXG4gIHRoLCB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgO1xyXG4gIH1cclxuICB0aGVhZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU3LCAxNjUsIDE2NSkgO1xyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRde1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTMsIDI1MCwgMjUwKTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxM3B4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDc1LCA3OCwgNzApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgXHJcbiAgfSIsIi50ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50aCwgdGQge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZDtcbn1cblxudGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWRhNWE1O1xufVxuXG5pbnB1dFt0eXBlPXRleHRdIHtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmYWZhO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBwYWRkaW5nLWxlZnQ6IDEzcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0YjRlNDY7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/*!****************************************!*\
  !*** ./src/app/view/view.component.ts ***!
  \****************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ViewComponent = class ViewComponent {
    constructor(dataservice, router) {
        this.dataservice = dataservice;
        this.router = router;
        this.dataservice.getHeaders().subscribe((success) => {
            console.log(success);
            this.headers = success.data;
            console.log(this.headers);
        }, (error) => {
            console.log(error);
        });
    }
    deleteOrder(header) {
        console.log(header.order_number);
        let orderobjs = this.headers;
        console.log(orderobjs);
        console.log(this.headers);
        this.dataservice.deleteOrder(header.order_number).subscribe((success) => {
            console.log(success);
            for (var i = 0; i < this.headers.length; i++) {
                if (this.headers[i].order_number == header.order_number) {
                    this.headers.splice(i, 1);
                    console.log(this.headers[i].order_number);
                }
            }
            console.log(this.headers);
            // console.log(orderobjs.length);
            /*  for (let i = 0 ; i < orderobjs.length ; i++) {
                 if (orderobjs[i].order_number == id ) {
                  console.log(orderobjs[i]);
                   orderobjs.splice(i,1);
                  console.log(orderobjs);
                 }
                }
                this.headers = orderobjs;*/
        }, (error) => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
ViewComponent.ctorParameters = () => [
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: __webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/index.js!./src/app/view/view.component.html"),
        styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/view/view.component.scss")]
    })
], ViewComponent);



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map