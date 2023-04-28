var pathBrowserify = require("path-browserify")

exports.resolve = function resolve(from, to) {
  // patch to allow for urls as filenames in babel7 #Lively4 xxx
  if (arguments[1] && arguments[1].match(/https?\:\/\//)) {
    return arguments[1]
  }
  return pathBrowserify.resolve(...arguments)
}

exports.normalize = pathBrowserify.normalize  
exports.isAbsolute = pathBrowserify.isAbsolute 
exports.join = pathBrowserify.join 
exports.relative = pathBrowserify.relative 
  
exports.sep = pathBrowserify.sep 
exports.delimiter = pathBrowserify.delimiter  
exports.dirname = pathBrowserify.dirname 
exports.basename = pathBrowserify.basename 
exports.extname = pathBrowserify.extname 
