from fastapi import Cookie, FastAPI

app = FastAPI()

@app.get("/items/")
async def read_items(ads_id: str = Cookie(..., max_length=10)):
    # 会去读取cookie中的ads_id值
    return {"ads_id": ads_id}