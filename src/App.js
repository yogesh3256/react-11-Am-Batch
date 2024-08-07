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
import Parent from './Component/props/Parrent';
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
import RowColSpanTable from './Component/task/table/RowColSpanTable';
import DropDownTable from './Component/Dependant Dropdown/DropDownTable';
import TableApi from './Component/task/table/TableApi';
import Hide_Passward from './Component/practice Task/HidepassWord/Hide_Passward';
import StudentModal from './Component/task/table/StudentModal';
import UseFieldArrayForm from './Component/hookform/useFieldArray/UseFieldArrayForm';
import HookFormTAsk from './Component/hookform/hookformask/HookFormTAsk';
import ArrayMapTask from './Component/nestedArrayTask/ArrayMapTask';
import Api_Handle_Pro from './Component/Api_Handle_Like_PRO/Api_Handle_Pro';
import DependantMappingParrent from './Component/Dependant Dropdown/dependent Mapping/DependantMappingParrent';
import ArrayOfObjectVAlidation from './Component/hookform/useFieldArray/ArrayOfObjectVAlidation';
import RecurrsiveMapping from './Component/nestedArrayTask/RecursiveMapping/RecurrsiveMapping';
import Addiction from './Component/CustomHooks/Addiction';
import TodoAppUseContext from './Component/Todo app/todocomponent/TodoAppUseContext';
import { TodoProvider } from './Component/Todo app/todoContext/TodoProvider';
import PaginationTableTask from './Component/Pagination Table/PaginationTableTask';
import PaginationWithApi from './Component/Pagination Table/PaginationWithApi';
import HookFormPropTest from './Component/hookform/HookFormPropTest';
import DrawerDashBoard from './Component/practice/drawer/DrawerDashBoard';
import PracticeUseFieldArray from './Component/hookform/useFieldArray/PracticeUseFieldArray';
import PacitceTask from './Component/practice/practice Task/PacitceTask';




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

        {/* practice Task */}
        {/* <Hide_Passward/> */}
        <PacitceTask/>

        {/* <Todoapp/> */}
        {/* <Dropdown/> */}
        {/* <DependantMappingParrent/> */}
        {/* <ArrayOfObjectVAlidation/> */}
        {/* <PracticeUseFieldArray/> */}


        {/* <Form/>   */}
        {/* <Task/>     */}
        {/* <ParrentComponent/> */}
        {/* <CommonTable/>       */}
        {/* <ItemMaster/> */}
        {/* <Navbar/> */}
        {/* <ModalAdd/> */}
        
 {/* <ParrentTab/> */}
        {/* <UseFieldArrayForm/> */}
{/* <HookFormPropTest/> */}
{/* <DrawerDashBoard/> */}

        {/* <DateTaskForm/> */}

        {/* <Date/> */}
        {/* <Time/> */}

        {/* <AxiosFetchApi/> */}
        {/* <RowColSpanTable/> */}
        {/* <DocItLoginForm/> */}
        {/* <DropDownTable/> */}
        {/* <TableApi/> */}
        {/* <HookFormTAsk/> */}
        {/* <ArrayMapTask/> */}
        {/* <RecurrsiveMapping/> */}


        {/* API Handle Like a PRo */}
        {/* <Api_Handle_Pro/> */}

        {/* custom Hooks */}
        {/* <Addiction/> */}
        {/* <TodoProvider>
          <TodoAppUseContext />
        </TodoProvider> */}
        {/* <PaginationTableTask/> */}
        {/* <PaginationWithApi /> */}


      </SnackbarProvider>
    </>
  )
}

export default App;
