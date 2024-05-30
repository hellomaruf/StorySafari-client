import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCart() {
  const { data: cart, refetch } = useQuery({
    queryKey: "cartData",
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/cartData");
      return res.data;
    },
  });
  return [cart, refetch];
}

export default useCart;
