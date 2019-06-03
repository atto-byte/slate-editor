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

var __rest = (this && this.__rest) || function (s, e) {

    var t = {};

    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)

        t[p] = s[p];

    if (s != null && typeof Object.getOwnPropertySymbols === "function")

        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {

            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))

                t[p[i]] = s[p[i]];

        }

    return t;

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

exports.EditorValue = React.forwardRef(function (_a, ref) {

    var className = _a.className, value = _a.value, props = __rest(_a, ["className", "value"]);

    var textLines = value.document.nodes

        .map(function (node) { return node.text; })

        .toArray()

        .join('\n');

    return (React.createElement("div", __assign({ ref: ref }, props, { className: emotion_1.cx(className, emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            margin: 30px -20px 0;\n          "], ["\n            margin: 30px -20px 0;\n          "])))) }),

        React.createElement("div", { className: emotion_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n            font-size: 14px;\n            padding: 5px 20px;\n            color: #404040;\n            border-top: 2px solid #eeeeee;\n            background: #f8f8f8;\n          "], ["\n            font-size: 14px;\n            padding: 5px 20px;\n            color: #404040;\n            border-top: 2px solid #eeeeee;\n            background: #f8f8f8;\n          "]))) }, "Slate's value as text"),

        React.createElement("div", { className: emotion_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            color: #404040;\n            font: 12px monospace;\n            white-space: pre-wrap;\n            padding: 10px 20px;\n            div {\n              margin: 0 0 0.5em;\n            }\n          "], ["\n            color: #404040;\n            font: 12px monospace;\n            white-space: pre-wrap;\n            padding: 10px 20px;\n            div {\n              margin: 0 0 0.5em;\n            }\n          "]))) }, textLines)));

});

var templateObject_1, templateObject_2, templateObject_3;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAC9B,mCAAiC;AAEpB,QAAA,WAAW,GAAG,KAAK,CAAC,UAAU,CACzC,UAAC,EAA8B,EAAE,GAAG;IAAjC,IAAA,wBAAS,EAAE,gBAAK,EAAE,0CAAQ;IAC3B,IAAM,SAAS,GAAG,KAAK,CAAC,QAAQ,CAAC,KAAK;SACnC,GAAG,CAAC,UAAA,IAAI,IAAI,OAAA,IAAI,CAAC,IAAI,EAAT,CAAS,CAAC;SACtB,OAAO,EAAE;SACT,IAAI,CAAC,IAAI,CAAC,CAAA;IACb,OAAO,CACL,sCACE,GAAG,EAAE,GAAG,IACJ,KAAK,IACT,SAAS,EAAE,YAAE,CACX,SAAS,EACT,aAAG,oHAAA,iDAEF,KACF;QAED,6BACE,SAAS,EAAE,aAAG,0PAAA,uLAMb,gCAGG;QACN,6BACE,SAAS,EAAE,aAAG,0RAAA,uNAQb,QAEA,SAAS,CACN,CACF,CACP,CAAA;AACH,CAAC,CACF,CAAA"}