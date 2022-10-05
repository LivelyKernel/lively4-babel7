
help:
	@echo build 
	@echo update
	@echo npm install -D @babel/plugin-proposal-do-expressions
 
build:
	npm run build
	
update:
	cp -v dist/babel7.js ../lively4-core/src/external/babel/