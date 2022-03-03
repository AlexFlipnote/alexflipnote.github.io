import sys
import os
import secrets

from utils import default
from flask import Flask, render_template
from flask_frozen import Freezer

app = Flask(__name__)
freezer = Freezer(app)
argument = sys.argv[1] if len(sys.argv) > 1 else None

app.config.update(
    FREEZER_DESTINATION="public",
    FREEZER_DEFAULT_MIMETYPE="text/html",
)


for paths, dirs, files in os.walk("./templates"):
    for file in files:
        if file.startswith("_"):
            continue

        path = paths.replace("./templates", "").replace("\\", "/")
        filename = file.replace(".jinja", "")

        if filename == "index":
            url_path = f"{path}/" if path else "/"
        elif filename.isdigit():
            # For GitHub Pages, it's useful for 404.html and stuff
            url_path = f"/{filename}.html"
        else:
            url_path = f"{path}/{filename}/" if path else f"/{filename}/"

        filename_render = f"{path}/{file}" if path else f"{file}"
        app.add_url_rule(
            url_path, f"{filename}_{secrets.token_hex(16)}",
            view_func=lambda x=filename_render: render_template(x,
                static=default.static,
                fetch=default.fetch,
            ),
        )


if argument == "build":
    print("[+] Building...")
    try:
        freezer.freeze()
    except Exception as e:
        print(f"[-] Compile error | {type(e).__name__}:\n{e}")
    print(f"[+] Done, compiled to {app.config['FREEZER_DESTINATION']}")
else:
    app.run(port=8080, debug=True)
