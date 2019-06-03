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

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];

    result["default"] = mod;

    return result;

};

Object.defineProperty(exports, "__esModule", { value: true });

var React = __importStar(require("react"));

var core_1 = require("@material-ui/core");

var icons_1 = require("@material-ui/icons");

var type = 'bold';

var BoldButton = function (_a) {

    var hasMark = _a.hasMark, editor = _a.editor;

    var handleClick = function (event) {

        event.preventDefault();

        editor.toggleMark(type);

    };

    var isActive = hasMark(type);

    return (React.createElement(core_1.IconButton, { focusRipple: isActive, onMouseDown: handleClick },

        React.createElement(icons_1.FormatBold, null)));

};

exports.BoldButton = BoldButton;

var BoldPlugin = {

    type: type,

    Button: BoldButton,

    render: function (_a) {

        var children = _a.children, mark = _a.mark, attributes = _a.attributes;

        return React.createElement("strong", __assign({}, attributes), children);

    }

};

exports.BoldPlugin = BoldPlugin;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAC9B,0CAA+C;AAC/C,4CAAgD;AAIhD,IAAM,IAAI,GAAG,MAAM,CAAA;AACnB,IAAM,UAAU,GAA+B,UAAC,EAAiB;QAAhB,oBAAO,EAAE,kBAAM;IAC9D,IAAM,WAAW,GAAG,UAAC,KAAuB;QAC1C,KAAK,CAAC,cAAc,EAAE,CAAA;QACtB,MAAM,CAAC,UAAU,CAAC,IAAI,CAAC,CAAA;IACzB,CAAC,CAAA;IACD,IAAM,QAAQ,GAAG,OAAO,CAAC,IAAI,CAAC,CAAA;IAC9B,OAAM,CACJ,oBAAC,iBAAU,IACT,WAAW,EAAE,QAAQ,EACrB,WAAW,EAAE,WAAW;QAExB,oBAAC,kBAAU,OAAG,CACH,CACd,CAAA;AACH,CAAC,CAAA;AAMQ,gCAAU;AALnB,IAAM,UAAU,GAAe;IAC7B,IAAI,MAAA;IACJ,MAAM,EAAE,UAAU;IAClB,MAAM,EAAE,UAAC,EAA8B;YAA5B,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAO,OAAA,2CAAY,UAAU,GAAG,QAAQ,CAAU;IAA3C,CAA2C;CACxF,CAAA;AACoB,gCAAU"}