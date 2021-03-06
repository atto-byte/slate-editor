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

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var React = __importStar(require("react"));

var emotion_1 = require("emotion");

var Button_1 = __importDefault(require("@material-ui/core/Button"));

exports.Button = React.forwardRef(function (_a, ref) {

    var className = _a.className, active = _a.active, reversed = _a.reversed, props = __rest(_a, ["className", "active", "reversed"]);

    return (React.createElement(Button_1.default, __assign({}, props, { ref: ref, className: emotion_1.cx(className, emotion_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n          cursor: pointer;\n          color: ", ";\n        "], ["\n          cursor: pointer;\n          color: ",

            ";\n        "])), reversed

            ? active ? 'white' : '#aaa'

            : active ? 'black' : '#ccc')) })));

});

var templateObject_1;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAC9B,mCAAiC;AACjC,oEAAiD;AAEpC,QAAA,MAAM,GAAG,KAAK,CAAC,UAAU,CACpC,UAAC,EAAyC,EAAE,GAAG;IAA5C,IAAA,wBAAS,EAAE,kBAAM,EAAE,sBAAQ,EAAE,uDAAQ;IAAY,OAAA,CAClD,oBAAC,gBAAS,eACJ,KAAK,IACT,GAAG,EAAE,GAAG,EACR,SAAS,EAAE,YAAE,CACX,SAAS,EACT,aAAG,mIAAA,iDAEQ;YAEoB,aAC9B,KAHU,QAAQ;YACf,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM;YAC3B,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,OAAO,CAAC,CAAC,CAAC,MAAM,EAEhC,IACD,CACH,CAAA;CAAA,CACF,CAAA"}