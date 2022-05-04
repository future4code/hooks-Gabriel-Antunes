import React from "react";
import { FirstPage, Inputs, FormName, Options, Option } from "./styles";
import FreeInput from "../FreeInput";
import InputName from "../InputName";
import LockInput from "../LockInput";
import Final from "../Final";
import Button from "../Button";

class Form extends React.Component {
  state = {
    name:"",
    age:"",
    course:"",
    university:"",
    notStudy:"",

    highSchoolFinished: { result: false, value: "Finished High School" },
    highSchoolUnfinished: { result: false, value: "UnFinished High School" },
    collegeEducationFinished: {result: false, value: "Finished College Education"},
    collegeEducationUnfinished: {result: false, value: "Unfinished College Education"},

    optionCourse1: "Study vocational career",
    optionCourse2: "English",
    optionCourse3: "Other",
    optionCourse4: "I did not take any complementary courses",

    selector: "Current State of Studies",
    otherCourses: "Answer here",

    showOptions: false,
    college:Boolean,
    page:"home",
  
  };

  saveName=""
  

  onChangeName=(e)=>{this.setState({name:e.target.value})};
  onChangeCourse=(e)=>{this.setState({course:e.target.value})};
  onChangeUniversity=(e)=>{this.setState({university:e.target.value})};
  onChangeNotStudy=(e)=>{this.setState({notStudy:e.target.value})};

  onClickOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  };
  onClickOption1 = () => {
    this.setState({ selector: this.state.highSchoolFinished.value });
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({college:false});
  };
  onClickOption2 = () => {
    this.setState({ selector: this.state.highSchoolUnfinished.value });
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({college:false});
  };
  onClickOption3 = () => {
    this.setState({ selector: this.state.collegeEducationFinished.value });
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({college:true});
  };
  onClickOption4 = () => {
    this.setState({ selector: this.state.collegeEducationUnfinished.value });
    this.setState({ showOptions: !this.state.showOptions });
    this.setState({college:true});
  };
onClickCourse1 = () =>{
    this.setState({otherCourses:this.state.optionCourse1});
    this.setState({ showOptions: !this.state.showOptions });
}
onClickCourse2 = () =>{
    this.setState({otherCourses:this.state.optionCourse2});
    this.setState({ showOptions: !this.state.showOptions });
}  
onClickCourse3 = () =>{
    this.setState({otherCourses:this.state.optionCourse3});
    this.setState({ showOptions: !this.state.showOptions });
}
onClickCourse4 = () =>{
    this.setState({otherCourses:this.state.optionCourse4});
    this.setState({ showOptions: !this.state.showOptions });
}

goToFinal = (event)=>{
  event.preventDefault();
  this.setState({page:"final"})
}
goNextPage = (event)=>{
  event.preventDefault();
  this.saveName = this.state.name;
  console.log(this.state.college);
  if(this.state.college === true){
    this.setState({page:'with college'});
    console.log(this.state.college);
  }if(this.state.college === false){
    this.setState({page:'without college'})
  }
  this.setState({name:""});
  this.setState({age:""});

}

  render() {
    const showPage = () =>{
      switch(this.state.page){
      case "home":
        return (
          <FirstPage>
            <FormName>LabenuForms</FormName>
            <Inputs>
                <InputName name="Name:" type='text'/>
                <FreeInput placeholder="Enter your full name" value={this.state.name} onChange={this.onChangeName}/>
            </Inputs>
            <Inputs>
                <InputName name="Age:" type='number'/>
                <FreeInput placeholder="How old are you?"/>
            </Inputs>
            <Inputs>
                <InputName name="E-mail:" type='email'/>
                <FreeInput placeholder="Enter your e-mail"/>
            </Inputs>
            <Inputs>
                <LockInput onClickOptions={this.onClickOptions} question={this.state.selector} />
            </Inputs>
            <Options visible={this.state.showOptions}>
                <Option onClick={this.onClickOption1}>{this.state.highSchoolFinished.value}</Option>
                <Option onClick={this.onClickOption2}>{this.state.highSchoolUnfinished.value}</Option>
                <Option onClick={this.onClickOption3}>{this.state.collegeEducationFinished.value}</Option>
                <Option onClick={this.onClickOption4}>{this.state.collegeEducationUnfinished.value}</Option>
            </Options>
            <Button onClick={this.goNextPage} content='Next'/>
        </FirstPage>
         )
      case "with college":
        return(
          <FirstPage>
             <FormName>LabenuForms</FormName>
                <Inputs>
                <InputName name="Course:" />
                <FreeInput placeholder="Enter the course name" value={this.state.course} onChange={this.onChangeCourse}/>
                </Inputs>
                <Inputs>
                <InputName name="University:" />
                <FreeInput placeholder="Enter the university name" value={this.state.university} onChange={this.onChangeUniversity}/>
                </Inputs>
                <Button onClick={this.goToFinal} content='Next'/>
            </FirstPage>
            )
      case "without college":
          return(
            <FirstPage>
              <FormName>LabenuForms</FormName>
              <Inputs>
                <InputName name="why didn't you go to college?" />
                <FreeInput placeholder="Answer here" value={this.state.notStudy}onChange={this.onChangeNotStudy} />
              </Inputs>
              <Inputs>
                  <InputName name="Did you take other courses?" />
                  <LockInput onClickOptions={this.onClickOptions} question={this.state.otherCourses} />
              </Inputs>
              <Options visible={this.state.showOptions}>
                  <Option onClick={this.onClickCourse1}>{this.state.optionCourse1}</Option>
                  <Option onClick={this.onClickCourse2}>{this.state.optionCourse2}</Option>
                  <Option onClick={this.onClickCourse3}>{this.state.optionCourse3}</Option>
                  <Option onClick={this.onClickCourse4}>{this.state.optionCourse4}</Option>
              </Options>
              <Button onClick={this.goToFinal} content='Next'/>
            </FirstPage>
          )
          case "final":
            return(
              <FirstPage>
                <FormName>LabenuForms</FormName>
                <Final name={this.saveName}/>
              </FirstPage>
            )

      } 
    }
    
      return (
      <FirstPage>
       {showPage()}
      </FirstPage>
    );
  }
}
export default Form
