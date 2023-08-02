import fetch from 'node-fetch';

declare module 'boards'

export type BoardAttributes = {
    'board': string,
    'title': string,
    'ws_board': number,
    'per_page': number,
    'pages': number,
    'max_filesize': number,
    'max_comment_chars': number,
    'max_webm_duration': number,
    'bump_limit': number,
    'image_limit': number,
    'cooldowns': Map<string, number>,
    'meta_description': string,
    'spoilers': number,
    'custom_spoilers': number,
    'is_archived': number
}

export type Boards = {
    data: BoardAttributes[];
}

export type CatalogAttributes  = {
    'page': number,
    'threads': string

}

export type Catalog = {
    'board': string
}

export class AbstractBoardScrapper {
    /**
     * Retrieves all boards information as json
     * @param {boolean} [log = false] - log to console
     *
     * @returns {Promise<BasicBoard | string>}
     * @throws {Error}
     */
    public async getBoards(log?: boolean): Promise<Boards | string> {
        try {
            const response = await fetch(`https://a.4cdn.org/boards.json`)
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status} `);
            }
            const result = await (response.json()) as Boards;
            if (log) {
                console.log(`Boards: `, JSON.stringify(result, null, 4));
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

export class AbstractCatalogScrapper {
    protected _board: string = '';

    constructor(board: string, thread: string | number) {
        this._board = board;
    };
    /**
     * Retrieves board catalog information as json
     * @param {boolean} [log = false] - log to console
     *
     * @returns {Promise<BasicBoard | string>}
     * @throws {Error}
     */
    public async getCatalog(log?: boolean): Promise<Catalog | string> {
        try {
            const response = await fetch(`https://a.4cdn.org/${this._board}/catalog.json`)
            if (!response.ok) {
                throw new Error(`Error! status: ${response.status} `);
            }
            const result = await (response.json()) as Catalog;
            if (log) {
                console.log(`Boards: `, JSON.stringify(result, null, 4));
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

let ts = new AbstractBoardScrapper()
let t = ts.getBoards(true)
console.log(t)