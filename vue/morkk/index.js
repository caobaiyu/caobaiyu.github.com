import Mork from 'mockjs' ;

import lg from "./lg.js" ;

//延时400s请求到数据
Mork.setup({
    timeout: 400
})



Mork.mock('/login',"post" ,(options)=>{
	return lg.login(options)
}
)
Mork.mock(/\/user\/list\/get/, 'get', options => {
	console.log(options) ;
	return lg.getusse.getUserList(options)
})

Mork.mock(/\/map\/line\/get/, 'get', options => {
	console.log(options) ;
	return lg.linedat.getlinear(options)
})

// Mork.mock('/login', {'ret':0 ,"data":"失败"}
// )

function lgcs(a){
	console.log(a) ;
	console.log(a.body) ;
	console.log(typeof a.body)
	console.log(JSON.parse(a.body)["username"]) ;
	
	if(a.body.username == "yuuu"){
		return {
		'ret':0 ,
		'data':{
			'mtime': '@datetime',
			"score|1-800": 800,//随机生成1-800的数字
			"rank|1-100":  100,//随机生成1-100的数字
			"stars|1-5": 5,//随机生成1-5的数字
			"nickname": "@cname",//随机生成中文名字
		},
		}
	}
	return {
		"data":"失败"
	}
	
}

