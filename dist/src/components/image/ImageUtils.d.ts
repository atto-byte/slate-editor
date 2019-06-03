import { Editor as SlateReact } from 'slate-react';

import { ImageData } from '.';

import { Range } from 'slate';

export declare const insertImage: (editor: SlateReact, src: string, target?: Range) => void;

export declare const updateInlineImage: (editor: SlateReact, data: ImageData) => import("slate").Editor;

export declare const deleteInlineImage: (editor: SlateReact) => import("slate").Editor;

/**

 * A function to determine whether a URL has an image extension.

 *

 * @param {String} url

 * @return {Boolean}

 */

export declare function isImage(url: string): any;

/**

 * Get the extension of the URL, using the URL API.

 *

 * @param {String} url

 * @return {String}

 */

export declare function getExtension(url: string): string;

