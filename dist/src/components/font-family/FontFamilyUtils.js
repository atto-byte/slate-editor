"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.hasMark = function (value) { return value.marks.some(function (mark) { return mark.type === 'font-family'; }); };

exports.getMark = function (value) { return value.marks.filter(function (mark) { return mark.type === 'font-family'; }).first(); };

exports.createMark = function (fontFamilyIndex) { return ({

    type: 'font-family',

    data: { fontFamilyIndex: fontFamilyIndex },

}); };

exports.reapplyMark = function (_a) {

    var editor = _a.editor, fontFamilyIndex = _a.fontFamilyIndex;

    return editor

        .removeMark(exports.getMark(editor.value))

        .addMark(exports.createMark(fontFamilyIndex));

};

exports.applyMark = function (_a) {

    var editor = _a.editor, fontFamilyIndex = _a.fontFamilyIndex;

    return editor

        .addMark(exports.createMark(fontFamilyIndex));

};

/**

 * Strategy that decides how font family mark plugin

 * needs to be applied.

 *

 * @param {Object} attributes

 *    @property {Value} value

 *    @property {int} fontFamilyIndex

 */

exports.fontFamilyMarkStrategy = function (editor, fontFamilyIndex) {

    var value = editor.value;

    if (exports.hasMark(value)) {

        if (value.selection.isExpanded) {

            return exports.reapplyMark({ editor: editor, fontFamilyIndex: fontFamilyIndex });

        }

        else

            console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/ mark exists');

    }

    else {

        if (value.selection.isExpanded) {

            return exports.applyMark({ editor: editor, fontFamilyIndex: fontFamilyIndex });

        }

        else

            console.info('[SlateJS][FontFamilyPlugin] selection collapsed, w/o mark');

    }

};

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;AAGa,QAAA,OAAO,GAAG,UAAC,KAAY,IAAK,OAAA,KAAK,CAAC,KAAK,CAAC,IAAI,CAAC,UAAA,IAAI,IAAI,OAAA,IAAI,CAAC,IAAI,KAAK,aAAa,EAA3B,CAA2B,CAAC,EAArD,CAAqD,CAAA;AACjF,QAAA,OAAO,GAAG,UAAC,KAAY,IAAK,OAAA,KAAK,CAAC,KAAK,CAAC,MAAM,CAAC,UAAA,IAAI,IAAI,OAAA,IAAI,CAAC,IAAI,KAAK,aAAa,EAA3B,CAA2B,CAAC,CAAC,KAAK,EAAE,EAA/D,CAA+D,CAAA;AAE3F,QAAA,UAAU,GAAG,UAAA,eAAe,IAAI,OAAA,CAAC;IAC5C,IAAI,EAAE,aAAa;IACnB,IAAI,EAAE,EAAE,eAAe,iBAAA,EAAE;CAC1B,CAAC,EAH2C,CAG3C,CAAA;AAEW,QAAA,WAAW,GAAG,UAAC,EAA2B;QAAzB,kBAAM,EAAE,oCAAe;IAAO,OAAA,MAAM;SAC/D,UAAU,CAAC,eAAO,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC;SACjC,OAAO,CAAC,kBAAU,CAAC,eAAe,CAAC,CAAC;AAFqB,CAErB,CAAA;AAE1B,QAAA,SAAS,GAAG,UAAC,EAA2B;QAAzB,kBAAM,EAAE,oCAAe;IAAO,OAAA,MAAM;SAC7D,OAAO,CAAC,kBAAU,CAAC,eAAe,CAAC,CAAC;AADmB,CACnB,CAAA;AAEvC;;;;;;;GAOG;AACU,QAAA,sBAAsB,GAAG,UAAC,MAAc,EAAE,eAAuB;IAC5E,IAAM,KAAK,GAAG,MAAM,CAAC,KAAK,CAAA;IAC1B,IAAI,eAAO,CAAC,KAAK,CAAC,EAAE;QAClB,IAAI,KAAK,CAAC,SAAS,CAAC,UAAU,EAAE;YAC9B,OAAO,mBAAW,CAAC,EAAC,MAAM,QAAA,EAAE,eAAe,iBAAA,EAAC,CAAC,CAAA;SAC9C;;YACI,OAAO,CAAC,IAAI,CAAC,iEAAiE,CAAC,CAAA;KACrF;SAEI;QACH,IAAI,KAAK,CAAC,SAAS,CAAC,UAAU,EAAE;YAC9B,OAAO,iBAAS,CAAC,EAAC,MAAM,QAAA,EAAE,eAAe,iBAAA,EAAC,CAAC,CAAA;SAC5C;;YACI,OAAO,CAAC,IAAI,CAAC,2DAA2D,CAAC,CAAA;KAC/E;AACH,CAAC,CAAA"}