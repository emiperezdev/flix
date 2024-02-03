import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost/api",
});

class APIClient<T> {
  private endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };
}

export default APIClient;