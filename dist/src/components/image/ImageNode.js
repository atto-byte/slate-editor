"use strict";

var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {

    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }

    return cooked;

};

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

var emotion_1 = require("emotion");

var components_1 = require("../components");

var icons_1 = require("@material-ui/icons");

var core_1 = require("@material-ui/core");

var ImageNode = React.forwardRef(function (_a, ref) {

    var node = _a.node, attributes = _a.attributes, isFocused = _a.isFocused, editor = _a.editor;

    var src = node.data.get('src');

    var align = node.data.get("align") || 'center';

    var handleData = function (newAlign) {

        editor.setNodeByKey(node.key, {

            type: 'image',

            data: {

                src: src,

                align: newAlign

            }

        });

    };

    var genAlign = function () {

        if (align === 'right') {

            return ("\n        margin-left: auto;\n        margin-right: 10px;\n        ");

        }

        else if (align === 'left') {

            return ("\n        margin-left: 10px;\n        margin-right: auto;\n        ");

        }

        else {

            return ("\n        margin-left: auto;\n        margin-right: auto;\n        ");

        }

    };

    var _b = React.useState(), anchorEl = _b[0], setAnchorEl = _b[1];

    console.log();

    return (React.createElement("div", { onMouseEnter: function (e) { return setAnchorEl(e.target); }, onMouseLeave: function (e) { return setAnchorEl(null); } },

        React.createElement(components_1.PopUp, { anchorEl: anchorEl },

            React.createElement(core_1.IconButton, { onClick: function () { return handleData('left'); } },

                React.createElement(icons_1.FormatAlignLeft, null)),

            React.createElement(core_1.IconButton, { onClick: function () { return handleData('center'); } },

                React.createElement(icons_1.FormatAlignCenter, null)),

            React.createElement(core_1.IconButton, { onClick: function () { return handleData('right'); } },

                React.createElement(icons_1.FormatAlignRight, null))),

        React.createElement("img", __assign({}, attributes, { src: src, ref: ref, className: emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n              display: block;\n              max-width: 100%;\n              cursor: pointer;\n              max-height: 20em;\n              ", "\n              box-shadow: ", ";\n            "], ["\n              display: block;\n              max-width: 100%;\n              cursor: pointer;\n              max-height: 20em;\n              ", "\n              box-shadow: ", ";\n            "])), genAlign(), isFocused ? '0 0 0 2px blue;' : 'none') }))));

});

exports.default = ImageNode;

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAG9B,mCAA8B;AAC9B,4CAAsC;AACtC,4CAA0F;AAC1F,0CAA+C;AAS/C,IAAM,SAAS,GAAG,KAAK,CAAC,UAAU,CAChC,UAAC,EAAuC,EAAE,GAAG;QAA1C,cAAI,EAAE,0BAAU,EAAE,wBAAS,EAAE,kBAAM;IACpC,IAAM,GAAG,GAAG,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,KAAK,CAAC,CAAA;IAChC,IAAM,KAAK,GAAG,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAC,IAAI,QAAQ,CAAC;IACjD,IAAM,UAAU,GAAG,UAAC,QAAqC;QACvD,MAAM,CAAC,YAAY,CAAC,IAAI,CAAC,GAAG,EAAE;YAC5B,IAAI,EAAE,OAAO;YACb,IAAI,EAAE;gBACJ,GAAG,EAAE,GAAG;gBACR,KAAK,EAAE,QAAQ;aAChB;SACF,CAAC,CAAA;IACJ,CAAC,CAAA;IACD,IAAM,QAAQ,GAAG;QACf,IAAG,KAAK,KAAK,OAAO,EAAC;YACnB,OAAM,CAAC,qEAGN,CAAC,CAAA;SACH;aAAM,IAAI,KAAK,KAAK,MAAM,EAAC;YAC1B,OAAM,CAAC,qEAGN,CAAC,CAAA;SACH;aAAM;YACL,OAAM,CAAC,qEAGN,CAAC,CAAA;SACH;IACH,CAAC,CAAA;IACK,IAAA,qBAA0C,EAAzC,gBAAQ,EAAE,mBAA+B,CAAA;IAChD,OAAO,CAAC,GAAG,EAAE,CAAA;IACX,OAAO,CACL,6BACE,YAAY,EAAE,UAAC,CAAC,IAAK,OAAA,WAAW,CAAC,CAAC,CAAC,MAAM,CAAC,EAArB,CAAqB,EAC1C,YAAY,EAAE,UAAC,CAAC,IAAK,OAAA,WAAW,CAAC,IAAI,CAAC,EAAjB,CAAiB;QAEtC,oBAAC,kBAAK,IAAC,QAAQ,EAAE,QAAQ;YACvB,oBAAC,iBAAU,IAAC,OAAO,EAAE,cAAM,OAAA,UAAU,CAAC,MAAM,CAAC,EAAlB,CAAkB;gBAC3C,oBAAC,uBAAe,OAAE,CACP;YACb,oBAAC,iBAAU,IAAC,OAAO,EAAE,cAAM,OAAA,UAAU,CAAC,QAAQ,CAAC,EAApB,CAAoB;gBAC7C,oBAAC,yBAAiB,OAAE,CACT;YACb,oBAAC,iBAAU,IAAC,OAAO,EAAE,cAAM,OAAA,UAAU,CAAC,OAAO,CAAC,EAAnB,CAAmB;gBAC5C,oBAAC,wBAAgB,OAAE,CACR,CACP;QACR,wCACM,UAAU,IACd,GAAG,EAAE,GAAG,EAER,GAAG,EAAE,GAAG,EACR,SAAS,EAAE,aAAG,wQAAA,kJAKV,EAAU,8BACE,EAAsC,iBACrD,KAFG,QAAQ,EAAE,EACE,SAAS,CAAC,CAAC,CAAC,iBAAiB,CAAC,CAAC,CAAC,MAAM,KAEtD,CACE,CACP,CAAA;AACL,CAAC,CACF,CAAA;AAGD,kBAAe,SAAS,CAAA"}