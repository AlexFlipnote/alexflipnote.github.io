SRC_DIR = ./src
OUTPUT_DIR = ./public
FILES = $(filter-out \
    $(wildcard $(SRC_DIR)/_*.php) \
    $(wildcard $(SRC_DIR)/**/_*.php) \
    $(wildcard $(SRC_DIR)/**/**/_*.php), \
    $(wildcard $(SRC_DIR)/*.php) \
    $(wildcard $(SRC_DIR)/**/*.php) \
    $(wildcard $(SRC_DIR)/**/**/*.php) \
)

target:
	@echo -e "Use 'make \033[0;36mtarget\033[0m' where \033[0;36mtarget\033[0m is one of the following:"
	@awk -F ':|##' '/^[^\t].+?:.*?##/ { printf " \033[0;36m%-15s\033[0m %s\n", $$1, $$NF }' $(MAKEFILE_LIST)

build:  ## Build the website
	@echo "Generating static HTML files..."
	@mkdir -p $(OUTPUT_DIR)
	@$(foreach file, $(FILES), \
			OUTPUT_PATH=$(OUTPUT_DIR)/$(patsubst $(SRC_DIR)/%,%,$(file)); \
			OUTPUT_HTML=$$(echo $$OUTPUT_PATH | sed 's/\.php$$/\.html/'); \
			mkdir -p $$(dirname $$OUTPUT_HTML); \
			( \
					php -f $(file) > $$OUTPUT_HTML 2>/dev/null; \
			) || { echo "Error processing $(file)"; exit 1; }; \
			echo "Generated $$OUTPUT_HTML"; \
	)

	@mkdir -p $(OUTPUT_DIR)/static
	@cp -r ./static/* $(OUTPUT_DIR)/static

	@echo "Copying leftover files..."
	@cp -r ./CNAME $(OUTPUT_DIR)
	@cp -r ./robots.txt $(OUTPUT_DIR)
	@cp -r ./sitemap.xml $(OUTPUT_DIR)

	@echo "Done."

clean:  ## Clean the output directory
	@echo "Cleaning output directory..."
	@rm -rf $(OUTPUT_DIR)
	@echo "Done."

dev:  ## Preview the website locally with PHP
	@echo "Previewing locally at http://localhost:8080..."
	@php -S localhost:8080 -t $(OUTPUT_DIR)
