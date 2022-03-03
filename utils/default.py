import requests


def static(path: str):
    return f"/static/{path}"


def fetch(url: str):
    r = requests.get(url)
    return r.json()
