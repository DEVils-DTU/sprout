import React from "react";

const CreatePost = () => {
  return (
    <div className="text-black h-full w-full p-4">
      <form className="flex flex-col">
        <label>Project Name</label>
        <input type="text" placeholder="sprout" required />
        <label>Short Description</label>
        <input
          type="text"
          placeholder="A project to help the environment"
          required
        />
        <label>Long Description</label>
        <input
          type="text"
          placeholder="A project to help the environment"
          className="h-fit text-wrap"
          required
        />
        <label>Project Image</label>
        <input type="url" required placeholder="enter url" />
        <label>Minimum Expected Quote</label>
        <input type="number" required placeholder="10000" />

        <button type="submit" className="bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
