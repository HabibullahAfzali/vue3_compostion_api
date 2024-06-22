import httpCommon from "./http-common";

class userData {
  getUser() {
    return httpCommon.get("");
  }
  getUserById(userId) {
    return httpCommon.get(`/${userId}`);
  }
}

export default new userData();
