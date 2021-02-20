import React, { Component } from 'react'
import Calender from './Calender'
import { deconstructDate, showLargeCalendar, colDisabled } from './util'
import TimePanel from './TimePanel'
import Icon from '../icon'
import classNames from 'classnames'
import TimePeriodPanel from './TimePeriodPanel'
import { dateFormat, parseISO, getStartDate, addMonths, subMonths, startOfWeek, endOfWeek, getValidDate } from './dateUtil'

class DatePanel extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentView: props.type,
      yearData: [],
      monthData: [],
      staticDate: getStartDate(props.date)
    }
  }
  /**
   * 改变月份事件
   * @param {Number} num  加减值
   */
  changeMonth (flag) {
    let {staticDate} = this.state
    let cDate = getValidDate(staticDate)
    if (flag) {
      cDate = subMonths(cDate, 1)
    } else {
      cDate = addMonths(cDate, 1)
    }
    this.setState({
      staticDate: cDate
    })
  }

  /**
   * 改变年份事件
   * @param {Number} num  加减值
   */

  changeYear (flag) {
    let { currentView } = this.state
    let {staticDate} = this.state
    const cDate = getValidDate(staticDate)
    let { year } = deconstructDate(cDate)
    const num = currentView === 'year' ? 10 : 1
    if (flag) {
      year -= num
    } else {
      year += num
    }
    cDate.setFullYear(year)
    this.setState({
      staticDate: cDate
    })
  }

  getYearOrMonthData (val, type, _year) {
    const start = type === 'year' ? val - 4 : 1
    let trs = [[], [], [], []]
    let num = 0
    const currentYear = new Date().getFullYear()
    const currentMonth = new Date().getMonth()
    for (let i = 0; i < 4; i++) {
      let row = trs[i]
      for (let j = 0; j < 3; j++) {
        let col = row[j] || (row[j] = { type: 'normal' })
        const y = start + num
        if (y === currentYear || y === currentMonth + 1) {
          col.type = 'today'
        }
        if (y === val) {
          col.type = 'current'
        }

        col = colDisabled(type, col, _year, this.props, y)
        col.value = y
        num++
      }
    }
    return trs
  }
  /**
   * Header 中间部分内容
   * @param {String} type 选择器类型
   * @param {Number} year 当前年份
   * @param {Number} month 当前月份
   */
  getHeaderCenterContent () {
    const { localeDatas, locale } = this.props
    const { staticDate, currentView } = this.state
    const { year, month } = deconstructDate(getValidDate(staticDate))
    if (currentView === 'year') {
      return year - 4 + '~' + (year + 7)
    }
    if (currentView === 'month') {
      return year
    }
    let arr = [localeDatas.datePicker.monthShort[month - 1]]
    if (locale === 'zh-CN') {
      arr.unshift(year + '年    ')
    } else {
      arr.push(`    ${year}`)
    }
    return arr
  }
  /**
   * 渲染 Header 部分（包含箭头快捷操作）
   * @param {Object} args {
   *  year: 当前年份
   *  month: 当前月份
   *  type: 选择器类型
   *  num: 点击箭头时要步进的值 默认1 主要应用于年份选择时
   * }
   */
  renderHeader (type) {
    return (
      <div className='hi-datepicker__header'>
        <div className='hi-datepicker__header-btns'>
          <span onClick={() => this.changeYear(true)}>
            <Icon name='double-left' />
          </span>
          {type !== 'month' &&
            type !== 'year' &&
            <span onClick={() => this.changeMonth(true)}>
              <Icon name='left' />
            </span>}
        </div>
        <span
          className='hi-datepicker__header-text'
          onClick={() => this.setState({ currentView: 'year' })}
        >
          {this.getHeaderCenterContent()}
        </span>
        <div className='hi-datepicker__header-btns'>
          {type !== 'month' &&
            type !== 'year' &&
            <span onClick={() => this.changeMonth(false)}>
              <Icon name='right' />
            </span>}
          <span onClick={() => this.changeYear(false)}>
            <Icon name='double-right' />
          </span>
        </div>
      </div>
    )
  }

  yearPick (date) {
    const { type, onPick } = this.props
    if (type === 'year') {
      onPick(date)
    } else {
      this.setState({
        currentView: 'month',
        staticDate: date
      })
    }
  }
  monthPick (_date) {
    const { type, onPick } = this.props
    const { currentView } = this.state
    if (type === 'month') {
      onPick(_date)
    } else if (type === 'week') {
      this.setState({
        currentView: 'week'
      })
      onPick(_date, true)
    } else {
      this.setState({
        currentView: 'date'
      }, () => {
        if (currentView === type) {
          onPick(_date, true)
        } else {
          this.setState({
            staticDate: _date
          })
        }
      })
    }
  }
  onDatePick (_date) {
    const { type, showTime, onPick, timeInterval, weekOffset } = this.props
    if (type === 'week') {
      const _weekOffset = {weekStartsOn: weekOffset}
      let weekStart = startOfWeek(_date, _weekOffset)
      let weekEnd = endOfWeek(_date, _weekOffset)
      onPick({
        startDate: weekStart,
        endDate: weekEnd
      }, false)
      return
    }
    if (type === 'timeperiod') {
      onPick(
        { startDate: _date, endDate: new Date(_date.getTime() + timeInterval * 60 * 1000) },
        true
      )
    } else {
      // date.setHours(hours, minutes, seconds)
      onPick(_date, showTime)
    }
    this.setState({
      staticDate: _date
    })
  }
  onTimePeriodPick (periodS, periodE) {
    const date = getStartDate(this.props.date)
    const currentDate = dateFormat(date, 'yyyy-MM-dd')
    this.props.onPick(
      {
        startDate: parseISO(`${currentDate} ${periodS}`),
        endDate: parseISO(`${currentDate} ${periodE}`)
      },
      true
    )
  }
  onTimePick (date, bol) {
    this.setState({
      date,
      staticDate: date
    })
    this.props.onPick(date, bol)
  }
  _getNormalComponent () {
    const { currentView } = this.state
    const { min, max, weekOffset, disabledDate, showLunar, altCalendar, altCalendarPreset, dateMarkRender, dateMarkPreset, altCalendarPresetData, dateMarkPresetData, onSelect } = this.props
    const {staticDate} = this.state
    const validDate = getValidDate(staticDate)
    const { year, month } = deconstructDate(validDate)

    let component = null
    switch (currentView) {
      case 'date':
      case 'timeperiod':
      case 'week':
        component = (
          <Calender
            altCalendarPresetData={altCalendarPresetData}
            dateMarkPresetData={dateMarkPresetData}
            altCalendar={altCalendar}
            onSelect={onSelect}
            altCalendarPreset={altCalendarPreset}
            dateMarkRender={dateMarkRender}
            dateMarkPreset={dateMarkPreset}
            showLunar={showLunar}
            date={validDate}
            weekOffset={weekOffset}
            minDate={min}
            maxDate={max}
            disabledDate={disabledDate}
            type={currentView}
            onPick={this.onDatePick.bind(this)}
          />
        )
        break
      case 'year':
        const yearData = this.getYearOrMonthData(year, 'year', year)
        component = (
          <Calender
            altCalendarPresetData={altCalendarPresetData}
            dateMarkPresetData={dateMarkPresetData}
            altCalendar={altCalendar}
            altCalendarPreset={altCalendarPreset}
            dateMarkRender={dateMarkRender}
            onSelect={onSelect}
            dateMarkPreset={dateMarkPreset}
            showLunar={showLunar}
            date={validDate}
            data={yearData}
            type={currentView}
            onPick={this.yearPick.bind(this)}
          />
        )
        break
      case 'month':
        const monthData = this.getYearOrMonthData(month, 'month', year)
        component = (
          <Calender
            altCalendarPresetData={altCalendarPresetData}
            dateMarkPresetData={dateMarkPresetData}
            altCalendar={altCalendar}
            altCalendarPreset={altCalendarPreset}
            dateMarkRender={dateMarkRender}
            dateMarkPreset={dateMarkPreset}
            onSelect={onSelect}
            showLunar={showLunar}
            date={validDate}
            data={monthData}
            type={currentView}
            onPick={this.monthPick.bind(this)}
          />
        )
        break
    }
    return component
  }
  render () {
    const { date, currentView } = this.state
    const { theme, showTime, type, timeInterval } = this.props
    const _c = classNames('hi-datepicker', theme && 'theme__' + theme)
    const bodyCls = classNames(
      'hi-datepicker__body',
      showTime && 'hi-datepicker__body--hastime',
      type === 'timeperiod' && 'hi-datepicker__body--period',
      showLargeCalendar(this.props) && 'hi-datepicker__body--large'
    )
    return (
      <div style={this.props.style} className={_c}>
        <div className={bodyCls}>
          <div className='hi-datepicker__panel hi-datepicker__panel--left'>
            {currentView !== 'time' && this.renderHeader(currentView, date)}
            <div
              className={`hi-datepicker__calender-container hi-datepicker__calender-container--${currentView}`}
            >
              {this._getNormalComponent()}
            </div>
          </div>
          {showTime &&
            <TimePanel
              {...this.props}
              onPick={this.onTimePick.bind(this)}
              date={getStartDate(this.props.date)}
            />}
          {type === 'timeperiod' &&
            <TimePeriodPanel
              {...this.props}
              timeInterval={timeInterval}
              onTimePeriodPick={this.onTimePeriodPick.bind(this)}
              date={getStartDate(this.props.date)}
            />}
        </div>
      </div>
    )
  }
}

export default DatePanel
