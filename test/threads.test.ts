import { ThreadScrapper, BasicPost, BasicThreadData } from '../src/threads';

const ThreadScrapper = require
const board = <string> 'wg';
const thread = <number> 7990743;

let ts = new ThreadScrapper(board, thread)
let t = ts.getThread()

test()