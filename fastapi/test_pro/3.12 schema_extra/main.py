from fastapi import FastAPI, Body
from pydantic import BaseModel, Field

app = FastAPI()


class Item(BaseModel):
    name: str = Field(..., example='Foo')
    description: str = Field(None, example='this is not a neccessary field')
    price: float = Field(None, example=33.4)
    tax: float = Field(..., example=0.3)

    # class Config:
    #     # 在docs中会添加example
    #     schema_extra = {
    #         "example": {
    #             "name": "Foo",
    #             "description": "A very nice Item",
    #             "price": 35.4,
    #             "tax": 3.2,
    #         }
    #     }


@app.put('/items/{item_id}')
async def update_item(item_id: int, item: Item = Body(..., example = { # 这样也可以添加用例，并且会覆盖掉field里的example
    "name": 'test',
    "description": 'test1',
    "price": 1.2,
    "tax": 3.3
})):
    results = {"item_id": item_id, "item": item}
    return results
