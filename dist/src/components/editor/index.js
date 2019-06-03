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

var slate_react_1 = require("slate-react");

var slate_1 = require("slate");

var React = __importStar(require("react"));

var value_json_1 = __importDefault(require("./value.json"));

var is_hotkey_1 = require("is-hotkey");

var components_1 = require("../components");

var DEFAULT_NODE = 'paragraph';

var isBoldHotkey = is_hotkey_1.isKeyHotkey('mod+b');

var isItalicHotkey = is_hotkey_1.isKeyHotkey('mod+i');

var isUnderlinedHotkey = is_hotkey_1.isKeyHotkey('mod+u');

var isCodeHotkey = is_hotkey_1.isKeyHotkey('mod+`');

var Editor = function (_a) {

    var markPlugins = _a.markPlugins, blockPlugins = _a.blockPlugins;

    var _b = React.useState(slate_1.Value.fromJSON(value_json_1.default)), value = _b[0], setValue = _b[1];

    var editor = React.useRef(null);

    var hasMark = function (type) {

        return value.activeMarks.some(function (mark) { return mark.type === type; });

    };

    var hasBlock = function (type) {

        return value.blocks.some(function (node) { return node.type === type; });

    };

    var renderBlock = function (props, editor, next) {

        var plugin = blockPlugins.find(function (plugin) { return (plugin.type === props.node.type); });

        if (plugin) {

            return plugin.render(props, editor, next);

        }

        else {

            return next();

        }

    };

    var renderMark = function (props, editor, next) {

        var plugin = markPlugins.find(function (plugin) { return (plugin.type === props.mark.type); });

        if (plugin) {

            return plugin.render(props, editor, next);

        }

        else {

            return next();

        }

    };

    var onPaste = function (event, editor, next) {

        blockPlugins.forEach(function (plugin) {

            if (plugin.onPaste)

                plugin.onPaste(event, editor, next);

        });

    };

    var onDrop = function (event, editor, next) {

        blockPlugins.forEach(function (plugin) {

            if (plugin.onDrop)

                plugin.onDrop(event, editor, next);

        });

    };

    var onChange = function (editor) {

        setValue(editor.value);

    };

    var onKeyDown = function (event, editor, next) {

        var mark;

        if (isBoldHotkey(event)) {

            mark = 'bold';

        }

        else if (isItalicHotkey(event)) {

            mark = 'italic';

        }

        else if (isUnderlinedHotkey(event)) {

            mark = 'underlined';

        }

        else if (isCodeHotkey(event)) {

            mark = 'code';

        }

        else {

            return next();

        }

        event.preventDefault();

        editor.toggleMark(mark);

    };

    var onClickMark = function (event, type) {

        event.preventDefault();

        editor.current && editor.current.toggleMark(type);

    };

    var onClickBlock = function (event, type) {

        event.preventDefault();

        var document = value.document;

        // Handle everything but list buttons.

        if (type !== 'bulleted-list' && type !== 'numbered-list') {

            var isActive = hasBlock(type);

            var isList = hasBlock('list-item');

            if (isList) {

                editor.current && editor.current

                    .setBlocks(isActive ? DEFAULT_NODE : type)

                    .unwrapBlock('bulleted-list')

                    .unwrapBlock('numbered-list');

            }

            else {

                editor.current && editor.current.setBlocks(isActive ? DEFAULT_NODE : type);

            }

        }

        else {

            // Handle the extra wrapping required for list buttons.

            var isList = hasBlock('list-item');

            var isType = value.blocks.some(function (block) {

                return !!document.getClosest(block.key, function (parent) { return parent.type === type; });

            });

            if (isList && isType) {

                editor.current && editor.current

                    .setBlocks(DEFAULT_NODE)

                    .unwrapBlock('bulleted-list')

                    .unwrapBlock('numbered-list');

            }

            else if (isList) {

                editor.current && editor.current

                    .unwrapBlock(type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list')

                    .wrapBlock(type);

            }

            else {

                editor.current && editor.current.setBlocks('list-item').wrapBlock(type);

            }

        }

    };

    return (React.createElement("div", null,

        React.createElement(components_1.Toolbar, null,

            markPlugins.map(function (plugin) { return (React.createElement(plugin.Button, { editor: editor.current && editor.current, hasMark: hasMark })); }),

            blockPlugins.map(function (plugin) { return (React.createElement(plugin.Button, { editor: editor.current && editor.current, hasMark: hasBlock })); })),

        React.createElement(slate_react_1.Editor, { spellCheck: true, autoFocus: true, placeholder: "Enter some rich text...", ref: editor, value: value, onDrop: onDrop, onPaste: onPaste, onChange: onChange, onKeyDown: onKeyDown, renderBlock: renderBlock, renderMark: renderMark })));

};

/**

 * Export.

 */

// {renderMarkButton('italic', 'format_italic')}

// {renderMarkButton('underlined', 'format_underlined')}

// {renderMarkButton('code', 'code')}

// {renderBlockButton('heading-one', 'looks_one')}

// {renderBlockButton('heading-two', 'looks_two')}

// {renderBlockButton('block-quote', 'format_quote')}

// {renderBlockButton('numbered-list', 'format_list_numbered')}

// {renderBlockButton('bulleted-list', 'format_list_bulleted')}

exports.default = Editor;

//# sourceMappingURL=module.js.map

//# sourceMappingURL={"version":3,"file":"module.js","sourceRoot":"","sources":["module.tsx"],"names":[],"mappings":"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"}