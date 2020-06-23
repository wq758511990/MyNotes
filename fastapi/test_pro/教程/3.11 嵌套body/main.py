from fastapi import FastAPI
from pydantic import BaseModel, HttpUrl
from typing import List, Set, Dict

app = FastAPI()

class Image(BaseModel) :
    url: HttpUrl # HttpUrl 指定url为httpurl
    name: str

class Item(BaseModel) :
    name: str
    description: str
    price: float
    tax: float = None
    tags: Set[str] = set() # 不重复的
    images: List[Image] = None


@app.put('/items/{item_id}')
async def update_item(item_id: int, item: Item) :
    results = {"item_id": item_id, "item": item}
    return results

@app.post('/images/multiple')
async def create_multiple_images(images: List[Image]) :
    return images


@app.post("/index-weights/")
async def create_index_weights(weights: Dict[int, float]):
    return weights