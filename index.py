import sys
import json
import os

from jinja2_static import Builder

build = Builder()
argument = sys.argv[1] if len(sys.argv) > 1 else None

with open("./data.json", "r", encoding="utf-8") as f:
    data = json.load(f)


playground_names = [
    g for g in os.listdir("./templates/playground")
    if os.path.isdir(f"./templates/playground/{g}")
]


def branding_builder(name: str):
    brand_data = data["branding_images"][name]

    download_links = "\n".join([
        f'<a download="{name}" href="/static/images/branding/{name}.{g}" target="_blank">.{g}</a>'
        for g in brand_data["formats"]
    ])

    return f"""
        <img src="/static/images/branding/{name}.{brand_data['formats'][0]}">
        <span class="image-text">{brand_data['name']}</span>
        <div class="image-links">
            {download_links}
        </div>
    """


build.generate(
    debug=False if argument == "build" else True,
    URL="https://alexflipnote.dev/", data=data,
    branding_builder=branding_builder,
    playground_names=playground_names
)
