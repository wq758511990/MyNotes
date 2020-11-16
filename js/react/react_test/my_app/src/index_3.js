import React, { Fragment, Suspense, Profiler } from "react";
import ReactDom from "react-dom";
// import { OtherComponent } from './OtherComponent'; import 只能在js顶部

class Welcome extends React.Component {
  render() {
    return (
      // JSX表达式必须有个父元素
      <div>
        <h1>Welcome!</h1>
        <p>Thank you for coming</p>
      </div>
    );
  }
}
function ListItem(props) {
  const lists = props.list.map((num) => <dd>{num}</dd>);
  return (
    // 如果这是一个table的子组件 div可能会破坏table结构
    // 这时候应该用Fragment
    // 当你不需要在 fragment 标签中添加任何 prop 且你的工具支持的时候，你可以使用 短语法： 即 <></> 来代表Fragment
    <Fragment>
      <dt>1</dt>
      {lists}
    </Fragment>
  );
}

function MyTab() {
  return (
    <table>
      <ListItem list={[1, 2, 3, 4]} />
    </table>
  );
}

// React.lazy
// React.lazy可以动态引入模块文件, 如果用import xx from xx 只能在一开始就引入 并且要放在js文件顶部
const OtherComponent = React.lazy(() => import("./OtherComponent"));

function MyComponent() {
  return (
    <div>
      {/* 这里的OtherComponent 是通过 export default 导出的 */}
      {/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素。你可以将 Suspense 组件置
            于懒加载组件之上的任何位置。你甚至可以用一个 Suspense 组件包裹多个懒加载组件。 */}
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

// 在一个典型的 React 应用中，数据是通过 props 属性自上而下（由父及子）进行传递的，但这种做法对于某些类型的属性而言是极其繁琐的（例如：地区偏好，UI 主题
// ），这些属性是应用程序中许多组件都需要的。Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。

class App extends React.Component {
  render() {
    return <Toolbar theme="dark" />;
  }
}

function Toolbar(props) {
  return <ThemedButton theme={props.theme} />;
}

class ThemedButton extends React.Component {
  render() {
    return <Button theme={this.props.theme} />;
  }
}

// 如果不使用context， 则需要像上面那样每一级都要传递props

// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext({
  name: "123",
  age: 123,
});
class AppSec extends React.Component {
  render() {
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    return (
      <ThemeContext.Provider value={{ name: 123, age: 123 }}>
        <ToolbarSec />
      </ThemeContext.Provider>
    );
  }
}

function ToolbarSec() {
  // 这里就不需要接受props了
  return <ThemedButtonSec />;
}

class ThemedButtonSec extends React.Component {
  // 这里使用变量接收ThemeContext, 改组件会向上查找Themeprovider的值
  constructor(props) {
    super(props);
    this.state = {};
  }
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”
  // 这个contextType不能随便改
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />; // 这里用context指定上面的contextType
  }
}

function Button(props) {
  console.log(props);
  return <button></button>;
}

// context概念！！！

// 错误边界
// 错误边界是一种 React 组件，这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误
// ，并且，它会渲染出备用 UI，而不是渲染那些崩溃了的子组件树。错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误。

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(err) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(err, errinfo) {
    // 可以将日志上报
  }

  render() {
    return this.state.hasError ? (
      <h1>something went wrong</h1>
    ) : (
      this.props.children
    );
  }
}

function MyApp() {
  return (
    <ErrorBoundary>
      <div>everything is ok</div>
    </ErrorBoundary>
  );
}
// 错误边界的工作方式类似于 JavaScript 的 catch {}，不同的地方在于错误边界只针对 React 组件。只有 class 组件才可以成为错误边界组件。
// 大多数情况下, 你只需要声明一次错误边界组件, 并在整个应用中使用它。

// 注意错误边界仅可以捕获其子组件的错误，它无法捕获其自身的错误。

// Refs 转发
// Ref 转发是一个可选特性，其允许某些组件接收 ref，并将其向下传递（换句话说，“转发”它）给子组件。

// function FancyButton(props) {
//     return (
//         <button className="fancyButton">
//             {props.children}
//         </button>
//     )
// }

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function MyAppSec() {
  // 你可以直接获取 DOM button 的 ref：
  const ref = React.createRef();
  return <FancyButton ref={ref}> Click me!</FancyButton>;
}

// Fragments
// React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
// 即 若table内的数据被封装为另一个组件，可以用Fragment 将dd 包装起来而不用div，这样可以不需要额外添加div节点，导致破坏table结构

// 高阶组件（HOC）
// 具体而言，高阶组件是参数为组件，返回值为新组件的函数。

// 组件是将 props 转换为 UI，而高阶组件是将组件转换为另一个组件。

var DataSource = [];
// 函数接受一个组件
function withSubscription(WrappedComponent, selectData) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      // ...负责订阅相关的操作...
      DataSource.addChangeListener(() => this.handleChange());
    }

    componentWillUnmount() {
      // 负责销毁相关操作
      DataSource.removeChangeListener(() => this.handleChange());
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }

    render() {
      // ... 并使用新数据渲染被包装的组件!
      // 请注意，我们可能还会传递其他属性
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
}

// 请注意，HOC 不会修改传入的组件，也不会使用继承来复制其行为。相反，HOC 通过将组件包装在容器组件中来组成新组件。HOC 是纯函数，没有副作用。

// 深入 JSX
// 实际上，JSX 仅仅只是 React.createElement(component, props, ...children) 函数的语法糖。如下 JSX 代码：
/**
 * <MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
 */

// 编译为
/**
 * React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
 */

// 在 JSX 中，你也可以使用点语法来引用一个 React 组件。当你在一个模块中导出许多 React 组件时，
// 这会非常方便。例如，如果 MyComponents.DatePicker 是一个组件，你可以在 JSX 中直接使用

// 用户定义的组件必须以大写字母开头

// return <components[props.storyType] story={props.story} />; 错误！JSX 类型不能是一个表达式。
// 可以先把表达式赋值给一个大写字母开头的变量，然后用变量作为JSX来兴

// 如果你没给 prop 赋值，它的默认值是 true。以下两个 JSX 表达式是等价的：
/**
 * 
 * <MyTextBox autocomplete />
   <MyTextBox autocomplete={true} />
 */

function App2() {
  const props = { firstName: "Li", lastname: "Lei" };
  return (
    // 可以使用...来结构props
    // <Greeting {...props} />
    <div>1</div>
  );
}

// 你还可以选择只保留当前组件需要接收的 props，并使用展开运算符将其他 props 传递下去

const ButtonSec = (props) => {
  // 这样子就只接收props中的kind，其余的全都传给其他组件或者做其他处理
  const { kind, others } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...others} />;
};

const AppThird = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        Hello World!
      </Button>
    </div>
  );
};

// false, null, undefined, and true 是合法的子元素。但它们并不会被渲染。
// 所以可以使用类似 {flag && <SomeCom />} 的条件渲染方法， 但是需要注意的是0依然会被渲染
// 所以 {0 && <SomeCom />} 不会如期执行， 他依然会被渲染出来
// 如果想要渲染 false null 等值， 需要先将其转换为字符串

// shouldComponentUpdate 的作用
// 如果你的组件只有当 props.color 或者 state.count 的值改变才需要更新时，你可以使用 shouldComponentUpdate 来进行检查：
// 即 根据指定的值来判断是否要更新组件

// Portal 提供了一种将子节点渲染到存在于父组件以外的 DOM 节点的优秀的方案。
// ReactDOM.createPortal(child, container)
// 第一个参数（child）是任何可渲染的 React 子元素，例如一个元素，字符串或 fragment。第二个参数（container）是一个 DOM 元素。

function ProtalTest(props) {
  // 通常来讲，当你从组件的 render 方法返回一个元素时，该元素将被挂载到 DOM 节点中离其最近的父节点：
  // return (
  //     <div>
  //         {this.props.children}
  //     </div>
  // )

  // React 并*没有*创建一个新的 div。它只是把子元素渲染到 `domNode` 中。
  // `domNode` 是一个可以在任何位置的有效 DOM 节点。
  const domNode = <div>123</div>;
  return ReactDom.createPortal(this.props.children, domNode);
}

// 一个从 portal 内部触发的事件会一直冒泡至包含 React 树的祖先，即便这些元素并不是 DOM 树 中的祖先。

const appRoot = document.getElementById("appRoot");
const anotherRoot = document.getElementById("anotherRoot");

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    anotherRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    anotherRoot.removeChild(this.el);
  }

  render() {
    return ReactDom.createPortal(this.props.children, this.el);
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick() {
    this.setState((state) => ({
      clicks: state.clicks + 1,
    }));
  }

  childBack() {
    // id, // 发生提交的 Profiler 树的 “id”
    // phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    // actualDuration, // 本次更新 committed 花费的渲染时间
    // baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    // startTime, // 本次更新中 React 开始渲染的时间
    // commitTime, // 本次更新中 React committed 的时间
    // interactions // 属于本次更新的 interactions 的集合

    // id: string - 发生提交的 Profiler 树的 id。 如果有多个 profiler，它能用来分辨树的哪一部分发生了“提交”。
    // phase: "mount" | "update" - 判断是组件树的第一次装载引起的重渲染，还是由 props、state 或是 hooks 改变引起的重渲染。
    // actualDuration: number - 本次更新在渲染 Profiler 和它的子代上花费的时间。 这个数值表明使用 memoization 之后能表现得多好。（例如 React.memo，useMemo，shouldComponentUpdate）。 理想情况下，由于子代只会因特定的 prop 改变而重渲染，因此这个值应该在第一次装载之后显著下降。
    // baseDuration: number - 在 Profiler 树中最近一次每一个组件 render 的持续时间。 这个值估计了最差的渲染时间。（例如当它是第一次加载或者组件树没有使用 memoization）。
    // startTime: number - 本次更新中 React 开始渲染的时间戳。
    // commitTime: number - 本次更新中 React commit 阶段结束的时间戳。 在一次 commit 中这个值在所有的 profiler 之间是共享的，可以将它们按需分组。
    // interactions: Set - 当更新被制定时，“interactions” 的集合会被追踪。（例如当 render 或者 setState 被调用时）。

    for (var i = 0; i < arguments.length; i++) {
      console.log("i", arguments[i]);
    }
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools to observe that the button is not a child
          of the div with the onClick handler.
        </p>
        <Modal>
          <Profiler
            id="Child"
            onRender={(e, v, a, b, c, d, f) =>
              this.childBack(e, v, a, b, c, d, f)
            }
          >
            <Child />
          </Profiler>
        </Modal>
      </div>
    );
  }
}

function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>click</button>
    </div>
  );
}

// React 的 diff 算法 https://react.docschina.org/docs/reconciliation.html

//Refs 是使用 React.createRef() 创建的，并通过 ref 属性附加到 React 元素。在构造组件时，通常将 Refs 分配给实例属性，以便可以在整个组件中引用它们。

// 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中被访问。

class MyCom extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef}></div>;
  }
}

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput() {
    this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.textInput} />
        <input
          type="button"
          value="focus the text input"
          onClick={() => this.focusTextInput()}
        />
      </div>
    );
  }
}
// 默认情况下，你不能在函数组件上使用 ref 属性，因为它们没有实例：

// 组件是 React 代码复用的主要单元，但如何分享一个组件封装到其他需要相同 state 组件的状态或行为并不总是很容易。
// 例如，以下组件跟踪 Web 应用程序中的鼠标位置：

// class MouseTracker extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             x: 0,
//             y: 0
//         }
//     }

//     handleMouseMove(e) {
//         this.setState({
//             x: e.clientX,
//             y: e.clientY
//         })
//     }

//     render() {
//         return (
//             <div style={{height: "100vh"}} onMouseMove={(e) => this.handleMouseMove(e)}>
//                 <h1>移动鼠标!</h1>
//                 <p>当前的鼠标位置是 ({this.state.x}, {this.state.y})</p>
//             </div>
//         )
//     }
// }

// 现在的问题是：我们如何在另一个组件中复用这个行为？换个说法，若另一个组件需要知道鼠标位置，我们能否封装这一行为，以便轻松地与其他组件共享它？？

class Cat extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        alt=""
        src="https://tse2-mm.cn.bing.net/th/id/OIP.mCqrCW7WDxap4s4W19ouUwHaF0?w=214&h=180&c=7&o=5&pid=1.7"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
    };
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  }

  render() {
    return (
      <div
        style={{ height: "100vh" }}
        onMouseMove={(e) => this.handleMouseMove(e)}
      >
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标！</h1>
        <Mouse render={(mouse) => <Cat mouse={mouse} />} />
      </div>
    );
  }
}

ReactDom.render(<MouseTracker />, document.getElementById("root"));
