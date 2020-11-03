import React, {
  forwardRef,
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import BScroll from "better-scroll";
import styled from "styled-components";
import PropTypes from "prop-types";

const ScrollContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const Scroll = forwardRef((props, ref) => {
  //better-scroll 实例对象
  const [bScroll, setBScroll] = useState();
  //current 指向初始化 bs 实例需要的 DOM 元素
  const scrollContainerRef = useRef();
  const { direction, click, refresh, bounceTop, bounceBottom } = props;
  const { pullUp, pullDown, onScroll } = props;

  useEffect(() => {
    // 初始化BScroll以及销毁
    const scroll = new BScroll(scrollContainerRef.current, {
      scrollX: direction === "horizental",
      scrollY: direction === "vertical",
      probeType: 3,
      click: click,
      bounce: {
        top: bounceTop,
        bottom: bounceBottom,
      },
    });
    setBScroll(scroll);
    return () => {
      setBScroll(null);
    };
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    // 给实例绑定 scroll 事件，
    // 如果bscroll 或者 onScroll 任意为空， 不处理
    if (!bScroll || !onScroll) return;
    bScroll.on("scroll", (scroll) => {
      onScroll(scroll);
    });
    return () => {
      // 卸载的时候取消绑定事件
      bScroll.off("scroll");
    };
  }, [onScroll, bScroll]);

  useEffect(() => {
    // 进行上拉到底的判断，调用上拉刷新的函数
    if (!bScroll || !pullUp) return;
    bScroll.on("scrollEnd", () => {
      // 判断是否滑动到了底部
      if (bScroll.y <= bScroll.maxScrollY + 100) {
        pullUp();
      }
    });
    return () => {
      bScroll.off("scrollEnd");
    };
  }, [pullUp, bScroll]);

  useEffect(() => {
    // 进行下拉的判断，调用下拉刷新的函数
    if (!bScroll || !pullDown) return;
    bScroll.on("touchEnd", (pos) => {
      // 判断用户的下拉动作
      if (pos.y > 50) {
        pullDown();
      }
    });
    return () => {
      bScroll.off("touchEnd");
    };
  }, [pullDown, bScroll]);

  useEffect(() => {
    // 每次重新渲染都要刷新实例，防止无法滑动:
    if (refresh && bScroll) {
      bScroll.refresh();
    }
  });

  useImperativeHandle(ref, () => ({
    // 一般和 forwardRef 一起使用，ref 已经在 forWardRef 中默认传入
    // 给外界暴露 refresh 方法
    refresh() {
      if (bScroll) {
        bScroll.refresh();
        bScroll.scrollTo(0, 0);
      }
    },
    // 给外界暴露 getBScroll 方法，提供 bs 实例
    getBscroll() {
      if (bScroll) {
        return bScroll;
      }
    },
  }));

  return (
    <ScrollContainer ref={scrollContainerRef}>{props.children}</ScrollContainer>
  );
});

Scroll.defaultProps = {
  direction: "vertical",
  click: true,
  refresh: true,
  onScroll: null,
  pullUpLoading: false,
  pullDownLoading: false,
  pullUp: null,
  pullDown: null,
  bounceTop: true,
  bounceBottom: true,
};

Scroll.propTypes = {
  direction: PropTypes.oneOf(["vertical", "horizental"]), // 滚动的方向
  click: true, // 是否支持点击
  refresh: PropTypes.bool, // 是否刷新
  onScroll: PropTypes.func, // 滑动触发的回调函数
  pullUp: PropTypes.func, // 上拉加载逻辑
  pullDown: PropTypes.func, // 下拉加载逻辑
  pullUpLoading: PropTypes.bool, // 是否显示上拉 loading 动画
  pullDownLoading: PropTypes.bool, // 是否显示下拉 loading 动画
  bounceTop: PropTypes.bool, // 是否支持向上吸顶
  bounceBottom: PropTypes.bool, // 是否支持向下吸底
};

export default Scroll;
