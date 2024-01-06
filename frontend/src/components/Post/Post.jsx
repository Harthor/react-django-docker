import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Post() {
  const { postId } = useParams();
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
console.log(postId)
  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const url = `http://127.0.0.1:8000/myapi/posts/${postId}`;
      console.log('Constructed URL:', url);
      try {
        const response = await axios.get(`http://127.0.0.1:8000/myapi/posts/${postId}`); // Corrected URL
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error('Axios request error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, [postId]);


  return (
    <div>
      {isLoading ? (
        <p>Loading post...</p>
      ) : error ? (
        <p>Error fetching post: {error.message}</p>
      ) : (
        <article>
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          <p>Author: {data.author.username}</p> // Assuming author data is included
          <p>Categories: {data.categories.map((category) => category.name).join(', ')}</p> // Assuming categories data
          <p>Tags: {data.tags.map((tag) => tag.name).join(', ')}</p> // Assuming tags data
          {/* Additional elements for comments, etc. */}
        </article>
      )}
    </div>
  );
}

export default Post;