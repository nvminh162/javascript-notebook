// import logger from './logger/index.js' // import default
import {logger2} from './logger/index.js' // import not default

import * as constants from './constants.js'
// import { TYPE_LOG, TYPE_WARN, TYPE_ERROR } from './constants.js'

// logger('Test', TYPE_LOG)
logger2('Test...', constants.TYPE_LOG)