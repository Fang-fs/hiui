# 更新日志

# 3.8.0

- 新增 所有组件 props TS 类型定义的导出  [#1933](https://github.com/XiaoMi/hiui/issues/1933)
- 新增 `Modal` confirmLoading 控制确定按钮的 loading 状态 [#1866](https://github.com/XiaoMi/hiui/issues/1866)
- 新增 `Cascader` onOpen 下拉菜单打开、onClose 下拉菜单关闭回调方法，优化动态加载数据功能 [#1854](https://github.com/XiaoMi/hiui/issues/1854)
- 新增 `Table` 组件 align 属性接受 center 属性 [#1835](https://github.com/XiaoMi/hiui/issues/1835)
- 新增 `Table` 组件 拖拽功能 [#1851](https://github.com/XiaoMi/hiui/issues/1851)
- 新增 `Table` 组件 自定义列筛选 [#1850](https://github.com/XiaoMi/hiui/issues/1850)
- 新增 `Table` 树形组件 onExpand 事件 [#1939](https://github.com/XiaoMi/hiui/issues/1939)
- 新增 `Select` 组件 renderExtraFooter 自定义下拉菜单底部渲染函数 [#1864](https://github.com/XiaoMi/hiui/issues/1864)
- 新增 `Select` 组件 onBlur 事件 [#1901](https://github.com/XiaoMi/hiui/issues/1901)
- 新增 `SelectTree` 组件 className 设置 [#1921](https://github.com/XiaoMi/hiui/issues/1921)
- 新增 `Tree` 组件指定节点设置 selectable [#1893](https://github.com/XiaoMi/hiui/issues/1893)
- 新增 `DatePicker` 组件中对时间选择器的禁选功能 [#1917](https://github.com/XiaoMi/hiui/issues/1917)
- 新增 `SelectTree` 组件节点支持 disabled 禁用状态 [#1870](https://github.com/XiaoMi/hiui/issues/1870)
- 新增 `SelectTree` 组件节点支持 fieldNames 属性 [#1879](https://github.com/XiaoMi/hiui/issues/1879)
- 优化 `DatePicker` 组件在 `Table` 组件中受控形态下无法选中问题 [#1844](https://github.com/XiaoMi/hiui/issues/1844)
- 优化 `Carousel` 组件内容宽度根据容器改变自适应 [#1834](https://github.com/XiaoMi/hiui/issues/1834)
- 优化 `Select` 组件多选模式标签顺序与value顺序一致化 [#1898](https://github.com/XiaoMi/hiui/issues/1898)
- 优化 `Charts` 组件文档中对 echarts 版本约束 [#1896](https://github.com/XiaoMi/hiui/issues/1896)
- 优化 `Tabs` 组件滚动方向交互控制 [#1928](https://github.com/XiaoMi/hiui/issues/1928)
- 优化 `Message` 组件文本溢出折行处理 [#1936](https://github.com/XiaoMi/hiui/issues/1936)
- 修复 `Cascader` 组件 异步加载在受控形态下，无法选中数据 [#1875](https://github.com/XiaoMi/hiui/issues/1875)
- 修复 `Form` 组件对 Counter 组件默认值为 0 校验异常问题 [#1842](https://github.com/XiaoMi/hiui/issues/1842)
- 修复 `Preview` 组件，图片打开失败时，页面一直处在加载状态 [#1816](https://github.com/XiaoMi/hiui/issues/1816)
- 修复 `HiRequest` 在 type='download'时 不能正确解析 filename 问题 [#1820](https://github.com/XiaoMi/hiui/issues/1820)
- 修复 `SelectTree` searchMode 为 filter 时，搜索后勾选，SelectTree 已选节点被清空 [#1791](https://github.com/XiaoMi/hiui/issues/#1791)
- 修复 `Select` data 属性发生改变，选中值未更新问题 [#1823](https://github.com/XiaoMi/hiui/issues/1823)
- 修复 `Popper` 基础弹层组件弹出位置未能及时更新问题 [#1857](https://github.com/XiaoMi/hiui/issues/1857)
- 修复 `Form` 组件中使用 schemaFrom 时，schema 更新未生效问题 [#1862](https://github.com/XiaoMi/hiui/issues/1862)
- 修复 `Form` 组件中使用 List 组件，输出值格式异常 [#1872](https://github.com/XiaoMi/hiui/issues/1872)
- 修复 `Form` 组件 onBlur 触发无效的 onChange，导致 value 更新失效 [#1910](https://github.com/XiaoMi/hiui/issues/1910)
- 修复 `Form` 组件中 SchemaForm 重渲染导致表单控件无法输入 [#1908](https://github.com/XiaoMi/hiui/issues/1908)
- 修复 `Form` 组件中对 rules 的动态更新校验 [#1935](https://github.com/XiaoMi/hiui/issues/1935)
- 修复 `Select` 组件异步搜索模式下，清空搜索内容未触发搜索问题 [#1883](https://github.com/XiaoMi/hiui/issues/1883)
- 修复 `Table` 组件子节点 isLeaf 属性为 false 时，显示展开 icon [#1887](https://github.com/XiaoMi/hiui/issues/1887)
- 修复 `Table` 组件列更新时，setting 列未跟随更新问题 [#1885](https://github.com/XiaoMi/hiui/issues/1885)
- 修复 `Alert` 组件 type 属性值文档描述错误 [#1877](https://github.com/XiaoMi/hiui/issues/1877)
- 修复 `Transfer` 组件中搜索输入框交互样式异常 [#1895](https://github.com/XiaoMi/hiui/issues/1895)
- 修复 `DatePicker` 组件在 Form 校验失败时边框爆红提示未正常显示 [#1897](https://github.com/XiaoMi/hiui/issues/1897)
- 修复 `Input` 组件中输入手机号在11位时再尝试输入，总会多出一位 [#1919](https://github.com/XiaoMi/hiui/issues/1919)
- 修复 `Badge` 组件 offset 属性设置状态点的位置偏移异常 [#1931](https://github.com/XiaoMi/hiui/issues/1931)
- 修复 `Carousel` 组件左侧切换按钮点击失效 [#1942](https://github.com/XiaoMi/hiui/issues/1942)

# 3.7.0

- 新增 `Collapse` 组件 extra 属性作为标题额外元素扩展[#1831](https://github.com/XiaoMi/hiui/issues/1831)
- 新增 `Message` 组件 onClick、onClose 方法[#1727](https://github.com/XiaoMi/hiui/issues/1727)
- 新增 `From` 组件 setListItemFieldsValue 方法, 设置表单中 From.List 的指定项的值[#1760](https://github.com/XiaoMi/hiui/issues/1760)
- 新增 `Table` 组件 onLoadChildren 方法, 树形表格下异步加载子数据 [#1725](https://github.com/XiaoMi/hiui/issues/1725)
- 新增 `Badge` 组件 offset 属性设置状态点的位置偏移 [#1786](https://github.com/XiaoMi/hiui/issues/1786)
- 新增 `Slider` 组件 showRangeLabel 属性设置是否显示范围值 [#1783](https://github.com/XiaoMi/hiui/issues/1783)
- 优化 `Table` 组件树形表格，允许控制指定节点的展开收起 [#1784](https://github.com/XiaoMi/hiui/issues/1784)
- 优化 `Grid` 组件接受原生属性 [#1609](https://github.com/XiaoMi/hiui/issues/1609)
- 优化 `Select` onChang 回调方法中，获取全部选项详细内容 [#1726](https://github.com/XiaoMi/hiui/issues/1726)
- 优化 `Form` 组件允许 FormItem 中的表单类组件设置 value [#1741](https://github.com/XiaoMi/hiui/issues/1741)
- 优化 `Table` 组件 showColHighlight 属性，修改内部触发逻辑 [#1759](https://github.com/XiaoMi/hiui/issues/1759)
- 优化 `Table` 组件 render 自定义渲染函数，可以获取列的位置 [#1808](https://github.com/XiaoMi/hiui/issues/1808)
- 优化 `Tree` 组件文字较多折行时，遮盖问题 [#1768](https://github.com/XiaoMi/hiui/issues/1768)
- 修复 `Table` 组件表头吸顶问题 [#1789](https://github.com/XiaoMi/hiui/issues/1789)
- 修复 `Tree` 编辑形态，不能输入空格问题 [#1768](https://github.com/XiaoMi/hiui/issues/1768)
- 修复 `Select` disabled 情况下，输入框仍能删除选项问题 [#1707](https://github.com/XiaoMi/hiui/issues/1707)
- 修复 `Table` 组件表头分组中使用 fixedToColumn 属性导致表头错乱 [#1732](https://github.com/XiaoMi/hiui/issues/1732)
- 修复 `Upload` 组件 onRemove 回调 api 导致外部引用闭包的问题 [#1739](https://github.com/XiaoMi/hiui/issues/1739)
- 修复 `Form` 组件 Form.Item 子节点 onChange 方法中设置表单值异常问题 [#1745](https://github.com/XiaoMi/hiui/issues/1745)
- 修复 `Table` 组件 批量选择形态中，在 data 为空数组时，表头全选项会默认勾选问题 [#1749](https://github.com/XiaoMi/hiui/issues/1749)
- 修复 `Table` 组件 批量选择形态中，表格禁用行，全选时会被勾选问题 [#1752](https://github.com/XiaoMi/hiui/issues/1752)
- 修复 `Tree` 组件 editable 受控状态下，编辑菜单显示问题 [#1761](https://github.com/XiaoMi/hiui/issues/1761)
- 修复 `Tree` LegacyTree 组件 draggable 为 true 时，节点展开且无法选中节点问题 [#1781](https://github.com/XiaoMi/hiui/issues/1781)
- 修复 `Slider` 组件 max、min 受控问题，Modal 中不能拖拽 [#1783](https://github.com/XiaoMi/hiui/issues/1783)
- 修复 `DatePicker` 组件 yearrange、monthrange 无法通过 min、max 限制时间区间问题 [#1780](https://github.com/XiaoMi/hiui/issues/1780)
- 修复 `Form` 组件值校验问题 [#1802](https://github.com/XiaoMi/hiui/issues/1802)
- 修复 `Tree` 自定义右侧菜单参数错误问题 [#1812](https://github.com/XiaoMi/hiui/issues/1812)
- 修复 `Tree` 在 onBeforeSave 返回 false 后依然可以新增子节点问题 [#1813](https://github.com/XiaoMi/hiui/issues/1813)

# 3.6.1

- 修复部分组件 'regeneratorRuntime is not defined' 问题 [#1719](https://github.com/XiaoMi/hiui/issues/1719)
- 修复 `Slider` max 和 min 受控问题 [#1703](https://github.com/XiaoMi/hiui/issues/1703)

# 3.6.0

- 新增 `Table` 组件 rowExpandable 方法，对内嵌式表格中左侧箭头进行自定义[#1679](https://github.com/XiaoMi/hiui/issues/1679)
- 新增 `Form` 组件新增 clearValidates 方法，用于清除表单校验 [#1691](https://github.com/XiaoMi/hiui/issues/1691)
- 新增 `Form` 组件 getFieldsError、getFieldsValue 方法，用于静默获取表单状态 [#1680](https://github.com/XiaoMi/hiui/issues/1680)
- 新增 `SelectTree` disabled 属性，控制禁用状态[#1675](https://github.com/XiaoMi/hiui/issues/1675)
- 优化 `Table` expandedRender 函数接受 Promise，可以进行异步渲染[#1679](https://github.com/XiaoMi/hiui/issues/1679)
- 优化 `Tabs` 组件 在 type 为 editable 时右上角的加号的显示隐藏随 onAdd 方法自动显示隐藏 [#1662](https://github.com/XiaoMi/hiui/issues/1662)
- 修复 `Modal` 组件 confirm 方法传入 className 属性无效问题 [#1584](https://github.com/XiaoMi/hiui/issues/1584)
- 修复 `Modal` 组件 closeable 属性无效问题 [#1645](https://github.com/XiaoMi/hiui/issues/1645)
- 修复 `Form` 组件 setFieldsValue 方式调用显示异常问题 [#1642](https://github.com/XiaoMi/hiui/issues/1642)
- 修复 `Form` 组件中包裹多个 List 组件，值未展示问题 [#1649](https://github.com/XiaoMi/hiui/issues/1649)
- 修复 `Table` 组件 data 值为带正负符号的数字类型字符串时，无法进行求和及平均值的问题 [#1616](https://github.com/XiaoMi/hiui/issues/1616)
- 修复 `Tabs` 组件 panes 数据源异步变更，导致 Tabs.Pane 重渲染时，底部高亮线偏移的问题 [#1651](https://github.com/XiaoMi/hiui/issues/1651)
- 修复 `DatePicker` 组件 type 为 timeperiod 在受控时，选择完成时间后该组件内容显示为空 [#1653](https://github.com/XiaoMi/hiui/issues/1653)
- 修复 `Select` 组件在分组形态下，搜索功能无效 [#1655](https://github.com/XiaoMi/hiui/issues/1655)
- 修复 `DatePicker` type 为 daterange 时，且 showTime 为 true 选择时间显示异常 [#1640](https://github.com/XiaoMi/hiui/issues/1640)
- 修复 `Cascader` id 为 Number 类型时导致节点重复添加问题[#1648](https://github.com/XiaoMi/hiui/issues/1648)
- 修复 `Tabs` 组件 onDelete、onAdd 等方法获取数据操作异常问题[#1676](https://github.com/XiaoMi/hiui/issues/1676)
- 修复 `DatePicker` maxDate 属性设置日期后，月份禁用错误 [#1690](https://github.com/XiaoMi/hiui/issues/1690)
- 修复 `Upload` 在 type 为 drag 时，通过拖动文件上传，data 数据不可更新[#1693](https://github.com/XiaoMi/hiui/issues/1693)
- 修复 `DatePicker` 在 type 为 daterange 时, 时间区间选择同一天无效问题[#1688](https://github.com/XiaoMi/hiui/issues/1688)

## 3.5.0

- 新增 `Table` 组件 showColHighlight 方法 [#1602](https://github.com/XiaoMi/hiui/issues/1602)
- 修复 `Table` 组件列冻结无法展示求和及平均值的问题 [#1616](https://github.com/XiaoMi/hiui/issues/1616)
- 新增 `Table` 组件 表格表头事件回调函数输出 [#1625](https://github.com/XiaoMi/hiui/issues/1625)
- 新增 `Form` SchemaForm 中 component 属性接受 ReactNode，SchemaForm 新增 updateSchema 更新函数 [#1612](https://github.com/XiaoMi/hiui/issues/1612)
- 新增 `DatePicker` onSelect 选择日期的回调函数 [#1592](https://github.com/XiaoMi/hiui/issues/1592)
- 新增 `Transfer` 组件 render 自定义菜单渲染函数 [#1575](https://github.com/XiaoMi/hiui/issues/1575)
- 优化 `Select` 组件异步类型时，searchable 属性可控制筛选框的显示隐藏 [#1577](https://github.com/XiaoMi/hiui/issues/1577)
- 优化 `DatePicker` type 为 week 形态时显示内容 [#1587](https://github.com/XiaoMi/hiui/issues/1587)
- 修复 `DatePicker` type 为 week 或者 weekrange 时 输入相应格式日期解析错误问题 [#1579](https://github.com/XiaoMi/hiui/issues/1579)
- 修复 `Form` 触发 onValuesChange 数据更新出现旧值问题 [#1618](https://github.com/XiaoMi/hiui/issues/1618)
- 修复 `DatePicker` type 为 timeperiod 时，设置 timeInterval 分钟显示不正确问题 [#1604](https://github.com/XiaoMi/hiui/issues/1604)
- 修复 `Preview` 图片预览组件，滚轮放大缩小错误 [#1573](https://github.com/XiaoMi/hiui/issues/1573)
- 修复 `TimePicker` 时间范围选择，为空时无法选择打开弹窗时的当前值 [#1530](https://github.com/XiaoMi/hiui/issues/1530)
- 修复 `Collapse` onChange 属性未传入控制台报错问题 [#1580](https://github.com/XiaoMi/hiui/issues/1580)
- 修复 `Select` 组件在异步多选时，关闭弹层下拉选项内容丢失问题 [#1578](https://github.com/XiaoMi/hiui/issues/1578)
- 修复 `Table` 组件 data 值为数字类型字符串时，无法进行求和及平均值的问题 [#1616](https://github.com/XiaoMi/hiui/issues/1616)

## 3.4.0

- 优化组件弹出层自动计算合适的左右位置 [#1494](https://github.com/XiaoMi/hiui/issues/1494)
- 新增 `Select SelectTree Cascader DatePicker Input` 等组件无边框形态 [#1553](https://github.com/XiaoMi/hiui/issues/1553)
- 新增 `Preview` 预览组件 [#1546](https://github.com/XiaoMi/hiui/issues/1546)
- 新增 `Select` 组件 onSearch、onOverlayScroll 方法 [#1522](https://github.com/XiaoMi/hiui/issues/1522)
- 修复 `SelectTree` 搜索输入框在输入值时失焦问题 [#1491](https://github.com/XiaoMi/hiui/issues/1491)
- 修复 `SelectTree` 单选形态下受控问题 [#1519](https://github.com/XiaoMi/hiui/issues/1519)
- 修复 `Select` 组件分组形态 filterOption 函数无法使用问题 [#1497](https://github.com/XiaoMi/hiui/issues/1497)
- 修复 `Select` 组件分组形态全选以及受控问题 [#1501](https://github.com/XiaoMi/hiui/issues/1501)
- 修复 `Select` 异步数据请求返回结果顺序异常 [#1543](https://github.com/XiaoMi/hiui/issues/1543)
- 修复 `Tabs` 组件垂直方向样式显示异常问题 [#1493](https://github.com/XiaoMi/hiui/issues/1493)
- 修复 `Form` DatePicker、SelectTree 在 Form.Item 中点击清空 Icon 无效问题 [#1524](https://github.com/XiaoMi/hiui/issues/1524)
- 修复 `DatePicker` minDate、maxDate、disabledDate 在非 date 类型下不生效问题 [#1547](https://github.com/XiaoMi/hiui/issues/1547)
- 优化 `Checkbox` 样式相关内容 [#1482](https://github.com/XiaoMi/hiui/issues/1482)
- 优化 `SelectTree` 异步受控数据返显问题 [#1510](https://github.com/XiaoMi/hiui/issues/1510)
- 优化 `Select SelectTree` 计数根据窗口自动调整 [#1527](https://github.com/XiaoMi/hiui/issues/1527)
- 优化 `Drawer` 组件支持 className 属性 [#1536](https://github.com/XiaoMi/hiui/issues/1536)

## 3.3.0

- 新增 `Card` 模式模式下 loading 加载中状态 [#1454](https://github.com/XiaoMi/hiui/issues/1454)
- 新增 `Table` loading 加载中状态 [#1466](https://github.com/XiaoMi/hiui/issues/1466)
- 新增 `Table` 列冻结结合树形使用 [#1424](https://github.com/XiaoMi/hiui/issues/1424)
- 新增 `Table` rowSelection getCheckboxConfig 方法配置行选择 [#1444](https://github.com/XiaoMi/hiui/issues/1444)
- 新增 `SelectTree` valueRender 自定义渲染 Input 中展示内容 [#1407](https://github.com/XiaoMi/hiui/issues/1407)
- 新增 `SelectTree` 通过关键字异步搜索功能 [#1479](https://github.com/XiaoMi/hiui/issues/1479)
- 修复 `Input` type = textarea 的时候，className 设置无效 [#1458](https://github.com/XiaoMi/hiui/issues/1458)
- 修复 `Form` 在页面渲染完成后 调用中 setFieldsValue 无效问题 [#1408](https://github.com/XiaoMi/hiui/issues/1408)
- 修复 `Form` 在 Form.Item 中调用 setFieldsValue 数据获取错误 [#1456](https://github.com/XiaoMi/hiui/issues/1456)
- 修复 `Rate` 组件在快速移动显示异常问题 [#1410](https://github.com/XiaoMi/hiui/issues/1410)
- 修复 `DatePicker` type 不受控问题 [#1401](https://github.com/XiaoMi/hiui/issues/1401)
- 修复 `DatePicker` 点击空白区域触发 onChange 问题 [#1477](https://github.com/XiaoMi/hiui/issues/1477)
- 修复 `DatePicker` 跨年或跨月选择周，数据显示错误 [#1476](https://github.com/XiaoMi/hiui/issues/1476)
- 修复 `Select` 下拉框默认选中行显示错误 [#1405](https://github.com/XiaoMi/hiui/issues/1405)
- 修复 `DatePicker` 在 type 为 daterange 时候，传入不合法日期，面板显示异常 [#1418](https://github.com/XiaoMi/hiui/issues/1418)
- 修复 `Table` 对其他组件造成的样式污染问题 [#1428](https://github.com/XiaoMi/hiui/issues/1428)
- 修复 `Table` 数据为空时右侧冻结展示不正确的问题 [#1473](https://github.com/XiaoMi/hiui/issues/1473)
- 修复 `Tree` onDrop 回调函数参数不正确的问题 [#1425](https://github.com/XiaoMi/hiui/issues/1425)
- 修复 `Select` 异步多选值返显问题 [#1425](https://github.com/XiaoMi/hiui/issues/1425)
- 修复 `Modal` confirm 方法为适配主题色的问题 [#1446](https://github.com/XiaoMi/hiui/issues/1446)
- 修复 `Loading` children 不存在时，设置 visible 为 false 无效的问题 [#1461](https://github.com/XiaoMi/hiui/issues/1461)
- 优化 `Tabs` 组件弹出层样式[#1437](https://github.com/XiaoMi/hiui/issues/1437)
- 优化 `DatePicker` 类型为 week 时输入框显示内容以及周起始方式 [#1475](https://github.com/XiaoMi/hiui/issues/1475)
- 优化 `Progress` width、height 属性支持传入 String 类型 [#1480](https://github.com/XiaoMi/hiui/issues/1480)

## 3.2.0

- 新增 HiUI 基础样式 css 文件 [#1338](https://github.com/XiaoMi/hiui/issues/1338)
- 新增 `Table` expandedRowKeys，onExpand 扩展内嵌式表格的展开操作 [#1378](https://github.com/XiaoMi/hiui/issues/1378)
- 修复 `List` 组件导出问题 [#1314](https://github.com/XiaoMi/hiui/issues/1314)
- 修复 `Tabs` Tabs.Pane 组件中 tabTitle 属性传入 ReactNode 报错问题 [#1320](https://github.com/XiaoMi/hiui/issues/1320)
- 修复 `Upload` onRemove 的问题 [#1322](https://github.com/XiaoMi/hiui/issues/1322)
- 修复 `DatePicker` 受控无法选中值问题 [#1326](https://github.com/XiaoMi/hiui/issues/1326)
- 修复 `Table` 列操作 icon 丢失问题 [#1336](https://github.com/XiaoMi/hiui/issues/1336)
- 修复 `Table` 表头吸顶层级显示问题 [#1318](https://github.com/XiaoMi/hiui/issues/1318)
- 修复 `Table` 内嵌式设置列宽不正确的问题 [#1325](https://github.com/XiaoMi/hiui/issues/1325)
- 修复 `SelectTree` 下拉选择上滑动显示异常 [#1351](https://github.com/XiaoMi/hiui/issues/1351)
- 修复 `Form` 包裹 Select 设置 searchable 属性时候，显示异常 [#1343](https://github.com/XiaoMi/hiui/issues/1343)
- 修复 `Form` Form.List 和 Form.Item 同一级混用显示异常问题 [#1345](https://github.com/XiaoMi/hiui/issues/1345)
- 修复 `DatePicker` weekOffset 为 1 时 周与日对照显示异常 [#1352](https://github.com/XiaoMi/hiui/issues/1352)
- 修复 `Input` type 等于 amount 时，数据初始化展示问题 [#1346](https://github.com/XiaoMi/hiui/pull/1346)
- 修复 `Input` 添加前后置节点聚焦问题 [#1342](https://github.com/XiaoMi/hiui/pull/1342)
- 修复 `Select` 异步多选下拉数据显示问题 [#1364](https://github.com/XiaoMi/hiui/issues/1364)
- 修复 `SelectTree` 异步加载子节点数据显示位置错误以及国际化适配等问题 [#1386](https://github.com/XiaoMi/hiui/issues/1386)
- 修复 `Progress` placement 为 inside 时，字显示折行问题 [#1385](https://github.com/XiaoMi/hiui/issues/1385)
- 优化 `Select` 下拉框展开收起，输入框内容存在显示差异[#1380](https://github.com/XiaoMi/hiui/issues/1380)
- 修复 `Select` 滚动报错问题[#1390](https://github.com/XiaoMi/hiui/issues/1390)
- 优化 `Search` 后置元素应该收起下拉选项 [#1341](https://github.com/XiaoMi/hiui/issues/1341)
- 优化 `Form` 组件 label 内容显示折行行高以及间距 [#1376](https://github.com/XiaoMi/hiui/issues/1376)
- 优化 `Pagination` 国际化翻译 [#1381](https://github.com/XiaoMi/hiui/issues/1381)
- 修复 `Table` rowSelection 存在时的列冻结异常 [#1393](https://github.com/XiaoMi/hiui/issues/1393)
- 修复 `Table` 国际化问题 [#1397](https://github.com/XiaoMi/hiui/issues/1397)
- 优化 `Table` 树形表格 children 为空数组时的展示问题 [#1370](https://github.com/XiaoMi/hiui/issues/1370)
- 优化 `Tree` 内部计算逻辑，提升多条数据的渲染性能 [#1369](https://github.com/XiaoMi/hiui/issues/1369)
- 优化 `Modal` 当屏幕高度小于 Moadal 高度的交互效果 [#1348](https://github.com/XiaoMi/hiui/issues/1348)

## 3.1.0

- 新增 `Card` bordered 属性配置是否显示边框 [#1296](https://github.com/XiaoMi/hiui/issues/1296)
- 修复 `Input` 在受控状态下，设置 value 为 null 时报错问题 [#1246](https://github.com/XiaoMi/hiui/issues/1246)
- 修复 `Select` 设置 autoload 为 true 时无限的调用接口问题 [#1249](https://github.com/XiaoMi/hiui/issues/1249)
- 修复 `Select` 异步多选，点击清空下拉数据未清空问题 [#1293](https://github.com/XiaoMi/hiui/issues/1293)
- 修复 `Timepicker` 弹出层在页面底部未翻转到上方问题 [#1253](https://github.com/XiaoMi/hiui/issues/1253)
- 优化 `Timepicker` 支持字符串格式的 value [#1245](https://github.com/XiaoMi/hiui/issues/1245)
- 修复 `SelectTree` 弹出层在页面底部不能翻转问题 [#1254](https://github.com/XiaoMi/hiui/issues/1254)
- 修复 `DatePicker` 周范围显示异常问题 [#1267](https://github.com/XiaoMi/hiui/issues/1267)
- 修复 `SelectTree` data 数据中 Children 为空数组报错问题 [#1261](https://github.com/XiaoMi/hiui/issues/1261)
- 修复 `SelectTree` 在 Form 包裹下样式显示异常 [#1310](https://github.com/XiaoMi/hiui/issues/1310)
- 修复 `Tag` 使用 ref 无效问题 [#1262](https://github.com/XiaoMi/hiui/issues/1262)
- 修复 `Table` data 为 undefined 时的报错问题 [#1265](https://github.com/XiaoMi/hiui/issues/1265)
- 修复 `Loading` 显示不正确的问题 [#1265](https://github.com/XiaoMi/hiui/issues/1268)
- 优化 `SelectTree` 样式问题 [#1272](https://github.com/XiaoMi/hiui/issues/1272)
- 修复 `Tag` 闪烁问题 [#1273](https://github.com/XiaoMi/hiui/issues/1273)
- 修复 `Timeline` 折断样式问题 [#1276](https://github.com/XiaoMi/hiui/issues/1276)
- 修复 `Timeline` 只有一条数据时的样式问题 [#1277](https://github.com/XiaoMi/hiui/issues/1277)
- 修复 `SelectTree` 受控问题 [#1283](https://github.com/XiaoMi/hiui/issues/1283)
- 修复 `Popover` 包裹函数组件无法触发问题 [#1282](https://github.com/XiaoMi/hiui/issues/1282)
- 修复 `Pagination` 输入页码后回车键报错的问题 [#1299](https://github.com/XiaoMi/hiui/issues/1299)
- 优化 `Upload` 不同 type 文件类型默认值 [#1286](https://github.com/XiaoMi/hiui/issues/1286)
- 优化 `Filter` 返回值问题 [#1288](https://github.com/XiaoMi/hiui/issues/1288)
- 优化 `Tabs` 线型模式样式 [#1291](https://github.com/XiaoMi/hiui/issues/1291)
- 优化 `Breadcrumb` 渲染方式 [#1303](https://github.com/XiaoMi/hiui/issues/1303)
- 优化 `Form` 组件 Form.Item 宽度设置问题 [#1295](https://github.com/XiaoMi/hiui/issues/1295)

## 3.0.0

- 新增：`Slider` 滑块组件 [#1225](https://github.com/XiaoMi/hiui/issues/1225)
- 新增：`SelectTree` 树形选择器组件 [#1231](https://github.com/XiaoMi/hiui/issues/1231)
- 新增：`List` 列表组件 [#1226](https://github.com/XiaoMi/hiui/issues/1226)
- 新增：`Filter` 筛选组件 [#1227](https://github.com/XiaoMi/hiui/issues/1227)
- 新增：`Search` 搜索组件 [#1228](https://github.com/XiaoMi/hiui/issues/1228)
- 新增：`Drawer` 抽屉组件 [#1229](https://github.com/XiaoMi/hiui/issues/1229)
- 新增：`RichTextEditor` 富文本编辑器 [#1236](https://github.com/XiaoMi/hiui/issues/1236)
- 新增：`CodeEditor` 代码编辑器使用示例
- 新增常见图表样式支持（基于 echarts 封装）[#388](https://github.com/XiaoMi/hiui/issues/388)
- 全新的 `Form` 组件 [#1234](https://github.com/XiaoMi/hiui/issues/1234)
  - 新增 `SchemaForm`，可通过 Schema 配置使用 `Form`。
  - 新增 `useForm`，通过 `Form.useForm` 对表单数据域进行交互。
  - 新增 `Form.List`，方便对表单项进行增加删除
  - 新增 `Submit`、`Reset` 等快捷组件，方便用户重置和提交数据
  - 优化表单中的表单项值的管理，不再由用户进行 `setState`
  - 优化 `Form` 输出数据的内容格式，用户可通过设置 `field` 进行相关格式的设置
  - 优化表单的校验相关功能
- 全新的 `DatePicker` 组件 [#1235](https://github.com/XiaoMi/hiui/issues/1234)
  - 优化快捷选项功能，允许用户自定义快捷选项
  - 优化选择日期相关交互
  - 优化日期面板相关样式
- 全新的 `Icon` 组件 [#1224](https://github.com/XiaoMi/hiui/issues/1224)
  - 内部改为 svg 实现方式
  - 重新调整视觉效果
  - 新增大量图标
- 全新的 `Tree` 组件 [#1232](https://github.com/XiaoMi/hiui/issues/1232)
  - 调整了 Tree 的内部实现，提升了性能
  - 样式进行了优化
  - 优化了 api
- 全新的 `Table` 组件 [#359](https://github.com/XiaoMi/hiui/issues/359)
  - 优化了 api
  - 视觉交互重新调整
  - 支持树形表格
  - 支持列对齐
  - 支持动态控制列宽
  - 支持标准模式
  - 支持控制行高亮
  - 支持控制列高亮
  - 优化了列冻结
  - 优化了表头吸顶
  - 优化了列调整，支持调整列的顺序
- 全新的 `Rate` 组件 [#1237](https://github.com/XiaoMi/hiui/issues/1237)
  - 支持自定义字体图标，文字甚至图片以及评分选中颜色
  - 支持根据评分自定义渲染图标
  - 优化辅助文字显示位置
  - 新增只读形态。
- `Breadcrumb` 组件升级 [#1230](https://github.com/XiaoMi/hiui/issues/1230)
  - 修正最后一级的 hover 时的高亮效果
- `Cascader` 组件升级
  - 修正了受控、非受控模式
- `Dropdown` 组件升级 [#1238](https://github.com/XiaoMi/hiui/issues/1238)
  - 修正选项具有 `href` 属性时点击可跳转
- `Select` 组件升级
  - 新增 `fieldNames` API，方便根据返回数据显示下拉框的内容
  - 新增 `showJustSelected` API，方便快速对下拉选项进行操作
  - 新增下拉数据的**分组**展示形式
  - 优化 `dataSource`，请求数据方式以及支持返回多种类型
  - 修正多选异步数据回显问题
- `Switch` 组件升级
  - 修正了 onChange 的触发时机 [#1223](https://github.com/XiaoMi/hiui/issues/1223)
  - 修正了受控、非受控模式 [#633](https://github.com/XiaoMi/hiui/issues/633)
- `Rate` 组件升级 [#1083](https://github.com/XiaoMi/hiui/issues/1083)
  - 支持自定义辅助文字
  - 支持自定义渲染效果
- `Tabs` 组件升级
  - 可扩展用法增加滚动条模式 [#1222](https://github.com/XiaoMi/hiui/issues/1222)
  - 支持拖拽 [#641](https://github.com/XiaoMi/hiui/issues/641)
- `Card` 组件升级 [#1220](https://github.com/XiaoMi/hiui/issues/1220)
  - 样式调整
  - 废弃 extraType 属性
  - 新增 showHeaderDivider 属性展示卡片头部的分割线
- `Modal` 组件升级 [#1221](https://github.com/XiaoMi/hiui/issues/1221)
  - 进行了样式调整，重点优化了 Modal.confirm 的视觉效果
- `Tag` 组件升级 [#1233](https://github.com/XiaoMi/hiui/issues/1233)
  - 新增圆角形态
  - 新增标签组用法
- 主题配色调整，并使用 css variable 实现主题配色的切换 [#256](https://github.com/XiaoMi/hiui/issues/256)
- 增加 Typescript 类型定义文件 [#181](https://github.com/XiaoMi/hiui/issues/181)

## 2.x

[更新日志汇总](https://github.com/XiaoMi/hiui/blob/master/CHANGELOG.md)

## 1.x

[更新日志汇总](https://github.com/XiaoMi/hiui/blob/stable/1.x/CHANGELOG.md)
