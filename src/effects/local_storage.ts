import { always, merge, objOf, pipe } from 'ramda';
import { Clear, Delete, Read, Write } from '../commands/local_storage';
import { constructMessage, safeParse, safeStringify } from '../util';

const get = (
  window &&
  window.localStorage &&
  window.localStorage.getItem.bind(window.localStorage) ||
  always('<running outside browser context>')
);

export default new Map([
  [Read, ({ key, result }, dispatch) => pipe(
    get,
    safeParse,
    objOf('value'),
    merge({ key }),
    constructMessage(result),
    dispatch
  )(key)],
  [Write, ({ key, value }) => window.localStorage.setItem(key, safeStringify(value))],
  [Delete, ({ key }) => window.localStorage.removeItem(key)],
  [Clear, () => window.localStorage.clear()],
]);
