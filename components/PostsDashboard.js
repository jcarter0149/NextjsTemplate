import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getPosts } from '../utils/posts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faThumbsUp, faFire, faSkull } from '@fortawesome/free-solid-svg-icons';
import Avatar from '@mui/material/Avatar';
import React, {
    createContext, //
    useContext,
    useEffect,
    useMemo,
    useState,
  } from 'react';

function PostsDashboard({ user }) {
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
        getPosts().then(x => setPosts(x));
    }, [])
    const postCard = (p) => (
        <div>
            {p.map(post => (
                <Card key={post.id} className="m-2" style={{ width: '30vw' }}>
                    <Card.Body>
                        <Card.Title className='d-flex justify-content-start align-content-center'>
                            <Avatar>JC</Avatar>
                            <span className='m-2'>{post.author.firstName} {post.author.lastName}</span>
                        </Card.Title>
                        <Card.Text>
                            {post.content}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='d-flex justify-content-around align-content-center'>
                        <Button variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faThumbsUp} /></Button>
                        <Button variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faCoffee} /></Button>
                        <Button variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faFire} /></Button>
                        <Button variant="outline-secondary" size="sm"><FontAwesomeIcon icon={faSkull} /></Button>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    )
    return (
        <div className="m-2">
            {posts ? (
                postCard(posts)) : <Card>
                <Card.Body>
                    No current posts
                </Card.Body>  </Card>}
        </div>
    );
}



export default PostsDashboard;
