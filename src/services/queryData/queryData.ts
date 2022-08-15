import { useQuery } from "@tanstack/react-query";
import { api } from "@/services/";

export default class {
  name: any;
  url: any;
  constructor(name: any, url: any) {
    this.name = name;
    this.url = url;
  }

  getData() {
    const { isLoading, error, data, isFetching } = useQuery([this.name], () =>
      api.get(`${this.url}`).then((res: { data: any }) => res.data)
    );
    return { isLoading, error, data, isFetching };
  }
}
