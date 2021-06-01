## interface 和 type

大部分情况下，两者都可以互换

1、定义联合类型时， interface 无法取代 type
例如

```
type FavoriteNumber = string | number
```

这里无法用 interface 替代 type

2、interface 也无法实现 Utility type: 用泛型给他传入一个其他类型， utility type 对这个类型进行操作，例如 Partial Omit Parameters 等等
