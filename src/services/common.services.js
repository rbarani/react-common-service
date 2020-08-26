import http from "../http-common";


class commonService {

    getAllEmployees() {
        return http.get("users")
    }
}
export default new commonService();