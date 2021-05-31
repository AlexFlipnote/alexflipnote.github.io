target: ;

dev:
	pug_watcher -c

pages:
	git commit -a
	git subtree push --prefix dist origin gh-pages
	git push
