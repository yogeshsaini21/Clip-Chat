import { useEffect,useState } from "react";
import { Button, Card, CardBody, Container,Form , Input, Label } from "reactstrap";
import { loadAllCategories } from "../services/categories-services";

const AddPost=()=>{

    const [categories ,setCategories]= useState([])
    
    useEffect(
        ()=>{
            loadAllCategories().then((data)=>{
                console.log(data)
                setCategories(data)
            }).catch(error=>{
                console.log(error)
            })
        },
        []
    )


    return (
        <div className="wrapper">
            <Container >
            <Card className="shadow-sm border-0 m-4">
                <CardBody>
                    <h3>What going in your mind ?</h3>
                    <Form>
                        <div className="my-3">
                            <Label for="title" >Post tile </Label>
                            <Input 
                            type="text"
                            id="title"
                            placeholder="Enter Here"
                            // className="rounded-15"
                            />
                        </div>
                        <div className="my-3">
                            <Label for="Content" >Post Content </Label>
                            <Input 
                            type="textarea"
                            id="Content"
                            placeholder="Enter Here"
                            // className="rounded-15"
                            style={{height:'150px'}}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="category" >Post Category </Label>
                            <Input 
                            type="select"
                            id="category"
                            placeholder="Enter Here"
                            // className="rounded-15"
                            
                            >
                               {
                                categories.map((category) => {
                                    <option key={category.categoryId}>
                                        {category.categoryTitle}
                                    </option>
                                })
                               }


                            </Input>
                        </div>

                            <Container classsName="text-center">
                                <Button className="rounded-80 ms-2" color="primary">Create Post </Button>
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