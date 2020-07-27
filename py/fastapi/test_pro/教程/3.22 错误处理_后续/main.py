from fastapi import FastAPI, HTTPException, Request
from fastapi.responses import JSONResponse

app = FastAPI()


class UnicornException(Exception):
    def __init__(self, name: str):
        self.name = name


items = {'foo': 'The Foo Wrestlers'}


@app.get("/items/{item_id}")
async def read_item(item_id: str):
    if item_id not in items:
        raise HTTPException(status_code=404, detail="Item not found", headers={
                            'x-Error': 'There goes my error'})  # 自定义响应头
    # 当raise一个错误的时候，会终止此次请求并且将错误信息返回给客户端
    return {"item": items[item_id]}


@app.exception_handler(UnicornException)
async def unicorn_exception_handler(request: Request, exc: UnicornException):
    return JSONResponse(
        status_code=418,
        content={
            "message": f"Oops! {exc.name} did something. There goes a rainbow..."},
    )


@app.get("/unicorns/{name}")
async def read_unicorn(name: str):
    if name == "yolo":
        raise UnicornException(name=name)
    return {"unicorn_name": name}

## 有需要可以后续再看