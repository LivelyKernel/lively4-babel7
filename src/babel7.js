import * as babel from '@babel/core';
import babelPluginTransformTypeScript from '@babel/plugin-transform-typescript';
import babelPluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import babelPluginNumericSeparator from '@babel/plugin-proposal-numeric-separator';
import babelPluginProposalExportDefaultFrom from '@babel/plugin-proposal-export-default-from';
import babelPluginProposalExportNamespaceFrom from '@babel/plugin-proposal-export-namespace-from';
import babelPluginTransformModulesSystemJS from '@babel/plugin-transform-modules-systemjs';
import babelPluginProposalDynamicImport from '@babel/plugin-proposal-dynamic-import';
import babelPluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import * as babelHelperModuleImports from "@babel/helper-module-imports";

var exports = {
  version: "0.4",
  name: "babel7",
  babel,
  babelPluginTransformTypeScript,
  babelPluginSyntaxClassProperties,
  babelPluginNumericSeparator,
  babelPluginProposalExportDefaultFrom,
  babelPluginProposalExportNamespaceFrom,
  babelPluginTransformModulesSystemJS,
  babelPluginProposalDynamicImport,
  babelPluginTransformReactJsx,
  babelHelperModuleImports
};

window.lively4babel = exports // it seems we have to write it or use it, so that the module export works... in webpack?

export default exports // Does not work #BUG? Maybe our variable rewriting breaks this...

console.log("LIVELY BABEL7 LOADED")