from fastapi import FastAPI, Path, Query, Body
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str = None
    price: float
    tax: float = None

class User(BaseModel):
    username: str
    full_name: str = None

class Test(BaseModel) :
    classId: str
    user: User


@app.put("/items/{item_id}")
async def update_item(
    *,
    item_id: int = Path(..., title="The ID of the item to get", ge=0, le=1000),
    q: str = None,
    item: Item = Body(..., embed=True), # embed=True，此时即使只有item一个BaseModel， 也可以让其显示为key为item的模式
    # And you can instruct FastAPI to embed the body in a key even when there is only a single parameter declared.
    user: User = None,
    test: Test = None, # 多层嵌套
    importance: int = Body(...,gt=0)
):
    results = {"item_id": item_id, 'importance': importance}
    if q:
        results.update({"q": q})
    if item:
        results.update({"item": item})
    if user:
        results.update({'user': user})
    return results
