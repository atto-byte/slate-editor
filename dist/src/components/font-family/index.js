"use strict";

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];

    result["default"] = mod;

    return result;

};

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var React = __importStar(require("react"));

var core_1 = require("@material-ui/core");

var FontFamilyList_1 = __importDefault(require("./FontFamilyList"));

var FontFamilyUtils_1 = require("./FontFamilyUtils");

var type = 'font-family';

var FontFamilyDropdown = function (_a) {

    var editor = _a.editor;

    var fontFamilyDefault = 0;

    if (editor && FontFamilyUtils_1.hasMark(editor.value)) {

        fontFamilyDefault = FontFamilyUtils_1.getMark(editor.value).data.get('fontFamilyIndex');

    }

    return (React.createElement(core_1.Select, { onChange: function (_a) {

            var value = _a.target.value;

            FontFamilyUtils_1.fontFamilyMarkStrategy(editor, value);

        }, value: fontFamilyDefault }, FontFamilyList_1.default.map(function (font, index) { return (React.createElement(core_1.MenuItem, { key: "slate-font-family-" + index, value: index }, font.name)); })));

};

exports.FontFamilyDropdown = FontFamilyDropdown;

var FontFamilyPlugin = {

    type: type,

    Button: FontFamilyDropdown,

    render: function (_a) {

        var children = _a.children, mark = _a.mark, attributes = _a.attributes;

        return (React.createElement("span", { style: { fontFamily: FontFamilyList_1.default[mark.data.get('fontFamilyIndex')].name } }, children));

    }

};

exports.FontFamilyPlugin = FontFamilyPlugin;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,2CAA8B;AAC9B,0CAAqD;AAErD,oEAA6C;AAC7C,qDAA4E;AAE5E,IAAM,IAAI,GAAG,aAAa,CAAA;AAG1B,IAAM,kBAAkB,GAA+B,UAAC,EAAU;QAAR,kBAAM;IAC9D,IAAI,iBAAiB,GAAG,CAAC,CAAA;IACzB,IAAI,MAAM,IAAI,yBAAO,CAAC,MAAM,CAAC,KAAK,CAAC,EAAE;QACnC,iBAAiB,GAAG,yBAAO,CAAC,MAAM,CAAC,KAAK,CAAC,CAAC,IAAI,CAAC,GAAG,CAAC,iBAAiB,CAAC,CAAA;KACtE;IACD,OAAO,CACL,oBAAC,aAAM,IACL,QAAQ,EAAE,UAAC,EAAqB;gBAAT,uBAAK;YAC1B,wCAAsB,CAAC,MAAM,EAAE,KAAe,CAAE,CAAA;QAClD,CAAC,EACD,KAAK,EAAE,iBAAiB,IAEvB,wBAAc,CAAC,GAAG,CAAC,UAAC,IAAI,EAAE,KAAK,IAAK,OAAA,CACnC,oBAAC,eAAQ,IAAE,GAAG,EAAE,uBAAqB,KAAO,EAAE,KAAK,EAAE,KAAK,IACvD,IAAI,CAAC,IAAI,CACA,CACb,EAJoC,CAIpC,CAAC,CACK,CACV,CAAA;AACH,CAAC,CAAA;AAaQ,gDAAkB;AAT3B,IAAM,gBAAgB,GAAe;IACnC,IAAI,MAAA;IACJ,MAAM,EAAE,kBAAkB;IAC1B,MAAM,EAAE,UAAC,EAA8B;YAA5B,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAO,OAAA,CAC1C,8BAAM,KAAK,EAAE,EAAE,UAAU,EAAE,wBAAc,CAAC,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,iBAAiB,CAAC,CAAC,CAAC,IAAI,EAAE,IAC/E,QAAQ,CACJ,CACR;IAJ2C,CAI3C;CACF,CAAA;AAC4B,4CAAgB"}