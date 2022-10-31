import SanityClient from '../client';

const doc = {
    "_createdAt": "2022-10-20T09:09:35Z",
    "_id": "78342247-d350-441c-89f6-0f38ce900000",
    "_type": "categories",
    "description": "includes all cool drinks and hot drinks",
    "hexCode": "A114",
    "current": "beverages",
    "title": "Beverages"
};

export default async function addData() {
    SanityClient.createIfNotExists(doc).then((res) => {
        console.log(`Bike was created, document ID is ${res._id}`)
    }).catch((error) => {
        console.log('error while creating', error)
    })
}
