import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

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


  return (
      <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>In-Posts</h3>
            </Col>
            <Col md={6} xl={7}>
            <div >
  
  { posts?.length>0  ? 
   posts?.map(post => 
      <div>
        <h2> {post.UserId.Name}</h2>
        <h4>{post.body}</h4>
        <h6>{post.create_at}</h6>
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
