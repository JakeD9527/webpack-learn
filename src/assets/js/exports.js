const obj = {
	a : "obj1-a"
}

const str = "str1"

const num = 100

function fn1(){
	console.log("fn1")
}

export {str,num}

/*命名导出 导入时必须用相应对象名称
export {obj,str,num,fn1} 
import {obj,str,num,fn1} from './assets/js/tst'
*/

/* 默认导出
 * 不能使用var，let或const作为默认导出
export default {obj,str,num,fn1} //导出对象
export default function(){	//导出函数
	return {
		obj,str,num,fn1
	}
}
export default class {} //导出类
import a from './assets/js/tst' 可以用任意名称导入默认导出
*/