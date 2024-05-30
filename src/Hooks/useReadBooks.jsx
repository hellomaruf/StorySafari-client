import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function useReadBooks() {
  const {
    data: onlineReadBooks,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: "onlineReadBooks",
    queryFn: async () => {
      const res = await axios.get(
        "https://storysafari.vercel.app/onlineReadBooks"
      );
      return res.data;
    },
  });
  return [ onlineReadBooks, refetch, isLoading] ;
}

export default useReadBooks;
