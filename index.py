import sys

from jinja2_static import Builder

build = Builder()
argument = sys.argv[1] if len(sys.argv) > 1 else None

build.generate(
    debug=False if argument == "build" else True,
    URL="https://alexflipnote.dev/"
)
