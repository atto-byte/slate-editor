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

var Menu_1 = require("./Menu");

exports.Toolbar = React.forwardRef(function (_a, ref) {

    var className = _a.className, props = __rest(_a, ["className"]);

    return (React.createElement(Menu_1.Menu, __assign({}, props, { ref: ref, className: emotion_1.cx(className, emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        position: relative;\n        padding: 1px 18px 17px;\n        margin: 0 -20px;\n        border-bottom: 2px solid #eee;\n        margin-bottom: 20px;\n      "], ["\n        position: relative;\n        padding: 1px 18px 17px;\n        margin: 0 -20px;\n        border-bottom: 2px solid #eee;\n        margin-bottom: 20px;\n      "])))) })));

});

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA+B;AAC/B,mCAAkC;AAClC,+BAA8B;AAEjB,QAAA,OAAO,GAAG,KAAK,CAAC,UAAU,CAAS,UAAC,EAAuB,EAAE,GAAG;IAA1B,IAAA,wBAAS,EAAE,iCAAQ;IAAY,OAAA,CAChF,oBAAC,WAAI,eACC,KAAK,IACT,GAAG,EAAE,GAAG,EACR,SAAS,EAAE,YAAE,CACX,SAAS,EACT,aAAG,2OAAA,wKAMF,KACF,IACD,CACH,CAAA;CAAA,CAAC,CAAA"}