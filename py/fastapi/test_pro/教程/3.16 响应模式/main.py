from typing import List

from fastapi import FastAPI
from pydantic import BaseModel, Field, EmailStr

app = FastAPI()

class Item(BaseModel) :
    name: str
    description: str = None
    price: float
    tax: float = None
    tags: List[str] = Field(['a', 'b', 'c'])

class Item1(BaseModel) :
    description: str = Field(..., title='this is a description of title', description='this is a description of description')
    price: float

class UserIn(BaseModel) :
    username: str
    password: str
    email: EmailStr
    full_name: str = None

class UserOut(BaseModel):
    username: str
    email: EmailStr
    full_name: str = None

class Items(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = 10.5
    tags: List[str] = []


items = {
    "foo": {"name": "Foo", "price": 50.2},
    "bar": {"name": "Bar", "description": "The bartenders", "price": 62, "tax": 20.2},
    "baz": {"name": "Baz", "description": None, "price": 50.2, "tax": 10.5, "tags": []},
}

# response_model_include 只包含
# response_model_exclude 除了
# 上面两个属性的value是{}, 如果不小心用了[], fastapi依然会转为{} 即 set
# 可以用以上两种方法指定返回的格式 但是不推荐， 依然推荐使用多个类

# 使用response_model_skip_defaults仅返回显式设置的值。

@app.get("/itemss/{item_id}", response_model=Item, response_model_include = {"name"})
async def read_items(item_id: str):
    # 这样通过传入对应的id foo bar baz 就可以返回对应的数据
    return items[item_id] 

@app.post("/items/", response_model=Item1) # 返回的数据模式，按照Item1的数据类型来返回
async def create_item(item: Item):
    return item

@app.post("/user/", response_model=UserOut)
async def create_user(user: UserIn):
    # 请求体中有password
    # 但是返回的数据当中不能有password， 
    return user