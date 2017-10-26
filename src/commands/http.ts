import { either as or, is, keys } from 'ramda';
import Message from '../message';
import { isEmittable } from '../util';

export class Request extends Message {
  public static defaults = { method: null, url: null, data: {}, params: {}, headers: {} };
  public static expects = {
    method: is(String),
    url: is(String),
    data: or(is(String), is(Object)),
    params: is(Object),
    headers: is(Object),
    result: isEmittable,
    error: isEmittable,
  };
}

export class Post extends Request {
  public static defaults = { method: 'POST', url: null, data: {}, params: {}, headers: {} };
}

export class Get extends Request {
  public static defaults = { method: 'GET', url: null, data: {}, params: {}, headers: {} };
}

export class Put extends Request {
  public static defaults = { method: 'PUT', url: null, data: {}, params: {}, headers: {} };
}

export class Head extends Request {
  public static defaults = { method: 'HEAD', url: null, data: {}, params: {}, headers: {} };
}

export class Delete extends Request {
  public static defaults = { method: 'DELETE', url: null, data: {}, params: {}, headers: {} };
}

export class Options extends Request {
  public static defaults = { method: 'OPTIONS', url: null, data: {}, params: {}, headers: {} };
}

export class Patch extends Request {
  public static defaults = { method: 'PATCH', url: null, data: {}, params: {}, headers: {} };
}

export const formData = data =>
  keys(data).map(key => [key, data[key]].map(encodeURIComponent).join('=')).join('&');
