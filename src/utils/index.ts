/**
 * 时间格式化添加格式
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time: string | number | Date, cFormat: string) {
  if (arguments.length === 0) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
      time = parseInt(time)
    }
    if ((typeof time === 'number') && (time.toString().length === 10)) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (_result, key: string) => {
    // @ts-ignore
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 *  jsonp
 *  */
export function myJsonp(url: string) {
  const container = document.getElementsByTagName('head')[0]
  const fnName = `jsonp_${new Date().getTime()}`
  const script = document.createElement('script')
  script.src = `${url}&callback=${fnName}`
  script.type = 'text/javascript'
  container.appendChild(script)

  return new Promise((resolve, reject) => {
    // @ts-ignore
    window[fnName] = function(res) {
      container.removeChild(script)
      // @ts-ignore
      delete window[fnName]
      resolve(res)
    }

    script.onerror = function() { // 异常处理，也是很多人漏掉的部分
      container.removeChild(script)
      // @ts-ignore
      delete window[fnName]
      reject('something error hanppend!')
    }
  })
}



