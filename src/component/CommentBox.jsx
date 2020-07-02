import React, { useState,useEffect } from 'react';
import { Button, Form, Label, Input } from 'reactstrap';

function CommentBox() {

    const [comments, setlist] = useState([]);
    const [comment, change] = useState('');
    const [name, changename] = useState('');
    const incrementLike=(id)=>{
       
      let data = comments.map((e)=>{
           if(e.id === id){
               e.like=e.like+1;
               return e;
           }
           return e;
   
       })
      console.log(data)
      setlist(data)
        

     }
     const incrementDislike=(id)=>{
         let data = comments.map((e)=>{
             if(e.id === id){
                 e.dislike = e.dislike +1;
                 return e;
             }
             return e;
         })
         setlist(data)

    
     }
    

    return (
        <div className="container">
            <Form>
                <div className="container">
                    <div className="row mt-3">
                        <div className="col col-md-2">
                            <Label>
                                Name : </Label>

                        </div>
                        <div className="col col-md-3">
                            <Input type="text" id="name" value={name} onChange={(e) => changename(e.target.value)} />

                        </div>

                    </div>
                    <div className="row mt-2">
                        <div className="col col-md-2">
                            <Label>
                                Comment : </Label>

                        </div>
                        <div className="col col-md-5">

                            <Input type="textarea" value={comment} id="comment" onChange={(e) => change(e.target.value)} />


                        </div>

                    </div>
                    <div className="row  mt-2">
                        <div className="col">
                            <Button onClick={() => {
                                if (comment === '' || name === '') {
                                    return undefined;
                                }
                                else {
                                    setlist([...comments, {
                                        id: comments.length,
                                        name: name,
                                        comment: comment,
                                        like : 0,
                                        dislike : 0
                                    }])
                                    change('');
                                    changename('');
                                }

                            }}>Comment</Button>

                        </div>



                    </div>

                </div>








                {
            
                    comments.map((data) =>{

                    console.log(data)
                        return <div className="container mt-3" style={{ backgroundColor: "lightblue" }}>
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
                                    <div>
                                        <p onClick={()=>incrementLike(data.id)
                                        }>like </p> : {data.like}
                                    </div>
                                    <div>
                                       <p onClick={()=>incrementDislike(data.id)} >dislike</p>  : {data.dislike}
                                    </div>

                                </div>


                            </div>
                        </div>
                    })
                }
            </Form>
        </div>
    )
}

export default CommentBox;
