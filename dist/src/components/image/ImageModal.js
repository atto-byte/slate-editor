"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {

    return (mod && mod.__esModule) ? mod : { "default": mod };

};

var __importStar = (this && this.__importStar) || function (mod) {

    if (mod && mod.__esModule) return mod;

    var result = {};

    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];

    result["default"] = mod;

    return result;

};

Object.defineProperty(exports, "__esModule", { value: true });

var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));

var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));

var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));

var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));

var withMobileDialog_1 = __importDefault(require("@material-ui/core/withMobileDialog"));

var React = __importStar(require("react"));

var styles_1 = require("@material-ui/core/styles");

var core_1 = require("@material-ui/core");

var ImageUtils_1 = require("./ImageUtils");

var useStyles = styles_1.makeStyles(function (theme) { return ({

    image: {

        height: "500px",

        width: "100%"

    }

}); });

var ImageModal = function (_a) {

    var editor = _a.editor, open = _a.open, handleClose = _a.handleClose, fullScreen = _a.fullScreen;

    var _b = React.useState(''), src = _b[0], setSrc = _b[1];

    var _c = React.useState(''), title = _c[0], setTitle = _c[1];

    var classes = useStyles({});

    return (React.createElement(Dialog_1.default, { fullScreen: fullScreen, open: open, onClose: handleClose, "aria-labelledby": "responsive-dialog-title" },

        React.createElement(DialogTitle_1.default, { id: "responsive-dialog-title" }, "Add Image"),

        React.createElement(DialogContent_1.default, null,

            React.createElement(core_1.TextField, { onChange: function (e) { return setSrc(e.target.value); }, value: src, label: "Link" }),

            React.createElement("img", { src: src, className: classes.image })),

        React.createElement(DialogActions_1.default, null,

            React.createElement(core_1.Button, { onClick: handleClose, color: "primary" }, "Cancel"),

            React.createElement(core_1.Button, { onClick: function (e) { return ImageUtils_1.insertImage(editor, src); }, color: "primary", autoFocus: true }, "Add"))));

};

exports.default = withMobileDialog_1.default()(ImageModal);

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AACA,oEAA8C;AAC9C,kFAA4D;AAC5D,kFAA4D;AAE5D,8EAAwD;AACxD,wFAAwF;AACxF,2CAA+B;AAC/B,mDAAsD;AAEtD,0CAAsD;AACtD,2CAA2C;AAK3C,IAAM,SAAS,GAAG,mBAAU,CAAC,UAAA,KAAK,IAAI,OAAA,CAAC;IACrC,KAAK,EAAE;QACL,MAAM,EAAE,OAAO;QACf,KAAK,EAAE,MAAM;KACd;CACF,CAAC,EALoC,CAKpC,CAAC,CAAC;AAQJ,IAAM,UAAU,GAA8B,UAAC,EAAuC;QAAtC,kBAAM,EAAE,cAAI,EAAE,4BAAW,EAAE,0BAAU;IAC7E,IAAA,uBAAkC,EAAjC,WAAG,EAAE,cAA4B,CAAC;IACnC,IAAA,uBAAsC,EAArC,aAAK,EAAE,gBAA8B,CAAC;IAC7C,IAAM,OAAO,GAAG,SAAS,CAAC,EAAE,CAAC,CAAC;IAG9B,OAAO,CACH,oBAAC,gBAAM,IACL,UAAU,EAAE,UAAU,EACtB,IAAI,EAAE,IAAI,EACV,OAAO,EAAE,WAAW,qBACJ,yBAAyB;QAEzC,oBAAC,qBAAW,IAAC,EAAE,EAAC,yBAAyB,IAAE,WAAW,CAAe;QACrE,oBAAC,uBAAa;YACZ,oBAAC,gBAAS,IAAC,QAAQ,EAAE,UAAA,CAAC,IAAI,OAAA,MAAM,CAAC,CAAC,CAAC,MAAM,CAAC,KAAK,CAAC,EAAtB,CAAsB,EAAE,KAAK,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM,GAAG;YAC9E,6BAAK,GAAG,EAAE,GAAG,EAAE,SAAS,EAAE,OAAO,CAAC,KAAK,GAAG,CAC5B;QAChB,oBAAC,uBAAa;YACZ,oBAAC,aAAM,IAAC,OAAO,EAAE,WAAW,EAAE,KAAK,EAAC,SAAS,aAEpC;YACT,oBAAC,aAAM,IAAC,OAAO,EAAE,UAAA,CAAC,IAAI,OAAA,wBAAW,CAAC,MAAM,EAAE,GAAG,CAAC,EAAxB,CAAwB,EAAE,KAAK,EAAC,SAAS,EAAC,SAAS,gBAEhE,CACK,CACT,CACZ,CAAC;AACJ,CAAC,CAAA;AAED,kBAAe,0BAAgB,EAAE,CAAC,UAAU,CAAC,CAAC"}