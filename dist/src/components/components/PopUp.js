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

var core_1 = require("@material-ui/core");

var useStyles = core_1.makeStyles({

    root: {

        display: 'flex',

        zIndex: 1300,

        backgroundColor: 'white',

        boxShadow: '0px 0px 4px #8080804a'

    }

});

exports.PopUp = function (_a) {

    var children = _a.children, anchorEl = _a.anchorEl;

    var classes = useStyles({});

    var open = Boolean(anchorEl);

    var id = open ? 'simple-popper' : null;

    return (React.createElement(core_1.Popper, { id: id, open: open, anchorEl: anchorEl, placement: "bottom", disablePortal: true, className: classes.root, modifiers: {

            flip: {

                enabled: true,

            },

            preventOverflow: {

                enabled: true,

                boundariesElement: 'scrollParent',

            },

            arrow: {

                enabled: true,

            },

        } }, children));

};

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":";;;;;;;;;AAAA,2CAA+B;AAC/B,0CAAuD;AAEvD,IAAM,SAAS,GAAG,iBAAU,CAAC;IAC3B,IAAI,EAAE;QACJ,OAAO,EAAE,MAAM;QACf,MAAM,EAAE,IAAI;QACZ,eAAe,EAAE,OAAO;QACxB,SAAS,EAAE,uBAAuB;KACnC;CACF,CAAC,CAAA;AAIW,QAAA,KAAK,GAAyB,UAAC,EAAoB;QAAnB,sBAAQ,EAAE,sBAAQ;IAC7D,IAAM,OAAO,GAAG,SAAS,CAAC,EAAE,CAAC,CAAC;IAC9B,IAAM,IAAI,GAAG,OAAO,CAAC,QAAQ,CAAC,CAAC;IAC/B,IAAM,EAAE,GAAG,IAAI,CAAC,CAAC,CAAC,eAAe,CAAC,CAAC,CAAC,IAAI,CAAC;IACzC,OAAM,CACJ,oBAAC,aAAM,IACL,EAAE,EAAE,EAAE,EACN,IAAI,EAAE,IAAI,EACV,QAAQ,EAAE,QAAQ,EAClB,SAAS,EAAC,QAAQ,EAClB,aAAa,EAAE,IAAI,EACnB,SAAS,EAAE,OAAO,CAAC,IAAI,EACvB,SAAS,EAAE;YACT,IAAI,EAAE;gBACJ,OAAO,EAAE,IAAI;aACd;YACD,eAAe,EAAE;gBACf,OAAO,EAAE,IAAI;gBACb,iBAAiB,EAAE,cAAc;aAClC;YACD,KAAK,EAAE;gBACL,OAAO,EAAE,IAAI;aACd;SACF,IAEA,QAAQ,CACF,CACV,CAAA;AACH,CAAC,CAAA"}