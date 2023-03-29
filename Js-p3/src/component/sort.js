import { isNumber } from "../utils/utils"

export function sortList(paraList) {
  // 第一步如何去外壳， flat
  const flatList3 = paraList.flat(Infinity)
  // 第二步，去掉不要的部份，保留需要的部份 filter
  const filterList = flatList3.filter(element => isNumber(element))
  // 第三步， 去掉重复项目
  const setList = [...new Set(filterList)]
  // 第四步排序 sort
  const sortList = [...setList].sort((a, b) => a - b)
  
  return sortList
}