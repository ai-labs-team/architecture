import * as Cookies from 'js-cookie';
import { defaultTo, pipe } from 'ramda';
import { Delete, Read, Write } from '../commands/cookies';
import { constructMessage } from '../util';

export default new Map([
  [Read, ({ key, result }, dispatch) => Promise.resolve(Cookies.getJSON(key)).then(
    pipe(defaultTo({}), constructMessage(result), dispatch)
  )],
  [Write, ({ key, value, path, expires }) => Cookies.set(key, value, {
    path: path || '/',
    expires: expires || null,
  })],
  [Delete, ({ key }) => Cookies.remove(key)],
]);
