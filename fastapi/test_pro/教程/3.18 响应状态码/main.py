from fastapi import FastAPI, Body, Query, status

app = FastAPI()

@app.post('/items/', status_code=status.HTTP_201_CREATED)
def create_item(name: str = Query(None)) :
    return {"name": name}