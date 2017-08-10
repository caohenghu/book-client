import logger from './logger';

/**
 * 获取随机整数数
 * @param max 整数，小于且包含max
 * @param min 整数，大于且包含min
 * @returns {number}
 */
function random(max, min = 0) {
    if (max < min) {
        logger.warn('max must greater than min');
    }
    let reg = /\./;
    if (reg.test(max + '') || reg.test(min + '')) {
        logger.warn('max or min must be int');
    }
    let choose = max - min + 1;
    return Math.floor(Math.random() * choose + min);
}

export {
    random
}