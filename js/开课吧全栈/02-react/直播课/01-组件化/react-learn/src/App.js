import React from 'react';
// import HocPage from './pages/HocPage';
import './App.css'
// import DialogPage from './pages/day1/DialogPage';
// import FormPage from './pages/FormPage';
// import FormPage2 from './pages/FormPage2';
// import MyFormPage from './pages/MyFormPage';
import ContextPage from './pages/day2/ContextPage'

function App() {
  return (
    <div className="App">
      {/* {=====day1=====} */}
      {/* {高阶组件} */}
      {/* <HocPage /> */}
      {/* {表单组件} */}
      {/* <FormPage /> */}
      {/* {表单组件 使用create} */}
      {/* <FormPage2 /> */}
      {/* {我的表单组件-实现create} */}
      {/* <MyFormPage /> */}
      {/* {弹框实现} */}
      {/* <DialogPage /> */}

      {/* {=====day2=====} */}
      <ContextPage />
    </div>
  );
}

export default App;
