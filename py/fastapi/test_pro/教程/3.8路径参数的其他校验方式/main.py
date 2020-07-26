from fastapi import FastAPI, Path, Query

app = FastAPI()

@app.get('/items/{item_id}')
async def read_items(
    # 查询参数可以用Query进行校验，长度限制，正则等等，路径参数则可以用Path
    item_id: int = Path(..., title="The ID of the item to get", ge=1, le=10),  # 路径参数是必须的，即便Path中为...
    # ge=1 greater than or equal to 1 大于等于
    # le less than or equal 小于等于
    # gt greater than 大于 
    # lt less than 小于
    # 这些比较器也可以作用于浮点型
    q: str = Query(None, alias='item-query'),
    size: float = Query(..., gt=0, le=1)
) :
    # 默认参数、可选参数要放在必要参数之后
    results = {"item_id": item_id, 'size': size}
    if q :
        results.update({'q': q})
    return results