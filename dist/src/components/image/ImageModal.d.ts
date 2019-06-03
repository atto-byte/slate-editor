import { WithMobileDialog } from '@material-ui/core/withMobileDialog';

import * as React from 'react';

import { Editor as SlateReact } from 'slate-react';

interface ImageModalProps extends WithMobileDialog {

    editor: SlateReact;

    open: boolean;

    handleClose: () => void;

}

declare const _default: React.ComponentType<Pick<React.PropsWithChildren<ImageModalProps>, "open" | "children" | "editor" | "handleClose"> & Partial<WithMobileDialog>>;

export default _default;

