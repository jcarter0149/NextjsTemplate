import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { addPost } from '../utils/posts';

function AddPost({ user }) {
  const [formData, setFormData] = useState({
    title: null,
    content: '',
    userId: user.id,
    CategoryId: 1
  });

  const handleSubmit = (e) => {
    e.preventDefault();
      addPost(formData);
  };
  return (
    <div className="m-3">
      <Form onSubmit={handleSubmit}>
        <Card style={{ width: '30vw' }}>
          <Card.Body>
            <Form.Control
              required
              as="textarea"
              name="content"
              placeholder="What's on your mind?"
              id="NewPost"
              aria-describedby="NewPostBlock"
              onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
            />
          </Card.Body>
          <Card.Footer className='d-flex justify-content-end align-content-center'>
            <Button variant='outline-success' type="submit">
              Post
            </Button>
          </Card.Footer>
        </Card>
      </Form>
    </div>
  );
}



export default AddPost;