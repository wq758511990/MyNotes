from fastapi import FastAPI, status
from pydantic import BaseModel
from typing import Set

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None
    tags: Set[str] = []


# @app.post("/items/", response_model=Item, status_code=status.HTTP_201_CREATED)
# async def create_item(item: Item):
#     return item

@app.post("/items/", response_model=Item, tags=["items"], summary="Create an special item")
# 没有传summay的时候默认使用函数名字
async def create_item(item: Item):
# 没有传入description的时候会用下面这段文字
    """
    Create an item with all the information:

    - **name**: each item must have a name
    - **description**: a long description
    - **price**: required
    - **tax**: if the item doesn't have tax, you can omit this
    - **tags**: a set of unique tag strings for this item
"""
    return item


@app.get("/items", tags=["items"])
async def read_items():
    return [{"name": "Foo", "price": 42}]


@app.get("/users/", tags=["users"], deprecated=True) # 弃用某个api，但是依然可以调用，只是文档中标记为弃用
async def read_users():
    return [{"username": "johndoe"}]
