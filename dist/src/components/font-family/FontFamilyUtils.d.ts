export declare const hasMark: (value: any) => any;

export declare const getMark: (value: any) => any;

export declare const createMark: (fontFamilyIndex: any) => {

    type: string;

    data: {

        fontFamilyIndex: any;

    };

};

export declare const reapplyMark: ({ editor, fontFamilyIndex }: {

    editor: any;

    fontFamilyIndex: any;

}) => any;

export declare const applyMark: ({ editor, fontFamilyIndex }: {

    editor: any;

    fontFamilyIndex: any;

}) => any;

/**

 * Strategy that decides how font family mark plugin

 * needs to be applied.

 *

 * @param {Object} attributes

 *    @property {Value} value

 *    @property {int} fontFamilyIndex

 */

export declare const fontFamilyMarkStrategy: (editor: any, fontFamilyIndex: number) => any;

