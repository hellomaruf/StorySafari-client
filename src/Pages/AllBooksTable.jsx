import { Rate } from "antd";
import { useLoaderData } from "react-router-dom";

function AllBooksTable() {
  const books = useLoaderData();
  console.log(books);
  return (
    <div className="max-w-7xl mx-auto my-16">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="text-base text-[#A91D3A]">Photo</th>
              <th className="text-base text-[#A91D3A]">Book Name</th>
              <th className="text-base text-[#A91D3A]">Category</th>
              <th className="text-base text-[#A91D3A]">Author Name</th>
              <th className="text-base text-[#A91D3A]">Rating</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr className="hover rounded-xl" key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg w-16 h-20">
                        <img
                          src={book?.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {book?.book_name}
                  <br />
                </td>
                <td> {book?.category_name}</td>
                <td>{book?.author_Name}</td>
                <td><Rate defaultValue={book?.rating}/></td>
                <th>
                  <button className="btn btn-sm border-2 border-[#A91D3A] hover:border-[#A91D3A] text-[#A91D3A]">
                    Update
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBooksTable;
