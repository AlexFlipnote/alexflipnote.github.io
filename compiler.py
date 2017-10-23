# To use this, remember to install the required scss Compiler:
# pip install pyScss

from scss import Compiler
import os

scss = "assets/scss"
css = "assets/css"

for file in os.listdir(scss):
    if file.endswith(".scss"):
        with open(f"{scss}/{file}") as f:
            lines = f.read()
            name = file[:-5]
            with open(f"{css}/{name}.css", "w") as fnew:
                readcss = Compiler().compile_string(lines)
                fnew.write(readcss)
