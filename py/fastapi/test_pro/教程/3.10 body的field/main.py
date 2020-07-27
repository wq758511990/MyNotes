from fastapi import FastAPI, Body
from pydantic import BaseModel, Field
# Field 类似 Query， Body， Path， 用于参数验证，Field用于Body中的参数验证
# 但是Filed是从pydantic中引入的而非fastapi
app = FastAPI()

class Item(BaseModel) :
    name: str
    description: str = Field(None, title="The description of the item", max_length=300)
    price: float = Field(..., gt=0, description="The price must be greater than zero")
    tax: float = None


@app.put('/items/{item_id}')
async def update_item(item_id: int, item: Item = Body(..., embed=True)) :
    results = {'item_id': item_id, 'item': item}
    return results