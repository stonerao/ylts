import axios from 'axios'
const HTTP_URL = '';
const req = (obj) => {
    let type = obj.methods || 'get';
    type = type.toUpperCase() || '';
    let url = obj.url;
    let data = obj.data;
    /* 如果类型不对 */
    if (typeof type !== "string") {
        throw "ajax请求错误";
        return;
    } else if (type == 'POST' || type == 'DELETE' || type == 'PUT' || type == 'GET') {
        return {
            methods: !type ?
                "GET" :
                type,
            url: `${HTTP_URL}${url}`,
            params: type == "GET" ?
                data || {} :
                {
                    a: 1
                },
            data: type == "POST" ?
                data || {} :
                {}
        };
    } else {
        throw "methods错误";
    }
};
export async function $_ajax(obj, state = undefined) {
    const data = await axios(req(obj)).then((res) => {
        /* 可以写公用条件 */
        switch (state) {
            case 1:
                if (res.data.code == 200) {} else {}
                break;
        }
        return res.data
    });
    return data;
}