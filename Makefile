target:
	@echo my name jeff

install:
	pip install -r requirements.txt

build:
	python index.py build

dev:
	python index.py
