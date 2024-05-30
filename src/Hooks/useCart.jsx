import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useCart() {
  const {
    data: cart,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "cartData",
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/cartData");
      return res.data;
    },
  });
  return [cart, refetch, isLoading];
}

export default useCart;
