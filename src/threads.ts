import fetch from 'node-fetch';

const board = <string> 'wg';
const thread = <number> 7990743;

console.log(`https://a.4cdn.org/${board}/thread/${thread}.json`);

// const response = await fetch(`https://a.4cdn.org/${board}/thread/${thread}.json`);
// const data = await response.json();
// console.log(data)

export async function getThread(board: string, thread: number | string){
    try {
        const response = await fetch(`https://a.4cdn.org/${board}/thread/${thread}.json`)
        if (!response.ok) {
            throw new Error(`Error! status: ${response.status} `);
        }
        const result = await response.json()
        console.log(typeof(result))
        //console.log('result: ', JSON.stringify(result, null, 4));
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error:', error);
            return 'An unexpected erorr occurred.';
        }
} 
}

export type BasicPost = {
    "no": number,
    "now": string,
    "name": string,
    "com": string,
    "filename": string,
    "ext": string,
    "w": number,
    "h": number,
    "tn_w": number,
    "tn_h": number,
    "tim": number,
    "time": number,
    "md5": string,
    "fsize": number,
    "resto": number
}

export type BasicThread = {
    data: BasicPost[];
}

export class ThreadScrapper{
    _board: string = '';
    _thread: number | string = '';

    constructor(board: string, thread: string | number) {
        this._board = board;
        this._thread = thread;
    };
    
    /**
     * Retrieves thread information json
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    async getThread(log?: boolean): Promise<BasicThread |object | string> {
        try {
            const response = await fetch(`https://a.4cdn.org/${this._board}/thread/${this._thread}.json`)
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status} `);
            }
            const result = await (response.json()) as BasicThread;
            if (log) {
                console.log(`Thread ${this._thread}: `, JSON.stringify(result, null, 4));
            }
            
            return result;
        } catch (error) {
            if (error instanceof Error) {
                console.log('error message: ', error.message);
                return error.message;
            } else {
                console.log('unexpected error:', error);
                return 'An unexpected erorr occurred.';
            }
    } 
    }
}

let ts = new ThreadScrapper(board, thread)
let t = ts.getThread(true)
console.log(t)