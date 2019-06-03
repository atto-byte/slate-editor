"use strict";

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];

    result["default"] = mod;

    return result;

};

Object.defineProperty(exports, "__esModule", { value: true });

var React = __importStar(require("react"));

var AlignmentNode = React.forwardRef(function (_a, ref) {

    var children = _a.children, node = _a.node;

    var Element = 'div';

    if (node.data.get('currentBlockType') === 'grid-cell')

        Element = 'td';

    return (React.createElement(Element, { style: { textAlign: "" + node.data.get('align') }, ref: ref }, children));

});

exports.default = AlignmentNode;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;AAAA,2CAA8B;AAM9B,IAAM,aAAa,GAAG,KAAK,CAAC,UAAU,CACpC,UAAC,EAAkB,EAAE,GAAG;QAArB,sBAAQ,EAAE,cAAI;IACf,IAAI,OAAO,GAAsB,KAAK,CAAA;IACtC,IAAI,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,kBAAkB,CAAC,KAAK,WAAW;QAAE,OAAO,GAAG,IAAI,CAAA;IAErE,OAAO,CACL,oBAAC,OAAO,IAAC,KAAK,EAAE,EAAE,SAAS,EAAE,KAAG,IAAI,CAAC,IAAI,CAAC,GAAG,CAAC,OAAO,CAAU,EAAE,EAAE,GAAG,EAAE,GAAU,IAC/E,QAAQ,CACD,CACX,CAAA;AACH,CAAC,CACF,CAAA;AAED,kBAAe,aAAa,CAAA"}