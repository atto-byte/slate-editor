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

var styles_1 = require("@material-ui/core/styles");

var Modal_1 = __importDefault(require("@material-ui/core/Modal"));

var useStyles = styles_1.makeStyles(function (theme) { return ({

    paper: {

        position: 'absolute',

        width: 400,

        backgroundColor: theme.palette.background.paper,

        boxShadow: theme.shadows[5],

        padding: theme.spacing(4),

        outline: 'none',

    },

}); });

var SimpleModal = function () {

    var _a = React.useState(false), open = _a[0], setOpen = _a[1];

    // getModalStyle is not a pure function, we roll the style only on the first render

    var handleOpen = function () {

        setOpen(true);

    };

    var handleClose = function () {

        setOpen(false);

    };

    var classes = useStyles({});

    return (React.createElement(Modal_1.default, { "aria-labelledby": "simple-modal-title", "aria-describedby": "simple-modal-description", open: open, onClose: handleClose },

        React.createElement("div", { className: classes.paper })));

};

exports.default = SimpleModal;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;;;;AAAA,2CAA+B;AAC/B,mDAAsD;AACtD,kEAA4C;AAI5C,IAAM,SAAS,GAAG,mBAAU,CAAC,UAAA,KAAK,IAAI,OAAA,CAAC;IACrC,KAAK,EAAE;QACL,QAAQ,EAAE,UAAU;QACpB,KAAK,EAAE,GAAG;QACV,eAAe,EAAE,KAAK,CAAC,OAAO,CAAC,UAAU,CAAC,KAAK;QAC/C,SAAS,EAAE,KAAK,CAAC,OAAO,CAAC,CAAC,CAAC;QAC3B,OAAO,EAAE,KAAK,CAAC,OAAO,CAAC,CAAC,CAAC;QACzB,OAAO,EAAE,MAAM;KAChB;CACF,CAAC,EAToC,CASpC,CAAC,CAAC;AAEJ,IAAM,WAAW,GAAc;IACvB,IAAA,0BAAuC,EAAtC,YAAI,EAAE,eAAgC,CAAC;IAC9C,mFAAmF;IAEnF,IAAM,UAAU,GAAG;QACjB,OAAO,CAAC,IAAI,CAAC,CAAC;IAChB,CAAC,CAAC;IAEF,IAAM,WAAW,GAAG;QAClB,OAAO,CAAC,KAAK,CAAC,CAAC;IACjB,CAAC,CAAC;IACF,IAAM,OAAO,GAAG,SAAS,CAAC,EAAE,CAAC,CAAC;IAE9B,OAAO,CACL,oBAAC,eAAK,uBACY,oBAAoB,sBACnB,0BAA0B,EAC3C,IAAI,EAAE,IAAI,EACV,OAAO,EAAE,WAAW;QAEpB,6BAAK,SAAS,EAAE,OAAO,CAAC,KAAK,GAEvB,CACA,CACT,CAAC;AACJ,CAAC,CAAA;AAED,kBAAe,WAAW,CAAC"}