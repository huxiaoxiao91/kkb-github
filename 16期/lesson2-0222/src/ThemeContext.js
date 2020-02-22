import React from "react";

// 创建Contetx，如果没有对应的Provider，value参数等同于传递给createContext的默认值
export const ThemeContext = React.createContext({themeColor: "pink"});
// 创建Provider，用于接收value，以传给消费组件
export const ThemeProvider = ThemeContext.Provider;

// 创建Consumer， 用于消费当前的context值，返回给一个React节点
export const ThemeConsumer = ThemeContext.Consumer;
