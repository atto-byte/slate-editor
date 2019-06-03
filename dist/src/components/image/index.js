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

var ImageModal_1 = __importDefault(require("./ImageModal"));

var is_url_1 = __importDefault(require("is-url"));

var slate_react_1 = require("slate-react");

var ImageUtils_1 = require("./ImageUtils");

var ImageNode_1 = __importDefault(require("./ImageNode"));

var type = 'image';

var ImageButton = function (_a) {

    var editor = _a.editor;

    var _b = React.useState(false), open = _b[0], setOpen = _b[1];

    return (React.createElement(React.Fragment, null,

        React.createElement(ImageModal_1.default, { editor: editor, open: open, handleClose: function () { return setOpen(false); } }),

        React.createElement(core_1.IconButton, { onMouseDown: function () { return setOpen(true); } },

            React.createElement(icons_1.Image, null))));

};

var onDropOrPaste = function (event, editor, next) {

    var target = editor.findEventRange(event);

    if (!target && event.type === 'drop')

        return next();

    var transfer = slate_react_1.getEventTransfer(event);

    var type = transfer.type, text = transfer.text, files = transfer.files;

    if (type === 'files') {

        var _loop_1 = function (file) {

            var reader = new FileReader();

            var mime = file.type.split('/')[0];

            if (mime !== 'image')

                return "continue";

            reader.addEventListener('load', function () {

                editor.command(ImageUtils_1.insertImage, reader.result, target);

            });

            reader.readAsDataURL(file);

        };

        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {

            var file = files_1[_i];

            _loop_1(file);

        }

        return;

    }

    if (type === 'text') {

        if (!is_url_1.default(text))

            return next();

        if (!ImageUtils_1.isImage(text))

            return next()(editor).command(ImageUtils_1.insertImage, text, target);

        return;

    }

    next();

};

var ImagePlugin = {

    type: type,

    Button: ImageButton,

    onDrop: onDropOrPaste,

    onPaste: onDropOrPaste,

    render: function (props, editor, next) { return React.createElement(ImageNode_1.default, __assign({}, props, { editor: editor })); }

};

exports.ImagePlugin = ImagePlugin;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAAA,2CAA8B;AAC9B,0CAA+C;AAC/C,4CAA2C;AAE3C,4DAAsC;AACtC,kDAA0B;AAG1B,2CAA0D;AAC1D,2CAAoD;AACpD,0DAAoC;AAGpC,IAAM,IAAI,GAAG,OAAO,CAAA;AAMpB,IAAM,WAAW,GAA+B,UAAC,EAAQ;QAAP,kBAAM;IAChD,IAAA,0BAAuC,EAAtC,YAAI,EAAE,eAAgC,CAAC;IAC9C,OAAM,CACJ;QACE,oBAAC,oBAAU,IAAC,MAAM,EAAE,MAAM,EAAE,IAAI,EAAE,IAAI,EAAE,WAAW,EAAE,cAAM,OAAA,OAAO,CAAC,KAAK,CAAC,EAAd,CAAc,GAAG;QAC5E,oBAAC,iBAAU,IACT,WAAW,EAAE,cAAM,OAAA,OAAO,CAAC,IAAI,CAAC,EAAb,CAAa;YAEhC,oBAAC,aAAK,OAAG,CACE,CACZ,CACJ,CAAA;AACH,CAAC,CAAA;AAED,IAAM,aAAa,GAAc,UAAC,KAAK,EAAE,MAAM,EAAE,IAAI;IACnD,IAAM,MAAM,GAAI,MAAc,CAAC,cAAc,CAAC,KAAK,CAAC,CAAA;IACpD,IAAI,CAAC,MAAM,IAAI,KAAK,CAAC,IAAI,KAAK,MAAM;QAAE,OAAO,IAAI,EAAE,CAAA;IAEnD,IAAM,QAAQ,GAAQ,8BAAgB,CAAC,KAAK,CAAC,CAAA;IACrC,IAAA,oBAAI,EAAE,oBAAI,EAAE,sBAAK,CAAa;IAEtC,IAAI,IAAI,KAAK,OAAO,EAAE;gCACT,IAAI;YACb,IAAM,MAAM,GAAG,IAAI,UAAU,EAAE,CAAA;YACxB,IAAA,8BAAI,CAAwB;YACnC,IAAI,IAAI,KAAK,OAAO;kCAAU;YAE9B,MAAM,CAAC,gBAAgB,CAAC,MAAM,EAAE;gBAC7B,MAAc,CAAC,OAAO,CAAC,wBAAW,EAAE,MAAM,CAAC,MAAM,EAAE,MAAM,CAAC,CAAA;YAC7D,CAAC,CAAC,CAAA;YAEF,MAAM,CAAC,aAAa,CAAC,IAAI,CAAC,CAAA;;QAT5B,KAAmB,UAAK,EAAL,eAAK,EAAL,mBAAK,EAAL,IAAK;YAAnB,IAAM,IAAI,cAAA;oBAAJ,IAAI;SAUd;QACD,OAAM;KACP;IAED,IAAI,IAAI,KAAK,MAAM,EAAE;QACnB,IAAI,CAAC,gBAAK,CAAC,IAAI,CAAC;YAAE,OAAO,IAAI,EAAE,CAAA;QAC/B,IAAI,CAAC,oBAAO,CAAC,IAAI,CAAC;YAAE,OAAO,IAAI,EAAE,CAChC,MAAa,CAAC,CAAC,OAAO,CAAC,wBAAW,EAAE,IAAI,EAAE,MAAM,CAAC,CAAA;QAClD,OAAM;KACP;IAED,IAAI,EAAE,CAAA;AACR,CAAC,CAAA;AAED,IAAM,WAAW,GAAgB;IAC/B,IAAI,MAAA;IACJ,MAAM,EAAE,WAAW;IACnB,MAAM,EAAE,aAAa;IACrB,OAAO,EAAE,aAAa;IACtB,MAAM,EAAE,UAAC,KAAK,EAAE,MAAM,EAAE,IAAI,IAAK,OAAA,oBAAC,mBAAS,eAAK,KAAK,IAAE,MAAM,EAAE,MAAM,IAAG,EAAvC,CAAuC;CACzE,CAAA;AAOQ,kCAAW"}