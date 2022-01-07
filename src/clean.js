const is = (arg) => Object.prototype.toString.call(arg).slice(8, -1);

export const empty = (v) => {
  const t = is(v);

  return (
    (t === `String` && v.length === 0) ||
    (t === `Object` && Object.keys(v).length === 0) ||
    (t === `Array` && v.length === 0) ||
    v === null ||
    v === undefined
  );
};

const coerce = (v) => {
  if (Array.isArray(v)) {
    return v.filter((it) => !empty(it));
  }

  return v;
};

// Remove all undefined, null, empty strings, empty object and empty array values
export const clean = (src) =>
  JSON.parse(JSON.stringify(src), (k, v) => (empty(v) ? undefined : coerce(v)));
