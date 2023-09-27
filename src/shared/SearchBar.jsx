import React,{useRef} from "react";
import './../shared/search-bar.css'
import {Col,Form,Row,Container, FormGroup} from "reactstrap";

const SearchBar = () => {

  const WheretoRef = useRef('')
  const NoofDaysRef = useRef(0)
  const MaxpeopleRef = useRef(0)

  const searchHandler = () =>{
    const Whereto = WheretoRef.current.value
    const NoofDays = NoofDaysRef.current.value
    const Maxpeople = MaxpeopleRef.current.value
  

  if (Whereto ==='' ||NoofDays ==='' || Maxpeople){
     return alert("All field are required!!")}
     else
     {return alert("Processing Request...")}
  }


    return <Col lg="12">
    <div className="search__bar">
      <Form className="d-flex align-items center gap-4">
      <FormGroup className="d-flex gap-3 form__group form__group-fast">
        <span><i class="ri-map-pin-line"></i></span>
        <div>
          <h5>Where to</h5>
          <input type="text" placeholder="eg:Mumbai,Paris" ref={WheretoRef}/>
        </div>
      </FormGroup>

      <FormGroup className="d-flex gap-3 form__group form__group-fast">
        <span><i class="ri-calendar-check-line"></i></span>
        <div>
          <h5>No of Days</h5>
          <input type="number" placeholder="eg:1,2,3" ref={NoofDaysRef}/>
        </div>
      </FormGroup>

      <FormGroup className="d-flex gap-3 form__group form__group-fast">
        <span><i class="ri-group-line"></i></span>
        <div>
          <h5>Max people</h5>
          <input type="number" placeholder="eg:1,2,3" ref={MaxpeopleRef}/>
        </div>
      </FormGroup>

      <span className="search__icon" type="submit" onSubmit={searchHandler}><i class="ri-search-2-line"></i></span>
      </Form>
    </div>
  </Col>
};


export default SearchBar

