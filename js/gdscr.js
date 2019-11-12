let nav_change = getDid("nav_change")
let wares_change = getDid("wares_change")
let fot_sub_chan = getDid("fot_sub_chan")
let fot_nb_cha = getDid("fot_nb_cha")
let yaz_sub_change = getDid("yaz_sub_change")
let yaz_nav_change = getDid("yaz_nav_change")
let gc_goods = getDid("gc_goods")
let ljjs = getDid("ljjs")
let chgeljjs = getDid("chgeljjs")
let ad_zk_btn = getDid("ad_zk_btn")
let ad_yhq_btn = getDid("ad_yhq_btn")

let gwc_yhq_dm = getDid("gwc_yhq_dm")
let gwc_zq_dm = getDid("gwc_zq_dm")






let box_all = getDid("box_all")
let ad_yhq_all = getDid("ad_yhq_all")
let ad_zk_all = getDid("ad_zk_all")




let adhao = document.getElementsByClassName("adhao")
let yaz_add = document.getElementsByClassName("yaz_add")
let ad_zk_splx = document.getElementsByClassName("ad_zk_splx")




let fot_sub_chan_chil = makeArray(fot_sub_chan.children)
let fot_nb_cha_chil = makeArray(fot_nb_cha.children)
let war_change_chil = makeArray(wares_change.children)
let nav_change_chil = makeArray(nav_change.children)
let yaz_nav_cha_chil = makeArray(yaz_nav_change.children)
let yaz_sub_cha_chil = makeArray(yaz_sub_change.children)


let goods_monovalent = {
    ipad: 2399.00,
    iphone: 5288.00,
    显示器: 899.00,
    笔记本电脑: 4599.00,
    键盘: 68.00,
    面包: 3.00,
    饼干: 5.00,
    蛋糕: 20.00,
    牛肉: 25.00,
    鱼: 13.00,
    蔬菜: 3.00,
    餐巾纸: 10.00,
    收纳箱: 20.00,
    咖啡杯: 5.00,
    雨伞: 45.00,
    啤酒: 2.00,
    白酒: 150.00,
    伏特加: 230.00
}

// 电子 0 食品 1 日用品 2 酒类 3
// let azk = ["电子类" ,"食品类" ,"日用品类" ,"酒类"]
let ojzk = {
    "电子类": 0,
    "食品类": 1,
    "日用品类": 2,
    "酒类": 3
}
let goods_car_arr = []
// let goods_car_yhq = [1000, 200]
let goods_car_yhq = []
let goods_car_zk = [0, 0.70]
// let goods_car_obj = {ipad:1 ,iphone:1}


// 底部导航栏切换
fot_nb_cha.addEventListener("click", (e) => {
    let etar = e.target;
    allchang({
        eii: etar,
        subcha: fot_sub_chan_chil,
        navcha: fot_nb_cha_chil,
        arrcl: "p_act"
    })
})
// 商城切换
nav_change.addEventListener("click", (e) => {
    let etar = e.target;
    allchang({
        eii: etar,
        subcha: war_change_chil,
        navcha: nav_change_chil,
        arrcl: "butlin"
    })
})
// 优惠券折扣切换
yaz_nav_change.addEventListener("click", (e) => {
    let etar = e.target;
    allchang({
        eii: etar,
        subcha: yaz_sub_cha_chil,
        navcha: yaz_nav_cha_chil,
        arrcl: "butlin"
    })
})

// 点击加号，添加到购物车
makeArray(adhao).forEach((a, b) => {
    a.addEventListener("click", (e) => {
        let etar = e.target;
        let indzklxpar = etar.parentNode.parentNode.parentNode.previousElementSibling
        let indzklx = indzklxpar.getElementsByClassName("butlin")[0]
        let inde = indzklx.getAttribute("ind")
        inde = parseInt(inde)
        let etpr = etar.previousElementSibling
        let pinntxt = etpr.children[0].innerText
        let goods_car_arrLength = goods_car_arr.length
        let  yon = -1
        if(goods_car_arrLength == 0){
            gc_goods.innerHTML = '' ;
        }else{
            yon = goods_car_arr.findIndex((a, b) => {
                return a["article"] == pinntxt
            })
        }
        
        if (yon == -1) {
            // console.log(yon)
            //添加到数组中
            let xinf = {
                article: pinntxt,
                quan: 1,
                fat: inde
            }
            goods_car_arr.push(xinf)
            //添加dom
            let ddiv = document.createElement("div")
            ddiv.classList.add("commodity", "clearfix")
            ddiv.appendChild(etpr.cloneNode(true))
            let etprstr = ddiv.innerHTML;
            let inptdiv = etprstr + `<div class="rg inp_num"> &times;<input type="number" value= 1 onchange="changind(this)"></div>`
            ddiv.innerHTML = inptdiv
            gc_goods.appendChild(ddiv)
        } else {
            let inpt = gc_goods.children[yon].children[1].getElementsByTagName("input")[0]
            let ipvalue = parseInt(inpt.value) + 1
            inpt.value = ipvalue
            goods_car_arr[yon].quan = ipvalue
        }
        chgejg()
    })
})

// 添加优惠券或折扣
makeArray(yaz_add).forEach((a, b) => {
    a.addEventListener("click", (e) => {
        let etar = e.target;
        let yazkdat = etar.getAttribute("dat")
        if (yazkdat == "zk") {
            ad_zoy_diayon(1)
        } else {
            ad_zoy_diayon(2)
        }
    })
})

makeArray(ad_zk_splx).forEach((a) => {
    a.addEventListener("click", (e) => {
        let etar = e.target;
        makeArray(a.children).forEach((m) => {
            if (m == etar) {
                m.classList.add("p_active")
            } else {
                m.classList.remove("p_active")
            }
        })
    })
})

// box_all  ad_yhq_all  ad_zk_all
ad_zk_btn.addEventListener("click", (e) => {
    let etar = e.target;
    // 整体显示隐藏
    ad_zoy_diayon(0)
    // 添加
    addyzDom( 0 , etar)
    //恢复状态
    huifuzt()
})

ad_yhq_btn.addEventListener("click", (e) => {
    let etar = e.target;
    // 整体显示隐藏
    ad_zoy_diayon(0)
    // 添加
    addyzDom(1 , etar)
    //恢复状态
    huifuzt()
})

function addyzDom(num , etar) {
    let etarbx = etar.parentNode.parentNode;
    let ad_zk_arr = zkyhqtjar(etarbx)
    console.log(ad_zk_arr)
    if(ad_zk_arr.length !== 3){
        alert("别闹，好好的！")
        return false ;
    }
    let ad_zk_dom_bt = yaz_add[num];
    let ad_zk_dom_btpar = ad_zk_dom_bt.parentNode;
    let ad_zk_dom_btbor = ad_zk_dom_btpar.children[0];
    ad_zk_dom_btbor = ad_zk_dom_btbor.cloneNode(true)
    let ys_actv = ad_zk_dom_btbor.getElementsByClassName("ys_actv")[0]
    if(ys_actv){
        ys_actv.classList.remove("ys_actv")
    }
    if (num == 0) {
        let azk_ys_fl = ad_zk_dom_btbor.getElementsByClassName("zk_ys_fl")[0];
        let azk_ys_fr = ad_zk_dom_btbor.getElementsByClassName("zk_ys_fr")[0];
        let azk_ys_fl_str = `<p>${ad_zk_arr[0]}折扣</p> <p>截至日期：${ad_zk_arr[2]}</p>`;
        azk_ys_fl.innerHTML = azk_ys_fl_str;
        azk_ys_fr.innerHTML = `<p>${ad_zk_arr[1]}</p>`;
    } else {
        let azk_ys_fl = ad_zk_dom_btbor.getElementsByClassName("yhq_ys_mii")[0]
        let azk_ys_fl_str = `满${ad_zk_arr[0]}减${ad_zk_arr[1]} 优惠券`;
        azk_ys_fl.innerHTML = azk_ys_fl_str;
    }
    ad_zk_dom_btpar.insertBefore(ad_zk_dom_btbor, ad_zk_dom_bt)

}



function zkyhqtjar(dom) {
    let arr = []
    let actv = dom.getElementsByClassName("p_active")
    makeArray(actv).forEach((a, b) => {
        let int = a.innerText
        arr.push(int)
    })
    return arr
}

function huifuzt() {
    makeArray(ad_zk_splx).forEach((a) => {
        makeArray(a.children).forEach((m) => {
            m.classList.remove("p_active")
        })
    })
}


function ad_zoy_diayon(num) {
    let arr = [box_all, ad_zk_all, ad_yhq_all]
    arr.forEach((a, b) => {
        if (b == num) {
            a.classList.remove("disno")
        } else {
            a.classList.add("disno")
        }
    })
}

function changind(e) {
    let indv = parseInt(e.value) 
    if(indv < 1 ){
        indv = 1
        e.value = 1
    }
    let epar = e.parentNode
    let etpr = epar.previousElementSibling
    let pinntxt = etpr.children[0].innerText
    goods_car_arr.forEach((a, b) => {
        if (a["article"] == pinntxt) {
            a.quan = parseInt(indv)
        }
    })
    chgejg()
}



ljjs.addEventListener("click", (e) => {
    // goods_car_zk  goods_car_yhq
    // console.log(totle)

})


function jszj() {
    let totle = 0
    goods_car_arr.forEach((a, b) => {
        let article = a.article;
        let quan = a.quan;
        let fat = a.fat;
        let danj = goods_monovalent[article]
        if (fat == goods_car_zk[0]) {
            danj *= goods_car_zk[1]
        }
        totle += danj * quan
    })
    if(goods_car_yhq.length > 0){
        if(totle >=  goods_car_yhq[0]){
            totle -= goods_car_yhq[1]
        }
    }
    totle = totle.toFixed(2)
    return totle
}


function chgejg() {
    let zj = jszj()
    let zjstr = `总计 ：￥${zj}`
    chgeljjs.innerHTML = zjstr
}

// let goods_car_yhq = [1000, 200]
// let goods_car_zk = [0, 0.70]

function xzyhq(e){
    let  qdgx =  xzyozcl(e)
    if (qdgx){
        let sstr = e.innerText.replace(/[ 优惠券 |满 | 减]/g, " ")
        sstr = sstr.replace(/\s+/g, " ")
        let arr = sstr.split(" ")
        goods_car_yhq[0] = parseInt(arr[1])
        let num = parseFloat(arr[2])
        goods_car_yhq[1] = num
        gwc_yhq_dm.innerHTML = `<p class="lt">满${arr[1]}减${arr[2]}</p>
        <p class="rg">截至日期：2020.01.30 </p>` ;
        chgejg()
    }
    
}

function xzzq(e){
    let  qdgx=  xzyozcl(e)
    if (qdgx){
        let sstr = e.innerText.replace(/[\s | 折扣 | 折]/g, " ")
        sstr = sstr.replace(/\s+/g, " ")
        let arr = sstr.split(" ")
        goods_car_zk[0] = ojzk[arr[0]]
        let num = parseFloat(arr[2])
        num = num/10
        goods_car_zk[1] = num
        gwc_zq_dm.innerHTML = `<p class="lt">${arr[0]} ${arr[2]}折</p>
        <p class="rg">${arr[1]} </p>` ;
        chgejg()
    }
    
}




function xzyozcl(e){
    let clsval = e.classList.value ;
    let tofal = false
    if(clsval.includes("ys_actv")){
        e.classList.remove("ys_actv")
        tofal = false
    }else{
        e.classList.add("ys_actv")
        tofal = true
    }
    let epar = e.parentNode.parentNode.getElementsByClassName("ys_actv")
    makeArray(epar).forEach( (a) => {
        if(a !== e){
            a.classList.remove("ys_actv")
        }
    })
    return tofal
}


function allchang({
    eii,
    subcha,
    navcha,
    arrcl
}) {
    let innd = eii.getAttribute("ind")
    if (innd) {
        innd = parseInt(innd)
        subcha.forEach((a, b) => {
            if (b == innd) {
                a.classList.remove("disno");
                navcha[b].classList.add(arrcl);
            } else {
                a.classList.add("disno");
                navcha[b].classList.remove(arrcl);
            }

        });
    }
}


function backhis(){
    ad_zoy_diayon(0)
}





















function getDid(obj) {
    return document.getElementById(obj);
}

function domchgstr(dom) {
    let ddiv = document.createElement("div")
    ddiv.appendChild(dom.cloneNode(true))
    let etprstr = ddiv.innerHTML;
    return etprstr
}

function makeArray(obj) {
    var rs = [],
        len = obj.length;
    try {
        rs = [].slice.call(obj, 0);
    } catch (e) { //for IE  
        for (var i = 0; j = obj[i++];) {
            rs.push(j);
        }
    }
    return rs;
}