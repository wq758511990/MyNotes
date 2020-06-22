from fastapi import FastAPI
from pydantic import BaseModel, EmailStr
from typing import Union

app = FastAPI()


class UserBase(BaseModel):
    username: str
    email: EmailStr
    full_name: str = None


class UserIn(UserBase):
    password: str


class UserOut(UserBase):
    pass


class UserInDB(UserBase):
    hashed_password: str

class testModel(BaseModel) :
    test: str


def fake_save_password(user_password: str):
    return 'supersecret' + user_password


def fake_save_user(user_in: UserIn):
    hashed_password = fake_save_password(user_in.password)
    user_dict = user_in.dict()
    user_saved = UserInDB(**user_dict, hashed_password=hashed_password)
    print('saved successfully, not really...')
    return user_saved


@app.post("/user/", response_model=Union[UserOut, testModel]) # union 联合两个类型
async def create_user(user_in: UserIn):
    user_saved = fake_save_user(user_in)
    return user_saved


# response_model 也可以是List， Dict() 例如 List[Item] Item为自定义类 或者 List[str], Dict[str, number] 这种