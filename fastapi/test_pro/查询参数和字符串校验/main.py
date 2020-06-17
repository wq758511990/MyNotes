from fastapi import FastAPI, Query
from typing import List

app = FastAPI()

# 通用的校验和元数据：

# alias
# title
# description
# deprecated
# 特定于字符串的校验：

# min_length
# max_length
# regex


@app.get('/items/')
async def read_items(q: str = Query(None, min_length=3, max_length=10, regex="^fixedquery$")):
    # 添加约束条件
    # 即使 q 是可选的，但只要提供了该参数，则该参数值不能超过10个字符的长度，最小长度为3，还可以添加正则表达式。
    # 如果需要在使用Query的时候声明为必须参数 则将None -> ... 即可 即Query(..., max_length=10)
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results


@app.get('/itemsmultiQ')
async def read_multiq(q: List[str] = Query(
    ['foo', 'bar'],
    title="Query string",
    description="Query string for the items to search in the database that have a good match")
):
    # 可以用list直接替代List[str]，但是这时候不会检查list中的类型
    query_items = {'q': q}
    return query_items


@app.get('/aliasoaram')
async def read_alias(q: str = Query(None, alias='item-query', deprecated=True)):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results


@app.get("/alluse")
async def read_items_all(
    q: str = Query(
        None,
        alias="item-query",
        title="Query string",
        description="Query string for the items to search in the database that have a good match",
        min_length=3,
        max_length=50,
        regex="^fixedquery$",
        deprecated=True,
    )
):
    results = {"items": [{"item_id": "Foo"}, {"item_id": "Bar"}]}
    if q:
        results.update({"q": q})
    return results
