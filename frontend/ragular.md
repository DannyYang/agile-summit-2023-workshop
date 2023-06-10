後端服務規格
domain
local: http://localhost:8081
dev: vote-backend-service
uat: vote-backend-service

1. GET {{domain}}/VoteService/vote/params
取得投票選項與題目
Rs範例
{
    "status": "200",
    "message": "OK",
    "data": {
        "question": "這季NBA冠軍賽，你支持哪一隊呢？",
        "options": [
            {
                "optionId": "01",
                "label": "金塊",
                "bgColor": "#000000"
            },
            {
                "optionId": "02",
                "label": "熱火",
                "bgColor": "#000000"
            },
            {
                "optionId": "03",
                "label": "湖人",
                "bgColor": "#000000"
            },
            {
                "optionId": "04",
                "label": "勇士",
                "bgColor": "#000000"
            }
        ]
    },
    "time": "2023-06-05T15:11:28.854273"
}

2. POST {{domain}}/VoteService/vote
進行投票
body範例
{
    "userId": "Bill",
    "optionId": "01"
}
Rs範例
1.
{
    "status": "200",
    "message": "OK",
    "data": null,
    "time": "2023-06-05T15:14:10.613582"
}
2.
{
    "status": "V001",
    "message": "不可重複投票",
    "data": null,
    "time": null
}

3. GET {{domain}}//VoteService/vote/records?userId={{userId}}
取得個人投票紀錄
Rs範例
{
    "status": "200",
    "message": "OK",
    "data": [
        {
            "userId": "Cherry",
            "optionId": "02"
        },
        {
            "userId": "Cherry",
            "optionId": "02"
        },
        {
            "userId": "Cherry",
            "optionId": "02"
        },
        {
            "userId": "Cherry",
            "optionId": "02"
        }
    ],
    "time": "2023-06-05T15:14:21.307113"
}

4. GET {{domain}}/VoteService/vote/result
取得投票結果
Rs範例
{
    "status": "200",
    "message": "OK",
    "data": [
        {
            "optionId": "01",
            "count": 3
        },
        {
            "optionId": "02",
            "count": 4
        },
        {
            "optionId": "03",
            "count": 0
        },
        {
            "optionId": "04",
            "count": 0
        }
    ],
    "time": "2023-06-05T15:14:23.660586"
}