import { Caldeiras } from "../controllers/sliceCaldeiras";
import { api } from "./interceptor";


// get Caldeiras in api
export function getCaldeiras() {
    return api.get('/caldeiras/');
}

export function createCaldeira({ body }: Props) {
    return api.post('/caldeiras/create/', body);
}

export function updateCaldeira({ id, body }: Props) {
    return api.patch(`/caldeiras/update/${id}`, body);
}

export function deleteCaldeira({ id }: Props) {
    return api.delete(`/caldeiras/delete/${id}`);
}

export function caldeiraDetails({ id }: Props) {
    return api.get(`/caldeiras/${id}`);
}

interface Props {
    id?: number;
    body?: Caldeiras;
}