.PHONY: all clean install

all:
	@echo " - NPM install"
	@"npm" "install"
	
	@echo " - Bower install"
	@"bower" "install"

clean:
	@echo " - NPM clean";
	@rm -rf "./node_modules/";
	
	@echo " - Bower clean";
	@rm -rf "./bower_components/";

install:
	@echo " - Gulp"
	@gulp 
