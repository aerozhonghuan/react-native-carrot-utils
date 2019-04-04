/*
 * @Description: DateUtil
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-28 16:21:47
 * @LastEditTime: 2019-04-04 15:54:03
 */

import moment from 'moment';
export default class DateUtil {

    /**
     * @description:Format a timestamp in a format
     * @param timestamp Date
     * @param fomatter format, Default format:YYYY-MM-DD HH:mm:ss
     * @return: dateString
     */
    static formatTimestamp(timestamp, fomatter) {
        if (!timestamp) return '';
        const fmt = fomatter || 'YYYY-MM-DD HH:mm:ss';
        return moment(timestamp).format(fmt);
    }

     /**
     * @description:Time string conversion timestamp
     * @param dateString dateString
     * @param fomatter format
     * @return: timestamp
     */
    static getTimestamp(dateString, fomatter) {
        return moment(dateString,fomatter).valueOf();
    }

    /**
     * @description: Get the current timestamp
     * @return: Return the time value in milliseconds.
     */
    getCurrentTimestamp() {
        return new Date().getTime();
    }

    /**
     * @description: Get the date before n days
     * @param dayNum days
     * @return: Date
     */
    getBeforeDayDate(dayNum) {
        var date = new Date(), timestamp;
        timestamp = date.getTime();
        return new Date(timestamp - dayNum * 24 * 3600 * 1000);
    }

    /**
     * @description: Get the date after n days
     * @param dayNum days
     * @return: Date
     */
    getAfterDayDate(dayNum) {
        var date = new Date(), timestamp;
        timestamp = date.getTime();
        return new Date(timestamp + dayNum * 24 * 3600 * 1000);
    }

    /**
     * @description: Get the date of the first day of the current month
     * @return: Date
     */
    getCurrentMonthFirst() {
        var date = new Date();
        date.setDate(1);
        return date;
    }

    /**
     * @description: Get the date of the last day of the current month
     * @return: Date
     */
    getCurrentMonthLast() {
        var date = new Date();
        var currentMonth = date.getMonth();
        var nextMonth = ++currentMonth;
        var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
        var oneDay = 1000 * 60 * 60 * 24;
        return new Date(nextMonthFirstDay - oneDay);
    }


};