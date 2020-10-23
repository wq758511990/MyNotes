import React from 'react';
// import HocPage from './pages/HocPage';
import './App.css'
// import FormPage from './pages/FormPage';
// import FormPage2 from './pages/FormPage2';
import MyFormPage from './pages/MyFormPage';

function App() {
  return (
    <div className="App">
      {/* {高阶组件} */}
      {/* <HocPage /> */}
      {/* {表单组件} */}
      {/* <FormPage /> */}
      {/* {表单组件 使用create} */}
      {/* <FormPage2 /> */}
      {/* {我的表单组件-实现create} */}
      <MyFormPage />
    </div>
  );
}

export default App;
