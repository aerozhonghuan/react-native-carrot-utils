/*
 * @Description: react-native-carrot-utils,
 * Provide some small development tool classes, 
 * such as time processing class, image processing class...
 * @Author: wanglh
 * @LastEditors: wanglh
 * @Date: 2019-03-14 16:42:37
 * @LastEditTime: 2019-04-18 15:50:36
 */

declare module 'react-native-carrot-utils' {
    export class DateUtil {
        /**
         * @description: Format a timestamp
         * @param timestamp {number}
         * @param fomatter {string}
         * @return: void
         */
        static formatTimestamp(timestamp: number, fomatter: string): string;

        /**
         * @description:Time string conversion timestamp
         * @param dateString {string}
         * @param fomatter {string}
         * @return: timestamp {number}
         */
        static getTimestamp(dateString: string, fomatter: string): number;

        /**
         * @description: Get the current timestamp
         * @return: timestamp {number}
         */
        static getCurrentTimestamp(): number;

        /**
         * @description: Get the date before n days
         * @param dayNum {number}
         * @return: {Date}
         */
        static getBeforeDayDate(dayNum: number): Date;

        /**
         * @description: Get the date after n days
         * @param dayNum {number}
         * @return: {Date}
         */
        static getAfterDayDate(dayNum: number): Date;

        /**
         * @description: Get the date of the first day of the current month
         * @return: {Date}
         */
        static getCurrentMonthFirst(): Date;

        /**
         * @description: Get the date of the last day of the current month
         * @return: {Date}
         */
        static getCurrentMonthLast(): Date;

    }
}