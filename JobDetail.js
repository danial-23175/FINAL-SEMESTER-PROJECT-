import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import EmojiInput from '../components/EmojiInput';

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/jobs`)
      .then(res => setJob(res.data.find(j => j._id === id)));
    axios.get(`http://localhost:5000/api/comments/job/${id}`)
      .then(res => setComments(res.data));
  }, [id]);

  const postComment = () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Login first');
    axios.post(`http://localhost:5000/api/comments/job/${id}`, { content: newComment }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setComments([...comments, res.data]));
  };

  if (!job) return <div>Loading...</div>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p><strong>Skills:</strong> {job.skillsRequired.join(', ')}</p>
      <p><strong>Budget:</strong> ${job.budget}</p>

      <h3>Comments</h3>
      <EmojiInput onChange={setNewComment} />
      <button onClick={postComment}>Post Comment</button>
      {comments.map(c => (
        <div className="comment" key={c._id}>
          <p><strong>{c.author.username}:</strong> {c.content}</p>
        </div>
      ))}
    </div>
  );
}
