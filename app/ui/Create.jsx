import { addPost } from "../lib/actions";
import { fetchPost } from "../lib/actions";
const Create = async () => {
  const data = await fetchPost();
  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen">
        <div className="p-5 bg-[#EEF2F6] rounded-lg shadow-xl ">
          <h1 className="py-1 font-bold ">Create a post : </h1>
          <form action={addPost}>
            <textarea
              className="resize rounded-md w-[300px] h-[150px] "
              name="post"
            ></textarea>
            <br />
            <div className="py-1"></div>
            <button
              type="submit"
              className="bg-green-300 hover:bg-green-500  w-full rounded-md "
            >
              Post
            </button>
          </form>
        </div>
        <div className="pt-5">
          {data.map((val) => (
            <ul className="overflow-auto" key={val.id}>
              <li className="pt-5 font-bold text-black ">{val.post}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Create;
