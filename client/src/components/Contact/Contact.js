import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  return (
    <>
    <section className="mb-4">
      <h2 className="h1-responsive font-weight-bold text-center my-4" style={{}}>
        Any suggestions or complaints ? Leave your comments here!
      </h2>
      <div className="row">
        <div class="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <label for="first-name" style={{fontSize: 18, fontWeight: 500}}>Name</label>
                  <input type="text" id="first-name" name="first-name"
                    className="form-control" placeholder='First' 
                    style={{ backgroundColor: '#ededed', width: 160, borderRadius:'1px'}} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="last-name" name="last-name"
                   className="form-control" placeholder='Last' style=
                   {{ backgroundColor: '#ededed', width: 160, borderRadius:'1px'}} />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                <label for="email" style={{fontSize: 18, fontWeight: 500}}>Email</label>
                  <input type="text" id="email" name="email" className="form-control"
                   style={{ backgroundColor: '#ededed', width: 320, borderRadius:'1px'}} />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                <label for="comment" style={{fontSize: 18, fontWeight: 500}}>Comment</label>
                <textarea type="text" id="comment" name="comment" rows="8"
                 className="form-control md-textarea" style={{ backgroundColor: '#ededed',
                  width: 320, borderRadius:'1px'}} ></textarea>
                </div>
              </div>
            </div>
          </form>

          <div className="text-center text-md-left">
              <a className="btn btn-primary" onclick="document.getElementById
              ('contact-form').submit();">Send</a>
          </div>
          <div class="status"></div>
        </div>
      </div>

</section>
    {/* <Form className='rounded p-4 p-sm-3'>
      <h1 className='contact-title'>Any suggestions or complaints ?
       Leave your comments here!</h1>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Name</Form.Label>
        <Form.Control type="password" placeholder="first" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Comment</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}
    </>
  )
}

export default Contact