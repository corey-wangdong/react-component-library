/*
 * @Author: wangDong Xu
 * @Date: 2022-01-15 21:16:09
 * @LastEditors: wangDong Xu
 * @LastEditTime: 2022-01-16 11:00:58
 * @Description: file content
 * @FilePath: /react-component-library/react-components-design/components/nav-bar/index.tsx
 * @motto: It's not hard to give up, but it must be cool to persist.
 */

import React from 'react';
import './index.scss';


interface NavbarProps {
  /**
   * 返回上一页面点击事件
   */
  onNavigateBack?: () => void;
  /**
   * 导航栏标题
   */
  title?: string;
  /**
   * (default: 20px) 状态栏高度
   */
  statusBarHeight?: number;
  /**
   * (default: iOS 44px, Android 48px) 导航栏高度
   */
  height?: number;
  /**
   * (default: #fff) 导航栏背景颜色，如 #000000
   */
  backgroundColor?: string;
  /**
   * (default: black) 导航栏标题颜色
   */
  textColor?: string;
  /**
   * (default: 17px) 导航栏标题字体大小
   */
  fontSize?: number;
  /**
   * (default: bold) 导航栏标题字重
   */
  fontWeight?: number | 'normal' | 'bold' | 'bolder' | 'lighter';
  /**
   * (default: #000000) 前景颜色值，包括按钮、状态栏的颜色，仅支持 #ffffff 和 #000000
   */
  navigationBarTextStyle?: '#ffffff' | '#000000';
}


let isAndroid = false;
if (typeof navigator !== 'undefined') {
  isAndroid = navigator.userAgent.indexOf('Android') > -1;
}
const statusBarHeight = isAndroid ? 25 : 20;
const navHeight = isAndroid ? 48 : 44;

function NavBar(props: NavbarProps) {
  const {
    title,
    statusBarHeight,
    height,
    backgroundColor,
    textColor,
    fontSize,
    fontWeight,
    onNavigateBack,
    navigationBarTextStyle,
  } = props;

  const handleNavigateBack = () => {
    onNavigateBack && onNavigateBack();
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        className="navigation"
        style={{
          backgroundColor,
          paddingTop: statusBarHeight,
        }}
      >
        <div
          className="navigation__bar"
          style={{
            height,
            lineHeight: height + 'px',
          }}
        >
          <div
            className="navigation__bar__left"
            style={{ height }}
            onClick={handleNavigateBack}
          >
            <div
              className="navigation__bar__left__back-btn__iocn"
              style={{
                backgroundColor: navigationBarTextStyle,
              }}
            />
          </div>
          <div className="navigation__bar__center">
            <span
              className="navigation__bar__center__title"
              style={{
                color: textColor,
                fontSize,
                fontWeight,
              }}
            >
              {title}
            </span>
          </div>
          <div className="navigation__bar__right" style={{ height }} />
        </div>
      </div>
      {/* 占位 */}
      <div
        style={{
          height,
          paddingTop: statusBarHeight,
        }}
      />
    </div>
  )
}

export default NavBar;
