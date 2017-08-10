const TYPE_ERROR = '[custom error] ';
const TYPE_INFO = '[custom info] ';
const TYPE_WARN = '[custom warn] ';

/**
 * 输出异常信息
 * @param msg
 * @param err
 */
function error(msg, err) {
    console.error(TYPE_ERROR + msg, err);
}

/**
 * 输出日志信息
 * @param msg
 */
function info(msg) {
    console.info(TYPE_INFO + msg);
}

/**
 * 输出警告信息
 * @param msg
 */
function warn(msg) {
    console.warn(TYPE_WARN + msg);
}

export default {
    error,
    info,
    warn
}