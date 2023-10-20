from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


origins = [
    'http://localhost:3000',
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/')
async def root():
    data = {
        'groom_name': '남도일',
        'groom_father_name': '남건',
        'groom_mother_name': '이하연',
        'bride_name': '유미란',
        'bride_father_name': '유명한',
        'bride_mother_name': '노애리',
        'groom_phone': '010-1234-6789',
        'groom_father_phone': '010-1234-6789',
        'groom_mother_phone': '010-1234-6789',
        'bride_phone': '010-1234-6789',
        'bride_father_phone': '010-1234-6789',
        'bride_mother_phone': '010-1234-6789',
        'groom_account': '123-45-678 신한',
        'groom_father_account': '123-45-6789 국민',
        'bride_account': '1234-56-789 우리',
        'bride_father_account': '12-3456-789 하나',
        'address': '중랑구 신내동 신아타운 11층 서울중랑교회',
        'address_tel': 'Tel. ' + '070-1111-2222',
    }

    return data


@app.get('/wedding-day')
async def wedding_day():
    data = {
        'wedding_year': 2023,
        'wedding_month': 11 - 1,
        'wedding_day': 11,
        'wedding_time': '토요일 낮 1시',
    }

    return data
