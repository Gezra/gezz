define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.HOST_SUFFIX = _exports.HOST_PREFIX = _exports.BRACKETED = _exports.IS_VAR = _exports.MEDIA_MATCH = _exports.ANIMATION_MATCH = _exports.VAR_CONSUMED = _exports.MIXIN_MATCH = _exports.VAR_ASSIGN = void 0;

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  const VAR_ASSIGN = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;
  _exports.VAR_ASSIGN = VAR_ASSIGN;
  const MIXIN_MATCH = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;
  _exports.MIXIN_MATCH = MIXIN_MATCH;
  const VAR_CONSUMED = /(--[\w-]+)\s*([:,;)]|$)/gi;
  _exports.VAR_CONSUMED = VAR_CONSUMED;
  const ANIMATION_MATCH = /(animation\s*:)|(animation-name\s*:)/;
  _exports.ANIMATION_MATCH = ANIMATION_MATCH;
  const MEDIA_MATCH = /@media\s(.*)/;
  _exports.MEDIA_MATCH = MEDIA_MATCH;
  const IS_VAR = /^--/;
  _exports.IS_VAR = IS_VAR;
  const BRACKETED = /\{[^}]*\}/g;
  _exports.BRACKETED = BRACKETED;
  const HOST_PREFIX = '(?:^|[^.#[:])';
  _exports.HOST_PREFIX = HOST_PREFIX;
  const HOST_SUFFIX = '($|[.:[\\s>+~])';
  _exports.HOST_SUFFIX = HOST_SUFFIX;
});