import { useEffect, useRef, useState } from "react";
import { Button, Card, CardBody, Container, Form, Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/categories-services";
import JoditEditor from 'jodit-react';
import { createPost as doCreatePost } from "../services/post-service";
const AddPost = () => {


    const editor = useRef(null);
    const [content, setContent] = useState('');

    const [post , setPost] = useState({
        title:'',
        content:'',
        categoryId:-1
    })

    // const config={
    //     placeholder:"Start typing..."
    // }

    const [categories, setCategories] = useState([])

    useEffect(
        () => {
            loadAllCategories().then((data) => {
                console.log(data)
                setCategories(data)
            }).catch(error => {
                console.log(error)
            })
        },
        []
    )

    const fieldChange=(event)=>{
            // console.log(event)
            setPost({...post,[event.target.name]:event.target.value})

    }

    const contentFieldChanged=(data)=>{
        setPost({...post,'content':data})
    }

    const createPost=(event)=>{
        event.preventDefault()
        console.log(post)

        if(post.title.trim()===''){
            alert("post title is required !! ")
            return
        }
        if(post.content.trim()===''){
            alert("post content is required !!")
            return
        }
        if(post.categoryId ===""){
            alert("select some category !!")
            return
        }


        //submit the form to the server 

        doCreatePost(post).then(data=>{
            alert("post Created");
            console.log(post)
        }).catch((error)=>{
            alert("error");
            console.log(error);
        })

    }


    return (
        <div className="wrapper">
            <Container >

                <Card className="shadow-sm border-0 m-4">
                    <CardBody>
                        {JSON.stringify(post)}
                        <h3>What going in your mind ?</h3>
                        <Form onSubmit={createPost}>
                            <div className="my-3">
                                <Label for="title" >Post tile </Label>
                                <Input
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder="Enter Here"
                                // className="rounded-15"
                                    onChange={fieldChange}
                                />
                            </div>
                            <div className="my-3">
                                <Label for="Content" >Post Content </Label>
                                {/* <Input 
                            type="textarea"
                            id="Content"
                            placeholder="Enter Here"
                            // className="rounded-15"
                            style={{height:'150px'}}
                            /> */}
                                <JoditEditor
                                    ref={editor}
                                    value={post.content}
                                  
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    onChange={contentFieldChanged}
                                />

                            </div>
                            <div className="my-3">
                                <Label for="category" >Post Category </Label>
                                <Input
                                    type="select"
                                    id="category"
                                    placeholder="Enter Here"
                                // className="rounded-15"
                                    name = "categoryId"
                                    onChange={fieldChange}
                                    defaultValue={0}

                                >

                                    <option disabled value={0}>--Select Category--</option>
                                    {
                                        categories.map((category) => (
                                            <option value={category.categoryId} key={category.categoryId}>
                                                {category.categoryTitle}
                                            </option>
                                        ))
                                    }


                                </Input>
                            </div>

                            <Container classsName="text-center">
                                <Button type="submit" className="rounded-80 ms-2" color="primary">Create Post </Button>
                                <Button className="rounded-80 ms-2" color="danger">Reset Content</Button>
                            </Container>

                        </Form>
                    </CardBody>
                </Card>
            </Container>


        </div>
    )
}

export default AddPost;