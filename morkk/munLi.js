import Mock from 'mockjs'



let List = []
const count = 1000
let typelist = ['联通', '移动', '电信', '铁通']

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.guid(),
    sortnum: i + 1,
    username: Mock.Random.cname(),
    address: Mock.mock('@county(true)'),
    createTime: Mock.Random.datetime(),
    updateTime: Mock.Random.now(),
    ip:Mock.mock('@ip'),
    region:Mock.mock('@region'),
    areaId:/\d{7}/,
    email: Mock.Random.email(),
    'isp|1': typelist
  }))
}


export default {
	/**
	 * 获取用户列表
	 * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
	 * @param name, page, limit
	 * @return {{code: number, count: number, data: *[]}}
	 */
	getUserList:config => {
		console.log(config.body)
	  const { limit , page } = JSON.parse(config.body);
	  let mockList = List;
	  const userList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
	  return {
	    code: 200,
	    data: {
	      total: mockList.length,
	      userList: userList
	    }
	  }
	}
	
}









