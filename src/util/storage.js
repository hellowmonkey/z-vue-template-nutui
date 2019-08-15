const s = window.sessionStorage
const l = window.localStorage

const isJsonString = (str) => {
    try {
        if (typeof JSON.parse(str) === 'object') {
            return true
        }
    } catch (e) {
    }
    return false
}

const fn = (storage = l) => {
    return {
        get (key) {
            let data = storage.getItem(key)
            if (isJsonString(data)) {
                data = JSON.parse(data)
            }
            return data
        },
        set (key, value) {
            if (typeof value === 'object') {
                value = JSON.stringify(value)
            }
            storage.setItem(key, value)
        },
        append (key, value, merge_key = null) {
            let data = this.get(key)
            if (Array.isArray(data)) {
                if (merge_key) {
                    data.map((item, k) => {
                        if (item[merge_key] === value[merge_key]) {
                            data.splice(k, 1)
                        }
                    })
                }
                data.unshift(value)
            } else {
                data = [value]
            }
            this.set(key, data)
        },
        has (key, id, val) {
            const data = this.get(key)
            if (Array.isArray(data)) {
                return data.filter(item => item[id] === val).length > 0
            }
            return false
        },
        remove (key) {
            storage.removeItem(key)
        },
        clear () {
            storage.clear()
        }
    }
}

export default fn()

export const sessionStorage = fn(s)
export const localStorage = fn(l)
