import React, { useState, useEffect, useRef } from 'react'
import classNames from 'classnames'
import Checkbox from '../checkbox'
import Loading from '../loading'
import Icon from '../icon'

const SelectDropdown = props => {
  const {
    mode,
    focusedIndex,
    matchFilter,
    emptyContent,
    loading,
    optionWidth,
    showCheckAll,
    dropdownRender,
    theme,
    searchable,
    onFocus,
    onBlur,
    searchPlaceholder,
    dropdownItems,
    localeMap,
    handleKeyDown,
    onSearch,
    isOnSearch,
    onClickOption,
    filterOption,
    checkAll,
    setFocusedIndex,
    selectInputWidth,
    selectedItems,
    show
  } = props
  const [filterItems, setFilterItems] = useState(dropdownItems)
  const [searchbarValue, setSearchbarValue] = useState('')
  const [cachedropdownItems, setCachedropdownItems] = useState('')
  const searchbar = useRef('')
  useEffect(() => {
    searchable &&
      setTimeout(() => searchbar.current && searchbar.current.focus(), 0)
  }, [])

  useEffect(() => {
    let _filterItems = dropdownItems
    // 这个地方需要注意啊
    if (
      selectedItems.length > 0 &&
      searchbarValue.length === 0 &&
      mode === 'single' &&
      isOnSearch
    ) {
      _filterItems = cachedropdownItems
    }
    const _searchbarValue = show ? searchbarValue : ''
    setFilterItems(_filterItems)
    setCachedropdownItems(_searchbarValue)
  }, [mode, isOnSearch, dropdownItems, show])

  let matched = 0
  const style = optionWidth && {
    width: optionWidth
  }

  const filterOptions = keyword => {
    let filterItems = []
    if (typeof filterOption === 'function' || keyword === '') {
      filterItems = dropdownItems
    } else {
      dropdownItems.map(item => {
        String(item.title).includes(keyword) && filterItems.push(item)
      })
    }
    setFilterItems(filterItems)
    setSearchbarValue(keyword)
  }
  const searchEvent = e => {
    const filterText = e.target.value
    filterOptions(filterText)
    onSearch(filterText)
  }

  const cleanSearchbarValue = e => {
    e.stopPropagation()
    const filterText = ''
    filterOptions(filterText)
    onSearch(filterText)
  }
  // 是否被选中
  const itemSelected = item => {
    return selectedItems.map(item => item.id).indexOf(item.id) > -1
  }
  // 点击某个选项时
  const onClickOptionIntal = (e, item, index) => {
    e.stopPropagation()
    e.preventDefault()
    if (item.disabled) {
      return
    }
    mode === 'single' && isOnSearch && setCachedropdownItems(dropdownItems)
    onClickOption(item, index)
  }
  // 设置选中下标
  const onMouseEnter = (item, index) => {
    !item.disabled && setFocusedIndex(index)
  }
  const renderOption = (isSelected, item) => {
    if (item.children) {
      return item.children
    }
    if (dropdownRender) {
      return dropdownRender(item, isSelected)
    }
    const paddingNum = mode === 'multiple' ? 48 : 24
    // 提高可读性
    let width = selectInputWidth ? selectInputWidth - paddingNum : null
    if (optionWidth) {
      width = optionWidth - paddingNum
    }
    const style = {
      width
    }
    // 高亮关键字
    const hightlightKeyword = (text, uniqueKey) => {
      let _keyword = searchbarValue
      _keyword = searchbarValue.includes('[')
        ? _keyword.replace(/\[/gi, '\\[')
        : _keyword
      _keyword = searchbarValue.includes('(')
        ? _keyword.replace(/\(/gi, '\\(')
        : _keyword
      _keyword = searchbarValue.includes(')')
        ? _keyword.replace(/\)/gi, '\\)')
        : _keyword

      let parts = text.split(new RegExp(`(${_keyword})`, 'gi'))
      return searchbarValue.length > 0 ? (
        <p key={uniqueKey}>
          {parts.map((part, i) =>
            part === searchbarValue ? (
              <span
                key={i}
                className={'hi-select__dropdown--item__name-hightlight'}
              >
                {part}
              </span>
            ) : (
              part
            )
          )}
        </p>
      ) : (
        text
      )
    }
    return (
      <React.Fragment>
        {mode === 'multiple' && (
          <Checkbox
            className='hi-select__dropdown--item__checkbox'
            checked={isSelected}
            disabled={item.disabled}
          >
            <div className='hi-select__dropdown--item__name' style={style}>
              {isOnSearch ? item.title : hightlightKeyword(item.title, item.id)}
            </div>
          </Checkbox>
        )}
        {mode === 'single' && (
          <div className='hi-select__dropdown--item__name' style={style}>
            {isOnSearch ? item.title : hightlightKeyword(item.title, item.id)}
          </div>
        )}
        {mode === 'single' && isSelected && (
          <div className='hi-select__dropdown--item__check-icon'>
            <i className='hi-icon icon-check' />
          </div>
        )}
      </React.Fragment>
    )
  }
  return (
    <div className='hi-select__dropdown' style={style}>
      {searchable && (
        <div className='hi-select__dropdown__searchbar'>
          <div className='hi-select__dropdown__searchbar--content'>
            <Icon name='search' />
            <input
              className='hi-select__dropdown__searchbar--input'
              placeholder={searchPlaceholder}
              clearable='true'
              ref={searchbar}
              value={searchbarValue}
              onFocus={onFocus}
              onBlur={onBlur}
              clearabletrigger='always'
              onKeyDown={handleKeyDown}
              onInput={searchEvent}
              onChange={searchEvent}
            />
            {searchbarValue.length > 0 ? (
              <Icon
                name='close-circle'
                style={{ cursor: 'pointer' }}
                onClick={cleanSearchbarValue}
              />
            ) : null}
          </div>
        </div>
      )}
      {loading && (
        <div className='hi-select__dropdown--loading'>
          <Loading size='small' />
        </div>
      )}
      {!loading && (
        <ul className='hi-select__dropdown--items'>
          {filterItems.map((item, index) => {
            if (matchFilter(item)) {
              matched++
              const isSelected = itemSelected(item)
              const isDisabled = item.disabled
              return (
                <li
                  className={classNames(
                    'hi-select__dropdown--item',
                    `theme__${theme}`,
                    {
                      'is-active': isSelected,
                      'is-disabled': isDisabled,
                      'hi-select__dropdown--item-default':
                        !item.children && !dropdownRender
                    }
                  )}
                  onClick={e => onClickOptionIntal(e, item, index)}
                  key={item.id}
                  data-focused={focusedIndex === index}
                  // onMouseEnter={()=>onMouseEnter(item, index)}
                >
                  {renderOption(isSelected, item)}
                </li>
              )
            }
          })}
          {matched === 0 && (
            <li
              className='hi-select__dropdown--item hi-select__dropdown-item--empty is-disabled'
              onClick={e => e.stopPropagation()}
            >
              {emptyContent}
            </li>
          )}
        </ul>
      )}
      {mode === 'multiple' && showCheckAll && (
        <div
          className={`hi-select__dropdown-check-all theme__${theme}`}
          onClick={() => checkAll(filterItems)}
        >
          {localeMap['checkAll']}
        </div>
      )}
    </div>
  )
}

export default SelectDropdown
