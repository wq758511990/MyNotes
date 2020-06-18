from fastapi import Header, FastAPI
from typing import List
app = FastAPI()

@app.get('/items/')
async def read_items(user_agent: str = Header(None)) :
    return {'user_agent', user_agent}


@app.get('/item') # 需要请求头中哪个字段就传哪个字段
async def read_item(accept_language: str = Header(None)) :
    return {'accept_language', accept_language}

@app.get('/getaccept')
# 如果指定字段有多个值，例如x-token可能有多个值，则类型可以指定为List[str]
async def read_accept(accept: str = Header(None)) :
    return {'accept', accept}