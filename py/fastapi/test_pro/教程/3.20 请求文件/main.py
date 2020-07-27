from fastapi import FastAPI, File, UploadFile
from typing import List
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.post('/files')
async def create_file(file: bytes = File(...)) :
    return {'filesize': len(file)}


@app.post('/uploadFile')
async def upload_file(file: UploadFile = File(...)) :
    return {'filename': file.filename, 'content_type': file.content_type, "file": file.file}

@app.post('/uploadFiles')
async def create_upload_files(files: List[UploadFile] = File(...)) :
    return {'filenames': [file.filename for file in files]}