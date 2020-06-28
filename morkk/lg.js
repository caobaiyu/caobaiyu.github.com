import Mock from 'mockjs'

import getusse from './munLi.js'
import linedat from './mapDat.js'

//用户名，密码
let username = [
	["caobaiyu" , "yu0828"] ,
	["admin" ,"123456"] ,
	["我是游客","那你就随意吧"]
]
let usepd = { } ;
username.forEach( v =>{
	usepd[v[0]] = v[1]
})


export default {
	login: opt => {
		let data = JSON.parse(opt.body);
		let usna = data.username ;
		let userList = {} ;
		if(usepd.hasOwnProperty(usna)){
			if(usepd[usna] == data.psd){
				userList.token = usna === "admin" ? "admin" : "edtir" ;
				userList.name = usna ;
				return {
				  code: 200,
				  data: {
				    userList: userList
				  }
				}
			}else{
				//密码错误
				return {
				 code: -1,
				 data: {
				   msg: "密码错误",
				   status:'fail'
				 }
				}
			}
		}
		// 用户名错误
		return {
		 code: -1,
		 data: {
		   msg: "用户名错误",
		   status:'fail'
		 }
		}
	},
	getusse ,
	linedat ,
}











