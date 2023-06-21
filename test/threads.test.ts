import { ThreadScrapper } from '../src/threads'

const board = <string> 'wg';
const thread = <number> 7990743;

let ts = new ThreadScrapper(board, thread)
let t = ts.getThread()

console.log(t)