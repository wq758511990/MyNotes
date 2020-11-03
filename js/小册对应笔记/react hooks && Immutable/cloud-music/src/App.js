import React from "react";
import { GlobalStyle } from "./style";
import { IconStyle } from "./assets/iconfont/iconfont";
import { renderRoutes } from "react-router-config"; //renderRoutes 读取路由配置转化为 Route 标签
import store from "./store/index";
import { Provider } from "react-redux";
import routes from "./routes/index";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <GlobalStyle></GlobalStyle>
          <IconStyle></IconStyle>
          {renderRoutes(routes)}
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
