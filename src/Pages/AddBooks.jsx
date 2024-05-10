function AddBooks() {
  const handleAddBooks = () => {};
  return (
    <div>
      <div className="">
        <div className="text-center py-10 pb-36 bg-gradient-to-r from-[#710d21] to-[#A91D3A] text-white">
          <h2 className="font-right text-3xl font-semibold">Add Books</h2>
          <p className="py-2 max-w-2xl mx-auto">
            Both reading and writing are experiences – lifelong – in the course
            of which we who encounter words used in certain ways are persuaded
            by them to be brought mind and heart within the presence, the power,
            of the imagination
          </p>
        </div>
        <div className=" max-w-7xl mx-auto relative -top-28">
          <form
            onSubmit={handleAddBooks}
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-2xl shadow-sm  border-2 bg-gray-50 border-[#A91D3A]">
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Category Name
                  </label>
                  <select
                    className="w-full rounded-md focus:bg-[#ffe7ec]  p-2 outline-none border"
                    name="itemName"
                    id="cars"
                  >
                    <option value="Landscape Painting">
                    Biographies
                    </option>
                    <option value="Portrait Drawing">Comics</option>
                    <option value="Watercolour Painting">
                    Entertainment
                    </option>
                    <option value="Oil Painting">Health & Fitness</option>
                    <option value="Charcoal Sketching">
                    Cookbooks
                    </option>
                    <option value="Cartoon Drawing">Travel</option>
                    <option value="Cartoon Drawing">History</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Book Name
                  </label>
                  <input
                    required
                    name="bookName"
                    type="text"
                    placeholder="Enter Book Name"
                    className="w-full border-2 focus:bg-[#ffe7ec] rounded-md p-2 outline-none  "
                  />
                </div>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Quantity
                  </label>
                  <input
                    required
                    name="quantity"
                    type="number"
                    placeholder="Enter Quantity"
                    className="w-full focus:bg-[#ffe7ec] rounded-md  p-2 outline-none border"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-lg font-medium">
                    Rating
                  </label>
                  <input
                    required
                    name="rating"
                    type="number"
                    placeholder="Enter Rating"
                    className="w-full focus:bg-[#ffe7ec] rounded-md p-2 outline-none border "
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4 col-span-full ">
                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Author Name
                  </label>
                  <input
                    required
                    name="authName"
                    type="text"
                    placeholder="Enter Your Name"
                    className="w-full focus:bg-[#ffe7ec] rounded-md  p-2 outline-none border"
                  />
                </div>

                <div className="col-span-full ">
                  <label htmlFor="firstname" className="text-lg font-medium">
                    Photo
                  </label>
                  <input
                    required
                    name="photo"
                    type="text"
                    placeholder="Enter Photo URL"
                    className="w-full focus:bg-[#ffe7ec] rounded-md  p-2 outline-none border"
                  />
                  <div className=" mt-5">
                    <label htmlFor="firstname" className="text-lg font-medium">
                      Short Description
                    </label>
                    <textarea
                      required
                      name="description"
                      type="text"
                      placeholder="Enter a Short Description"
                      className="w-full focus:bg-[#ffe7ec] rounded-md  p-2 outline-none border"
                    />
                  </div>
                </div>

                <div className="">
                  <input
                    className="bg-[#A91D3A] hover:bg-[#cf3a58] btn text-white   py-2 font-bold  rounded-lg"
                    type="submit"
                    value="Add Book"
                  />
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBooks;
