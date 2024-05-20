import React, { useState } from 'react'

// import StepperEx from './Component/Stepper/StepperEx'
import { NewContext } from './Component/Contextapi/Newcontext';
// import { Link, Route, Routes } from 'react-router-dom';
// import Contact from './Component/router/Contact';
// import About from './Component/router/About';
// import Home from './Component/router/Home';
import Drugs from './Component/form/Drugs';

// import Dashboard from './Component/form/Dashboard';
// import Feedback from './Component/form/Feedback';
// import About from './Component/form/About';
// import Feedbackarr from './Component/form/Feedbackarr';
// react tostify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import UsestateEffect from './Component/hooks/UsestateEffect';
// import Usememoo from './Component/hooks/UseMemoo';
// import Usecallback from './Component/hooks/Usecallback';
// import Useref from './Component/hooks/Useref';
// import Homepage from "./Component/gativantask/Homepage";
// import InputFeildTask from './Component/task/InputfeildTask';
// import InputCheckbox from './Component/form/InputCheckbox';
// import Counter from './Component/task/Counter';
// import Parent from './Component/props/Parrent';
import Curdopration from './Component/curdoperation/Curdoperation'
import Contact from './Component/router/Contact';
import { Home } from '@mui/icons-material';
// import UsecontextApi from './Component/hooks/UsecontextApi';
// import SpreadOperator from './Component/spraed operators/SpreadOperator';
import ValidationForm from './Component/form/ValidationForm';
import Count from './Component/practice/custom hook/Count';
import Count2 from './Component/practice/custom hook/Count2';
import Usereducer from './Component/practice/usereducer/Usereducer';
import Input from './Component/task/table/Input';
import Todoapp from './Component/Todo app/Todoapp';
import ProductList from './Component/fillterproject/ProductList';
import Dropdown from './Component/Dependant Dropdown/Dropdown';
import Form from './Component/hookform/Form';
import Task from './Component/hookform/Task';
import ParrentComponent from './Component/hookform/form/ParrentComponent';
 import { SnackbarProvider } from 'notistack';
import { Slide } from "@mui/material";
import CommonTable from './Component/GST&DISCOUNT/Table';
import ItemMaster from './Component/GST&DISCOUNT/nitinsir_method/ItemMaster';
import Navbar from './Component/react-router-dom/Navbar';
import ModalAdd from './Component/commonTable/ModalAdd';
import ParrentTab from './Component/Contextapi/usecontext/ParrentTab';
import DateTaskForm from './Component/form/DateTask/DateTaskForm';
import Date from './Component/form/DateTask/Date';
import Time from './Component/form/DateTask/Time';
import UseReducerForm from './Component/practice/usereducer/UseReducerForm';
import AxiosFetchApi from './Component/Axios/AxiosFetchApi';
import DocItLoginForm from './Component/form/Doc it form/DocItLoginForm';


 
function App() {                     
  // const notify = () => toast("Wow so easy!");

  return (
    <>
      <SnackbarProvider
        TransitionComponent={Slide}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}>
    {/* <SpreadOperator/> */}
      {/* <StepperEx/> */}
     
      {/* <ProductList/> */}
       
       

      {/* <Link to='/' className=' underline'>Home</Link><br/>
        <Link to='/contact' className=' underline'>Contact</Link><br/>
        <Link to='/ about' className=' underline'>about</Link>
     
      <Routes>
      
        <Route path='/'element={< Home/>}  />
        <Route path='/Contact' element={< Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes> */}


      {/* <Drugs/> */}

      {/* <Feedbackarr/> */}
      {/* <InputCheckbox/> */}
       {/* <ValidationForm/>  */}
  
{/* 
      <Routes>
      
        <Route  path='/' exact element ={<Dashboard/>}/>
        <Route  path='/feedback'  exact element ={<Feedback/>}/>
        <Route  path='/about'  exact element ={< About/>}/>
       </Routes>
      */}



      {/* react  tostify button */}
      {/* <button onClick={notify}>Notify!</button> *
      {/* <ToastContainer /> */}

      {/* <Homepage/> */}
      {/* <InputFeildTask/> */}
      {/* <Counter/> */}














      {/* hooks form */}
      {/* <UsestateEffect/> */}
      {/* <Usememoo/> */}
      {/* <Usecallback /> */}
      {/* <Useref/> */}
      {/* <UsecontextApi/> */}
      



      {/* <Parent/> */}


      {/* <Curdopration/> */}
      {/* <Count/> */}
      {/* <Count2/> */}
      {/* <Usereducer/>    */}
{/* <UseReducerForm/> */}
      {/* <Input/> */}




      {/* <Todoapp/> */}
      {/* <Dropdown/> */}

{/* <Form/>   */}
{/* <Task/>    `` */}
{/* <ParrentComponent/> */}
{/* <CommonTable/>       */}
 {/* <ItemMaster/> */}
 {/* <Navbar/> */}
 {/* <ModalAdd/> */}
{/* 
 <ParrentTab/> */}


 {/* <DateTaskForm/>
  */}
 {/* <Date/> */}
 {/* <Time/> */}

 {/* <AxiosFetchApi/> */}
 <DocItLoginForm/>
    </SnackbarProvider>
    </>
  )
}

export default App;
