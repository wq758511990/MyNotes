from fastapi import FastAPI
from enum import Enum
# uvicorn main:app 命令含义如下:
# main：main.py 文件（一个 Python「模块」）。
# app：在 main.py 文件中通过 app = FastAPI() 创建的对象。
# --reload：让服务器在更新代码后重新启动。仅在开发时使用该选项。
from pydantic import BaseModel

app = FastAPI()

fake_items_db = [{"item_name": "Foo"}, {
    "item_name": "Bar"}, {"item_name": "Baz"}]


class ModelName(str, Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None


@app.get('/')
async def root():
    return {'message': 'hello world'}

# /item/me 要放在 /item/{item_id前面}
@app.get('/item/me')
async def read_me():
    return 'read_item_me'


@app.get('/items')
async def read_items(skip: int = 0, limit: int = 10):
    return fake_items_db[skip: skip + limit]


@app.get('/chooseableq')
async def read_q(item_id: int, q: str = None):
    if q:
        return {'item_id': item_id, 'q': q}
    return {'item_id': item_id}


@app.get('/hasDesc')
async def read_desc(item_id: int, q: str = None, desc: bool = False):
    item = {'item_id': item_id}
    if q:
        item.update({'q': q})
    if not desc:
        item.update(
            {'desc': 'this is an amazing interface with a long description'})
    return item


@app.get('/item/{item_id}')
async def read_item(item_id: int):
    return {'item_id': item_id}

# 这里的model_name 只能传入 'alexnet', 'resnet', 'lenet'
@app.get('/model/{model_name}')
async def get_model(model_name: ModelName):
    if model_name == ModelName.alexnet:
        return {"model_name": model_name, "message": "Deep Learning FTW!"}

    if model_name.value == "lenet":
        return {"model_name": model_name, "message": "LeCNN all the images"}

    return {"model_name": model_name, "message": "Have some residuals"}


@app.get('/files/{file_path:path}')
async def read_file(file_path: str):
    return {'file_path': file_path}

# 可以同时声明多个路径参数和查询参数，FastAPI 能够识别它们。
@app.get('/items/{item_id}/users/{user_id}')
async def read_user_item(item_id: int, user_id: int, q: str = None, short: bool = False):
    item = {"item_id": item_id, "owner_id": user_id}
    if q:
        item.update({"q": q})
    if not short:
        item.update(
            {"description": "This is an amazing item that has a long description"}
        )
    return item


@app.post('/basemodeltest')
async def create_item(item: Item) :
    item_dict = item.dict()
    return item_dict

@app.put('/itemsput/{item_id}')
# 如果在路径中也声明了该参数，它将被用作路径参数。
# 如果参数属于单一类型（比如 int、float、str、bool 等）它将被解释为查询参数。
# 如果参数的类型被声明为一个 Pydantic 模型，它将被解释为请求体。

# 这里item_id是路径参数, q为查询参数， item为请求体
async def create_item_by_put(item_id: int, item: Item) :
    return {'item_id': item_id, **item.dict()}