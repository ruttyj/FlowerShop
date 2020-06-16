const els = (v, el) => (isDef(v) ? v : el);
const isDef = (v) => v !== undefined && v !== null;
const isArr = (v) => isDef(v) && Array.isArray(v);
const isFunc = (v) => isDef(v) && typeof v === "function";
const isStr = (v) => isDef(v) && typeof v === "string";
const isNum = (v) => isDef(v) && typeof v === "number";
const isObj = (v) => isDef(v) && typeof v === "object";

const getNestedValue = function (reference, path, fallback = undefined) {
  path = isArr(path) ? path : [path];

  var pointer = reference;
  for (var i = 0, len = path.length; i < len; i++) {
    if (
      typeof pointer !== "string" &&
      pointer !== null &&
      typeof pointer[path[i]] !== "undefined"
    ) {
      pointer = pointer[path[i]];
    } else {
      return fallback;
    }
  }

  if (typeof pointer === "string") {
    pointer = ("" + pointer).trim();
    if (pointer.length === 0) return fallback;
  }
  return pointer;
};

const setNestedValue = function (a, b, c, d) {
  var setter, startingRef, tempPath, value;
  if (typeof a === "function") {
    // Use a custom setter
    setter = a;
    startingRef = b;
    tempPath = c;
    value = d;
  } else {
    // Use Default object syntax to set value.
    setter = (obj, key, val) => {
      obj[key] = val;
    };
    startingRef = a;
    tempPath = b;
    value = c;
  }
  var ref = startingRef;
  var path = tempPath instanceof Array ? tempPath : [tempPath];
  var lastIndex = path.length - 1;
  var current = 0;
  path.forEach((key) => {
    if (current === lastIndex) {
      setter(ref, key, value);
    } else {
      if (typeof ref[key] === "object" && ref[key] != null) {
        //proceed to next
      } else if (isArr(ref[key])) {
        //proceed to next
      } else {
        var initValue = Number.isNaN(key) ? {} : [];
        setter(ref, key, initValue);
      }
      ref = ref[key];
    }
    ++current;
  });
};

const isDefNested = function (reference, path) {
  return isDef(getNestedValue(reference, path, undefined));
};

const deleteNestedValue = function (a, b, c) {
  var deleter;
  var startingRef;
  var tempPath;
  if (typeof a === "function") {
    deleter = a;
    startingRef = b;
    tempPath = c;
  } else {
    deleter = (r, k) => {
      delete r[k];
    }; // standard delete syntax
    startingRef = a;
    tempPath = b;
  }
  var ref = startingRef;
  var path = tempPath instanceof Array ? tempPath : [tempPath];
  var lastIndex = path.length - 1;
  var current = 0;
  path.forEach((key) => {
    if (current === lastIndex) {
      deleter(ref, key);
    } else {
      ref = ref[key];
    }
    ++current;
  });
};

module.exports = {
  isDef,
  isArr,
  isFunc,
  isStr,
  isNum,
  isObj,
  els,
  getNestedValue,
  setNestedValue,
  deleteNestedValue,
  isDefNested,
};
