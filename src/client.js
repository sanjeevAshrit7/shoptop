import SanityClient from "@sanity/client";

export default SanityClient({
    projectId: "opfu2gs4", // find this at manage.sanity.io or in your sanity.json
    dataset: "production", // this is from those question during 'sanity init'
    apiVersion: '2022-10-20',
});

