"use strict";

var __assign = (this && this.__assign) || function () {

    __assign = Object.assign || function(t) {

        for (var s, i = 1, n = arguments.length; i < n; i++) {

            s = arguments[i];

            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))

                t[p] = s[p];

        }

        return t;

    };

    return __assign.apply(this, arguments);

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var image_extensions_1 = __importDefault(require("image-extensions"));

exports.insertImage = function (editor, src, target) {

    if (target) {

        editor.select(target);

    }

    editor.insertBlock({

        type: 'image',

        data: { src: src },

    });

};

exports.updateInlineImage = function (editor, data) {

    return editor.setBlocks({

        type: 'image',

        data: __assign({}, data)

    });

};

exports.deleteInlineImage = function (editor) {

    return editor.deleteBackward(1);

};

/**

 * A function to determine whether a URL has an image extension.

 *

 * @param {String} url

 * @return {Boolean}

 */

function isImage(url) {

    return image_extensions_1.default.includes(getExtension(url));

}

exports.isImage = isImage;

/**

 * Get the extension of the URL, using the URL API.

 *

 * @param {String} url

 * @return {String}

 */

function getExtension(url) {

    return new URL(url).pathname.split('.').pop() || '';

}

exports.getExtension = getExtension;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;AAGA,sEAA8C;AAGjC,QAAA,WAAW,GAAG,UAAC,MAAkB,EAAE,GAAW,EAAE,MAAc;IACzE,IAAI,MAAM,EAAE;QACV,MAAM,CAAC,MAAM,CAAC,MAAM,CAAC,CAAA;KACtB;IAED,MAAM,CAAC,WAAW,CAAC;QACjB,IAAI,EAAE,OAAO;QACb,IAAI,EAAE,EAAE,GAAG,KAAA,EAAE;KACd,CAAC,CAAA;AACJ,CAAC,CAAA;AAGY,QAAA,iBAAiB,GAAG,UAC/B,MAAkB,EAClB,IAAe;IAEf,OAAO,MAAM,CAAC,SAAS,CAAC;QAClB,IAAI,EAAE,OAAO;QACb,IAAI,eAAO,IAAI,CAAC;KACjB,CAAC,CAAA;AACR,CAAC,CAAA;AAEY,QAAA,iBAAiB,GAAG,UAAC,MAAkB;IAClD,OAAO,MAAM,CAAC,cAAc,CAAC,CAAC,CAAC,CAAA;AACjC,CAAC,CAAA;AAGD;;;;;GAKG;AAEH,SAAgB,OAAO,CAAC,GAAW;IACjC,OAAO,0BAAe,CAAC,QAAQ,CAAC,YAAY,CAAC,GAAG,CAAC,CAAC,CAAA;AACpD,CAAC;AAFD,0BAEC;AAED;;;;;GAKG;AAEH,SAAgB,YAAY,CAAC,GAAW;IACtC,OAAO,IAAI,GAAG,CAAC,GAAG,CAAC,CAAC,QAAQ,CAAC,KAAK,CAAC,GAAG,CAAC,CAAC,GAAG,EAAE,IAAI,EAAE,CAAA;AACrD,CAAC;AAFD,oCAEC"}