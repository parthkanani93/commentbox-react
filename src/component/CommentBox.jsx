import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Media } from 'reactstrap';

function CommentBox() {

    const [comments, setlist] = useState([]);
    const [comment, change] = useState('');
    const [name, changename] = useState('');

    return (
        <div className="container">
            <Form>
                <div className="container">
                    <div>
                        <FormGroup>  <Label>
                            Name : <Input type="text" id="name" onChange={(e) => changename(e.target.value)} />
                        </Label></FormGroup>

                        <FormGroup><Label>
                            Comment : <Input type="textarea" id="comment" onChange={(e) => change(e.target.value)} />
                        </Label></FormGroup>

                        <Button onClick={() => {
                            if (comment === '' || name === '') {
                                return undefined;
                            }
                            else {
                                setlist([...comments, {
                                    id: comments.length,
                                    name: name,
                                    comment: comment
                                }])
                                change('');
                                changename('');
                            }
                            document.getElementById("name").value = ""
                            document.getElementById("comment").value = ""
                        }}>Comment</Button>

                    </div>

                </div>




                {
                    comments.map((data) =>
                        <div className="container" style={{ backgroundColor: "lightblue" }}>
                            <div className="row d-flex justify-content-center">
                                <div className="col col-md-2">
                                    <img src={`https://joeschmoe.io/api/v1/${data.name}`} alt="" />
                                </div>
                                <div className="col col-md  align-items-center">
                                    <div className="row">
                                        <h3>{data.name}</h3>
                                    </div>
                                    <div className="row">
                                        {data.comment}
                                    </div>

                                </div>


                            </div>
                        </div>
                    )
                }
            </Form>
        </div>
    )
}

export default CommentBox;
