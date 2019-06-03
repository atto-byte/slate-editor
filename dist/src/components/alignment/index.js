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

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

Object.defineProperty(exports, "__esModule", { value: true });

var React = __importStar(require("react"));

var core_1 = require("@material-ui/core");

var icons_1 = require("@material-ui/icons");

var AlignmentNode_1 = __importDefault(require("./AlignmentNode"));

var components_1 = require("../components");

var type = 'align';

var AlignLeftButton = function (_a) {

    var hasMark = _a.hasMark, editor = _a.editor;

    var handleClick = function (event) {

        event.preventDefault();

        editor.setBlocks({

            type: type,

            data: { align: 'right', currentBlockType: editor.value.blocks.first().type }

        })

            .focus();

    };

    var isActive = hasMark(type);

    return (React.createElement(core_1.IconButton, { focusRipple: isActive, onMouseDown: handleClick },

        React.createElement(icons_1.FormatAlignRight, null)));

};

exports.AlignLeftButton = AlignLeftButton;

var AlignButtons = function (_a) {

    var hasMark = _a.hasMark, editor = _a.editor;

    var handleClick = function (event, align) {

        event.preventDefault();

        editor.setBlocks({

            type: type,

            data: { align: align, currentBlockType: editor.value.blocks.first().type }

        })

            .focus();

    };

    var isActive = hasMark(type);

    return (React.createElement(components_1.Menu, null,

        React.createElement(core_1.IconButton, { focusRipple: isActive, onMouseDown: function (e) { return handleClick(e, 'left'); } },

            React.createElement(icons_1.FormatAlignLeft, null)),

        React.createElement(core_1.IconButton, { focusRipple: isActive, onMouseDown: function (e) { return handleClick(e, 'center'); } },

            React.createElement(icons_1.FormatAlignCenter, null)),

        React.createElement(core_1.IconButton, { focusRipple: isActive, onMouseDown: function (e) { return handleClick(e, 'right'); } },

            React.createElement(icons_1.FormatAlignRight, null))));

};

var AlignLeftPlugin = {

    type: type,

    Button: AlignLeftButton,

    render: function (_a) {

        var children = _a.children, node = _a.node, attributes = _a.attributes;

        return React.createElement(AlignmentNode_1.default, __assign({ node: node }, attributes), children);

    }

};

exports.AlignLeftPlugin = AlignLeftPlugin;

var AlignPlugin = {

    type: type,

    Button: AlignButtons,

    render: function (_a) {

        var children = _a.children, node = _a.node, attributes = _a.attributes;

        return React.createElement(AlignmentNode_1.default, __assign({ node: node }, attributes), children);

    }

};

exports.AlignPlugin = AlignPlugin;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAC9B,0CAA+C;AAC/C,4CAA0F;AAE1F,kEAA4C;AAC5C,4CAAqC;AAGrC,IAAM,IAAI,GAAG,OAAO,CAAA;AACpB,IAAM,eAAe,GAA+B,UAAC,EAAiB;QAAhB,oBAAO,EAAE,kBAAM;IACnE,IAAM,WAAW,GAAG,UAAC,KAAuB;QAC1C,KAAK,CAAC,cAAc,EAAE,CAAA;QACtB,MAAM,CAAC,SAAS,CAAC;YACf,IAAI,MAAA;YACJ,IAAI,EAAE,EAAE,KAAK,EAAE,OAAO,EAAE,gBAAgB,EAAE,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC,IAAI,EAAE;SAC7E,CAAC;aACD,KAAK,EAAE,CAAA;IACV,CAAC,CAAA;IACD,IAAM,QAAQ,GAAG,OAAO,CAAC,IAAI,CAAC,CAAA;IAC9B,OAAM,CACJ,oBAAC,iBAAU,IACT,WAAW,EAAE,QAAQ,EACrB,WAAW,EAAE,WAAW;QAExB,oBAAC,wBAAgB,OAAG,CACT,CACd,CAAA;AACH,CAAC,CAAA;AA8CQ,0CAAe;AA7CxB,IAAM,YAAY,GAA+B,UAAC,EAAiB;QAAhB,oBAAO,EAAE,kBAAM;IAChE,IAAM,WAAW,GAAG,UAAC,KAAuB,EAAE,KAAkC;QAC9E,KAAK,CAAC,cAAc,EAAE,CAAA;QACtB,MAAM,CAAC,SAAS,CAAC;YACf,IAAI,MAAA;YACJ,IAAI,EAAE,EAAE,KAAK,EAAE,KAAK,EAAE,gBAAgB,EAAE,MAAM,CAAC,KAAK,CAAC,MAAM,CAAC,KAAK,EAAE,CAAC,IAAI,EAAE;SAC3E,CAAC;aACD,KAAK,EAAE,CAAA;IACV,CAAC,CAAA;IACD,IAAM,QAAQ,GAAG,OAAO,CAAC,IAAI,CAAC,CAAA;IAC9B,OAAM,CACJ,oBAAC,iBAAI;QACH,oBAAC,iBAAU,IACT,WAAW,EAAE,QAAQ,EACrB,WAAW,EAAE,UAAC,CAAC,IAAK,OAAA,WAAW,CAAC,CAAC,EAAE,MAAM,CAAC,EAAtB,CAAsB;YAE5C,oBAAC,uBAAe,OAAG,CACN;QACb,oBAAC,iBAAU,IACT,WAAW,EAAE,QAAQ,EACrB,WAAW,EAAE,UAAC,CAAC,IAAK,OAAA,WAAW,CAAC,CAAC,EAAE,QAAQ,CAAC,EAAxB,CAAwB;YAE9C,oBAAC,yBAAiB,OAAG,CACR;QACb,oBAAC,iBAAU,IACT,WAAW,EAAE,QAAQ,EACrB,WAAW,EAAE,UAAC,CAAC,IAAK,OAAA,WAAW,CAAC,CAAC,EAAE,OAAO,CAAC,EAAvB,CAAuB;YAE7C,oBAAC,wBAAgB,OAAG,CACP,CACR,CACR,CAAA;AACH,CAAC,CAAA;AACD,IAAM,eAAe,GAAgB;IACnC,IAAI,MAAA;IACJ,MAAM,EAAE,eAAe;IACvB,MAAM,EAAE,UAAC,EAA8B;YAA5B,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAO,OAAA,oBAAC,uBAAa,aAAC,IAAI,EAAE,IAAI,IAAM,UAAU,GAAG,QAAQ,CAAiB;IAArE,CAAqE;CAClH,CAAA;AAQyB,0CAAe;AANzC,IAAM,WAAW,GAAgB;IAC/B,IAAI,MAAA;IACJ,MAAM,EAAE,YAAY;IACpB,MAAM,EAAE,UAAC,EAA8B;YAA5B,sBAAQ,EAAE,cAAI,EAAE,0BAAU;QAAO,OAAA,oBAAC,uBAAa,aAAC,IAAI,EAAE,IAAI,IAAM,UAAU,GAAG,QAAQ,CAAiB;IAArE,CAAqE;CAClH,CAAA;AAE0C,kCAAW"}