import { Button } from 'react-bootstrap';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import PostsDashboard  from '../components/PostsDashboard'
import AddPost from '../components/AddPost';

function Home() {
  const { user } = useAuth();
  
  return (
    <div className="d-flex justify-content-center align-content-center m-4">
      <div>
        <AddPost user={user}></AddPost>
        <PostsDashboard user={user}></PostsDashboard>
      </div>
    </div>
    
  );
}

export default Home;
