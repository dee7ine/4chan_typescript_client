import { AbstractThreadScrapper} from '@/threads'

const board = <string> 'wg';
const thread = <number> 7990743;

let ts = new AbstractThreadScrapper(board, thread)
let t = ts.getThread()

console.log(t)