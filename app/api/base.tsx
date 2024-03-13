import LoginModal from "../components/LoginModal";
import { TOKEN_KEY } from "../constant";

import { Modal, message } from "antd";


const BaseUrl = 'http://127.0.0.1:8081';

const request = async (method: string, path: string, data?: any, config?: any) => {
    const defaultConfig = {
        'Content-Type': 'application/json',
    }

    const token = localStorage.getItem(TOKEN_KEY)

    if (token && token!.length > 0) {
        Object.assign(defaultConfig, {
            'Authorization': `Bearer ${token}`
        })
    }

    const headers = new Headers(defaultConfig)
    return await fetch(BaseUrl + path, {
        method: method,
        body: data != null ? JSON.stringify(data) : null,
        headers
    });

}
export const get = async (url: string,) => {
    const res = await request("GET", url)
    return await baseResponse(res);
}

export const post = async (url: string, params: any) => {
    const res = await request("POST", url, params)
    return await baseResponse(res);
}

const baseResponse = async (res: Response) => {
    const json = await res.json();
    if (json.code == 200) {
        return json.data;
    } else {
        if (json.code === 401 || json.code === 403) {
            
        }
    }
}

