/*
 * @Author: saber
 * @Date: 2022-02-21 19:52:45
 * @LastEditTime: 2022-02-21 19:52:45
 * @LastEditors: saber
 * @Description: 
 */
export const randomInt = (fr: any, to: any) => {
  return Math.round(fr + Math.random() * to)
}

export const generateRGBColors = (count: any) => {
  return Array.apply(null, new Array(count)).map((none, i) => {
    return {
      r: randomInt(0, 255),
      g: randomInt(0, 255),
      b: randomInt(0, 255),
      key: Math.random()
    }
  })
}

export default {
  randomInt,
  generateRGBColors
}
