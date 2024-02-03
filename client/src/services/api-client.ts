import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

class APIClient<T> {
  private endpoint;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  post = (data: T) => {
    return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  };

  get = () => {
    return axiosInstance.get<T>(this.endpoint).then(res => res.data);
  }
}

export default APIClient;
export { AxiosError, axiosInstance };
