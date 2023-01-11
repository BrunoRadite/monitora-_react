import { api } from "./interceptor";

//get a AccessToken
export default async function GetAccessToken({ body }: _Props) {

    return await api.post('token/', body);
}

// type of props
type _Props = {
    body: Record<any, String>
}