import qs from "qs";
import axios from "axios";

// axios.defaults.headers["Authorization"] = localStorage.getItem("TOKEN");
/*****************************
 **********GET请求************
 * @param {string} requestUrl 请求地址
 * @param {Object} fromData 请求参数
 ****************************/
export function getRequest(requestUrl, fromData) {
    return new Promise((resolve, reject) => {
        get(requestUrl, fromData)
            .then(
                e => {
                    resolve(e);
                },
                err => {
                    reject(err);
                }
            )
            .catch(err => {
                resolve(err);
            });
    });
}

/*****************************
 **********POST请求************
 * @param {string} url 请求地址
 * @param {Object} data 请求参数
 ****************************/
export function postRequest(url, data) {
    return new Promise((resolve, reject) => {
        //console.log(type != "formData" ? qs.stringify(data) : data)
        axios
            .post(url, qs.stringify(data))
            .then(
                res => {
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            )
            .catch(err => {
                reject(err);
            });
    });
}

// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("TOKEN")) {
            config.headers.Authorization = localStorage.getItem("TOKEN");
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
    res => {
        return res.data;
    },
    err => {
        //Message.error("链接服务器失败！请稍后再试。")
        return Promise.reject(err);
    }
);
// 发送请求
export function post(url, data) {
    return new Promise((resolve, reject) => {
        //console.log(type != "formData" ? qs.stringify(data) : data)
        axios
            .post(url, qs.stringify(data))
            .then(
                res => {
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            )
            .catch(err => {
                reject(err);
            });
    });
}

// 发送请求
export function put(url, data) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(
                res => {
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            )
            .catch(err => {
                reject(err);
            });
    });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function postJson(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(
                res => {
                    if (res) {
                        resolve(res);
                    }
                },
                err => {
                    reject(err);
                }
            );
    });
}

export function get(url, params, headers) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, { params: params }, headers)
            .then(res => {
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function uploadRequest(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .create({
                withCredentials: true
            })
            .post(url, params)
            .then(
                response => {
                    resolve(response);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
}

/**
 * 上传文件的请求
 * @param url
 * @returns {AxiosPromise}
 */
export function uploadFile(url, data) {
    let Authorization = "";
    if (localStorage.getItem("TOKEN")) {
        Authorization = localStorage.getItem("TOKEN");
    }
    return new Promise((resolve, reject) => {
        axios
            .create({
                withCredentials: true
            })
            .post(url, data, {
                headers: {
                    Authorization: Authorization,
                    "Content-Type": "multipart/form-data"
                }
            })
            .then(
                response => {
                    resolve(response);
                },
                err => {
                    reject(err);
                }
            )
            .catch(error => {
                reject(error);
            });
    });
}


export function postMD(url, data) {
    return new Promise((resolve, reject) => {
        //console.log(type != "formData" ? qs.stringify(data) : data)
        axios
            .post(url, qs.stringify(data))
            .then(
                res => {
                    resolve(res);
                },
                err => {
                    reject(err);
                }
            )
            .catch(err => {
                reject(err);
            });
    });
}
