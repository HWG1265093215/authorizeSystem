import Mock from 'mockjs'

const url={
    TestStrUrl:'/weatherforecast/getStrs',
    TestGetUrl:'/weatherforecast/Get'
};

// Mock.mock(url.TestUrl,{
//     "result":["1","2","3"]
// });

// Mock.mock(url.TestGetUrl,{
//     "result":['4','5','6']
// });

Mock.mock('http://localhost:8093/weatherforecast/getStrs','get',{
        "result":["1","2","3"]
})

Mock.mock('http://localhost:8093/weatherforecast/Get','get',{
    "result":["4","5","6"]
})






 
 