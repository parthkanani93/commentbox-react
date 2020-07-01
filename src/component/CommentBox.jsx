import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Media } from 'reactstrap';

function CommentBox() {

    const [comments, setlist] = useState([]);
    const [comment, change] = useState('');
    const [name, changename] = useState('');

    return (
        <div>
            <Form>
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


                {
                    comments.map((data) =>
                        <Media>
                            <Media left href="#">
                                <Media object data-src="holder.js/64x64" alt="image" />
                            </Media>

                            <Media body>
                                <Media heading>
                                    {data.name}
                                </Media>

                                {data.comment}
                            </Media>
                        </Media>
                    )
                }
            </Form>
        </div>
    )
}

export default CommentBox;
