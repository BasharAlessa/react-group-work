import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import axios from "axios";
import moment from "moment";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }
  const [posts , setPosts] = useState(null);

  useEffect(()=>{
   axios.get('http://localhost:3500/home')
   .then (res => setPosts(res.data))   
   .catch (err => console.log(err))
},[]);

  return (
    
      <Col lg={12}>
        <div class=" post-view" className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
            <br></br>
            <br></br>

              <h2>Refu'IN Community  </h2>
            </Col>
            <Col md={6} xl={7}>
            <div >
  
  { posts?.length>0  ? 
   posts?.map(post => 
      <div class="post-form">
        <h4 class="post-name-user"> 👦_ {post.UserId.Name}</h4>
        <div>
        <h4 class="post-body-user">{post.body}</h4>
        {/* <h6 class="post-date">{moment(posts.create_at).format('MMMM Do YYYY, h:mm:ss ')}</h6> */}

        </div>
        <a class="post-btn"href={`/post/${post._id}`}> Are you In? </a>
      </div>
   )
   : <h4> no posts for today</h4>
   }
  
</div>

            </Col>
          </Row>
        </div>
      </Col>
  )
}
