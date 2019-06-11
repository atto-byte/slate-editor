"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typescript = _interopRequireDefault(require("typescript"));

var _fs = _interopRequireDefault(require("fs"));

var _vinyl = _interopRequireDefault(require("vinyl"));

var _path = _interopRequireDefault(require("path"));

var _bitUtilsObject = _interopRequireDefault(require("@bit/bit.utils.object.group-by"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var compiledFileTypes = ['tsx', 'ts'];

var compileSingleFile = function compileSingleFile(file, compilerOptions, distPath) {
  // Creating declaration file
  var program = _typescript["default"].createProgram([file.path], compilerOptions);

  var declarationText = "";
  program.emit(undefined, function (file, data) {
    declarationText = data;
    return;
  }, undefined, true);
  var declarationFile = new _vinyl["default"]({
    contents: new Buffer(declarationText),
    base: distPath,
    path: _getDistFilePath(file, distPath, true)
  });
  declarationFile.basename = file.basename.replace(/\.ts$/, '.d.ts').replace(/\.tsx$/, '.d.ts');

  var result = _typescript["default"].transpileModule(file.contents.toString(), {
    compilerOptions: compilerOptions
  });

  var mappings = new _vinyl["default"]({
    contents: new Buffer(result.sourceMapText),
    base: distPath,
    path: _getDistFilePath(file, distPath, true)
  });
  mappings.basename = _getRevisedFileExtension(file.basename) + '.map';
  var fileContent = result.outputText ? new Buffer("".concat(result.outputText, "\n\n//# sourceMappingURL=").concat(result.sourceMapText)) : new Buffer(result.outputText);

  var distFile = _getDistFile(file, distPath, true, fileContent);

  return [mappings, distFile, declarationFile];
};

var compile = function compile(files, distPath) {
  // TODO: change to load from tsconfig.json using ts.parseJsonSourceFileConfigFileContent
  var compilerOptions = {
    module: _typescript["default"].ModuleKind.CommonJS,
    esModuleInterop: true,
    declaration: true,
    sourceMap: true,
    jsx: 'react',
    target: 'es5'
  }; // Divide files by whether we should compile them, according to file type.

  var filesByToCompile = (0, _bitUtilsObject["default"])(files, _toCompile);
  var compiled = !filesByToCompile["true"] || filesByToCompile["true"].length === 0 ? [] : filesByToCompile["true"].map(function (file) {
    return compileSingleFile(file, compilerOptions, distPath);
  }).reduce(function (a, b) {
    return a.concat(b);
  });
  var nonCompiled = !filesByToCompile["false"] ? [] : filesByToCompile["false"].map(function (file) {
    return _getDistFile(file, distPath, false);
  });
  return compiled.concat(nonCompiled);
};

var _toCompile = function _toCompile(file) {
  return compiledFileTypes.indexOf(file.extname.replace('.', '')) > -1; // && !file.stem.endsWith('.d');
};

var _getDistFile = function _getDistFile(file, distPath, reviseExtension, content) {
  var distFile = file.clone();
  distFile.base = distPath;
  distFile.path = _getDistFilePath(file, distPath, reviseExtension);

  if (content) {
    distFile.contents = content;
  }

  return distFile;
};

var _getDistFilePath = function _getDistFilePath(file, distPath, reviseExtension) {
  var fileRelative = file.relative;
  if (reviseExtension) fileRelative = _getRevisedFileExtension(file.relative);
  return _path["default"].join(distPath, fileRelative);
};

var _getRevisedFileExtension = function _getRevisedFileExtension(fileName) {
  return fileName.replace('.tsx', '.js').replace('.ts', '.js');
};

var _default = {
  compile: compile
};
exports["default"] = _default;

//# sourceMappingURL=index.js.map