target:
	@echo Welcome to my personal website Makefile. Use help if you need information.

help: ## Shows this message as we speak
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

build: ## Builds the source once
	pug_watcher -c

dev: ## Builds source and watches for changes live
	pug_watcher -c -w

clean:
	rm -rf ./dist

push: ## Pushes code to GitHub Master (I'm lazy)
	git add .
	git commit -a
	git push
