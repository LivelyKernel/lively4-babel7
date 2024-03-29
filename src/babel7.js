import * as babel from '@babel/core';
import babelPluginTransformTypeScript from '@babel/plugin-transform-typescript';
import babelPluginSyntaxClassProperties from '@babel/plugin-syntax-class-properties';
import babelPluginSyntaxFunctionBind from '@babel/plugin-syntax-function-bind';
import babelPluginNumericSeparator from '@babel/plugin-proposal-numeric-separator';
import babelPluginProposalExportDefaultFrom from '@babel/plugin-proposal-export-default-from';
import babelPluginProposalFunctionBind from '@babel/plugin-proposal-function-bind';
import babelPluginProposalDoExpressions from "@babel/plugin-proposal-do-expressions";
import babelPluginTransformModulesSystemJS from '@babel/plugin-transform-modules-systemjs';
import babelPluginProposalExportNamespaceFrom from '@babel/plugin-proposal-export-namespace-from';
import babelPluginProposalDynamicImport from '@babel/plugin-proposal-dynamic-import';
import babelPluginProposalOptionalChaining from '@babel/plugin-proposal-optional-chaining';
import babelPluginTransformReactJsx from '@babel/plugin-transform-react-jsx';
import * as babelHelperModuleImports from "@babel/helper-module-imports";


var exports = {
  version: "0.4",
  name: "babel7",
  babel,
  babelHelperModuleImports,
  babelPluginSyntaxClassProperties,
  babelPluginSyntaxFunctionBind,
  babelPluginProposalExportDefaultFrom,
  babelPluginProposalExportNamespaceFrom,
  babelPluginProposalDynamicImport,
  babelPluginProposalFunctionBind,
  babelPluginProposalDoExpressions,
  babelPluginTransformModulesSystemJS,
  babelPluginTransformReactJsx,
  babelPluginTransformTypeScript,
  babelPluginNumericSeparator,
  babelPluginProposalOptionalChaining
};

window.lively4babel = exports // it seems we have to write it or use it, so that the module export works... in webpack?

export default exports // Does not work #BUG? Maybe our variable rewriting breaks this...

console.log("LIVELY BABEL7 LOADED")