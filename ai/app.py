from fastapi import FastAPI
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI()

BASE_DIR = Path(__file__).resolve().parent
FAVICON_PATH = BASE_DIR / "static" / "favicon.ico"

@app.get("/favicon.ico", include_in_schema=False)
def favicon():
    return FileResponse(FAVICON_PATH)

@app.get("/")
def read_root():
    return {"message": "Hello depuis ai 🚀"}

