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
      const res = await axios.get("https://storysafari.vercel.app/cartData");
      return res.data;
    },
  });
  return [cart, refetch, isLoading];
}

export default useCart;
