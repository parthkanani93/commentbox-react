import React, { useState } from 'react'

function CommentBox() {

    const [comments, setlist] = useState([]);
    const [comment, change] = useState('');
    const [name, changename] = useState('');

    console.log(comments)

    return (
        <div>

            <label>
                Name : <input type="text" id="name" onChange={(e) => changename(e.target.value)} />
            </label>
            <label>
                Comment : <input type="text" id="comment" onChange={(e) => change(e.target.value)} />
            </label>
            <button onClick={() => {
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
            }}>Comment</button>


            {
                comments.map((data) =>
                    <div key={data.id}>
                        <div>
                            {data.name}
                        </div>
                        <div>
                            {data.comment}
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default CommentBox;
