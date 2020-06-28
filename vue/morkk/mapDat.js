import Mock from 'mockjs'

let arr = [];



const count = 50;

let cog = 50 ;

let numv = Mock.mock({
  'number1|50-100': 1,
  'number2|60-140': 1,
  'number3|70-180': 1,
  'number4|80-200': 1,
  'number5|90-230': 1,
  'number6|100-260': 1,
  'number7|120-300': 1,
})


let numv2 = Mock.mock({
  'number1|100-150': 1,
  'number2|100-200': 1,
  'number3|100-250': 1,
  'number4|150-300': 1,
  'number5|200-500': 1,
  'number6|300-600': 1,
  'number7|400-800': 1,
})

function szar(obj) {
  let art = [];
  for (let i = 1; i < 8; i++) {
    art.push(obj["number" + i]);
  }
  return art
}



for (let i = 0; i < count; i++) {
  let objj = {};
  objj["hao"] = szar(Mock.mock({
    'number1|100-150': 1,
    'number2|100-200': 1,
    'number3|100-250': 1,
    'number4|150-300': 1,
    'number5|200-500': 1,
    'number6|300-600': 1,
    'number7|400-800': 1,
  }));
  objj["huai"] = szar(Mock.mock({
    'number1|50-100': 1,
    'number2|60-140': 1,
    'number3|70-180': 1,
    'number4|80-200': 1,
    'number5|90-230': 1,
    'number6|100-260': 1,
    'number7|120-300': 1,
  }));
  arr.push(objj)
}


export default {
  getlinear: config => {
    let objh = {} ;
    cog-- 
    if(cog <=0) cog = 49 ;

    objh = arr[cog] ;

    return {
      code: 200,
      data: objh
    }
  }

}