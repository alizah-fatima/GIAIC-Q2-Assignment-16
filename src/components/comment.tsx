"use client";
import React, { useState, useEffect } from "react";

const CommentBox = () => {
  const [comment, setComment] = useState("");
  const [username, setUsername] = useState("");
  const [comments, setComments] = useState<
    { username: string; comment: string }[]
  >([]);

  useEffect(() => {
    const savedComments = localStorage.getItem("comments");
    if (savedComments) {
      try {
        const parsedComments = JSON.parse(savedComments);
        if (Array.isArray(parsedComments)) {
          setComments(parsedComments);
        }
      } catch (error) {
        console.error("Error parsing comments from localStorage", error);
      }
    }
  }, []);

  const addComments = () => {
    if (comment.trim() !== "" && username.trim() !== "") {
      const newComment = { username, comment };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      setComment("");
      setUsername("");
      localStorage.setItem("comments", JSON.stringify(updatedComments));
    }
  };

  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
  };

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-blue-950 text-left mt-2">
        Comments Section
      </h2>
      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your Name"
          className="border border-gray-400 bg-gray-100 hover:border-gray-500 text-black rounded-sm mt-5 h-10 w-80 p-3"
        />
        <br />
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write Your Comment"
          className="border border-gray-400 bg-gray-100 hover:border-gray-500 text-black rounded-sm mt-2 h-10 w-80 p-3"
        />
        <br />
        <button
          className="bg-blue-600 text-white hover:bg-blue-700 mt-6 h-8 w-32 rounded-sm"
          onClick={addComments}
        >
          Add Comment
        </button>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-blue-950 text-left mt-8">
          All Comments
        </h2>
        {comments.length === 0 ? (
          <p>There's No Comment Yet!</p>
        ) : (
          <ul>
            {comments.map((data, index) => (
              <li key={index} className="flex items-center justify-between">
                <div>
                  <strong>{data.username}:</strong> {data.comment}
                </div>
                <button
                  className="text-red-600 hover:text-red-800 ml-4"
                  onClick={() => deleteComment(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentBox;
