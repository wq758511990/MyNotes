import React, { useState, useRef, useEffect, useCallback } from "react";
import { Container, TopDesc, Menu } from "./style";
import { CSSTransition } from "react-transition-group";
import Header from "../../baseUI/header/index";
import Scroll from "../../baseUI/scroll/index";
import { getCount, isEmptyObject } from "../../api/utils";
import style from "../../assets/global-style";
import { connect } from "react-redux";
import { getAlbumList, changeEnterLoading } from "./store/actionCreators";
import Loading from "../../baseUI/loading/index";
import SongList from "../SongList/index";
import { HEADER_HEIGHT } from "../../api/config";

function Album(props) {
  const [showStatus, setShowStatus] = useState(true);
  const [isMarquee, setIsMarquee] = useState(false);
  const [title, setTitle] = useState("歌单");
  const headerEl = useRef();
  const { currentAlbum: list, enterLoading } = props;
  const { getAlbumDataDispatch } = props;
  const currentAlbum = list ? list.toJS() : {};
  // 从路由中拿到歌单的 id
  const id = props.match.params.id;

  useEffect(() => {
    getAlbumDataDispatch(id);
  }, [getAlbumDataDispatch, id]);

  const handleScroll = useCallback(
    (pos) => {
      let minScrollY = -HEADER_HEIGHT;
      let percent = Math.abs(pos.y / minScrollY);
      let headerDom = headerEl.current;
      // 滑过顶部的高度开始变化
      if (pos.y < minScrollY) {
        headerDom.style.backgroundColor = style["theme-color"];
        headerDom.style.opacity = Math.min(1, (percent - 1) / 2);
        setTitle(currentAlbum.name);
        setIsMarquee(true);
      } else {
        headerDom.style.backgroundColor = "";
        headerDom.style.opacity = 1;
        setTitle("歌单");
        setIsMarquee(false);
      }
    },
    [currentAlbum.name]
  );

  const handleBack = useCallback(() => {
    setShowStatus(false);
    // 这里如果在点击的时候跳转路由，则当前组件会被直接卸载掉，跳转动画就不出现
    // 故而要先执行跳转动画，在跳转动画结束的时候去执行路由跳砸
  }, []);

  const renderTopDesc = () => {
    return (
      <TopDesc background={currentAlbum.coverImgUrl}>
        <div className="background">
          <div className="filter"></div>
        </div>
        <div className="img_wrapper">
          <div className="decorate"></div>
          <img src={currentAlbum.coverImgUrl} alt="" />
          <div className="play_count">
            <i className="iconfont play">&#xe885;</i>
            <span className="count">
              {getCount(currentAlbum.subscribedCount)}
            </span>
          </div>
        </div>
        <div className="desc_wrapper">
          <div className="title">{currentAlbum.name}</div>
          <div className="person">
            <div className="avatar">
              <img src={currentAlbum.creator.avatarUrl} alt="" />
            </div>
            <div className="name">{currentAlbum.creator.nickname}</div>
          </div>
        </div>
      </TopDesc>
    );
  };

  const renderMenu = () => {
    return (
      <Menu>
        <div>
          <i className="iconfont">&#xe6ad;</i>
          评论
        </div>
        <div>
          <i className="iconfont">&#xe86f;</i>
          点赞
        </div>
        <div>
          <i className="iconfont">&#xe62d;</i>
          收藏
        </div>
        <div>
          <i className="iconfont">&#xe606;</i>
          更多
        </div>
      </Menu>
    );
  };

  const renderSongList = () => {
    return (
      <SongList
        songs={currentAlbum.tracks}
        showCollect={true}
        collectCount={currentAlbum.subscribedCount}
      ></SongList>
    );
  };

  return (
    <CSSTransition
      in={showStatus}
      timeout={300}
      classNames="fly"
      appear={true}
      unmountOnExit
      onExited={props.history.goBack}
    >
      <Container>
        <Header
          ref={headerEl}
          title={title}
          handleClick={handleBack}
          isMarquee={isMarquee}
        ></Header>
        {!isEmptyObject(currentAlbum) ? (
          <Scroll bounceTop={false} onScroll={handleScroll}>
            <div>
              {renderTopDesc()}
              {renderMenu()}
              {renderSongList()}
            </div>
          </Scroll>
        ) : null}
        {enterLoading ? <Loading></Loading> : null}
      </Container>
    </CSSTransition>
  );
}

const mapStateToProps = (state) => ({
  currentAlbum: state.getIn(["album", "currentAlbum"]),
  enterLoading: state.getIn(["album", "enterLoading"]),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbumDataDispatch(id) {
      dispatch(changeEnterLoading(true));
      dispatch(getAlbumList(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Album));
