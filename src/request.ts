import fetch from 'node-fetch';

type User = {
    id : number;
    email : string;
    first_name : string;
};

type GetUsersResponse = {
    data : User[];
};

// TODO
// modify to scrape data from 4chan 

async function getUsers(): Promise<GetUsersResponse | string> {
    try{
        const response = await fetch('https://reqres.in/api/users', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }, 
        });

        if (!response.ok) {
            throw new Error('Error! status: ${reponse.status}');
        }
        const result = (await response.json()) as GetUsersResponse;
        console.log('result: ', JSON.stringify(result, null, 4));
        return result;
    } catch (error) {
        if (error instanceof Error) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

getUsers();