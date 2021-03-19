import axios from "axios";

export default {
  // Find pros
  findPros: function(url) {
    return axios.get(url);
  },
  getPros: function() {
    return axios.get("/api/registerpros");
  },
  savePros: function(pro) {
    return axios.post("/api/registerpros", pro);
  }
};