import React from 'react'
export const ThemeContext = React.createContext() // 生成上下文
export const ThemeProvider = ThemeContext.Provider
// 消费
export const ThemeConsumer = ThemeContext.Consumer